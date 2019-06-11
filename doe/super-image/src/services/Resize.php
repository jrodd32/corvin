<?php
/**
 * Super Image plugin for Craft CMS 3.x
 *
 * Resizes images after upload
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace doeanderson\superimage\services;

use doeanderson\superimage\SuperImage;

use Craft;
use craft\base\Component;
use craft\elements\Asset;

/**
 * Resize Service
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Doe-Anderson
 * @package   Super Image
 * @since     1.0.0
 */
class Resize extends Component
{
  // Protected Properties
  // =========================================================================

  protected $imageStyles = [];

  // Public Methods
  // =========================================================================

  public function getSources(Asset $asset, $assetStyle)
  {
    $sources = [];

    $transformedImages = $this->getTransformedImages($asset, $this->getImageStyle($assetStyle));

    foreach($transformedImages as $index => $image) {
      $sources[$index]['url'] = "{$image['url@1x']} 1x, {$image['url@2x']} 2x";

      if (!is_null($image['breakpoint'])) {
        $sources[$index]['mediaQuery'] = $image['breakpoint'];
      }
    }

    return $sources;
  }

  public function getLowQualityUrl(Asset $asset)
  {
    $aspectRatio = $asset->width / $asset->height;

    return $asset->getUrl($this->getTransformSettings('50', $aspectRatio, 20));
  }

  public function getOriginalDimensions(Asset $asset)
  {
    return [
      'width' => $asset->width,
      'height' => $asset->height
    ];
  }

  // Protected Methods
  // =========================================================================

  protected function getImageStyle($assetStyle)
  {
    $imageStyles = $this->getImageStyles();

    if (array_key_exists($assetStyle, $imageStyles)) {
      return $imageStyles[$assetStyle];
    }

    if (array_key_exists('default', $imageStyles)) {
      return $imageStyles['default'];
    }

    return [];
  }

  protected function getImageStyles()
  {
    if (!$this->imageStyles) {
      $config = Craft::$app->getConfig()->getConfigFromFile('super-image');
      $this->imageStyles = array_key_exists('imageStyles', $config) ? $config['imageStyles'] : [];
    }

    return $this->imageStyles;
  }

  protected function getTransformedImages(Asset $asset, $imageStyle)
  {
    $transformedImages = [];

    $aspectRatio = array_key_exists('aspectRatio', $imageStyle) ? $imageStyle['aspectRatio'] : null;
    $widths = array_key_exists('widths', $imageStyle) ? $imageStyle['widths'] : (array_key_exists('width', $imageStyle) ? [$imageStyle['width']] : []);
    $breakpoints = array_key_exists('breakpoints', $imageStyle) ? $imageStyle['breakpoints'] : (array_key_exists('breakpoint', $imageStyle) ? [$imageStyle['breakpoint']] : []);

    foreach($widths as $index => $width) {
      $halfWidth = $width / 2;
      $breakpoint = $breakpoints ? $breakpoints[$index] : $halfWidth;

      if ($width <= $asset->width) {
        // 1x and width should be half of the passed in width, since width is the retina version
        $transformedUrl_1x = $asset->getUrl($this->getTransformSettings($halfWidth, $aspectRatio));
        $transformedUrl_2x = $asset->getUrl($this->getTransformSettings($width, $aspectRatio));

        if ($transformedUrl_1x && $transformedUrl_2x) {
          $transformedImages[$index] = [
            'breakpoint' => null,
            'url@1x' => $transformedUrl_1x,
            'url@2x' => $transformedUrl_2x
          ];

          if (!is_null($breakpoint)) {
            $transformedImages[$index]['breakpoint'] = "(min-width: {$breakpoint}px)";
          }
        }
      } else {
        // desired width is less than the source, just use the source
        // should not happen if correct images are added to Craft,
        // but this catches if it does happen
        $transformedUrl = $asset->getUrl($this->getTransformSettings($asset->width, $aspectRatio));

        $transformedImages[$index] = [
          'breakpoint' => null,
          'url@1x' => $transformedUrl,
          'url@2x' => $transformedUrl
        ];

        if (!is_null($breakpoint)) {
          $transformedImages[$index]['breakpoint'] = "(min-width: {$breakpoint}px)";
        }
      }
    }

    if (!$transformedImages) {
      $transformedUrl = $aspectRatio ? $asset->getUrl($this->getTransformSettings($asset->width, $aspectRatio)) : $asset->getUrl(null);

      if ($transformedUrl) {
        $transformedImages[] = [
          'breakpoint' => null,
          'url@1x' => $transformedUrl,
          'url@2x' => $transformedUrl
        ];
      }
    }

    return $transformedImages;
  }

  protected function getTransformSettings($width, $aspectRatio, $quality = 80, $mode = 'fit')
  {
    $transform = [
      'width' => $width,
      'mode' => $mode,
      'quality' => $quality
    ];

    if ($aspectRatio){
      $transform['height'] = $width / $aspectRatio;
    }

    return $transform;
  }
}
