<?php
/**
 * Super API module for Craft CMS 3.x
 *
 * API endpoints for Craft->SPA
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */
namespace modules\superapi;

use Craft;
use craft\web\UrlManager;
use craft\base\Element;
use craft\elements\Entry;
use craft\events\RegisterUrlRulesEvent;
use craft\events\ElementEvent;
use craft\events\RegisterCacheOptionsEvent;
use craft\services\Elements;
use craft\utilities\ClearCaches;
use craft\web\twig\variables\CraftVariable;

use modules\superapi\services\DarkSky as DarkSkyService;
use modules\superapi\services\Routes as RoutesService;
use modules\superapi\services\Pages as PagesService;
use modules\superapi\variables\SuperApiVariable;

use yii\base\Event;
use yii\base\InvalidConfigException;
use yii\base\Module;
use yii\caching\TagDependency;

class SuperApi extends Module
{
  // Static Properties
  // =========================================================================

  public static $instance;

  // Public Methods
  // =========================================================================

  public function __construct($id, $parent = null, array $config = [])
  {
    Craft::setAlias('@modules/superapi', $this->getBasePath());
    $this->controllerNamespace = 'modules\superapi\controllers';

    // Set this as the global instance of this module class
    static::setInstance($this);

    parent::__construct($id, $parent, $config);
  }

  public function init()
  {
    parent::init();
    self::$instance = $this;

    // Register our site routes
    Event::on(
      UrlManager::class,
      UrlManager::EVENT_REGISTER_SITE_URL_RULES,
      function (RegisterUrlRulesEvent $event) {
        $rules = [
          'api/v1/routes' => 'super-api/api/routes',
          'api/v1/app' => 'super-api/api/app',
          'api/v1/sitemap-urls' => 'super-api/sitemap/urls',
          'sitemap.xml' => 'super-api/sitemap/index',
          '_health' => 'super-api/health/index',
          [
            // <variable_name:{regex_pattern}>
            'pattern' => 'api/v1/<handle:{slug}>/<slug:{slug}>',
            'route' => 'super-api/api/page',
            'defaults' => [
              'handle' => null,
              'slug' => null
            ]
          ]
        ];

        $event->rules = array_merge($event->rules, $rules);
      }
    );

    Event::on(
      Elements::class,
      Elements::EVENT_AFTER_SAVE_ELEMENT,
      function (ElementEvent $event) {
        $element = $event->element;
        $bustCache = true;

        // Only bust the cache if the element is ENABLED or LIVE
        if (($element->getStatus() !== Element::STATUS_ENABLED) && ($element->getStatus() !== Entry::STATUS_LIVE)) {
          $bustCache = false;
        }

        if ($bustCache) {
          $this->invalidateCache();
        }
      }
    );

    Event::on(
      ClearCaches::class,
      ClearCaches::EVENT_REGISTER_CACHE_OPTIONS,
      function (RegisterCacheOptionsEvent $event) {
        $event->options[] = [
          'key' => 'super-api',
          'label' => 'Super API Cache',
          'action' => function () {
            $this->invalidateCache();
          }
        ];
      }
    );

    // Register our variables
    Event::on(
      CraftVariable::class,
      CraftVariable::EVENT_INIT,
      function (Event $event) {
          /** @var CraftVariable $variable */
          $variable = $event->sender;
          $variable->set('superApi', SuperApiVariable::class);
      }
    );
  }

  // Protected Methods
  // =========================================================================
  protected function invalidateCache() {
    TagDependency::invalidate(Craft::$app->cache, 'SuperApi');
  }
}
