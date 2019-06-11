<?php
/**
 * Super Image plugin for Craft CMS 3.x
 *
 * Resizes images after upload
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace doeanderson\superimage;

use doeanderson\superimage\services\Resize as ResizeService;
use doeanderson\superimage\models\Settings;

use Craft;
use craft\base\Plugin;
use craft\elements\Asset;
use craft\events\ModelEvent;

use yii\base\Event;

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
 * @package   superimage
 * @since     1.0.0
 *
 * @property  Resize $resizerService
 */
class SuperImage extends Plugin
{
  // Static Properties
  // =========================================================================

  public static $plugin;

  // Public Properties
  // =========================================================================

  public $schemaVersion = '1.0.0';

  // Public Methods
  // =========================================================================

  public function init()
  {
    parent::init();
    self::$plugin = $this;
  }

  // Protected Methods
  // =========================================================================

  protected function createSettingsModel()
  {
    return new Settings();
  }
}
