<template>
  <div class="filters">
    <corvin-store-filter
      v-for="filter in filters"
      :filter="filter"
      :key="filter.filterName"
    />

    <span
      class="filter clear"
      @click="clearAllFilters"
    >
      Clear All
    </span>
  </div>
</template>

<script>
  import { filters } from '../core/data';
  import CorvinStoreFilter from '../components/CorvinStoreFilter.vue';

  export default {
    data() {
      return {
        filters
      };
    },
    components: {
      CorvinStoreFilter
    },
    methods: {
      clearAllFilters() {
        this.$eventBus.$emit('clear-filters');
      }
    }
  }
</script>

<style scoped>
  .clear {
    cursor: pointer;
    display: inline-block;
  }

  .filters {
    display: flex;
    flex-flow: column nowrap;
  }

  .dropdown-menu {
    display: flex;
    flex-flow: column nowrap;
  }
</style>