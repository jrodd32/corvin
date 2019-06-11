<?php
/**
 * super-search module for Craft CMS 3.x
 *
 * Integrate Algolia indexing with Craft 3
 *
 * @link      https://doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\supersearch\console\controllers;

use Craft;
use craft\base\Element;

use yii\console\Controller;
use yii\helpers\Console;
use yii\console\Exception;
use yii\console\ExitCode;

use modules\supersearch\SuperSearch;
use modules\supersearch\models\AlgoliaIndex;

/**
 * Flush Command
 *
 * The first line of this class docblock is displayed as the description
 * of the Console Command in ./craft help
 *
 * Craft can be invoked via commandline console by using the `./craft` command
 * from the project root.
 *
 * Console Commands are just controllers that are invoked to handle console
 * actions. The segment routing is module-name/controller-name/action-name
 *
 * The actionIndex() method is what is executed if no sub-commands are supplied, e.g.:
 *
 * ./craft super-search-module/flush
 *
 * Actions must be in 'kebab-case' so actionDoSomething() maps to 'do-something',
 * and would be invoked via:
 *
 * ./craft super-search-module/flush/do-something
 *
 * @author    Doe-Anderson
 * @package   Supersearch
 * @since     1.0.0
 */
class IndexController extends Controller
{
   // Public Methods
    // =========================================================================

    /**
     * Flush one or all indexes.
     *
     * @param string $index
     *
     * @throws Exception
     * @throws \AlgoliaSearch\AlgoliaException
     * @throws \Exception
     *
     * @return mixed
     */
    public function actionFlush($index = '')
    {
        if ($this->confirm('Are you sure you want to flush Super Search?')) {
            /* @var \rias\scout\models\AlgoliaIndex $mapping */
            foreach ($this->getMappings($index) as $mapping) {
                $index = SuperSearch::$plugin->scoutService->getClient()->initIndex($mapping->indexName);
                $index->clearIndex();
            }

            return ExitCode::OK;
        }

        return ExitCode::OK;
    }

    /**
     * Import one or all indexes.
     *
     * @param string $index
     *
     * @throws Exception
     * @throws \yii\base\InvalidConfigException
     *
     * @return int
     */
    public function actionImport($index = '')
    {
        /* @var \rias\scout\models\AlgoliaIndex $mapping */
        foreach ($this->getMappings($index) as $mapping) {
            // Get all elements to index
            $elements = $mapping->getElementQuery()->all();

            // Create a job to index each element
            $progress = 0;
            $total = count($elements);
            Console::startProgress(
                $progress,
                $total,
                "Adding elements from index {$mapping->indexName}.",
                0.5
            );

            $algoliaIndex = new AlgoliaIndex($mapping);
            $algoliaIndex->indexElements($elements);

            Console::updateProgress($total, $total);
            Console::endProgress();
        }

        // Run the queue after adding all elements
        $this->stdout('Running queue jobs...', Console::FG_GREEN);
        Craft::$app->queue->run();

        // Everything went OK
        return ExitCode::OK;
    }

    /**
     * @param string $index
     *
     * @throws Exception
     *
     * @return array
     */
    protected function getMappings($index = '')
    {
        $mappings = SuperSearch::$plugin->scoutService->getMappings();

        // If we have an argument, only get indexes that match it
        if (!empty($index)) {
            $mappings = array_filter($mappings, function ($mapping) use ($index) {
                return $mapping->indexName == $index;
            });
        }

        if (!count($mappings)) {
            throw new Exception("Index {$index} not found.");
        }

        return $mappings;
    }
}
