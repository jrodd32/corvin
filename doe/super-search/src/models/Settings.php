<?php
/**
 * super-search module for Craft CMS 3.x
 *
 * Integrate Algolia indexing with Craft 3
 *
 * @link      https://doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\supersearch\models;

use Craft;
use craft\base\Model;
use modules\supersearch\SuperSearch;

/**
 * Settings Model
 *
 * Models are containers for data. Just about every time information is passed
 * between services, controllers, and templates in Craft, it’s passed via a model.
 *
 * https://craftcms.com/docs/plugins/models
 *
 * @author    Doe-Anderson
 * @package   Supersearch
 * @since     1.0.0
 */
class Settings extends Model
{
  // Public Properties
  // =========================================================================

  /**
   * @var bool
   */
  public $sync = true;

  /**
   * @var string
   */
  public $mappings = [];

  /**
   * @var string
   */
  public $application_id = '';

  /**
   * @var string
   */
  public $admin_api_key = '';

  /**
   * @var array
   */
  public $sections = [];

  /**
   * @var array
   */
  public $entries = [];

  /**
   * @var array
   */
  public $entriesToSkip = [
    'footerNavigation',
    'mainNavigation',
    'legalNavigation',
    'events'
  ];

  // Public Methods
  // =========================================================================

  public function init()
  {
    parent::init();

    $this->application_id = getenv('ALGOLIA_APP_ID');
    $this->admin_api_key = getenv('ALGOLIA_ADMIN_API_KEY');

    $this->sections = Craft::$app->sections->getAllSections();

    for ($i = 0; $i < count($this->sections); $i++) {
      if ($this->shouldIndex($this->sections[$i]['handle'])) {
        $this->entries[] = $this->sections[$i]['handle'];
      }
    }

    foreach(Craft::$app->getSites()->getAllSites() as $site) {
      $this->mappings = array_merge($this->mappings, [
        [
          'indexName' => CRAFT_ENVIRONMENT . '_' . $site->handle,
          'elementType' => \craft\elements\Entry::class,
          'criteria' => [
            'section' => $this->entries,
            'site' => $site
          ],
          'transformer' => function(craft\elements\Entry $entry) {
            return SuperSearch::$plugin->searchValue->getSearchEntryValues($entry, true, true);
          }
        ],
        [
          'indexName' => CRAFT_ENVIRONMENT . '_' . $site->handle,
          'elementType' => \craft\elements\Category::class,
          'criteria' => [
            'site' => $site
          ],
          'transformer' => function(craft\elements\Category $category) {
            return SuperSearch::$plugin->searchValue->getSearchEntryValues($category, true, true);
          }
        ]
      ]);
    }
  }

  /**
   * {@inheritdoc}
  **/
  public function rules()
  {
    return [
      [['sync'], 'boolean'],
      [['application_id', 'admin_api_key'], 'string'],
      [['sync', 'application_id', 'admin_api_key'], 'required'],
    ];
  }

  protected function shouldIndex($handle)
  {
    return !in_array($handle, $this->entriesToSkip);
  }
}
