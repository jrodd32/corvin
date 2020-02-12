<template>
  <corvin-loading v-if="loading" />

  <main
    v-else
    class="page flooring-home is-gapless no-bottom-padding is-inset"
  >
    <fixed-hero
      v-if="hasHero"
      :hero="data.content.hero"
      @set-hero-offset="handleSetHeroOffset"
    />

    <div
      :style="heroOffset"
      class="after-hero"
    >
      <div
        v-if="hasCategories"
        class="shop-by-category"
      >
        <h2
          class="section-heading"
          v-html="data.content.categories.headline"
        />

        <div class="category-wrapper">
          <div
            v-for="category in data.content.categories.grid.items"
            class="category"
          >
            <h3>{{ category.title }}</h3>

            <base-picture :picture="category.portrait" />

            <doe-link
              :href="category.uri"
              text="Shop Now"
              is-blue
            />
          </div>
        </div>
      </div>

      <div
        v-if="hasQuote"
        :style="quoteBackground"
        class="customer-quote"
      >
        <blockquote>
          <div v-html="activeQuote.quote" />

          <span class="line" />

          <cite>{{ activeQuote.cite }} <span v-html="activeQuote.location" /></cite>
        </blockquote>
      </div>

      <div
        v-if="hasSocial"
        class="social"
      >
        <div class="content">
          <h4
            class="section-heading"
            v-html="data.content.social.headline"
          />
          <div v-html="data.content.social.description" />
        </div>

        <div
          v-if="hasSocialMedia"
          class="media"
        >
          <base-picture
            v-for="image in data.content.social.square"
            :picture="image"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';
  import CorvinLoading from '../components/CorvinLoading.vue';
  import FixedHero from '../components/FixedHero.vue';

  export default {
    components: {
      CorvinLoading,
      FixedHero,
    },
    mixins: [ajaxPageProps],
    data() {
      return {
        heroHeight: 0,
        jsonUrl: `/${this.$api.pages.home}`,
      };
    },
    computed: {
      activeQuote() {
        return this.hasQuote ? this.data.content.blockquote.testimonial[0] : '';
      },
      hasCategories() {
        return this.hasContent
               && 'categories' in this.data.content;
      },
      hasContent() {
        return 'content' in this.data;
      },
      hasHero() {
        return this.hasContent
               && 'hero' in this.data.content;
      },
      hasQuote() {
        return this.hasContent
               && 'blockquote' in this.data.content;
      },
      hasSocial() {
        return this.hasContent
               && 'social' in this.data.content;
      },
      hasSocialMedia() {
        return this.hasSocial
               && 'square' in this.data.content.social;
      },
      heroOffset() {
        return `margin-top: ${this.heroHeight}px`;
      },
      quoteBackground() {
        return `background-image:url(${this.data.content.blockquote.background.url})`;
      },
    },
    methods: {
      handleSetHeroOffset(height) {
        this.heroHeight = height + 50;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .flooring-home {
    position: relative;
  }

  .after-hero {
    background: $white;
    position: relative;
    z-index: 1;
  }

  .shop-by-category {
    background-color: $secondaryBlue;
    padding-bottom: $u15;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: $u15;

    .category-wrapper {
      max-width: $ultrawide;
      margin: 0 auto;

      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }

    h2 {
      color: $tertiaryBlue;
      font-size: 2.4rem;
      margin-bottom: $u10;
      text-align: center;
      text-transform: uppercase;
    }

    .category {
      flex: 1 0 100%;
      margin-bottom: $u10;
      text-align: center;

      h3 {
        color: $tertiaryBlue;
        font-family: $font-body;
        font-size: 1.4rem;
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      .image {
        margin-bottom: 2rem;
      }

      .image-content {
        height: auto;
        width: 100%;

      }
    }

    .button {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      max-width: 25.6rem;
      text-align: center;
      width: 100%;
    }

    @media screen and (min-width: 550px) and (max-width: $desktop) {
      .category {
        flex: 1 1 calc(50% - 2rem);
        margin-right: 1rem;

        &:nth-child(even) {
          margin-right: 0;
        }
      }
    }

    @include desktop() {
      .category {
        flex: 1 1 calc(33% - 6rem);
        margin-right: 2rem;

        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }

    @include cinema() {
      .category {
        flex: 1 1 16%;
        margin-right: $u2;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .customer-quote {
    background-size: cover;

    padding-bottom: 20rem;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: 20rem;

    text-align: center;

    blockquote {
      color: $primaryBlue;
      font-family: $font-primary;
      margin: 0 auto;
      max-width: $desktop;

      p {
        font-style: normal;
      }
    }


    cite {
      font-family: $font-body;
      font-size: 2.4rem;
      font-weight: bold;

      span {
        display: block;
        font-family: $font-primary;
        font-size: 1.8rem;
        font-style: italic;
        font-weight: normal;
      }
    }

    .line{
      background-color: $orange;
      display: block;
      height: 1px;
      margin: 1em auto;
      width: 106px;
    }

    @include tablet() {
      blockquote {
        width: 80%;
      }
    }

    @include cinema() {
      padding-bottom: 20rem;
      padding-top: 20rem;
      blockquote {
        width: 65%;
      }
    }
  }

  .social {
    padding-bottom: 15rem;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: 15rem;

    h4 {
      @include font-primary;
      font-size: 2.4rem;
      text-transform: uppercase;
    }

    .content {
      margin-bottom: 8rem;
      margin-left: auto;
      margin-right: auto;
      max-width: 80%;
      text-align: center;
    }

    .media {
      div {
        margin-bottom: $u4;
      }

      .image picture {
        height: auto;
        width: 100%
      }
    }

    @include tablet() {
      .media {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding-left: $u6;
        padding-right: $u6;

        div {
          flex: 0 1 49%;
          margin-right: $u3;
        }
      }
    }

    @include tablet-only() {
      .media div:first-child {
        flex: 1 0 100%;
        margin-right: 0;
      }

      .media div:nth-child(odd) {
        margin-right: 0;
      }
    }

    @include desktop() {
      .media div {
        flex: 0 1 calc(33% - #{$u3 * 3});
      }
    }

    @include ultrawide() {
      .content {
        max-width: 35vw;
      }
      .media {
        display: grid;
        grid-template-columns: repeat(12, 114.6666666px);
        grid-template-rows: auto auto;
        grid-row-gap: 2rem;

        div {
            margin: 0;

            &:first-child {
              grid-column: 1 / span 4;
              grid-row: 1 / span 2;
            }

            &:nth-child(2) {
              grid-row: / span 2;
            }

            &:nth-child(2),
            &:nth-child(6) {
              grid-column: 5 / span 2;
            }

            &:nth-child(3),
            &:nth-child(7) {
              grid-column: 7 / span 2;
            }

            &:nth-child(4),
            &:nth-child(8) {
              grid-column: 9 / span 2;
            }

            &:nth-child(5),
            &:nth-child(9) {
              grid-column: 11 / span 2;
            }

            &:nth-child(6),
            &:nth-child(7),
            &:nth-child(8),
            &:nth-child(9) {
              grid-row: 2;
            }
        }
      }
    }
  }
</style>
