<template>
  <div class="products-filters">
    <corvin-store-filters v-if="showFilters" />

    <div class="products-listing">
      <corvin-product-listing
        v-if="hasProducts"
        v-for="product in filteredProducts"
        :key="product.slug"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
  import { products } from '../core/data';
  import CorvinProductListing from './CorvinProductListing.vue';
  import CorvinStoreFilters from './CorvinStoreFilters.vue';

  export default {
    components: {
      CorvinProductListing,
      CorvinStoreFilters
    },
    data() {
      return {
        filterBy: '',
        products,
        showFilters: false
      };
    },
    computed: {
      hasProducts() {
        return this.products
               && this.products.length > 0;
      },
      filteredProducts() {
        if (this.filterBy) {
          return products.filter(product => product.tags.includes(this.filterBy));
        }

        return products;
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
    margin-bottom: &u6;

    @include tablet() {
      margin-bottom: $u10;
    }
  }
  .products-listing {
    display: flex;
    flex-flow: column wrap;

    .product {
      padding-left: $u6;
      padding-right: $u6;
    }

    @include tablet() {
      flex-flow: row wrap;

      .product {
        flex: 0 1 50%;
      }
    }
  }
</style>
