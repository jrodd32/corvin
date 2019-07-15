<template>
  <div class="product">
    <h2
      v-html="product.title"
      class="product-title"
    />

    <img
      :alt="product.image.alt"
      :src="product.image.src"
      class="product-image"
    />

    <div
      v-if="isCategoryStyle"
      class="category-content"
    >
      <p
        v-for="paragraph in product.description"
        v-html="paragraph"
        class="product-description"
      />

      <router-link
        :to="product.slug"
        class="read-more">
        Read More
      </router-link>
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
        <router-link
          :to="`/store/${product.slug}`"
          class="button product-button"
        >
          View details
        </router-link>
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
      margin-bottom: $u6;
    }

    .category-content,
    .product-content {
      border-bottom: 1px solid $tertiaryBlue;
      padding-bottom: $u6;
    }

    .product-title,
    .category-content {
      padding-left: $u6;
      padding-right: $u6;
    }

    .category-content {
      color: $font-color-dark;
    }

    @include tablet() {
      margin-bottom: $u10;

      .product-title {
        padding-left: 0;
      }

      .category-content {
        padding-left: $u6;
        padding-right: $u6;
      }

      .product-content {
        display: flex;
        flex-flow: row wrap;

        .details {
          flex: 1 1 60%;

          p {
            margin-bottom: 0;
            font-weight: bold;

            span {
              color: $font-color-dark;
              font-weight: normal;
            }
          }
        }
      }
    }
  }

  .is-category-listing {
    @include tablet() {
      .read-more {
      }
    }
  }
</style>