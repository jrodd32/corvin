<template>
  <main class="page store-item-page">
    <h2>Store</h2>

    <div class="container">
      <div class="product-image">
        <div class="product-category">{{ activeProduct.category }}</div>
        <img
          alt=""
          src="https://placehold.it/1600x900"
        />
        <div class="product-quick-facts">
          <h1>{{ activeProduct.title }}</h1>
          <p>Style No. {{ activeProduct.style }}</p>
          <p>{{ activeProduct.price }}</p>
          <img
            v-for="(pic, index) in activeProduct.gallery"
            :key="index"
            :src="pic"
            alt=""
          />
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
  import CorvinProductListing from '../components/CorvinProductListing.vue';

  export default {
    components: {
      CorvinProductListing
    },
    data() {
      return {
        activeProduct: {},
        products,
        relatedProducts: []
      };
    },
    activated() {
      this.activeProduct = products.find(product => product.slug === window.location.pathname.replace('/store/', ''));

      this.relatedProducts = products.filter(product => this.activeProduct.relatedProducts.includes(product.id));

      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>
