<template>
  <main class="page has-inset is-gapless products">
    <corvin-page-heading :heading="computedHeadingContent" />

    <corvin-products
      :has-filters="showFilters"
      :listing-type="computedListingType"
      class="is-contained"
    />
  </main>
</template>

<script>
  import CorvinPageHeading from '../components/CorvinPageHeading.vue';
  import CorvinProducts from '../components/CorvinProducts.vue';

  const tempStoreHomeHeadingData = {
    title: 'What Are You Looking For?',
    content: 'At Corvin’s, we pride ourselves on championing every client’s flooring with passion and integrity. We offer a vast array of different options in hardwood, laminate, tile, vinyl and carpet. We also install flooring and custom showers. View our floor offerings below.',
    media: {
      alt: 'Image of a man cutting tile.',
      src: '../../images/store-landing-hero.jpg.png'
    }
  };

  const tempStoreCategoryHeadingData = {
    title: 'Shop All Floors',
    content: 'Not sure what you’re looking for? No problem. Filter all floors below by style, category (i.e. hardwood vs. tile, etc.), color, price and brand. Let us help you create the room you’re dreaming of.'
  };

  export default {
    components: {
      CorvinPageHeading,
      CorvinProducts
    },
    data() {
      return {
        categoryStyle: true
      };
    },
    computed: {
      computedHeadingContent() {
        return this.categoryStyle
          ? tempStoreCategoryHeadingData
          : tempStoreHomeHeadingData;
      },
      computedListingType() {
        return this.categoryStyle ? 'category' : '';
      },
      showFilters() {
        return !this.categoryStyle;
      }
    }
  };
</script>
