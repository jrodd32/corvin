<template>
  <corvin-loading v-if="loading" />

  <main
    v-else
    class="page has-inset is-gapless products"
  >
    <corvin-page-hero
      v-if="hasHero"
      :hero="data.content.hero"
    />

    <div class="is-contained content-wrapper">
      <h2>Currently updating our catalog. <br /> Check back soon!</h2>
    </div>

    <!-- <corvin-categories
      v-if="hasProducts"
      :categories="data.content.products.grid.items"
      class="is-contained content-wrapper"
      has-filters.boolean="false"
      listing-type="store"
    /> -->
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';
  import CorvinLoading from '../components/CorvinLoading.vue';
  import CorvinPageHero from '../components/CorvinPageHero.vue';
  import CorvinCategories from '../components/CorvinCategories.vue';

  export default {
    components: {
      CorvinLoading,
      CorvinPageHero,
      CorvinCategories,
    },
    mixins: [
      ajaxPageProps,
    ],
    data() {
      return {
        jsonUrl: `/${this.$api.pages.shop}`,
      };
    },
    computed: {
      hasContent() {
        return 'content' in this.data;
      },
      hasHero() {
        return this.hasContent
               && 'hero' in this.data.content;
      },
      hasProducts() {
        return this.hasContent
               && 'products' in this.data.content
               && 'grid' in this.data.content.products
               && 'items' in this.data.content.products.grid
               && this.data.content.products.grid.items.length > 0;
      },
    },
  };
</script>
