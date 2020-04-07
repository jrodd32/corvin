<template>
  <div class="product">
    <h2 class="product-title">
      <doe-link
        v-html="product.productStyleNumber"
        :href="productLink"
      />
    </h2>

    <div class="product-image">
      <doe-link
        :href="productLink"
        class="overlay-effect"
      >
        <div></div>
      </doe-link>

      <base-picture :picture="picture" />
    </div>

    <div class="product-content">
      <div
        v-if="showProductContent"
        class="details"
      >
        <p class="brand">
          Brand: <span>{{ product.productBrand[0].title }}</span>
        </p>
        <p class="color">
          Color: <span>{{ product.productColor }}</span>
        </p>
        <p>$ <span> {{ computedPrice }}</span></p>
      </div>

      <div class="link">
        <doe-link
          :href="productLink"
          is-blue-alt
        >
          View details
        </doe-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        default() {
          return {};
        },
      },
      productStyle: {
        type: String,
        default() {
          return '';
        },
      },
      showProductContent: {
        type: Boolean,
        default() {
          return true;
        },
      },
    },
    computed: {
      computedPrice() {
        return this.product.productPrice.includes('SF')
               ? this.product.productPrice
               : `${this.product.productPrice} SF`;
      },
      productLink() {
        if (this.showProductContent === false) {
          return `/shop${this.product.uri}`;
        }

        return `${this.$route.path}/${this.product.slug}`;
      },
      picture() {
        if ('square' in this.product) {
          return this.product.square[0];
        }

        if ('background' in this.product) {
          return this.product.background;
        }

        if ('image' in this.product) {
          return this.product.image;
        }

        return {};
      },
    },
  };
</script>

<style lang="scss" scoped>
  .overlay-effect {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(75, 83, 87, 0.85);
    z-index: 1;

    div {
      background-image: url('../../images/shopping-bag-icon.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 4rem;
      height: 100%;
      width: 100%;
    }
  }

  .product {
    padding-left: $u2;
    padding-right: $u2;
    padding-top: $u6;

    .product-title {
      margin-bottom: 0;

      a {
        display: block;
        font-size: 2.4rem;
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
      }
    }

    .product-image {
      position: relative;
      margin-bottom: 3rem;

      .overlay-effect {
        height: 100%;
      }

      &:hover {
        .overlay-effect {
          opacity: 1;
        }
      }
    }

    .product-content {
      border-bottom: 1px solid $tertiaryBlue;
      padding-bottom: 3rem;
      padding-left: 3rem;
      padding-right: 3rem;
    }

    .product-content p {
      font-weight: bold;
      margin-bottom: 0;

      span {
        color: $font-color-dark;
        font-weight: normal;
      }
    }

    .link {
      margin-top: $u6;
    }

    @media screen and (min-width: 414px) {
      .product-content {
        display: flex;
        flex-flow: row wrap;
      }

      .details {
        flex: 1 1 calc(50% - 6rem);
        margin-right: $u4;
      }

      .link {
        margin-top: 0;
      }
    }

    @include tablet() {
      padding-top: $u10;
    }
  }
</style>
