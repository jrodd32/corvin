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

use Craft;

use craft\base\Component;
use modules\supersearch\SuperSearch;
use doeanderson\superimage\SuperImage;
use verbb\supertable\elements\SuperTableBlockElement;

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
  protected $disallowedSuperTableKeys = [
    'fieldId',
    'ownerId',
    'ownerSiteId',
    'typeId',
    'sortOrder',
    'collapsed',
    'deletedWithOwner',
    'id',
    'tempId',
    'uid',
    'fieldLayoutId',
    'contentId',
    'enabled',
    'archived',
    'siteId',
    'enabledForSite',
    'title',
    'slug',
    'uri',
    'dateCreated',
    'dateUpdated',
    'trashed',
    'resaving',
    'duplicateOf',
    'hasDescendants',
    'ref',
    'status',
    'structureId',
    'totalDescendants',
    'url'
  ];

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

    return $this->getSearchFieldValues($entry, $entry->getFieldLayout()->getFields(), null, $stripTags, $skipEntries);
  }

  // Protected Methods
  // =========================================================================

  protected function getSearchFieldValues($entry, $fields, $parentHandle, $stripTags = false, $skipEntries = false, $skipMatrixFields = false)
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

      // Strip out pre-Content string since content is a reserved keyword in craft, but it crufts up our clean api
      $fieldHandle = ($field->handle === 'pageContent') ? 'content' : $field->handle;
      $fieldHandle = (strpos($fieldHandle, 'block') === 0) ? strtolower(str_replace('block', '', $fieldHandle)) : $fieldHandle;

      $values[$field->handle] = $entry->getFieldValue($field->handle);

      if ($stripTags && is_object($values[$field->handle]) && get_class($values[$field->handle]) === 'Twig_Markup') {
        $values[$field->handle] = strip_tags($values[$field->handle]);
      }

      // image
      if ($this->isAssetQuery($values[$field->handle])) {
        $values[$field->handle] = $this->setImage($values[$field->handle], $field->handle, $parentHandle);

        if ($field->handle !== 'searchImage') {
          $values[$field->handle] = null;
        }
      }

      // super table field
      if ($this->isSuperTableField($field)) {
        $superTableFields = SuperTableBlockElement::find()->fieldId($field->id)->one();
        $superTableValues = [];

        if (is_null($superTableFields)) {
          $values[$fieldHandle] = null;
          continue;
        }

        foreach($superTableFields as $superTableFieldKey => $superTableFieldValue) {
          if (!in_array($superTableFieldKey, $this->disallowedSuperTableKeys)) {
            $key = (strpos($superTableFieldKey, 'block') === 0) ? strtolower(str_replace('block', '', $superTableFieldKey)) : $superTableFieldKey;
            $superTableValues[$key] = $superTableFieldValue;
          }
        }

        $values[$fieldHandle] = $superTableValues;
        continue;
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
              $slides[] = $this->getSearchFieldValues($row, $row->getFieldLayout()->getFields(), $row->type->handle, $stripTags, false, true);
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
                case 'profile':
                  $rowValues[$arrayIndex]['title'] = $row->getFieldValue('blockTitle');
                  $rowValues[$arrayIndex]['name'] = $row->getFieldValue('blockName');
                  $rowValues[$arrayIndex]['content'] = $row->getFieldValue('blockContent');
                  break;

                case 'sectionIntro':
                  $rowValues[$arrayIndex]['headline'] = $row->getFieldValue('headline');
                  $rowValues[$arrayIndex]['subheadline'] = $row->getFieldValue('subheadline');
                  $rowValues[$arrayIndex]['content'] = $row->getFieldValue('blockContent');
                  break;

                case 'timeline':
                  $rowValues[$arrayIndex]['year'] = $row->getFieldValue('year');
                  $rowValues[$arrayIndex]['content'] = $row->getFieldValue('blockContent');
                  break;

                case 'splitImageSection':
                  $rowValues[$arrayIndex]['content'] = $row->getFieldValue('blockContent');
                  break;

                case 'quoteSection':
                  $rowValues[$arrayIndex]['quote'] = $row->getFieldValue('quote');
                  break;

                case 'productionsAndApplications':
                  $rowValues[$arrayIndex]['headline'] = $row->getFieldValue('headline');
                  $rowValues[$arrayIndex]['leftColumnHeadline'] = $row->getFieldValue('leftColumnHeadline');
                  $rowValues[$arrayIndex]['leftColumnContent'] = $row->getFieldValue('leftColumnContent');
                  $rowValues[$arrayIndex]['rightColumnHeadline'] = $row->getFieldValue('rightColumnHeadline');
                  $rowValues[$arrayIndex]['rightColumnContent'] = $row->getFieldValue('rightColumnContent');
                  break;

                case 'globalContent':
                  $rowValues[$arrayIndex]['headline'] = $row->getFieldValue('headline');
                  $rowValues[$arrayIndex]['content'] = $row->getFieldValue('blockContent');

                  $tableValues = $row->getFieldValue('countryList');

                  foreach($tableValues as $key => $value) {
                    $rowValues[$arrayIndex]['table'][$key] = $value;
                  }

                  break;

                case 'twoColumn':
                case 'videoSection':
                  $rowValues[$arrayIndex]['leftColumnContent'] = $row->getFieldValue('leftColumnContent');
                  $rowValues[$arrayIndex]['rightColumnContent'] = $row->getFieldValue('rightColumnContent');
                  break;

                case 'threeColumn':
                  $rowValues[$arrayIndex]['columnOneContent'] = $row->getFieldValue('columnOneContent');
                  $rowValues[$arrayIndex]['columnTwoContent'] = $row->getFieldValue('columnTwoContent');
                  $rowValues[$arrayIndex]['columnThreeContent'] = $row->getFieldValue('columnThreeContent');
                  break;

                case 'videoSection':
                  $rowValues[$arrayIndex]['leftColumnContent'] = $row->getFieldValue('leftColumnContent');
                  $rowValues[$arrayIndex]['rightColumnContent'] = $row->getFieldValue('rightColumnContent');
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

  protected function setImage($field, $handle, $parentHandle, $style = null)
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

    if ($field->kind !== 'image') {
      return [
        'url' => $field->url
      ];
    }

    $image = [
      'url' => $field->url,
      'alt' => !is_null($field->imageAltText) ? $field->imageAltText : '',
      'title' => $field->imageTitle,
      'dimensions' => null,
      'videoUrl' => $field->videoUrl,
      'videoUrlMobile' => $field->videoUrlMobile
    ];

    $imageStyles = SuperImage::$plugin->resize->getImageStyles();

    if (is_null($style)) {
      foreach(array_keys($imageStyles) as $imageStyle) {
        if (strpos(strtolower($handle), $imageStyle) !== false || $imageStyle === $parentHandle) {
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

  protected function isSuperTableField($field)
  {
    return property_exists($field, 'staticField');
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
