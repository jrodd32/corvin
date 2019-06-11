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


use Craft;
use craft\queue\BaseJob;
use craft\base\Element;
use AlgoliaSearch\Index;

use modules\supersearch\SuperSearch;
/**
 * DeIndexElement job
 *
 * Jobs are run in separate process via a Queue of pending jobs. This allows
 * you to spin lengthy processing off into a separate PHP process that does not
 * block the main process.
 *
 * You can use it like this:
 *
 * use modules\supersearch\jobs\DeIndexElement as DeIndexElementJob;
 *
 * $queue = Craft::$app->getQueue();
 * $jobId = $queue->push(new DeIndexElementJob([
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
class DeIndexElement extends BaseJob
{
   // Properties
    // =========================================================================
    /* @var string */
    public $id;
    /* @var string */
    public $indexName;
    /* @var string */
    public $distinctId;
    /* @var Index */
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
     *
     * @throws \AlgoliaSearch\AlgoliaException
     * @throws \Exception
     */
    public function execute($queue)
    {
        if ($this->distinctId !== null) {
            $this->index->deleteBy([
                'filters' => 'distinctId:'.$this->distinctId,
            ]);
        } else {
            $this->index->deleteObject($this->id);
        }
    }
    // Protected Methods
    // =========================================================================
    /**
     * {@inheritdoc}
     */
    protected function defaultDescription(): string
    {
        return "Removing element {$this->id} from index";
    }
}
