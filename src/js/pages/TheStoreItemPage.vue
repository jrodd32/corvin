<template>
  <main class="page store-item-page">
    <h2>Store</h2>

    <div class="container">
      <div class="product-image">
        <div class="product-category">{{ activeProduct.category }}</div>
        <img src="https://placehold.it/1600x900" alt="">
        <div class="product-quick-facts">
          <h1>{{ activeProduct.title }}</h1>
          <p>Style No. {{ activeProduct.style }}</p>
          <p>{{ activeProduct.price }}</p>
          <img
            v-for="pic in activeProduct.gallery"
            alt=""
            :src="pic"
          >
          <p>{{ activeProduct.color }}</p>
          <p>{{ activeProduct.brand }}</p>
          <p>{{ activeProduct.width }}</p>
        </div>
      </div>
      <div class="product-detail">
        <div class="description">
          <h3>Description</h3>
          <p>{{ activeProduct.description }}</p>
        </div>

        <div class="good-for">
          <h4>Good for</h4>
          <corvin-list
            :items="activeProduct.goodFor"
          />
        </div>

        <div class="care-items">
          <h4>Product care</h4>
          <corvin-list
            :items="activeProduct.productCareItems"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <h2>You might also like</h2>
      <corvin-product-listing
        v-for="product in relatedProducts"
        :product="product"
        :key="product.id"
      />
    </div>
  </main>
</template>

<script>
  import { products } from '../core/data';
  import CorvinStoreFilters from '../components/CorvinStoreFilters.vue';
  import CorvinProductListing from '../components/CorvinProductListing.vue';

  export default {
    components: {
      CorvinProductListing,
      CorvinStoreFilters
    },
    data() {
      return {
        activeProduct: {},
        products,
        relatedProducts: []
      };
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
      this.activeProduct = products.filter((product) => {
        return product.slug === window.location.pathname.replace('/store/', '');
      })[0];

      this.relatedProducts = products.filter((product) => {
        return this.activeProduct.relatedProducts.includes(product.id);
      });
    }
  };
</script>
