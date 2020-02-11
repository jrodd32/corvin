<template>
  <div
    :style="background"
    class="fixed-hero"
  >
    <figure ref="hero">
      <base-picture :picture="hero.featured" />
      <img
        :alt="hero.featuredImage.alt"
        :src="hero.featuredImage.url"
      />

      <figcaption>
        <h1 v-html="hero.headline" />
        <div
          v-html="hero.content"
          class="hero-content"
        />

        <doe-link
          :href="hero.button.href"
          :text="hero.button.text"
          is-orange
        />
      </figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    props: {
      hero: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      hasBackgroundImage() {
        return 'background' in this.hero;
      },
      hasFeaturedImage() {
        return 'featured' in this.hero;
      },
      background() {
        return this.hasBackgroundImage
               ? `background-image: url('${this.hero.background.url}')`
               : '';
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.getHeroHeight);
        this.getHeroHeight();
      });
    },
    destroyed() {
      window.removeEventListener('resize', this.getHeroHeight);
    },
    methods: {
      getHeroHeight() {
        const header = document.getElementsByClassName('header')[0].offsetHeight;
        const heroHeight = window.innerHeight - header;
        // debugger;
        // const heroHeight = this.$el.offsetHeight;
        return this.$emit('set-hero-offset', heroHeight);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .fixed-hero {
    background-size: cover;
    color: $white;
    padding: $u6;
    position: fixed;
    width: 100%;
    top: 10rem;
    left: 0;
    bottom: 0;
    right:0;

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

    @include tablet() {
      top: 13.6rem;
    }

    @include desktop() {
      top: 14.6rem;
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
</style>
