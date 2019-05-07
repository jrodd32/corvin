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
  import { filters } from '../core/data';
  import CorvinStoreFilter from './CorvinStoreFilter.vue';

  export default {
    components: {
      CorvinStoreFilter
    },
    data() {
      return {
        filters
      };
    },
    methods: {
      clearAllFilters() {
        this.$eventBus.$emit('clear-filters');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filters {
    border-bottom: 1px solid $tertiaryBlue;
    border-top: 1px solid $tertiaryBlue;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: $u10;
    margin-left: $u4;
    margin-right: $u4;
    padding-bottom: $u6;
    padding-top: $u6;

    @include tablet() {
      flex-flow: row wrap;
      justify-content: space-around;
    }
  }
</style>