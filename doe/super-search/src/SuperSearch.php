<?php
/**
 * super-search module for Craft CMS 3.x
 *
 * Integrate Algolia indexing with Craft 3
 *
 * @link      https://doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\supersearch;

use Craft;

use yii\base\Event;
use yii\base\InvalidConfigException;
use yii\base\Module;

use craft\base\Element;
use craft\base\Plugin;
use craft\console\Application as ConsoleApplication;
use craft\elements\Asset;
use craft\elements\Category;
use craft\elements\Entry;
use craft\elements\GlobalSet;
use craft\elements\MatrixBlock;
use craft\elements\Tag;
use craft\elements\User;
use craft\events\ModelEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\events\TemplateEvent;
use craft\web\View;
use craft\web\UrlManager;

use modules\supersearch\services\ScoutService;
use modules\supersearch\services\SearchValue;
use modules\supersearch\models\Settings;

/**
 * Craft plugins are very much like little applications in and of themselves. We’ve made
 * it as simple as we can, but the training wheels are off. A little prior knowledge is
 * going to be required to write a plugin.
 *
 * For the purposes of the plugin docs, we’re going to assume that you know PHP and SQL,
 * as well as some semi-advanced concepts like object-oriented programming and PHP namespaces.
 *
 * https://craftcms.com/docs/plugins/introduction
 *
 * @author    Doe-Anderson
 * @package   Supersearch
 * @since     1.0.0
 *
 * @property  ScoutServiceService $scoutService
 */
class SuperSearch extends Module
{
    // Static Properties
    // =========================================================================

    /**
     * Static property that is an instance of this module class so that it can be accessed via
     * Supersearch::$plugin
     *
     * @var SuperSearch
     */
    public static $plugin;

     /**
     * @var Model|bool|null The model used to store the plugin’s settings
     * @see getSettingsModel()
     */
    private $_settingsModel;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@modules/supersearch', $this->getBasePath());
        $this->controllerNamespace = 'modules\supersearch\controllers';

        // Set this as the global instance of this module class
        static::setInstance($this);

        parent::__construct($id, $parent, $config);
    }

    /**
     * Set our $plugin static property to this class so that it can be accessed via
     * Supersearch::$plugin
     *
     * Called after the module class is instantiated; do any one-time initialization
     * here such as hooks and events.
     *
     * If you have a '/vendor/autoload.php' file, it will be loaded for you automatically;
     * you do not need to load it in your init() method.
     *
     */
    public function init()
    {
      parent::init();
      self::$plugin = $this;

      // Add in our console commands
      if (Craft::$app instanceof ConsoleApplication) {
          $this->controllerNamespace = 'modules\supersearch\console\controllers';
      }

      $this->setComponents([
        'scoutService' => ScoutService::class,
        'searchValue' => SearchValue::class
      ]);

      /**
       * Add or update an element to the index
      **/
      Event::on(
        Element::class,
        Element::EVENT_AFTER_SAVE,
        function (ModelEvent $event) {
          if ($this->settings->sync) {
            $this->indexElements($event->sender);
          }
        }
      );
      /*
        * Order can be important for search indexes, so update when this changes
        */
      Event::on(
          Element::class,
          Element::EVENT_AFTER_MOVE_IN_STRUCTURE,
          function (ModelEvent $event) {
              if ($this->settings->sync) {
                  $this->indexElements($event->sender);
              }
          }
      );
      /*
        * Delete an element from the index
        */
      Event::on(
          Element::class,
          Element::EVENT_BEFORE_DELETE,
          function (ModelEvent $event) {
              if ($this->settings->sync) {
                  $this->deIndexElements($event->sender);
              }
          }
      );
      /*
        * When a Category is saved, reindex the related Entries
        */
      Event::on(
          Category::class,
          Category::EVENT_AFTER_SAVE,
          function (ModelEvent $event) {
              // Only do this when the category isn't new
              if (!$event->isNew && $this->settings->sync) {
                  $this->indexElements($this->getElementsRelatedTo($event->sender));
              }
          }
      );
      /*
        * When a Category is deleted, reindex the related Entries
        */
      Event::on(
          Category::class,
          Category::EVENT_BEFORE_DELETE,
          function (ModelEvent $event) {
              if ($this->settings->sync) {
                  $this->deIndexElements($this->getElementsRelatedTo($event->sender));
              }
          }
      );
    }

    // Protected Methods
    // =========================================================================
    /**
     * @param $elements
     *
     * @throws \AlgoliaSearch\AlgoliaException
     * @throws \Exception
     */
    protected function deIndexElements($elements)
    {
      if (!is_array($elements)) {
          $elements = [$elements];
      }
      self::$plugin->scoutService->deindexElements($elements);
    }

    /**
     * @param $elements
     *
     * @throws \AlgoliaSearch\AlgoliaException
     * @throws \Exception
     */
    protected function indexElements($elements)
    {
      if (!is_array($elements)) {
          $elements = [$elements];
      }
      self::$plugin->scoutService->indexElements($elements);
    }

    /**
     * Get all possible elements related to another element.
     *
     * @param mixed $element
     *
     * @return \craft\base\ElementInterface[]
     */
    protected function getElementsRelatedTo($element)
    {
      $assets = Asset::find()->relatedTo($element)->all();
      $categories = Category::find()->relatedTo($element)->all();
      $entries = Entry::find()->relatedTo($element)->all();
      $tags = Tag::find()->relatedTo($element)->all();
      $users = User::find()->relatedTo($element)->all();
      $globalSets = GlobalSet::find()->relatedTo($element)->all();
      $matrixBlocks = MatrixBlock::find()->relatedTo($element)->all();
      return array_merge($assets, $categories, $entries, $tags, $users, $globalSets, $matrixBlocks);
    }

    /**
     * {@inheritdoc}
     */
    protected function createSettingsModel()
    {
      return new Settings();
    }

    // /**
    //  * {@inheritdoc}
    //  */
    // protected function settingsHtml(): string
    // {
    //   return Craft::$app->view->renderTemplate(
    //       'super-search/settings',
    //       [
    //         'settings' => $this->getSettings(),
    //       ]
    //   );
    // }
   /**
     * @inheritdoc
     */
    public function getSettings()
    {
        if ($this->_settingsModel === null) {
            $this->_settingsModel = $this->createSettingsModel() ?: false;
        }

        if ($this->_settingsModel !== false) {
            return $this->_settingsModel;
        }

        return null;
    }

    /**
     * @inheritdoc
     */
    public function setSettings(array $settings)
    {
        $this->getSettings()->setAttributes($settings, false);
    }
}
