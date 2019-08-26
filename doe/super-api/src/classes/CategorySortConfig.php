<?php
namespace modules\superapi\classes;

class CategorySortConfig
{
  const productCategoryOrder = [
    'molecular-sieves',
    'specialty-zeolites',
    'chromatography-gels',
    'deuterium-labeled-compounds'
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
    'Microbeads',
  ];

  const deuteriumLabeledCompoundsOrder = [
    'NMR-Solvents',
    'Deuterated Reagents for APIs',
    'Deuterated Reagents for OLEDs',
    'Deuterium Used as Tracer or Marker',
    'Deuterium Gas',
  ];

  const productCategoriesToSkip = [
    'cg-spherical-shape',
    'cg-irregular-shape',
    'cg-microbeads'
  ];

  const cGIrregularShapesOrder = [];
  const cGSphericalShapeOrder = [];
  const cGMicrobeadsOrder = [];

  public $categoryOrder;
  public $molecularSieves;
  public $specialtyZeolites;
  public $chromatographyGels;
  public $deuteriumLabeledCompounds;
  public $cGIrregularShapes;
  public $cGSphericalShapes;
  public $cGMicrobeads;
  public $categoriesToSkip;


  public function __construct()
  {
    $this->categoryOrder = self::productCategoryOrder;
    $this->molecularSieves = self::molecularSievesOrder;
    $this->specialtyZeolites = self::specialtyZeolitesOrder;
    $this->chromatographyGels = self::chromatographyGelsOrder;
    $this->deuteriumLabeledCompounds = self::deuteriumLabeledCompoundsOrder;
    $this->cgIrregularShape = self::cGIrregularShapesOrder;
    $this->cgSphericalShape = self::cGSphericalShapeOrder;
    $this->cgMicrobeads = self::cGMicrobeadsOrder;
    $this->categoriesToSkip = self::productCategoriesToSkip;
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
      if (!$this->keepProduct($product['category'][0]['slug'])) {
        continue;
      }

      $orderIndex = array_search($product['title'], $this->$categoryOrder);
      $sortedProducts[$orderIndex] = $product;
    }

    ksort($sortedProducts);

    return array_values($sortedProducts);
  }

  public function removeSubProducts($products)
  {
    $filteredProducts = [];

    $filteredProducts = array_filter(
      $products,
      function ($product) {
        return $this->keepProduct($product['category'][0]['slug']);
      }
    );

    return array_values($filteredProducts);
  }

  protected function formatHandle($handle)
  {
    return lcfirst(str_replace('-', '', ucwords($handle, '-')));
  }

  protected function keepProduct($productCategory)
  {
    return !in_array($productCategory, $this->categoriesToSkip);
  }
}
