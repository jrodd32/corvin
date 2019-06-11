<?php
/**
 * Exception Reporter module for Craft CMS 3.x
 *
 * Tracks exceptions within Craft
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\exceptionreporter\services;

use modules\exceptionreporter\ExceptionReporter;

use Craft;
use craft\base\Component;
use Raven_Client;
use Raven_ErrorHandler;

/**
 * Sentry Service
 *
 * All of your module’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other modules can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Doe-Anderson
 * @package   ExceptionReporter
 * @since     1.0.0
 */
class Sentry extends Component
{
    // Public Methods
    // =========================================================================

    public static function handleException($exception, $statusCode = null)
    {
        $excludedCodes = [
            404
        ];

        $uri = $_SERVER['REQUEST_URI'];
        $excludedUris = [];

        if (CRAFT_ENVIRONMENT === 'dev' || in_array($statusCode, $excludedCodes) || in_array($uri, $excludedUris) || is_null(getenv('SENTRY_URL'))) {
            return;
        }

        $sentryClient = new Raven_Client(getenv('SENTRY_URL'));
        $errorHandler = new Raven_ErrorHandler($sentryClient);

        $errorHandler->registerExceptionHandler();
        $errorHandler->registerErrorHandler();
        $errorHandler->registerShutdownFunction();

        $sentryClient->captureException($exception, [
            'extra' => [
                'Environment' => CRAFT_ENVIRONMENT,
                'Status Code' => $statusCode
            ]
        ]);
    }
}
