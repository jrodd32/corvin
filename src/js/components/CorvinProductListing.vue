<template>
  <div class="product">
    <h2
      v-html="product.title"
      class="product-title"
    />

    <figure class="product-image">
      <div class="overlay-effect"><div></div></div>
      <img
        :alt="product.shopListingImage.alt"
        :src="product.shopListingImage.url"
      />
    </figure>

    <div
      v-if="isCategoryStyle"
      class="category-content"
    >
      <p
        v-html="product.shortDescription"
        class="product-description"
      />

      <doe-link
        :href="'/shop/' + product.slug"
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
        <p class="brand">Brand: <span>{{ product.brand }}</span></p>
        <p class="color">Color: <span>{{ product.color }}</span></p>
      </div>

      <div class="link">
        <doe-link
          :to="`/store/${product.slug}`"
          is-button
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
      isCategoryStyle() {
        return this.productStyle === 'category';
      }
    }
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