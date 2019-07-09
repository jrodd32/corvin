<template>
  <main class="page flooring-home is-gapless is-inset">
    <div
      :style="heroBackground"
      class="hero"
    >
      <figure v-if="hasFeaturedImage">
        <img
          :alt="data.content.hero.featuredImage.alt"
          :src="data.content.hero.featuredImage.url"
        />

        <figcaption>
          <h1 v-html="data.content.hero.headline" />
          <p v-html="data.content.hero.content" />

          <doe-link
            :href="data.content.hero.button.href"
            :text="data.content.hero.button.text"
            is-orange
          />
        </figcaption>
      </figure>
    </div>

    <div
      v-if="hasCategories"
      class="shop-by-category"
    >
      <h2 v-html="data.content.categories.headline" />

      <div class="category-wrapper">
        <div
          v-for="category in data.content.categories.grid.items"
          class="category"
        >
          <h3>{{ category.title }}</h3>

          <figure>
            <img
              :alt="category.image.alt"
              :src="category.image.url"
            />
          </figure>

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
      class="customer-quote"
    >
      <blockquote>
        <p v-html="activeQuote.quote" />

        <span class="line" />

        <cite>{{ activeQuote.cite }} <span v-html="activeQuote.location" /></cite>
      </blockquote>
    </div>

    <div
      v-if="hasSocial"
      class="social"
    >
      <div class="content">
        <h4 v-html="data.content.social.headline" />
        <p v-html="data.content.social.content" />
      </div>

      <div class="media">
        <figure v-for="image in data.content.social.media">
          <img
            :alt="image.alt"
            :src="image.href"
          />
        </figure>
      </div>
    </div>
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';

  export default {
    mixins: [ajaxPageProps],
    data() {
      return {
        jsonUrl: `/${this.$api.pages.home}`
      };
    },
    computed: {
      activeQuote() {
        return this.hasQuote ? this.data.content.blockquote.testimonial[0] : '';
      },
      hasBackgroundImage() {
        return this.hasHero
               && 'backgroundImage' in this.data.content.hero;
      },
      hasCategories() {
        return this.hasContent
               && 'categories' in this.data.content;
      },
      hasContent() {
        return 'content' in this.data;
      },
      hasFeaturedImage() {
        return this.hasHero
               && 'featuredImage' in this.data.content.hero;
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
      heroBackground() {
        return this.hasBackgroundImage ? `background-image: url('${this.data.content.hero.backgroundImage.url}')` : '';
      }
    }
  };
</script>

<style lang="scss" scoped>
  .hero {
    background-size: cover;
    padding: $u6;

    img {
      display: none;
    }

    figcaption {
      background-color: rgba(42, 57, 64, .8);
      color: $white;
      padding: $u4;
    }

    h1 {
      color: $white;
      font-size: 2.4rem;
    }

    @include tablet() {
      figure {
        display: grid;
        grid-template-columns: minmax($gap, 65px) 1fr minmax($gap, 65px);
        grid-template-rows: 1fr;
      }

      img {
        display: initial;
        grid-column: 2;
        grid-row: 1;

      }

      figcaption {
        align-self: center;
        grid-column: 2;
        grid-row: 1;
        margin-left: -65px;
        max-height: 275px;
        max-width: 320px;
      }
    }

    @include desktop() {
      figure {
        grid-template-columns: minmax($gap, 15%) 1fr minmax($gap, 15%);
        grid-template-rows: minmax(100px, 15%) 1fr minmax(100px, 15%);
      }

      figcaption,
      img {
        grid-row: 2;
      }

      figcaption {
        max-height: 288px;
        padding: $u6;
      }
    }

    @include widescreen() {
      h1 {
        font-size: 6.4rem;
      }

      figcaption {
        max-height: 345px;
        max-width: 500px;
      }
    }
  }

  .shop-by-category {
    background-color: $secondaryBlue;
    padding-bottom: $u10;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: $u10;

    .category-wrapper {
      max-width: $ultrawide;
      margin: 0 auto;
    }

    h2 {
      color: $tertiaryBlue;
      font-size: 2.4rem;
      letter-spacing: 5px;
      margin-bottom: $u10;
      text-align: center;
      text-transform: uppercase;
    }

    .category {
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

      figure {
        margin-bottom: $u6;
      }
    }

    @include tablet() {
      .category-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }

      .category {
        flex: 1 1 50%;
      }
    }

    @include desktop() {
      .category {
        flex: 1 1 33%;
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
    background-image: url('../../images/homepage-quote-bg.jpg@2x.png');
    background-size: cover;

    padding-bottom: $u10;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: $u10;

    text-align: center;

    blockquote {
      color: $primaryBlue;
      font-family: $font-primary;
      font-weight: bold;
      margin: 0 auto;
      max-width: $desktop;
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
      padding-bottom: $u14;
      padding-top: $u14;
      blockquote {
        width: 65%;
      }
    }
  }

  .social {
    padding-bottom: $u10;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: $u10;

    h4 {
      @include font-primary;
    }

    .content {
      margin-bottom: $u6;
      margin-left: auto;
      margin-right: auto;
      max-width: 80%;
      text-align: center;
    }

    .media {
      figure {
        margin-bottom: $u4;
      }

      img {
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

        figure {
          flex: 0 1 49%;
          margin-right: $u3;
        }
      }
    }

    @include tablet-only() {
      .media figure:first-child {
        flex: 1 0 100%;
        margin-right: 0;
      }

      .media figure:nth-child(odd) {
        margin-right: 0;
      }
    }

    @include desktop() {
      .media {
        display: grid;
        grid-template-columns: minmax(256px, 532px) repeat(4, minmax(64px, auto));
        grid-template-rows: repeat(2, minmax(64px, auto));
        grid-gap: 20px;
        max-width: 1168px;
        margin: 0 auto;

        figure {
          margin: 0;

          &:first-child {
            grid-column: 1;
            grid-row: 1 / span 2;
          }

          &:nth-child(6),
          &:nth-child(7),
          &:nth-child(8),
          &:nth-child(9) {
            align-self: end;
          }
        }
      }
    }
  }
</style>
