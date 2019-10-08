<template>
  <div class="product">
    <h2
      v-html="product.title"
      class="product-title"
    />

    <figure class="product-image">
      <doe-link
        :href="productLink"
        class="overlay-effect"
      >
        <div></div>
      </doe-link>
      <img
        :alt="productListingAlt"
        :src="productListingUrl"
      />
    </figure>

    <div
      v-if="isStoreOverview"
      class="category-content"
    >
      <p
        v-html="product.shortDescription"
        class="product-description"
      />

      <doe-link
        :href="productLink"
        class="read-more"
        is-anchor
      >
        Read More
      </doe-link>
    </div>

    <div
      v-else
      class="product-content"
    >
      <div class="details">
        <p class="brand">Brand: <span>{{ productBrand }}</span></p>
        <p class="color">Color: <span>{{ product.productColor }}</span></p>
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
      categoryStyle: {
        type: Boolean,
        default() {
          return false
        }
      },
      product: {
        type: Object,
        default() {
          return {};
        }
      },
      productStyle: {
        type: String,
        default() {
          return '';
        }
      }
    },
    computed: {
      productBrand() {
        if ('productBrand' in this.product
          && this.product.productBrand
          && this.product.productBrand.length >= 1) {
            return this.product.productBrand[0].title;
          }

          return 'Need brand';
      },
      productLink() {
        if (this.productStyle === 'category') {
          return `/shop${this.product.uri}`;
        }

        return `/shop/${this.product.slug}`;
      },
      productListingAlt() {
        if ('shopListingImage' in this.product) {
          return this.product.shopListingImage.alt;
        }

        if ('productGallery' in this.product && this.product.productGallery.length > 0) {
          return this.product.productGallery[0].alt;
        }

        return '';
      },
      productListingUrl() {
        if ('shopListingImage' in this.product) {
          return this.product.shopListingImage.url;
        }

        if ('productGallery' in this.product && this.product.productGallery.length > 0) {
          return this.product.productGallery[0].url;
        }

        return '';
      },
      isStoreOverview() {
        return this.productStyle === 'store';
      }
    },
  }
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
    padding-top: $u6;

    h2 {
      font-size: 2.4rem;
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

      img {
        width: 100%;
      }
    }

    .category-content,
    .product-content {
      border-bottom: 1px solid $tertiaryBlue;
      padding-bottom: 3rem;
    }

    .category-content,
    .product-content {
      padding-left: 3rem;
      padding-right: 3rem;
    }

    .category-content {
      color: $font-color-dark;
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