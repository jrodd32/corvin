<template>
  <main class="page has-inset is-gapless products">
    <corvin-page-hero
      v-if="hasHero"
      :hero="{
        headline: data.title,
        backgroundImage: {
          alt: data.image.alt,
          url: data.image.url
        },
        content: data.fullDescription
      }"
    />

    <corvin-products
      v-if="hasProducts"
      :has-filters="showFilters"
      :listing-type="computedListingType"
      :products="data.content.products.grid.items"
      class="is-contained"
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
        handle: 'product-categories',
        slug: this.$route.params.category
      };
    },
    computed: {
      categoryStyle() {
        return this.$route.params.slug === undefined;
      },
      computedListingType() {
        return this.categoryStyle ? 'category' : '';
      },
      hasContent() {
        return 'content' in this.data;
      },
      hasHero() {
        return 'image' in this.data
               && 'title' in this.data
               && 'fullDescription' in this.data;
      },
      hasProducts() {
        return this.hasContent
               && 'products' in this.data.content
               && 'grid' in this.data.content.products
               && 'items' in this.data.content.products.grid
               && this.data.content.products.grid.items.length > 0;
      },
      showFilters() {
        return !this.categoryStyle;
      }
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>
