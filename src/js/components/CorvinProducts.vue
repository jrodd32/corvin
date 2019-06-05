<template>
  <div class="products-filters">
    <corvin-store-filters v-if="hasFilters" />

    <div
      :class="styleModifiers"
      class="products-listing"
    >
      <corvin-product-listing
        v-if="hasProducts"
        v-for="product in filteredProducts"
        :key="product.slug"
        :product="product"
        :productStyle="listingType"
      />
    </div>
  </div>
</template>

<script>
  import {
    products,
    productCategories
  } from '../core/data';

  import CorvinProductListing from './CorvinProductListing.vue';
  import CorvinStoreFilters from './CorvinStoreFilters.vue';

  export default {
    components: {
      CorvinProductListing,
      CorvinStoreFilters
    },
    props: {
      hasFilters: {
        type: Boolean,
        default() {
          return false;
        }
      },
      listingType: {
        type: String,
        default() {
          return '';
        }
      }
    },
    data() {
      return {
        filterBy: '',
        products,
        productCategories
      };
    },
    computed: {
      activeProducts() {
        return this.listingType === 'category'
               ? productCategories
               : products;
      },
      hasProducts() {
        return this.products
               && this.products.length > 0;
      },
      filteredProducts() {
        if (this.filterBy) {
          return this.activeProducts.filter(product => product.tags.includes(this.filterBy));
        }

        return this.activeProducts;
      },
      styleModifiers() {
        return this.listingType === 'category' ? 'is-category-listing' : '';
      }
    },
    created() {
      this.$eventBus.$on('filter-products', (target) => {
        this.handleFilterProducts(target);
      });

      this.$eventBus.$on('clear-filters', () => {
        this.handleClearFilters();
      });
    },
    methods: {
      handleClearFilters() {
        this.filterBy = null;
      },
      handleFilterProducts(filterBy) {
        this.filterBy = filterBy;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .products-filters {
    margin-bottom: $u6;

    @include tablet() {
      margin-bottom: $u10;
    }
  }
  .products-listing {
    display: flex;
    flex-flow: column wrap;
    padding-left: $u6;
    padding-right: $u6;

    @include tablet() {
      flex-flow: row wrap;

      .product {
        flex: 0 1 50%;
        padding-left: $u6;
        padding-right: $u6;
      }
    }

    @include widescreen() {
      justify-content: space-around;

      .product {
        flex: 0 1 33%;
      }
    }

    @include tv() {
      .product {
        flex: 0 1 25%;
      }
    }
  }
</style>
