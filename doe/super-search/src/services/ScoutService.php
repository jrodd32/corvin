<?php
/**
 * super-search module for Craft CMS 3.x
 *
 * Integrate Algolia indexing with Craft 3
 *
 * @link      https://doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\supersearch\services;


use Craft;
use craft\base\Component;

use AlgoliaSearch\Client;

use modules\supersearch\SuperSearch;
use modules\supersearch\models\AlgoliaIndex;

/**
 * ScoutService Service
 *
 * All of your module’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other modules can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Doe-Anderson
 * @package   Supersearch
 * @since     1.0.0
 */
class ScoutService extends Component
{
  // Public Methods
  // =========================================================================
  public $settings;

  /**
   * @var Client
   **/
  public $client;

  /**
   * @var array
   **/
  private $mappings = [];

  public function init()
  {
    $this->settings = SuperSearch::$plugin->getSettings();
  }
  /**
   * @throws \Exception
   *
   * @return Client
   */
  public function getClient()
  {
    if (is_null($this->client)) {
      $this->client = new Client($this->settings->application_id, $this->settings->admin_api_key);
    }

    return $this->client;
  }
  /**
   * Returns an array of Algolia_IndexModel instances with the unprefixed index names as keys.
   *
   * @return AlgoliaIndex[]
   */
  public function getMappings()
  {
    if (!count($this->mappings)) {
      $mappingsConfig = $this->settings->mappings;

      foreach ($mappingsConfig as $mappingConfig) {
        $this->mappings[] = new AlgoliaIndex($mappingConfig);
      }
    }

    return $this->mappings;
  }
  /**
   * Passes the supplied element to each configured index.
   *
   * @param $elements array
   *
   * @throws \AlgoliaSearch\AlgoliaException
   * @throws \Exception
   */
  public function deindexElements($elements)
  {
    /** @var AlgoliaIndex $algoliaIndexModel */
    foreach ($this->getMappings() as $algoliaIndex) {
      // TODO: this smells, but accomplishes only indexing the entry you edit
      foreach ($elements as $element) {
        if (strstr($algoliaIndex->indexName, '_', true) === $element->site->handle) {
          $algoliaIndex->deindexElements([$element]);
        }
      }
    }
  }
  /**
   * Passes the supplied elements to each configured index.
   *
   * @param $elements array
   *
   * @throws \AlgoliaSearch\AlgoliaException
   * @throws \Exception
   */
  public function indexElements($elements)
  {
    foreach ($this->getMappings() as $algoliaIndex) {
      // TODO: this smells, but accomplishes only indexing the entry you edit
      foreach ($elements as $element) {
        if (strstr($algoliaIndex->indexName, '_', true) === $element->site->handle) {
          $algoliaIndex->indexElements([$element]);
        }
      }
    }
  }
}
