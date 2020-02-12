<template>
  <div class="related-products container">
    <div class="content-wrapper">
      <h2>
        Still Looking? You Might Also Like These Additional Options  or
        <doe-link
          class="cta-link"
          href="/shop"
          is-anchor
          text="Shop All Floors›"
        />
      </h2>

      <div class="products">
        <corvin-product-listing
          v-if="hasProducts"
          v-for="product in products"
          :key="product.id"
          :product="product"
          :show-product-content.boolean="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import CorvinProductListing from './CorvinProductListing.vue';

  export default {
    components: {
      CorvinProductListing,
    },
    props: {
      products: {
        type: Array,
        default() {
          return [];
        },
      },
      listingStyle: {
        type: String,
        default() {
          return 'product';
        },
      },
    },
    computed: {
      hasProducts() {
        return this.products.length > 0;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .related-products {
    background-color: $cream;
    padding-bottom: $u6;
    padding-top: $u6;
    padding-left: $u6;
    padding-right: $u6;
  }

  /deep/ .product {

    .product-image {
      max-height: 22.9rem;
      overflow: hidden;
      margin-bottom: -3rem;
    }

    .link {
      margin-right: $u6;
      margin-top: 0;
    }

    .product-content {
      display: flex;
      justify-content: flex-end;
      padding-right: 0;
      position: relative;
      z-index: 20;
    }

    @include tablet() {
      padding-top: 0;
    }

    @include desktop() {
      padding-top: 0;
    }
  }

  .cta-link {
    color: $orange;
    text-decoration: underline;

    &:hover {
      color: darken($orange, 10%);
    }
  }

  @include tablet() {
    .related-products {
      padding-bottom: 6rem;
      padding-top: 6rem;
    }

    .products {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      width: 100%;

      .product {
        flex: 0 1 calc(33% - #{$u6});
        margin-right: $u6;

        &:nth-child(3) {
          margin-right: 0;
        }

        /deep/ .product-content {
          border-bottom: 0;
        }
      }
    }
  }

  @include desktop() {
    .related-products {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 10rem;
      padding-top: 10rem;
    }

    .content-wrapper {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;

      h2 {
        flex: 0 1 22vw;
        margin-bottom: 0;
        padding: 0 $u10;
      }
    }
  }
</style>
