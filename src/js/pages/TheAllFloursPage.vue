<template>
  <main class="page has-inset is-gapless products">
    <corvin-page-hero
      v-if="hasHero"
      :hero="data.content.hero"
    />

    <corvin-products
      v-if="hasProducts"
      :products="data.products"
      class="is-contained"
      has-filters.boolean="false"
      listing-type="all-flooring"
    />
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';
  import CorvinPageHero from '../components/CorvinPageHero.vue';
  import CorvinProducts from '../components/CorvinProducts.vue';

  export default {
    components: {
      CorvinPageHero,
      CorvinProducts
    },
    mixins: [ajaxPageProps],
    data() {
      return {
        handle: 'all-flooring',
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
        return 'products' in this.data
               && this.data.products.length > 0;
      }
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>
