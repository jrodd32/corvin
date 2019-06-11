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
use craft\elements\Entry;

/**
 * HealthController Controller
 *
 * @author    Doe-Anderson
 * @package   SuperApi
 * @since     1.0.0
 */
class HealthController extends Controller
{
  // Protected Properties
  // =========================================================================

  protected $allowAnonymous = [
    'index'
  ];

  public function actionIndex()
  {
    $response = [
      'status' => 'OK',
    ];

    return $this->asJson($response);
  }
}
