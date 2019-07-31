<?php
/**
 * Super Values module for Craft CMS 3.x
 *
 * Returns an element's field names and values
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\supervalues\services;

use Craft;

use craft\base\Component;
use craft\elements\Entry;
use modules\supervalues\SuperValues;
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
 * @package   SuperValuesModule
 * @since     1.0.0
 */
class Value extends Component
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

  public function getEntriesValues($entries, $stripTags = false, $skipEntries = false)
  {
    $entriesValues = [];

    if (!$entries) {
      return $entriesValues;
    }

    foreach($entries as $entry) {
      $entriesValues[] = $this->getEntryValues($entry, $stripTags, $skipEntries);
    }

    return $entriesValues;
  }

  public function getEntryValues($entry, $stripTags = false, $skipEntries = false)
  {
    if (is_null($entry) || !$entry) {
      return false;
    }

    return $this->getFieldValues($entry, $entry->getFieldLayout()->getFields(), null, $stripTags, $skipEntries);
  }

  // Protected Methods
  // =========================================================================
  protected function getFieldValues($entry, $fields, $parentHandle = null, $stripTags = false, $skipEntries = false, $skipMatrixFields = false)
  {
    $values = [];

    if ($this->isContent($entry)) {
      $values = [
        'id' => $entry->id,
        'lastUpdated' => md5(json_encode($entry->dateUpdated)),
        'slug' => $entry->slug,
        'title' => $entry->title,
        'url' => str_replace(['__page__', '__home__'], '', $entry->url),
        'uri' => '/'.str_replace(['__page__', '__home__'], '', $entry->uri)
      ];

      if ($this->isContent($entry) && property_exists($entry, 'postDate')) {
        $values['publishedAt'] = str_replace(' ', 'T', date_format($entry->postDate,'Y-m-d H:i:s'));
      }

      if ($entry->getFieldLayout()->getFieldByHandle('displayCanonicalUrl') && $entry->displayCanonicalUrl) {
        $baseEntry = Entry::find()->id($entry->id)->site('en')->one();
        if ($entry->site->handle === 'en' || is_null($baseEntry)) {
          $values['canonicalUrl'] = $values['url'];
        } else {
          $values['canonicalUrl'] = str_replace(['__page__', '__home__'], '', $baseEntry->url);
        }
      }
    }

    foreach($fields as $field) {
      if ($field->handle === 'sectionHandle') {
        continue;
      }

      // Strip out pre-Content string since content is a reserved keyword in craft, but it crufts up our clean api
      $fieldHandle = ($field->handle === 'pageContent') ? 'content' : $field->handle;
      $fieldHandle = (strpos($fieldHandle, 'block') === 0) ? strtolower(str_replace('block', '', $fieldHandle)) : $fieldHandle;

      $values[$fieldHandle] = $entry->getFieldValue($field->handle);

      if ($stripTags && is_object($values[$fieldHandle]) && get_class($values[$fieldHandle]) === 'Twig_Markup') {
        $values[$fieldHandle] = strip_tags($values[$fieldHandle]);
      }

      // file
      if ($this->isAssetQuery($values[$fieldHandle])) {
        $values[$fieldHandle] = $this->setImage($values[$fieldHandle], $field->handle, $parentHandle);
      }

      // super table field
      if ($this->isSuperTableField($field)) {
        $superTableFields = SuperTableBlockElement::find()->ownerId($entry->id)->fieldId($field->id)->all();

        if (is_null($superTableFields)) {
          $values[$fieldHandle] = null;
          continue;
        }

        if ($field->staticField === '1') {
          if (count($superTableFields) > 0) {
            $values[$fieldHandle] = $this->cleanUpSuperTableField($superTableFields[0]);
            continue;
          }

          $values[$fieldHandle] = null;
          continue;
        }

        $superTableValues = [];

        foreach($superTableFields as $superTableField) {
          $superTableValues[] = $this->cleanUpSuperTableField($superTableField);
        }

        $values[$fieldHandle] = $superTableValues;
        continue;
      }

      // entry, tags, categories
      if ($this->isRelatedContentQuery($values[$fieldHandle])) {
        $rowValues = [];
        $rows = $values[$fieldHandle]->all();

        if (!$skipEntries && count($rows) > 0) {
          foreach($rows as $row) {
            $rowValues[] = $this->getFieldValues($row, $row->getFieldLayout()->getFields(), $fieldHandle, $stripTags, true, true);
          }
        }

        $values[$fieldHandle] = $rowValues;
      }

      // matrix blocks
      if ($this->isMatrixBlockQuery($values[$fieldHandle])) {
        $rowValues = [];
        $slides = [];
        $rows = $values[$fieldHandle]->all();

        if (!$skipMatrixFields && count($rows) > 0) {
          $count = 0;
          foreach($rows as $index => $row) {
            $arrayIndex = null;

            if ($row->getFieldLayout()->getFieldByHandle('sectionHandle') && strlen($row->getFieldValue('sectionHandle')) > 0) {
              $arrayIndex = $row->getFieldValue('sectionHandle');
            }

            if ($this->isSlide($row)) {
              $slides[] = $this->getFieldValues($row, $row->getFieldLayout()->getFields(), $row->type->handle, $stripTags, false, true);
            }

            if (count($slides) && ($this->isNotSlide($row) || count($rows) === $index + 1)) {
              $rowValueKeys = array_keys($rowValues);
              $slideIndex = array_pop($rowValueKeys);
              $rowValues[$slideIndex]['slides'] = $slides;
              $slides = [];
              $count++;
            }

            if ($this->isNotSlide($row)) {
              $rowValue = $this->getFieldValues($row, $row->getFieldLayout()->getFields(), $row->type->handle, $stripTags, false);

              if ($arrayIndex) {
                $rowValues[$arrayIndex] = $rowValue;
              } else {
                $rowValues[] = $rowValue;
              }

              $count++;
            }
          }
        }

        $values[$fieldHandle] = $rowValues;
      }
    }

    $gridItems = $this->groupByKey($values, 'grid');
    $metaItems = $this->groupByKey($values, 'meta');

    // NOTE: this block filters the grouped items from the top-level of values
    //       the keys are formatted and overwritten later so the filtering is cleaner
    //       if you format the keys before array_diff_key they no longer match
    if (count($gridItems) > 0) {
      $values['grid'] = $gridItems;
    }

    if (count($metaItems) > 0) {
      $values['meta'] = $metaItems;
    }

    $values = array_diff_key($values, $gridItems, $metaItems);

    if (count($gridItems) > 0) {
      $values['grid'] = $this->formatKey($gridItems, 'grid');
    }

    if (count($metaItems) > 0) {
      $values['meta'] = $this->formatKey($metaItems, 'meta');
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

  protected function cleanUpSuperTableField($field)
  {
    $fieldValues = [];

    foreach($field as $fieldKey => $fieldValue) {
      if (!in_array($fieldKey, $this->disallowedSuperTableKeys)) {
        $key = (strpos($fieldKey, 'block') === 0) ? strtolower(str_replace('block', '', $fieldKey)) : $fieldKey;
        $fieldValues[$key] = $fieldValue;
      }
    }

    return $fieldValues;
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

  protected function groupByKey($array, $target) {
    return array_filter($array, function ($key) use ($target) {
      return strpos($key, $target) === 0;
    }, ARRAY_FILTER_USE_KEY);
  }

  protected function formatKey($array, $target) {
    foreach ($array as $key => $value) {
      $newKey = lcfirst(str_replace($target, '', $key));

      if (isset($array[$newKey])) {
          continue;
      }

      if ($key === $newKey) {
          continue;
      }

      $array[$newKey] = $value;
      unset($array[$key]);
    }

    return $array;
  }
}