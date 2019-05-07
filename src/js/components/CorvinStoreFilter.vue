<template>
  <div class="filter dropdown">
    <div class="dropdown-trigger">
      <span
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="handleFilterDropDownClick(filter.title)"
      >
        <span>{{ filter.title }}</span>
      </span>

      <span class="arrow-down"></span>
    </div>

    <div
      :id="filter.title"
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

<style lang="scss" scoped>

  .dropdown-trigger {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    text-transform: uppercase;

    .arrow-down {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid $orange;
      display: inline-block;
      height: 0;
      margin-left: $u4;
      width: 0;
    }
  }
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