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
        background: data.image,
        content: description
      }"
    />

    <corvin-products
      v-if="hasProducts"
      :products="data.products"
      class="is-contained content-wrapper"
    />

    <corvin-related-categories
      v-if="hasRelatedCategories"
      :categories="data.relatedCategories"
      :current-category="data.title"
    />
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';
  import CorvinLoading from '../components/CorvinLoading.vue';
  import CorvinPageHero from '../components/CorvinPageHero.vue';
  import CorvinProducts from '../components/CorvinProducts.vue';
  import CorvinRelatedCategories from '../components/CorvinRelatedCategories.vue';

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
  };
</script>
