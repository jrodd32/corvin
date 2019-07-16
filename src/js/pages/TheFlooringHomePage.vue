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
          <div
            v-html="data.content.hero.content"
            class="hero-content"
          />

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
        <h4 v-html="data.content.social.headline" />
        <div v-html="data.content.social.description" />
      </div>

      <div class="media">
        <figure v-for="image in media">
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

  const media = [
    {
      alt: 'Social media image',
      href: '../../images/social.png'
    },
    {
      alt: 'Social media image',
      href: '../../images/social2.png'
    },
    {
      alt: 'Social media image',
      href: '../../images/social3.png'
    },
    {
      alt: 'Social media image',
      href: '../../images/social4.png'
    },
    {
      alt: 'Social media image',
      href: '../../images/social5.png'
    },
    {
      alt: 'Social media image',
      href: '../../images/social6.png'
    },
    {
      alt: 'Social media image',
      href: '../../images/social7.png'
    },
    {
      alt: 'Social media image',
      href: '../../images/social8.png'
    },
    {
      alt: 'Social media image',
      href: '../../images/social9.png'
    }
  ];

  export default {
    mixins: [ajaxPageProps],
    data() {
      return {
        jsonUrl: `/${this.$api.pages.home}`,
        media
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
    color: $white;
    padding: $u6;

    img {
      display: none;
      width: 100%;
    }

    figcaption {
      background-color: rgba(42, 57, 64, .8);
      padding: 3rem;
    }

    h1,
    .hero-content {
      margin-bottom: 5rem;
    }

    h1 {
      color: $white;
    }

    /deep/ .hero-content > p {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }

    .button {
      @include font-primary;
      height: 5rem;
      font-size: 1.8rem;
    }

    @include cinema() {
      figure {
        display: grid;
        grid-template-columns: minmax($gap, 15%) 1fr minmax($gap, 15%);
        grid-template-rows: minmax(100px, 15%) 1fr minmax(100px, 15%);
      }

      figcaption,
      img {
        grid-row: 2;
      }

      img {
        display: initial;
        grid-column: 2;
      }

      figcaption {
        align-self: center;
        grid-column: 2;
        max-width: 500px;
        position: relative;
        left: -6rem;
      }
    }
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
        margin-bottom: 2rem;
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

    padding-bottom: 20rem;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: 20rem;

    text-align: center;

    blockquote {
      color: $primaryBlue;
      font-family: $font-primary;
      font-weight: bold;
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
      .media figure {
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

        figure {
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
