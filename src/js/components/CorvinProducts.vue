<template>
  <div class="products-listing">
    <doe-columns
      v-if="hasProducts"
      :animate-in="false"
    >
      <doe-column
        v-for="product in filteredProducts"
        :key="product.slug"
      >
        <corvin-product-listing
          :key="product.slug"
          :product="product"
        />
      </doe-column>
    </doe-columns>
  </div>
</template>

<script>
  import { products } from '../core/data';
  import DoeColumn from '@bit/doeanderson.components.components.doe-column';
  import DoeColumns from '@bit/doeanderson.components.components.doe-columns';
  import CorvinProductListing from './CorvinProductListing.vue';

  export default {
    components: {
      DoeColumn,
      DoeColumns,
      CorvinProductListing
    },
    data() {
      return {
        filterBy: '',
        products
      };
    },
    created() {
      this.$eventBus.$on('filter-products', (target) => {
        this.handleFilterProducts(target);
      });

      this.$eventBus.$on('clear-filters', () => {
        this.handleClearFilters();
      });
    },
    computed: {
      hasProducts() {
        return this.products && this.products.length > 0;
      },
      filteredProducts() {
        if (this.filterBy) {
          return products.filter(product => product.tags.includes(this.filterBy));
        }

        return products;
      }
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
