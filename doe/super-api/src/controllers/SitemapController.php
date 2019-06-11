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
use craft\web\Controller;
use craft\web\Response;
/**
 * SitemapController Controller
 *
 * @author    Doe-Anderson
 * @package   SuperApi
 * @since     1.0.0
 */
class SitemapController extends Controller
{
  // Protected Properties
  // =========================================================================

  protected $allowAnonymous = [
    'index',
    'urls'
  ];

  protected $site;

  public function init()
  {
    $this->site = Craft::$app->getRequest()->getParam('site', 'en');
  }

  public function behaviors()
  {
    return parent::behaviors();
  }

  public function actionIndex($criteria = [])
  {
    $response = Craft::$app->getResponse();
    $response->format = \yii\web\Response::FORMAT_RAW;
    $headers = \Yii::$app->response->headers;
    $headers->add('Content-Type', 'application/xml;  charset=utf-8');

    $response->data = SuperApi::$instance->sitemap->generateSitemap($criteria, $this->site);

    return $response;
  }

  public function actionUrls($criteria = [])
  {
    return $this->asJson(SuperApi::$instance->sitemap->getSitemapUrls($criteria));
  }
}
