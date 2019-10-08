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

    <corvin-products
      v-if="hasProducts"
      :products="data.content.products.grid.items"
      class="is-contained"
      has-filters.boolean="false"
      listing-type="store"
    />
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';
  import CorvinLoading from '../components/CorvinLoading.vue';
  import CorvinPageHero from '../components/CorvinPageHero.vue';
  import CorvinProducts from '../components/CorvinProducts.vue';

  export default {
    components: {
      CorvinLoading,
      CorvinPageHero,
      CorvinProducts
    },
    mixins: [ajaxPageProps],
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
      }
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>
