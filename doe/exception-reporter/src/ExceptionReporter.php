<?php
/**
 * Exception Reporter module for Craft CMS 3.x
 *
 * Tracks exceptions within Craft
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\exceptionreporter;

use modules\exceptionreporter\services\Sentry as SentryService;

use Craft;
use craft\events\ExceptionEvent;
use craft\web\View;
use craft\web\ErrorHandler;

use yii\base\Event;
use yii\base\InvalidConfigException;
use yii\base\Module;

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
 * @package   ExceptionReporter
 * @since     1.0.0
 *
 * @property  SentryService $sentryService
 */
class ExceptionReporter extends Module
{
    // Static Properties
    // =========================================================================

    /**
     * Static property that is an instance of this module class so that it can be accessed via
     * ExceptionReporter::$instance
     *
     * @var ExceptionReporter
     */
    public static $instance;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@modules/exceptionreporter', $this->getBasePath());

        // Set this as the global instance of this module class
        static::setInstance($this);

        parent::__construct($id, $parent, $config);
    }

    /**
     * Set our $instance static property to this class so that it can be accessed via
     * ExceptionReporter::$instance
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
        self::$instance = $this;

        Event::on(
            ErrorHandler::className(),
            ErrorHandler::EVENT_BEFORE_HANDLE_EXCEPTION,
            function(ExceptionEvent $event) {
                $exception = $event->exception;
                $statusCode = isset($exception->statusCode) ? $exception->statusCode : null;
                SentryService::handleException($exception, $statusCode);
            }
        );
    }
}
