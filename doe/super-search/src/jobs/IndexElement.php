<?php
/**
 * super-search module for Craft CMS 3.x
 *
 * Integrate Algolia indexing with Craft 3
 *
 * @link      https://doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\supersearch\jobs;

use modules\supersearch\SuperSearch;

use Craft;
use craft\queue\BaseJob;
use craft\base\Element;
use AlgoliaSearch\Index;

/**
 * Indexelement job
 *
 * Jobs are run in separate process via a Queue of pending jobs. This allows
 * you to spin lengthy processing off into a separate PHP process that does not
 * block the main process.
 *
 * You can use it like this:
 *
 * use modules\supersearch\jobs\Indexelement as IndexelementJob;
 *
 * $queue = Craft::$app->getQueue();
 * $jobId = $queue->push(new IndexelementJob([
 *     'description' => Craft::t('supersearch', 'This overrides the default description'),
 *     'someAttribute' => 'someValue',
 * ]));
 *
 * The key/value pairs that you pass in to the job will set the public properties
 * for that object. Thus whatever you set 'someAttribute' to will cause the
 * public property $someAttribute to be set in the job.
 *
 * Passing in 'description' is optional, and only if you want to override the default
 * description.
 *
 * More info: https://github.com/yiisoft/yii2-queue
 *
 * @author    Doe-Anderson
 * @package   Supersearch
 * @since     1.0.0
 */
class IndexElement extends BaseJob
{
  // Properties
  // =========================================================================

  /**
   * @var array
  **/
  public $element;

  /**
   * @var string
  **/
  public $indexName;

  /**
   * @var Index
  **/
  private $index;

  // Public Methods
  // =========================================================================
  /**
   * @throws \AlgoliaSearch\AlgoliaException
   * @throws \Exception
   */
  public function init()
  {
    parent::init();
    $this->index = SuperSearch::$plugin->scoutService->getClient()->initIndex($this->indexName);
  }

  /**
   * @param craft\queue\QueueInterface $queue The queue the job belongs to
   */
  public function execute($queue)
  {
    $this->index->addObject($this->element);
  }

  // Protected Methods
  // =========================================================================
  /**
   * {@inheritdoc}
   */
  protected function defaultDescription(): string
  {
    return "Adding element {$this->element['objectID']} to index";
  }
}
