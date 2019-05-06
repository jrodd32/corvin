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
  import CorvinProducts from '../components/CorvinProducts.vue';
  import CorvinStoreFilters from '../components/CorvinStoreFilters.vue';

  export default {
    components: {
      CorvinProducts,
      CorvinStoreFilters
    }
  };
</script>
