<template>
  <main class="page has-inset products">
    <div class="container">
      <h1>Store</h1>
      <corvin-store-filters />
    </div>
    <div class="no-overflow">
      <corvin-products class="is-contained" />
    </div>
  </main>
</template>

<script>
  import DoeScrollProgress from '../doe/DoeScrollProgress.vue';
  import DoeSection from '../doe/DoeSection.vue';
  import CorvinBlockquote from '../elements/CorvinBlockquote.vue';
  import CorvinProducts from '../components/CorvinProducts.vue';
  import CorvinHeroCarousel from '../components/CorvinHeroCarousel.vue';
  import CorvinStoreFilters from '../components/CorvinStoreFilters.vue';

  export default {
    components: {
      DoeScrollProgress,
      DoeSection,
      CorvinBlockquote,
      CorvinProducts,
      CorvinHeroCarousel,
      CorvinStoreFilters
    }
  };
</script>
