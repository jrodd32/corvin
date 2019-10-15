<template>
  <corvin-loading v-if="loading" />

  <main
    v-else
    class="page store-item-page"
  >
    <h2 class="is-contained content-wrapper is-h1 is-small-margin">
      Shop
    </h2>

    <div class="is-contained content-wrapper is-no-margin">
      <div class="breadcrumbs">
        <doe-link
          href="/shop"
          text="Shop Home"
          is-anchor
        />

        /

        <doe-link
          v-if="hasCategoryLink"
          :href="`shop/${data.categorySlug}`"
          :text="data.category"
          is-anchor
        />

        /

        <p
          v-if="hasBrand"
          v-html="data.productBrand[0].title"
        />

        /

        <p
          class="product-name"
          v-html="data.productName"
        />
      </div>
    </div>

    <div class="is-contained content-wrapper">
      <div class="product-item">
        <div class="product-image">
          <img
            alt=""
            src="https://placehold.it/946x686"
          />
        </div>

        <div class="product-quick-facts">
          <div class="product-overview">
            <div class="product-brand">
              <p v-if="hasBrand">
                {{ data.productBrand[0].title }}
              </p>
            </div>
            <h1
              v-if="hasStyleNumber"
              class="product-name"
              v-html="data.productStyle"
            />
            <p
              class="product-color"
              v-if="data.productColor"
            >
              {{ data.productColor }}
            </p>
            <p
              class="product-price"
              v-if="data.productPrice"
            >
              {{ data.productPrice }}
            </p>
          </div>

          <div class="product-meta">
            <p v-if="hasProductSqFtBox">
              <span class="product-label">SQ. FT. / BOX:</span>
              <!-- {{ data.productSqFtBox }} -->
              36.30
            </p>

            <p v-if="hasProductSize">
              <span class="product-label">Size:</span>
              {{ data.productSize }}
            </p>

            <p v-if="hasProductThickness">
              <span class="product-label">Thickness:</span>
              {{ data.productThickness }}
            </p>

            <p
              v-if="hasProductWarranty"
            >
              <span class="product-label">Warranty:</span>
              {{ data.productWarranty|filterHtml }}
            </p>

            <p v-if="hasProductSpecies">
              <span class="product-label">Species:</span>
              {{ data.productSpecies }}
            </p>

            <p v-if="hasProductJankaRating">
              <span class="product-label">Janka Rating (Hardiness):</span>
              {{ data.productJankaRating }}
            </p>

            <p v-if="hasProductSpecs">
              <span class="product-label">Specs:</span>
              {{ data.productSpecs }}
            </p>

            <div
              v-if="hasGallery"
              class="gallery"
            >
              <img
                v-for="(pic, index) in data.productGallery"
                :key="index"
                :alt="pic.alt"
                :src="pic.url"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h2>You might also like</h2>
      <corvin-product-listing
        v-if="hasRelatedProducts"
        v-for="product in data.relatedProducts"
        :product="product"
        :key="product.id"
      />
    </div>
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';
  import CorvinLoading from '../components/CorvinLoading.vue';

  export default {
    filters: {
      filterHtml(data) {
        return data.replace('<p>', '').replace('</p>', '');
      }
    },
    components: {
      CorvinLoading
    },
    mixins: [ajaxPageProps],
    computed: {
      hasBrand() {
        return 'productBrand' in this.data
               && this.data.productBrand
               && this.data.productBrand.length > 0;
      },
      hasCategory() {
        return 'category' in this.data
               && this.data.category !== null
               && this.data.category.length > 0;
      },
      hasCategorySlug() {
        return 'categorySlug' in this.data
               && this.data.categorySlug !== null
               && this.data.categorySlug.length > 0;
      },
      hasCategoryLink() {
        return this.hasCategory && this.hasCategorySlug;
      },
      hasGallery() {
        return 'productGallery' in this.data
               && this.data.productGallery !== null
               && this.data.productGallery.length > 0;
      },
      hasProductColor() {
        return 'productColor' in this.data
               && this.data.productColor !== null
               && this.data.productColor.length > 0;
      },
      hasProductJankaRating() {
        return 'productJankaRating' in this.data
               && this.data.productJankaRating !== null
               && this.data.productJankaRating.length > 0;
      },
      hasProductPrice() {
        return 'productPrice' in this.data
               && this.data.productPrice !== null
               && this.data.productPrice.length > 0;
      },
      hasProductSize() {
        return 'productSize' in this.data
               && this.data.productSize !== null
               && this.data.productSize.length > 0;
      },
      hasProductSpecies() {
        return 'productSpecies' in this.data
               && this.data.productSpecies !== null
               && this.data.productSpecies.length > 0;
      },
      hasProductSpecs() {
        return 'productSpecs' in this.data
               && this.data.productSpecs !== null
               && this.data.productSpecs.length > 0;
      },
      hasProductSqFtBox() {
        return false;
      },
      hasProductThickness() {
        return 'productThickness' in this.data
               && this.data.productThickness !== null
               && this.data.productThickness.length > 0;
      },
      hasProductWarranty() {
        return 'productWarranty' in this.data
               && this.data.productWarranty !== null
               && this.data.productWarranty.length > 0;
      },
      hasStyleNumber() {
        return 'productStyleNumber' in this.data
               && this.data.productStyleNumber !== null
               && this.data.productStyleNumber.length > 0;
      },
      hasRelatedProducts() {
        return 'relatedProducts' in this.data
               && this.data.relatedProducts
               && this.data.relatedProducts.length > 0;
      },
      labelAndWarranty() {
        return `<span class="product-label">Warranty: </span> ${this.data.productWarranty}`;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    border-bottom: 1px solid $tertiaryBlue;
    border-top: 1px solid $tertiaryBlue;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 10rem;
    overflow: hidden;
    padding-bottom: $u6;
    padding-top: $u6;

    & > * {
      color: $primaryBlue;
      font-size: 1.4rem;
      letter-spacing: 4px;
      padding-left: $u2;
      padding-right: $u2;
      text-transform: uppercase;
    }

    .product-name
    a:hover {
      color: $orange;
    }

    p {
      margin: 0;
    }

    @include desktop() {
      padding-bottom: $u8;
      padding-top: $u8;
    }
  }

  .gallery {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;

    & > * {
      flex: 0 1 calc(50% - #{$u4});
      margin-right: $u4;
    }

    img {
      max-width: 12rem;
    }
  }

  .product-overview {
    border-bottom: 1px solid $tertiaryBlue;
    margin-bottom: $u8;
    padding-bottom: $u8;

    p {
      margin-bottom: 0;
    }

    & > * {
      margin-bottom: 1rem;
    }
  }

  .product-item {
    display: flex;
    flex-flow: column nowrap;

    .product-image {
      flex: 1 1 calc(60% - $u14);
      margin-right: $u14;
    }

    .product-quick-facts {
      flex: 1 1 40%;
    }

    .product-brand {
      @include font-primary();
      color: $primaryBlue;
      font-size: 3.6rem;
    }

    .product-name {
      @include font-primary();
      color: $tertiaryBlue;
      font-size: 2.4rem;
      font-style: italic;
    }
    .product-color {}
    .product-price {}

    @include tablet() {
      flex-direction: row;
    }
  }

  .product-name {
    color: $orange;
    font-weight: 600;
  }

  .product-meta {
    p {
      color: $font-color-dark;
      margin-bottom: 0.5rem;

      span > p {
        display: inline;
      }
    }
    .product-label {
      color: $primaryBlue;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
</style>
