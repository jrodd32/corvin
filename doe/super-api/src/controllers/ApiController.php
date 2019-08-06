<?php
/**
 * Super API module for Craft CMS 3.x
 *
 * API endpoints for Craft->SPA
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */
namespace modules\superapi\controllers;

use modules\superapi\SuperApi;

use Craft;
use craft\elements\Entry;
use craft\web\Controller;
use craft\helpers\Json;

/**
 * ApiController Controller
 *
 * @author    Doe-Anderson
 * @package   SuperApi
 * @since     1.0.0
 */
class ApiController extends Controller
{

  // Protected Properties
  // =========================================================================

  protected $cache;

  protected $duration;

  protected $cacheDependency;

  protected $allowAnonymous = [
    'routes',
    'app',
    'page',
    'mailchimp',
    'test'
  ];

  protected $postActions = [
    'mailchimp'
  ];

  protected $payload;

  protected $site;

  public $enableCsrfValidation = false;

  public function beforeAction($action)
  {
      if (in_array($action->id, $this->postActions)) {
          $this->requirePostRequest();
          $this->requireAcceptsJson();

          $this->payload = Json::decode(Craft::$app->getRequest()->getRawBody(), true);
      }

      if (!parent::beforeAction($action)) {
          return false;
      }

      return true;
  }

  public function init()
  {
    $this->site = Craft::$app->getRequest()->getParam('site', 'en');
    $this->cache = Craft::$app->cache;
    $this->duration = 1;

    if (CRAFT_ENVIRONMENT === 'production') {
      $this->duration = 31536000; // 365 days
    }
  }

  public function behaviors()
  {
    $behaviors = parent::behaviors();

    // add CORS filter
    $behaviors['corsFilter'] = [
        'class' => \yii\filters\Cors::className(),
        'cors' => [
          'Origin' => [
            'http://localhost:8080',
            'http://localhost:8000',
            'https://corvin.test'
          ],
          'Access-Control-Request-Method' => [
            'GET',
            'POST'
          ],
          'Access-Control-Request-Headers' => [
            'X-Requested-With',
            'X-CSRF-TOKEN'
          ]
        ]
    ];

    return $behaviors;
  }

  // Public Methods
  // =========================================================================

  public function actionRoutes($criteria = [])
  {
    return $this->asJson(SuperApi::$instance->routes->getAllUrls($criteria, $this->site));
  }

  public function actionApp()
  {
    return $this->asJson(SuperApi::$instance->pages->getAppContent($this->site));
  }

  public function actionPage($handle, $slug)
  {
    return $this->asJson(SuperApi::$instance->pages->getPageContent($this->site, $handle, $slug));
  }

  public function actionMailchimp() {
    $msPlugin = Craft::$app->plugins->getPlugin('mailchimp-subscribe');

    if ($msPlugin && $msPlugin instanceof \aelvan\mailchimpsubscribe\MailchimpSubscribe) {
        $response = $msPlugin->mailchimpSubscribe->subscribe($this->payload['email'], getenv('MC_LIST_ID'));

        return $this->asJson($response);
    }
  }
}
