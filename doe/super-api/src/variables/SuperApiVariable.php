<?php
/**
 * Super API module for Craft CMS 3.x
 *
 * API endpoints for Craft->SPA
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\superapi\variables;

use modules\superapi\SuperApi;

use yii\web\Response;

/**
 * @author    Doe-Anderson
 * @package   Super Api
 * @since     1.0.0
 */
class SuperApiVariable
{
    // Public Methods
    // =========================================================================

    public function pageJsonScript($site, $path)
    {
      return '<script>window.data = '.json_encode(SuperApi::$instance->pages->getPageJson($site, $path, false)).';</script>';
    }

    public function cdnUrl()
    {
      return getenv('CDN_URL');
    }

    public function pageDateUpdated($site, $path)
    {
      return SuperApi::$instance->pages->getPageJson($site, $path, true);
    }
}
