<?php
/**
 * Scout plugin for Craft CMS 3.x.
 *
 * Craft Scout provides a simple solution for adding full-text search to your entries.
 * Scout will automatically keep your search indexes in sync with your entries.
 *
 * @link      https://rias.be
 *
 * @copyright Copyright (c) 2017 Rias
 */

namespace modules\supersearch;

use craft\base\ElementInterface;
use craft\helpers\ArrayHelper;
use League\Fractal\TransformerAbstract;
use modules\supersearch\SuperSearch;

/**
 * Element transformer class.
 *
 * @author Rias
 *
 * @since  0.1.0
 */
class ElementTransformer extends TransformerAbstract
{
    public function transform(ElementInterface $element): array
    {
        return SuperSearch::$instance->searchValue->getSearchEntryValues($element, true, true);
    }
}