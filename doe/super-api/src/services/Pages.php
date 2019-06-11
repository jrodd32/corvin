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
use craft\elements\Category;
use craft\elements\Entry;
use craft\helpers\UrlHelper;
use yii\caching\TagDependency;
use modules\supervalues\SuperValues;

/**
 * Pages
 *
 * @author    Doe-Anderson
 * @package   SuperApi
 * @since     1.0.0
 */
class Pages extends Component
{
  /**
   * Craft cache instance
   * We are currently running Redis as of 05/22/18
   *
   * @var cache Interface
   */
  protected $cache;

  protected $duration;

  protected $cacheDependency;

  public function init()
  {
    $this->cache = Craft::$app->cache;
    $this->duration = 1;
    $this->cacheDependency = new TagDependency([
      'tags' => [
        'SuperApi'
      ]
    ]);

    if (CRAFT_ENVIRONMENT === 'production') {
      $this->duration = 31536000; // 365 days
    }
  }

  // Public Methods
  // =========================================================================

  public function getPageJson($site = 'en', $path, $dateOnly = false)
  {
    $pathParts = explode('/', "/{$path}");
    array_shift($pathParts);

    $handle = $pathParts[0] === '' ? 'home' : $pathParts[0];
    $slug = array_key_exists(1, $pathParts) ? $pathParts[1] : null;

    // TODO: is there a better way?
    if ($handle === 'our-applications' && $slug) {
      $handle = 'applications';
    }

    // TODO: is there a better way?
    if ($handle === 'news' && !$slug) {
      $handle = 'news-page';
    }

    $content = [
      'app' => $this->getAppContent($site),
      'page' => $this->getPageContent($site, $handle, $slug)
    ];

    // If page wasn't found, reset the page content
    if (array_key_exists('status', $content['page'])) {
      $content['page'] = [];
    }

    // If page doesn't come with an updated at, manually set one
    if (!array_key_exists('lastUpdated', $content['page'])) {
      $content['page']['lastUpdated'] = 'na';
    }

    $content['lastUpdated'] = $content['app']['lastUpdated'] . $content['page']['lastUpdated'];

    if ($dateOnly) {
      return $content['lastUpdated'];
    }

    return $content;
  }

  public function getPageContent($site = 'en', $handle = null, $slug = null)
  {
    if (!$handle || (!$handle && !$slug)) {
      return $this->respondWith404();
    }

    $cacheKey = "{$site}.{$this->formatHandle($handle)}";

    if ($slug) {
      $cacheKey = "{$cacheKey}.{$slug}";
    }

    $entry = $this->cache->getOrSet(
      $cacheKey,
      function () use ($site, $handle, $slug) {
        $entry = $this->getEntries($site, $handle, $slug);

        if ($handle === 'our-products' || $handle === 'our-applications') {
          $handle = str_replace('our-', '', $handle);
          $relatedIdOrNull = $slug ? $entry['id'] : null;
          $entry[$handle] = $this->getEntries($site, $handle, null, $relatedIdOrNull);
        }

        return $entry;
      },
      $this->duration,
      $this->cacheDependency
    );

    if (!$entry) {
      return $this->respondWith404();
    }

    return $entry;
  }

  public function getAppContent($site)
  {
    $content = [];

    foreach (['mainNavigation', 'legalNavigation', 'footerNavigation'] as $section) {
      $content[$section] = $this->cache->getOrSet(
        "{$site}.app.{$section}",
        function () use ($site, $section) {
          return $this->getNavigationEntries($site, $section);
        },
        $this->duration,
        $this->cacheDependency
      );
    }

    $content['lastUpdated'] = md5(json_encode($content));

    return $content;
  }

  // Protected Methods
  // =========================================================================

  protected function respondWith404()
  {
    return [
      'status' => 404,
      'message' => 'Not found'
    ];
  }

  protected function getNavigationEntries($site, $section)
  {
    $entries = [];

    foreach(Entry::find()->section($section)->site($site)->level(1)->all() as $entry) {
      $navEntry = $this->cleanUpNavEntry($entry);

      $children = $entry->children->all();

      if (count($children) > 0) {
        $navEntry['children'] = [];

        forEach($children as $child) {
          $navEntry['children'][] = $this->cleanUpNavEntry($child);
        }
      }

      $entries[] = $navEntry;
    }

    return $entries;
  }

  protected function cleanUpNavEntry($entry)
  {
    $entry = SuperValues::$instance->value->getEntryValues($entry);
    $entry['text'] = $entry['title'];
    unset($entry['uri']);
    unset($entry['url']);
    unset($entry['title']);

    return $entry;
  }

  protected function getEntries($site, $handle, $slug = null, $relatedToId = null) {
    $formattedHandle = $this->formatHandle($handle);

    $isCategory = $slug && Category::find()->site($site)->group($formattedHandle)->one();

    $query = Entry::find()->site($site)->section($formattedHandle);

    if ($isCategory) {
      $query = Category::find()->site($site)->group($formattedHandle);
    }

    if ($slug) {
      $query = $query->slug($slug);
    }

    if ($relatedToId) {
      $query = $query->relatedTo($relatedToId);
    }

    $entries = $query->all();

    // Try searching generic pages handle if not found
    // TODO: is there a better way?
    if (count($entries) === 0) {
      $slug = $handle;
      $entries = Entry::find()->site($site)->section('pages')->slug($slug)->all();
    }

    // Return 404 if no entries found
    if (count($entries) === 0) {
      return null;
    }

    // Return a cleaned-up list of entries if there are more than 1
    if (count($entries) > 1) {
      $entryList = [];

      foreach ($entries as $entry) {
        $entryList[] = SuperValues::$instance->value->getEntryValues($entry);
      }

      return $entryList;
    }

    $entry = SuperValues::$instance->value->getEntryValues($entries[0]);

    // If category, section is a single or there is a slug present, return just the entry
    if ($isCategory || $slug || $entries[0]->getSection()->type === 'single') {
      return $entry;
    }

    // Return the entry as an array since that is the typical response of structures and channels
    return [$entry];
  }

  protected function formatHandle($handle)
  {
    return lcfirst(str_replace('-', '', ucwords($handle, '-')));
  }
}