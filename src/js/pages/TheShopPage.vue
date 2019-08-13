<template>
  <main class="page has-inset is-gapless products">
    <corvin-page-hero :hero="computedHeadingContent" />

    <corvin-products
      :has-filters="showFilters"
      :listing-type="computedListingType"
      class="is-contained"
    />
  </main>
</template>

<script>
  import CorvinPageHero from '../components/CorvinPageHero.vue';
  import CorvinProducts from '../components/CorvinProducts.vue';

  const tempStoreCategoryHeadingData = {
    headline: 'What Are You Looking For?',
    content: 'At Corvin’s, we pride ourselves on championing every client’s flooring with passion and integrity. We offer a vast array of different options in hardwood, laminate, tile, vinyl and carpet. We also install flooring and custom showers. View our floor offerings below.',
    backgroundImage: {
      alt: 'Image of a man cutting tile.',
      url: '../../images/store-landing-hero.jpg'
    }
  };

  const tempStoreFlooringHeadingData = {
    headline: 'Shop All Floors',
    content: 'Not sure what you’re looking for? No problem. Filter all floors below by style, category (i.e. hardwood vs. tile, etc.), color, price and brand. Let us help you create the room you’re dreaming of.'
  };

  export default {
    components: {
      CorvinPageHero,
      CorvinProducts
    },
    computed: {
      categoryStyle() {
        return this.$route.params.slug === undefined;
      },
      computedHeadingContent() {
        return this.categoryStyle
          ? tempStoreCategoryHeadingData
          : tempStoreFlooringHeadingData;
      },
      computedListingType() {
        return this.categoryStyle ? 'category' : '';
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
