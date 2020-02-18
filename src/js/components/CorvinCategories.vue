<template>
  <div class="categories">
    <corvin-category-listing
      v-if="hasCategories"
      v-for="category in filteredCategories"
      :key="category.slug"
      :category="category"
    />
  </div>
</template>

<script>
  import CorvinCategoryListing from './CorvinCategoryListing.vue';

  export default {
    components: {
      CorvinCategoryListing,
    },
    props: {
      categories: {
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
      hasCategories() {
        return this.categories
               && this.categories.length > 0;
      },
      filteredCategories() {
        if (this.filterBy) {
          return this.categories.filter(category => category.tags.includes(this.filterBy));
        }

        return this.categories;
      },
      styleModifiers() {
        return this.listingType === 'category' ? 'is-category-listing' : '';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .categories {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    @include tablet() {
      .category {
        flex: 1 0 50%;
      }
    }

    @include desktop() {
      .category {
        flex-basis: 33%;
      }
    }
  }
</style>
