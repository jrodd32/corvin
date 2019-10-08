<template>
  <corvin-loading v-if="loading" />

  <main
    v-else
    class="page store-item-page"
  >
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
  import { ajaxPageProps } from '../core/page';
  import CorvinLoading from '../components/CorvinLoading.vue';
  import CorvinProductListing from '../components/CorvinProductListing.vue';

  export default {
    components: {
      CorvinLoading,
      CorvinProductListing
    },
    mixins: [ajaxPageProps],
    data() {},
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>
