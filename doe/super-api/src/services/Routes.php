<?php
/**
 * Super API module for Craft CMS 3.x
 *
 * API endpoints for Craft->SPA
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\superapi\services;

use modules\superapi\SuperApi;

use Craft;
use craft\base\Component;
use craft\base\Element;
use craft\base\ElementInterface;
use craft\elements\db\ElementQueryInterface;
use craft\elements\Tag;
use craft\db\Query;

/**
 * Routes Service
 *
 * @author    Doe-Anderson
 * @package   SuperApi
 * @since     1.0.0
 */
class Routes extends Component
{
  // TODO: add doc blocks
  // Public Methods
  // =========================================================================

  protected $productCategories = [
    'hardwood',
    'vinyl-plank',
    'tile',
    'laminate',
    'engineered-hardwood',
    'carpet'
  ];

  protected $elementsToSkip = [
    'team',
    'product-brands',
    'testamonials',
  ];

  public function getAllUrls(array $criteria = []): array
  {
    $urls = [];
    $customUrls = [];
    $elements = Craft::$app->getElements();
    $elementTypes = $elements->getAllElementTypes();

    $sites = Craft::$app->getSites()->getAllSites();

    foreach ($sites as $site) {
      foreach ($elementTypes as $elementType) {
        $urls = array_merge($urls, $this->getElementUrls($elementType, $criteria, $site->handle));

      }

      if ($site->handle === 'en') {
        $customUrls = array_merge($customUrls, [
          'errors/404',
          'errors/500',
          'errors/503'
        ]);
      }

      foreach($customUrls as $url) {
        $urls[] = $this->normalizeUri($url, $site->handle);
      }
    }

    return $urls;
  }

  public function getElementUrls($elementType, array $criteria = [], $siteHandle = null): array
  {
    $elements = $this->getElementsByType($elementType, $criteria, $siteHandle);

    $skipUris = [
      '__footer__',
      'testimonials'
    ];

    $resultingUrls = [];

    foreach ($elements as $element) {
      if ($element instanceof Element && $element->uri !== null && !in_array($element->uri, $resultingUrls, true)) {
        if (!in_array($element->uri, $skipUris) && strpos($element->uri, 'product-brands') === false && strpos($element->uri, 'team') === false) {
          $uri = $this->normalizeUri($element->uri, $siteHandle);
          $resultingUrls[] = $uri;
        }
      }
    }

    return $resultingUrls;
  }

  public function getElementsByType($elementType, $criteria, $siteHandle)
  {
    $criteria = array_merge([
      'site' => $siteHandle,
      'limit'  => null,
    ], $criteria);

    $elementClass = is_object($elementType) ? get_class($elementType) : $elementType;

    $query = $this->getElementQuery($elementClass, $criteria);

    return $query->all();
  }

  public function normalizeUri($url, $siteHandle): string
  {
    // convert underscore to dash in site handle
    $siteHandle = str_replace('_', '-', $siteHandle);

    // remove __page__ from URL
    $url = str_replace('__page__', '', $url);

    // Handle the special '__home__' URI
    if ($url === 'home') {
      $url = '';
    }

    foreach($this->productCategories as $category) {
      if (strpos($url, $category) !== false && strpos($url, 'shop') !== 0) {
        $url = "shop/{$url}";
      }
    }

    return "/{$url}";
  }

  // Protected Methods
  // =========================================================================

  protected function fullUrl($url, $uri, $site = null)
  {
    $uri = ltrim($uri, '/');

    if ($site !== 'en') {
      $url = $this->getBaseUrl(getenv('ENVIRONMENT'));

      $uri = ltrim($uri, "{$site}/");
    }

    return $url . $uri;
  }

  protected function getElementQuery($elementType, array $criteria): ElementQueryInterface
  {
    $query = $elementType::find();
    Craft::configure($query, $criteria);
    return $query;
  }
}
