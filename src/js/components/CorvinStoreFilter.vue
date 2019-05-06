<template>
  <div class="filter dropdown">
    <div class="dropdown-trigger">
      <span
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="handleFilterDropDownClick(filter.filterName)"
      >
        <span>{{ filter.filterName }}</span>
      </span>
    </div>

    <div
      :id="filter.filterName"
      class="dropdown-menu"
      role="menu"
    >
      <span
        v-for="option in filter.options"
        :key="option.target"
        class="dropdown-item"
        @click="handleFilterClick(option.target)"
        >
          {{ option.name }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      filter: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      handleFilterDropDownClick(target = null) {
        if (!target) {
          return;
        }

        document.getElementById(target).classList.toggle('is-active');
      },
      handleFilterClick(target = null) {
        if (!target) {
          return;
        }

        this.$eventBus.$emit('filter-products', target)
      }
    }
  }
</script>

<style scoped>
  .dropdown-trigger > span,
  .dropdown-item {
    display: block;
    cursor: pointer;
  }

  .dropdown-menu {
    display: none;
  }

  .dropdown-menu.is-active {
    display: block;
  }
</style>