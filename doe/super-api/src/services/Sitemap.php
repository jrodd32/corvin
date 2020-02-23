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

use SimpleXMLElement;
use Craft;
use craft\base\Component;
use craft\base\Element;
use craft\base\ElementInterface;
use craft\db\Query;
use craft\elements\Tag;

/**
 * Sitemap Service
 * Utilizes our routes endpoint to create a sitemap for all versions of the site
 *
 * @author    Doe-Anderson
 * @package   SuperApi
 * @since     1.0.0
 */
class Sitemap extends Component
{
  // TODO: add doc blocks
  // Public Methods
  // =========================================================================

  public function generateSitemap()
  {
    $sitemap = new \DomDocument('1.0', 'utf-8');
    $sitemap->formatOutput = true;

    $urlsByLocale = $this->getSitemapUrls();

    $urlset = $sitemap->createElement('urlset');
    $urlset->setAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    $urlset->setAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
    $urlset->setAttribute('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd');

    foreach($urlsByLocale as $locale) {
      foreach($locale as $url) {
        $urlAttr = $sitemap->createElement('url');
        $loc = $sitemap->createElement('loc', $this->createLocAttribute($url));
        $lastMod = $sitemap->createElement('lastmod', $url['lastmod']);
        $changeFreq = $sitemap->createElement('changefreq', $url['changefreq']);
        $priority = $sitemap->createElement('priority', $url['priority']);

        $urlAttr->appendChild($loc);
        $urlAttr->appendChild($lastMod);
        $urlAttr->appendChild($changeFreq);
        $urlAttr->appendChild($priority);

        foreach($url['alts'] as $alt) {
          // Filter out current site
          if ($alt['handle'] === $url['site']) {
            continue;
          }

          // TODO: figure out namespaces
          $link = $sitemap->createElementNS('http://base.google.com/ns/1.0', 'xhtml:link');
          $link->setAttribute('rel', 'alternate');
          $link->setAttribute('hreflang', $alt['language']);
          $link->setAttribute('href', $this->getLocaleHref($alt['handle'], $url['base'], $url['uri'], $url['site']));

          $urlAttr->appendChild($link);
        }

        $urlset->appendChild($urlAttr);
      }
    }

    $sitemap->appendChild($urlset);

    return $sitemap->saveXML();
  }

  public function getSitemapUrls(array $criteria = []): array
  {
    $urls = [];
    $siteUrls = [];
    $elements = Craft::$app->getElements();
    $elementTypes = $elements->getAllElementTypes();

    $sites = Craft::$app->getSites()->getAllSites();

    foreach ($sites as $site) {
      foreach ($elementTypes as $elementType) {
        $siteUrls = array_merge($siteUrls, $this->getSitemapElementUrls($elementType, $criteria, $site->handle, $site->baseUrl));
      }

      // add tags separately since Craft doesn't give them routes out of the box
      $tags = Tag::find()->site($site)->all();
      foreach($tags as $tag) {
        $siteUrls[] = $this->normalizeUri("tags/{$tag->slug}", $site->handle);
      }

      $urls[$site->handle] = $siteUrls;
      $siteUrls = [];
    }

    return $urls;
  }

  public function getSitemapElementUrls($elementType, array $criteria = [], $siteHandle = null, $url = null): array
  {
    $elements = SuperApi::$instance->routes->getElementsByType($elementType, $criteria, $siteHandle);

    $skipUris = [
      '__footer__',
      'app-legal'
    ];

    $resultingUrls = [];

    foreach ($elements as $element) {
      if ($element instanceof Element && $element->uri !== null && !in_array($element->uri, $resultingUrls, true)) {

        if (!in_array($element->uri, $skipUris)) {
          // Build up alternate links
          $siteDetails = (new Query())
            ->select('{{%sites}}.handle, {{%sites}}.language')
            ->from('{{%elements_sites}}')
            ->join(
              'LEFT JOIN',
              '{{%sites}}',
              '{{%elements_sites}}.siteId = {{%sites}}.id'
            )
            ->where([
                'enabled' => true,
                'elementId' => $element->id
            ])
            ->all();

          $resultingUrls[] = [
            'base' => $this->getBaseUrl(CRAFT_ENVIRONMENT),
            'site' => $siteHandle,
            'uri' => SuperApi::$instance->routes->normalizeUri($element->uri, $siteHandle),
            'lastmod' => $this->getLastMod($element),
            'changefreq' => 'monthly',
            'priority' => '1.0',
            'alts' => $siteDetails
          ];
        }
      }
    }

    return $resultingUrls;
  }

  protected function getBaseUrl($environment)
  {
    switch($environment) {
      case 'staging':
        return 'https://corvin.doe1915.com/';
        break;
      case 'production':
        return 'https://corvinsflooring.com/';
        break;
      default:
        return 'https://corvin.test/';
        break;
    }
  }

  protected function getLastMod($element)
  {
    if (!is_null($element->dateUpdated)) {
      return $element['dateUpdated']->format('Y-m-d');
    }

    return $element['postDate']->format('Y-m-d');
  }

  protected function createLocAttribute($url)
  {
    $uri = ltrim($url['uri'], '/');

    return $url['base'] . $uri;
  }

  protected function getLocaleHref($altHandle, $base, $uri, $baseHandle)
  {
    $uri = str_replace("{$baseHandle}/", '', $uri);
    $altHandle = str_replace('_', '-', $altHandle);
    return $base . $altHandle . $uri;
  }
}
