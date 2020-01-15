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
use yii\caching\TagDependency;

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

  protected $allowAnonymous = self::ALLOW_ANONYMOUS_LIVE;

  protected $site;


  public function init()
  {
    $this->site = Craft::$app->getRequest()->getParam('site', 'en');
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

  public function behaviors()
  {
    $behaviors = parent::behaviors();

    // add CORS filter
    $behaviors['corsFilter'] = [
        'class' => \yii\filters\Cors::className(),
        'cors' => [
          'Origin' => [
            'http://localhost:3232',
            'http://localhost:8000',
            'https://www.corvin.com',
          ],
          'Access-Control-Request-Method' => [
            'GET'
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

  public function actionPage($handle, $slug, $product)
  {
    return $this->asJson(SuperApi::$instance->pages->getPageContent($this->site, $handle, $slug, $product));
  }

  public function actionMailchimp($email = '')
  {
    var_dump(Craft::$app->request->getPost());
    die;
    $msPlugin = Craft::$app->plugins->getPlugin('mailchimp-subscribe');

    if ($msPlugin && $msPlugin instanceof \aelvan\mailchimpsubscribe\MailchimpSubscribe) {
      $response = $msPlugin->mailchimpSubscribe->subscribe('jrodd32+test@gmail.com', getenv('MC_LIST_ID'), [
        'email_type' => 'html',
        'language' => 'en',
        'vip' => false,
        'tags' => null,
        'doubleOptIn' => false,
        'status' => 'subscribed'
      ]);

      // var_dump($response);
      // die;

      // $member = $msPlugin->mailchimpSubscribe->getMemberByEmail('jrodd32@gmail.com', '0f262c304b');

      var_dump($response);
      die;
    }
  }
}
