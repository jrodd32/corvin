<template>
  <div class="product">
    <h2
      v-html="product.title"
      class="product-title"
    />

    <img
      :alt="product.image.alt"
      :src="product.image.url"
      class="product-image"
    />

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
  .product {
    margin-bottom: $u6;

    h2 {
      font-size: 2.4rem;
    }

    img {
      width: 100%;
    }

    .product-image {
      margin-bottom: 3rem;
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
      margin-bottom: $u10;
    }
  }
</style>