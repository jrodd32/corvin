<template>
  <div class="products-filters">
    <corvin-store-filters
      v-if="hasFilters"
      :products="products"
    />

    <div
      :class="styleModifiers"
      class="products"
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
  import CorvinProductListing from './CorvinProductListing.vue';
  import CorvinStoreFilters from './CorvinStoreFilters.vue';

  export default {
    components: {
      CorvinProductListing,
      CorvinStoreFilters,
    },
    props: {
      hasFilters: {
        type: Boolean,
        default() {
          return false;
        },
      },
      listingType: {
        type: String,
        default() {
          return '';
        },
      },
      products: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {
        filterBy: '',
      };
    },
    computed: {
      hasProducts() {
        return this.products !== null
               && this.products
               && this.products.length > 0;
      },
      filteredProducts() {
        if (this.filterBy) {
          return this.products.filter(product => product.tags.includes(this.filterBy));
        }

        return this.products;
      },
      styleModifiers() {
        return this.listingType === 'category' ? 'is-category-listing' : '';
      },
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
      },
    },
  };
</script>

<style lang="scss" scoped>
  .products {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    @include tablet() {
      .product {
        flex: 1 1 50%;
      }
    }

    @include desktop() {
      .product {
        flex-basis: 33%;
        max-width: 33%;
      }
    }

    @include tv() {
      .product {
        flex-basis: 25%;
        max-width: 25%;
      }
    }
  }
</style>
