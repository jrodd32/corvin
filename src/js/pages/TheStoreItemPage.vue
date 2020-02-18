<template>
  <corvin-loading v-if="loading" />

  <main
    v-else
    class="page store-item-page no-bottom-padding"
  >
    <div class="is-contained content-wrapper is-no-margin">
      <h2 :class="pageHeadlineClass">
        Shop
      </h2>

      <div class="breadcrumbs">
        <doe-link
          href="/shop"
          text="Shop Home"
          is-anchor
        />

        /

        <doe-link
          v-if="hasCategoryLink"
          :href="`/shop/${data.categorySlug}`"
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
          v-html="data.productName"
          class="product-name"
        />
      </div>
    </div>

    <div class="is-contained content-wrapper is-small-margin">
      <div class="product-item">
        <div
          v-if="hasPicture"
          class="product-image"
        >
          <base-picture :picture="data.square[0]" />
        </div>

        <div class="product-quick-facts">
          <div class="product-overview">
            <div class="product-brand">
              <p v-if="hasBrand">
                {{ data.productBrand[0].title }}
              </p>
            </div>
            <h1
              v-if="hasName"
              v-html="calculatedProductName"
              class="product-name"
            />
            <p
              v-if="data.productColor"
              class="product-color"
            >
              {{ data.productColor }}
            </p>
            <p
              v-if="data.productPrice"
              class="product-price"
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

            <p
              v-if="hasProductSpecs"
            >
              <span class="product-label">Specs:</span>
              {{ data.productSpecs|filterHtml }}
            </p>
          </div>

          <div
            v-if="hasGallery"
            class="product-gallery"
          >
            <base-picture
              v-for="(picture, index) in data.square"
              :picture="picture"
              :key="index"
            />
          </div>

          <doe-link
            @click.native="handleCalculateSqFt"
            class="calculate-sq-ft"
            is-button
            is-blue
            text="Calculate Sq. Footage"
          />
        </div>
      </div>
    </div>'

    <corvin-related-products
      v-if="hasRelatedProducts"
      :products="data.relatedProducts"
    />

    <doe-modal
      v-if="showModal"
      @close="handleModalClose"
      class="calculator-modal"
    >
      <div class="calculator">
        <h3>Cost Estimate</h3>
        <p>Enter the number of square feet needed and we will calculate the price for you.</p>
        <doe-input
          v-model="price"
          field="price"
          disabled
          skip-validation
        />

        <doe-input
          v-model="feet"
          field="feet"
        />

        <p class="total">
          Estimated total: {{ calculatedPrice }}
        </p>
      </div>
    </doe-modal>
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';
  import { windowProps } from '../core/mixins';
  import CorvinLoading from '../components/CorvinLoading.vue';
  import CorvinRelatedProducts from '../components/CorvinRelatedProducts.vue';

  export default {
    filters: {
      filterHtml(data) {
        return data.replace('<p>', '').replace('</p>', '');
      },
    },
    components: {
      CorvinLoading,
      CorvinRelatedProducts,
    },
    mixins: [
      ajaxPageProps,
      windowProps,
    ],
    data() {
      return {
        feet: '',
        showModal: false,
      };
    },
    computed: {
      calculatedPrice() {
        const cost = (parseFloat(this.price) * parseInt(this.feet, 10)).toFixed(2);
        return isNaN(cost)
               ? ''
               : cost;
      },
      calculatedProductName() {
        if (this.hasBrand) {
          return this.data.productName.replace(this.data.productBrand[0].title, '');
        }

        return this.data.productName;
      },
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
        return 'square' in this.data
               && this.data.square !== null
               && this.data.square.length > 1;
      },
      hasName() {
        return 'productName' in this.data
               && this.data.productName !== null
               && this.data.productName.length > 0;
      },
      hasPicture() {
        return 'square' in this.data;
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
      pageHeadlineClass() {
        return this.isMobile
               ? 'is-h3'
               : 'is-h1';
      },
      price() {
        return this.data.productPrice.match(/[+-]?\d+(?:\.\d+)?/g);
      },
    },
    methods: {
      handleCalculateSqFt() {
        this.showModal = true;
      },
      handleModalClose() {
        this.showModal = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  h2 {
    margin-top: $u6;

    @include tablet() {
      margin-top: 6rem;
    }

    @include desktop() {
      margin-top: 10rem;
    }
  }

  .breadcrumbs {
    border-bottom: 1px solid $tertiaryBlue;
    border-top: 1px solid $tertiaryBlue;
    display: none;
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

    .product-name {
      font-weight: 600;
    }

    .product-name,
    a:hover {
      color: $orange;
    }

    p {
      margin: 0;
    }

    @include tablet() {
      display: flex;
    }

    @include desktop() {
      padding-bottom: $u8;
      padding-top: $u8;
    }
  }

  .product-item {
    .product-brand {
      @include font-primary();
      color: $primaryBlue;
      font-size: 3.6rem;
      margin-top: $u6;
    }

    .product-name {
      @include font-primary();
      color: $tertiaryBlue;
      font-size: 2.4rem;
      font-style: italic;
    }

    .product-color {}
    .product-price {}

    @include desktop {
      display: flex;
      flex-direction: row;

      .product-brand {
        margin-top: 0;
      }

      .product-image {
        flex: 1 1 calc(60% - #{$u14});
        margin-right: $u14;
      }

      .product-quick-facts {
        display: block;
        flex: 1 1 40%;
      }
    }
  }

  .product-quick-facts {
    display: flex;
    flex-flow: column nowrap;

    .product-overview {
      order: 1;
    }

    .product-gallery {
      order: 2
    }

    .product-meta {
      order: 3;
    }

    .calculate-sq-ft {
      @include font-secondary;
      justify-content: center;
      order: 4;
    }

    @include tablet() {
      flex-flow: row wrap;
      align-items: center;

      & > * {
        flex: 0 1 calc(50% - #{$u6});
        margin-right: $u6;

        &:nth-child(even) {
          margin-right: 0;
        }
      }

      .product-gallery {
        order: 3;
      }

      .product-meta {
        order: 2;
      }
    }
  }

  .product-gallery {
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: $u6;
    overflow: hidden;

    & > * {
      flex: 0 1 calc(50% - #{$u4});
      margin-right: $u4;

      &:last-of-type {
        margin-right: 0;
      }
    }

    .image {
      max-width: 12rem;
    }
  }

  .product-overview {
    margin-bottom: $u6;

    p {
      margin-bottom: 0;
    }

    & > * {
      margin-bottom: 1rem;
    }

    @include tablet() {
      border-bottom: 1px solid $tertiaryBlue;
      margin-bottom: $u8;
      padding-bottom: $u8;
    }
  }

  .product-meta {
    margin-bottom: $u6;

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
