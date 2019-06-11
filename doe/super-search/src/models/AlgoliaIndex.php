<?php
/**
 * super-search module for Craft CMS 3.x
 *
 * Integrate Algolia indexing with Craft 3
 *
 * @link      https://doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\supersearch\models;

use Craft;
use craft\base\Element;
use craft\base\ElementInterface;
use craft\base\Model;
use craft\elements\db\ElementQueryInterface;
use craft\elements\Entry;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\TransformerAbstract;

use modules\supersearch\SuperSearch;
use modules\supersearch\ElementTransformer;
use modules\supersearch\jobs\DeIndexElement;
use modules\supersearch\jobs\IndexElement;

/**
 * AlgoliaIndex Model
 *
 * Models are containers for data. Just about every time information is passed
 * between services, controllers, and templates in Craft, it’s passed via a model.
 *
 * https://craftcms.com/docs/plugins/models
 *
 * @author    Doe-Anderson
 * @package   Supersearch
 * @since     1.0.0
 */
class AlgoliaIndex extends Model
{
  /**
   * @var string
   **/
  public $indexName;

  /**
   * @var string
   **/
  public $elementType;

  /**
   * @var mixed
   **/
  public $criteria;

  /**
   * @var array
   **/
  public $splitElementIndex = [];

  /**
   * @var callable|string|array|TransformerAbstract The transformer config, or an actual transformer object
   */
  public $transformer = ElementTransformer::class;

  /**
   * Determines if the supplied element can be indexed in this index.
   *
   * @param $element Element
   *
   * @return bool
   */
  public function canIndexElement(Element $element)
  {
    return $this->elementType === get_class($element) && $this->getElementQuery($element)->count();
  }
  /**
   * Transforms the supplied element using the transformer method in config.
   *
   * @param $element Element
   *
   * @throws \yii\base\InvalidConfigException
   *
   * @return mixed
   */
  public function transformElement(Element $element)
  {
    $transformer = $this->getTransformer();
    $resource = new Item($element, $transformer);
    $fractal = new Manager();
    $fractal->setSerializer(new ArraySerializer());
    $data = $fractal->createData($resource)->toArray();
    // Make sure the objectID is set for Algolia
    $data['objectID'] = $element->id;
    return $data;
  }
  /**
   * Adds or removes the supplied element from the index.
   *
   * @param $elements array
   *
   * @throws \yii\base\InvalidConfigException
   */
  public function indexElements($elements)
  {
    foreach ($elements as $element) {
      if ($this->canIndexElement($element)) {
        if ($element->enabled) {
          $this->indexElement($element);
        } else {
          $this->deindexElement($element);
        }
      }
    }
  }
  /**
   * Removes the supplied element from the index.
   *
   * @param $elements
   */
  public function deindexElements($elements)
  {
    foreach ($elements as $element) {
      if ($this->canIndexElement($element)) {
        $this->deindexElement($element);
      }
    }
  }
  protected function indexElement($element)
  {
    $elementConfigs = [];
    if (count($this->splitElementIndex) > 0) {
      $elementConfigs = $this->splitElementConfig($element);
    } else {
      $elementConfigs[] = [
        'indexName' => $this->indexName,
        'element'   => $this->transformElement($element),
      ];
    }
    foreach ($elementConfigs as $elementConfig) {
      Craft::$app->queue->push(new IndexElement($elementConfig));
    }
  }

  /**
   * @param $element
   */
  protected function deindexElement($element)
  {
    $config = [
      'indexName' => $this->indexName,
    ];

    if (count($this->splitElementIndex) > 0) {
      $config['distinctId'] = $element->id;
    } else {
      $config['id'] = $element->id;
    }

    Craft::$app->queue->push(new DeIndexElement($config));
  }
  /**
   * @param $element
   */
  protected function splitElementConfig($element)
  {
    $transformedElement = $this->transformElement($element);
    $transformedElement['distinctId'] = $element->id;
    $elementConfigs = [];
    $i = 1;

    foreach ($this->splitElementIndex as $indexElement) {
      $transformedElement['objectID'] = $element->id.'_'.$i;

      if ($transformedElement[$indexElement] !== null) {
        if (is_array($transformedElement[$indexElement])) {
          foreach ($transformedElement[$indexElement] as $key => $value) {
            if ((is_array($value) && count($value) > 0) || (!is_array($value) && $value !== null)) {
              $transformedElement['objectID'] = $element->id.'_'.$i;

              $splitElement = array_filter($transformedElement, function ($item) {
                return !in_array($item, $this->splitElementIndex, true);
              }, ARRAY_FILTER_USE_KEY);

              $splitElement[$indexElement] = $value;

              $elementConfigs[] = [
                'indexName' => $this->indexName,
                'element'   => $splitElement,
              ];

              $i++;
              }
            }
        } else {
          $elementConfigs[] = [
            'indexName' => $this->indexName,
            'element'   => array_filter($transformedElement, function ($item) use ($indexElement) {
                return !(in_array($item, $this->splitElementIndex, true) && $item !== $indexElement);
            }, ARRAY_FILTER_USE_KEY),
          ];
        }
      }

      $i++;
    }

    return $elementConfigs;
  }

  /**
   * Returns the transformer.
   *
   * @throws \yii\base\InvalidConfigException
   *
   * @return callable|TransformerAbstract|object
   */
  protected function getTransformer()
  {
    if (is_callable($this->transformer) || $this->transformer instanceof TransformerAbstract) {
      return $this->transformer;
    }

    return Craft::createObject($this->transformer);
  }

  /**
   * {@inheritdoc}
   */
  public function rules()
  {
    return [
      'indexName'   => 'string',
      'elementType' => [
        'string',
        'default' => Entry::class,
      ],
    ];
  }

  /**
   * Returns the element query based on [[elementType]] and [[criteria]].
   *
   * @param Element $element
   *
   * @return ElementQueryInterface
   */
  public function getElementQuery(Element $element = null): ElementQueryInterface
  {
    /** @var string|ElementInterface $elementType */
    $elementType = $this->elementType;

    $query = $elementType::find();

    Craft::configure($query, $this->criteria);

    if (!is_null($element)) {
      $query->id($element->id);
    }

    return $query;
  }
}
