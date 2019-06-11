<?php
/**
 * Super Values module for Craft CMS 3.x
 *
 * Returns an element's field names and values
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\supersearch\services;

use modules\supersearch\SuperSearch;

use Craft;
use craft\base\Component;
use doeanderson\superimage\SuperImage;

/**
 * Value Service
 *
 * All of your module’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other modules can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Doe-Anderson
 * @package   supersearchModule
 * @since     1.0.0
 */
class SearchValue extends Component
{
  // Public Methods
  // =========================================================================

  public function getSearchEntriesValues($entries, $stripTags = false, $skipEntries = false)
  {
    $entriesValues = [];

    if (!$entries) {
      return $entriesValues;
    }

    foreach($entries as $entry) {
      $entriesValues[] = $this->getSearchEntryValues($entry, $stripTags, $skipEntries);
    }

    return $entriesValues;
  }

  public function getSearchEntryValues($entry, $stripTags = false, $skipEntries = false)
  {
    if (is_null($entry) || !$entry) {
      return false;
    }

    return $this->getSearchFieldValues($entry, $entry->getFieldLayout()->getFields(), $stripTags, $skipEntries);
  }

  // Protected Methods
  // =========================================================================

  protected function getSearchFieldValues($entry, $fields, $stripTags = false, $skipEntries = false, $skipMatrixFields = false)
  {
    $values = [];

    if ($this->isContent($entry)) {
      $values = [
        'slug' => $entry->slug,
        'title' => $entry->title,
        'url' => str_replace(['__page__', '__home__', '/products'], '', $entry->url),
        'uri' => '/'.str_replace(['__page__', '__home__', 'products/'], '', $entry->uri)
      ];
    }

    foreach($fields as $field) {
      if ($field->handle === 'sectionHandle') {
        continue;
      }

      $values[$field->handle] = $entry->getFieldValue($field->handle);

      if ($stripTags && is_object($values[$field->handle]) && get_class($values[$field->handle]) === 'Twig_Markup') {
        $values[$field->handle] = strip_tags($values[$field->handle]);
      }

      // image
      if ($this->isAssetQuery($values[$field->handle])) {
        $values[$field->handle] = $this->setImage($values[$field->handle], $field->handle);

        if ($field->handle !== 'searchImage') {
          $values[$field->handle] = null;
        }
      }

      // NOTE: skips entries, tags, categories
      if ($this->isRelatedContentQuery($values[$field->handle])) {
        $values[$field->handle] = null;
        continue;
      }

      // matrix blocks
      if ($this->isMatrixBlockQuery($values[$field->handle])) {
        $rowValues = [];
        $slides = [];
        $rows = $values[$field->handle]->all();

        if (!$skipMatrixFields && count($rows) > 0) {
          $count = 0;
          foreach($rows as $index => $row) {
            $arrayIndex = 'content'.$count;

            if ($row->getFieldLayout()->getFieldByHandle('sectionHandle') && strlen($row->getFieldValue('sectionHandle')) > 0) {
              $arrayIndex = $row->getFieldValue('sectionHandle');
            }

            if ($this->isCarouselSlide($row)) {
              $slides[] = $this->getSearchFieldValues($row, $row->getFieldLayout()->getFields(), $stripTags, false, true);
            }

            if ($this->isTimelineSlide($row)) {
              $slides[] = null;
            }

            if (count($slides) && ($this->isNotSlide($row) || count($rows) === $index + 1)) {
              $rowValueKeys = array_keys($rowValues);
              $slideIndex = array_pop($rowValueKeys);
              $rowValues[$slideIndex]['slides'] = $slides;
              $slides = [];
              $count++;
            }

            if ($this->isNotSlide($row)) {
              switch ($row->type->handle) {
                case 'heroSection':
                  $rowValues[$arrayIndex]['headline'] = $row->getFieldValue('headline');
                  $rowValues[$arrayIndex]['copy'] = $row->getFieldValue('copy');
                  break;

                case 'definitionListSection':
                  $rowValues[$arrayIndex]['headline'] = $row->getFieldValue('headline');
                  $defitionListValues = $row->getFieldValue('definitionList');

                  foreach($defitionListValues as $key => $value) {
                    $rowValues[$arrayIndex]['definitionList'][$key]['label'] = $value['label'];
                    $rowValues[$arrayIndex]['definitionList'][$key]['copy'] = $value['copy'];
                  }
                  break;

                case 'pageSection':
                  $rowValues[$arrayIndex]['headline'] = $row->getFieldValue('headline');
                  $rowValues[$arrayIndex]['copy'] = $row->getFieldValue('copy');

                  if ($row->getFieldLayout()->getFieldByHandle('secondaryHeadline') && strlen($row->getFieldValue('secondaryHeadline')) > 0) {

                    $rowValues[$arrayIndex]['secondaryHeadline'] = $row->getFieldValue('secondaryHeadline');
                  }

                  if ($row->getFieldLayout()->getFieldByHandle('secondaryCopy') && strlen($row->getFieldValue('secondaryCopy')) > 0) {
                    $rowValues[$arrayIndex]['secondaryCopy'] = $row->getFieldValue('secondaryCopy');
                  }
                  break;

                case 'tableSection':
                  $rowValues[$arrayIndex]['headline'] = $row->getFieldValue('headline');
                  $rowValues[$arrayIndex]['subheadline'] = $row->getFieldValue('subheadline');
                  $tableValues = $row->getFieldValue('table');

                  foreach($tableValues as $key => $value) {
                    $rowValues[$arrayIndex]['table'][$key] = $value['value'];
                  }

                  if ($row->getFieldLayout()->getFieldByHandle('secondaryHeadline') && strlen($row->getFieldValue('secondaryHeadline')) > 0) {
                    $rowValues[$arrayIndex]['secondaryHeadline'] = $row->getFieldValue('secondaryHeadline');
                  }

                  if ($row->getFieldLayout()->getFieldByHandle('secondarySubheadline') && strlen($row->getFieldValue('secondarySubheadline')) > 0) {
                    $rowValues[$arrayIndex]['secondarySubheadline'] = $row->getFieldValue('secondarySubheadline');
                  }

                  if ($row->getFieldLayout()->getFieldByHandle('secondaryTable') && strlen($row->getFieldValue('secondaryTable')) > 0) {
                    $rowValues[$arrayIndex]['secondaryTable'] = $row->getFieldValue('secondaryTable');
                  }
                  break;

                case 'quoteSection':
                  $rowValues[$arrayIndex]['quote'] = $row->getFieldValue('quote');
                  $rowValues[$arrayIndex]['citeTitle'] = $row->getFieldValue('citeTitle');
                  $rowValues[$arrayIndex]['citeContent'] = $row->getFieldValue('citeContent');
                  break;

                default:
                  # code...
                  break;
              }

              $count++;
            }
          }
        }

        $values[$field->handle] = $rowValues;
      }
    }

    return $values;
  }

  protected function setImage($field, $handle, $style = null)
  {
    $emptyImage = [
      'video' => false,
      'url' => '',
      'alt' => '',
      'title' => null
    ];

    if ($field === null) {
      return $emptyImage;
    }

    $field = $field->one();

    if (is_null($field)) {
      return $emptyImage;
    }

    $image = [
      'url' => $field->url,
      'alt' => !is_null($field->imageAltText) ? $field->imageAltText : '',
      'title' => $field->imageTitle,
      'dimensions' => null,
      'videoUrl' => $field->videoUrl,
      'videoUrlMobile' => $field->videoUrlMobile
    ];

    $imageStyles = [
      'half',
      'landscape',
      'nav',
      'square',
      'portrait',
      'timeline'
    ];

    if (is_null($style)) {
      foreach($imageStyles as $imageStyle) {
        if (strpos(strtolower($handle), $imageStyle) !== false) {
          $style = $imageStyle;
          break;
        }
      }
    }

    if (
      Craft::$app->plugins->getPlugin('super-image', false) &&
      Craft::$app->plugins->getPlugin('super-image', false)->isInstalled
    ) {
      $image['dimensions'] = SuperImage::$plugin->resize->getOriginalDimensions($field);
      $image['loadingUrl'] = SuperImage::$plugin->resize->getLowQualityUrl($field);

      if (!is_null($style)) {
        $image['sources'] = SuperImage::$plugin->resize->getSources($field, $style);
      }
    }

    return $image;
  }

  protected function isAssetQuery($value)
  {
    return $value instanceof craft\elements\db\AssetQuery;
  }

  protected function isEntryQuery($value)
  {
    return $value instanceof craft\elements\db\EntryQuery;
  }

  protected function isEntry($entry)
  {
    return $entry instanceof craft\elements\Entry;
  }

  protected function isCategoryQuery($value)
  {
    return $value instanceof craft\elements\db\CategoryQuery;
  }

  protected function isCategory($value)
  {
    return $value instanceof craft\elements\Category;
  }

  protected function isTagQuery($value)
  {
    return $value instanceof craft\elements\db\TagQuery;
  }

  protected function isTag($value)
  {
    return $value instanceof craft\elements\Tag;
  }

  protected function isMatrixBlockQuery($value)
  {
    return $value instanceof craft\elements\db\MatrixBlockQuery;
  }

  protected function isMatrixBlock($entry)
  {
    return $entry instanceof craft\elements\MatrixBlock;
  }

  protected function isRelatedContentQuery($value)
  {
    if ($this->isEntryQuery($value) || $this->isCategoryQuery($value) || $this->isTagQuery($value)) {
      return true;
    }

    return false;
  }

  protected function isContent($value)
  {
    if ($this->isEntry($value) || $this->isCategory($value) || $this->isTag($value)) {
      return true;
    }

    return false;
  }

  protected function isSlide($entry)
  {
    return $this->isCarouselSlide($entry) || $this->isTimelineSlide($entry);
  }

  protected function isNotSlide($entry)
  {
    return !$this->isCarouselSlide($entry) && !$this->isTimelineSlide($entry);
  }

  protected function isCarouselSlide($entry)
  {
    return $entry->type->handle === 'carouselSlide';
  }

  protected function isTimelineSlide($entry)
  {
    return $entry->type->handle === 'timelineSlide';
  }
}
