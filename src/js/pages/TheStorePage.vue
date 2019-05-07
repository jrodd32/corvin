<template>
  <main class="page has-inset is-gapless products">
    <corvin-page-heading :heading="heading" />

    <corvin-products
      :listing-type="computedListingType"
      class="is-contained"
      has-filters="true"
    />
  </main>
</template>

<script>
  import CorvinPageHeading from '../components/CorvinPageHeading.vue';
  import CorvinProducts from '../components/CorvinProducts.vue';

  const tempStoreHeadingData = {
    title: 'What Are You Looking For?',
    content: 'At Corvin’s, we pride ourselves on championing every client’s flooring with passion and integrity. We offer a vast array of different options in hardwood, laminate, tile, vinyl and carpet. We also install flooring and custom showers. View our floor offerings below.',
    media: {
      alt: 'Image of a man cutting tile.',
      src: '../../images/store-landing-hero.jpg.png'
    }
  }

  export default {
    components: {
      CorvinPageHeading,
      CorvinProducts
    },
    data() {
      return {
        categoryStyle: true,
        heading: tempStoreHeadingData
      };
    },
    computed: {
      computedListingType() {
        return this.categoryStyle ? 'category' : '';
      },
      styleModifiers() {
        const classes = [];

        if (this.categoryStyle) {
          classes.push('is-category-listing');
        }

        return this.classes;
      }
    }
  };
</script>
