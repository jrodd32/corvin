<?php
namespace modules\superapi\classes;

class CategorySortConfig
{
  const productCategoryOrder = [
    'molecular-sieves',
    'specialty-zeolites',
    'chromatography-gels',
    'deuterium-labeled-compounds',
    'cg-irregular-shape',
  ];

  const molecularSievesOrder = [
    '3A',
    '4A',
    '5A',
    '13X',
    'Calcium X',
    'Lithium X',
    'Purmol Zeolite Powder',
    'Activated Alumina',
  ];

  const specialtyZeolitesOrder = [
    'ZEOflair 100/110',
    'ZEOflair 350/1000',
    'ZEOflair 800/810',
  ];

  const chromatographyGelsOrder = [
    'Spherical Shape',
    'Irregular Shape',
    'Micro Beads',
  ];

  const deuteriumLabeledCompoundsOrder = [
    'NMR-Solvents',
    'Deuterated Reagents for APIs',
    'Deuterated Reagents for OLEDs',
    'Deuterium Used as Tracer or Marker',
    'Deuterium Gas',
  ];

  const cGIrregularShapesOrder = [];

  const cGSphericalShapeOrder = [
    'Classical Reversed Phase - C4',
    'Classical Reversed Phase - CN'
  ];

  const cGMicroBeadsOrder = [];

  public $categoryOrder;
  public $molecularSieves;
  public $specialtyZeolites;
  public $chromatographyGels;
  public $deuteriumLabeledCompounds;
  public $cGIrregularShapes;
  public $cGSphericalShapes;
  public $cGMicroBeads;


  public function __construct()
  {
    $this->categoryOrder = self::productCategoryOrder;
    $this->molecularSieves = self::molecularSievesOrder;
    $this->specialtyZeolites = self::specialtyZeolitesOrder;
    $this->chromatographyGels = self::chromatographyGelsOrder;
    $this->deuteriumLabeledCompounds = self::deuteriumLabeledCompoundsOrder;
    $this->cgIrregularShape = self::cGIrregularShapesOrder;
    $this->cgSphericalShape = self::cGSphericalShapeOrder;
    $this->cgMicroBeads = self::cGMicroBeadsOrder;
  }

  public function sortProductsByCategory($products)
  {
    $sortedProducts = [];
    $flattenedProducts = [];

    $sortedProducts = array_map(
      function($categorySlug) use ($products) {
        $products = array_filter(
          $products,
          function($product) use ($categorySlug) {
            return count($product['category']) > 0 && $product['category'][0]['slug'] === $categorySlug;
          }
        );

        return $this->sortProductsWithinCategory($products, $categorySlug);
      },
      $this->categoryOrder
    );

    $sortedProducts = array_merge(...$sortedProducts);

    return array_values($sortedProducts);
  }

  public function sortProductsWithinCategory($products, $productCategorySlug)
  {
    $sortedProducts = [];
    $categoryOrder = $this->formatHandle($productCategorySlug);

    // If no order is set, return the products
    if (count($this->$categoryOrder) === 0) {
      return $products;
    }

    foreach($products as $index => $product) {
      $orderIndex = array_search($product['title'], $this->$categoryOrder);
      $sortedProducts[$orderIndex] = $product;
    }

    ksort($sortedProducts);

    return array_values($sortedProducts);
  }

  protected function formatHandle($handle)
  {
    return lcfirst(str_replace('-', '', ucwords($handle, '-')));
  }
}
