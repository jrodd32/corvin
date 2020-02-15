<template>
  <div class="filters">
    <corvin-store-filter
      v-for="filter in filters"
      :filter="filter"
      :key="filter.filterName"
    />
  </div>
</template>

<script>
  import CorvinStoreFilter from './CorvinStoreFilter.vue';

  export default {
    components: {
      CorvinStoreFilter,
    },
    data() {
      return {
        brands: [],
        categories: [],
        colors: [],
        filters: [],
      };
    },
    props: {
      products: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    created() {
      this.setFilters();
    },
    methods: {
      clearAllFilters() {
        this.$eventBus.$emit('clear-filters');
      },
      setFilters() {
        this.products.forEach((p) => {
          this.brands.push(p.productBrand[0]);
          this.categories.push(p.productCategory[0]);
          this.colors.push(p.productColor);
        });
      }
    },
  };
</script>

<style lang="scss" scoped>
  .filters {
    border-bottom: 1px solid $tertiaryBlue;
    border-top: 1px solid $tertiaryBlue;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: $u10;
    padding-bottom: $u6;
    padding-left: $u6;
    padding-right: $u6;
    padding-top: $u6;

    @include tablet() {
      flex-flow: row wrap;
      justify-content: space-around;
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>