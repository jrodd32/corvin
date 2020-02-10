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
        return this.products
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
  // .products-filters {
  //   margin-bottom: $u6;

  //   @include tablet() {
  //     margin-bottom: $u10;
  //   }
  // }

  .products-listing {
    display: flex;
    flex-flow: column wrap;
    margin-left: $u6;
    margin-right: $u6;

    @include tablet() {
      flex-flow: row wrap;
      justify-content: space-between;

      .product {
        flex: 0 1 calc(50% - (#{$u6} / 2));
      }
    }

    @include widescreen() {
      .product {
        flex: 0 1 calc(33% - #{$u6} / 3);
      }
    }

    @include tv() {
      .product {
        flex: 0 1 calc(25% - (#{$u6} / 3));
      }
    }
  }
</style>
