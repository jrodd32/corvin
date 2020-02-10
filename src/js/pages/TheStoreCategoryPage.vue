<template>
  <corvin-loading v-if="loading" />

  <main
    v-else
    class="page has-inset is-gapless products no-bottom-padding"
  >
    <corvin-page-hero
      v-if="hasHero"
      :hero="{
        headline: data.title,
        backgroundImage: {
          alt: data.image.alt,
          url: data.image.url
        },
        content: description
      }"
    />

    <corvin-products
      v-if="hasProducts"
      :products="data.products"
      class="is-contained"
      has-filters.boolean="true"
      listing-type="category"
    />

    <corvin-related-categories
      v-if="hasRelatedCategories"
      :products="data.relatedCategories"
      listing-style="category"
    />
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';
  import CorvinLoading from '../components/CorvinLoading.vue';
  import CorvinPageHero from '../components/CorvinPageHero.vue';
  import CorvinProducts from '../components/CorvinProducts.vue';
  import CorvinRelatedCategories from '../components/CorvinRelatedProducts.vue';

  export default {
    components: {
      CorvinLoading,
      CorvinPageHero,
      CorvinProducts,
      CorvinRelatedCategories,
    },
    mixins: [
      ajaxPageProps,
    ],
    data() {
      return {
        handle: 'product-categories',
        slug: this.$route.params.category,
      };
    },
    computed: {
      description() {
        if ('fullDescription' in this.data
            && this.data.fullDescription
            && this.data.fullDescription.length > 0) {
          return this.data.fullDescription;
        }

        if ('shortDescription' in this.data
            && this.data.shortDescription
            && this.data.shortDescription.length > 0) {
          return this.data.shortDescription;
        }

        return 'description needed';
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
        return 'products' in this.data
               && this.data.products.length > 0;
      },
      hasRelatedCategories() {
        return 'relatedCategories' in this.data
               && this.data.relatedCategories
               && this.data.relatedCategories.length > 0;
      },
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    },
  };
</script>
