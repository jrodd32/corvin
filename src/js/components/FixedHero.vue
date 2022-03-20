<template>
  <!-- <div
    :style="background"
    class="fixed-hero"
  >
    <div
      ref="hero"
      class="figure"
    >
      <base-picture
        :picture="hero.featured"
        class="featured"
      />

      <article>
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
      </article>
    </div>
  </div> -->
  <div
    :style="background"
    class="fixed-hero figure"
  >
    <base-picture
      :picture="hero.featured"
      class="featured"
    />

    <article>
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
    </article>
  </div>
</template>

<script>
  export default {
    props: {
      hero: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    computed: {
      hasBackgroundImage() {
        return 'background' in this.hero;
      },
      hasfeatured() {
        return 'featured' in this.hero;
      },
      background() {
        return this.hasBackgroundImage
               ? `background-image: url('${this.hero.background.url}')`
               : '';
      },
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
        return this.$emit('set-hero-offset', heroHeight);
      },
    },
  };
</script>

<style lang="scss" scoped>
  // .fixed-hero {
  //   background-size: cover;
  //   color: $white;
  //   padding: $u6;
  //   position: fixed;
  //   width: 100%;
  //   top: 10rem;
  //   left: 0;
  //   bottom: 0;
  //   right:0;

  //   .featured {
  //     display: none;
  //     width: 100%;
  //   }

  //   article {
  //     background-color: rgba(42, 57, 64, .8);
  //     padding: 3rem;
  //   }

  //   h1,
  //   .hero-content {
  //     margin-bottom: 5rem;
  //   }

  //   h1 {
  //     color: $white;
  //   }

  //   /deep/ .hero-content > p {
  //     font-size: 1.8rem;
  //     line-height: 2.6rem;
  //   }

  //   .button {
  //     @include font-primary;
  //     height: 5rem;
  //     font-size: 1.8rem;
  //   }

  //   @include tablet() {
  //     align-items: center;
  //     justify-content: center;
  //     display: flex;
  //     top: 11.3rem;

  //     /deep/ article {
  //       max-width: 50vw;
  //     }
  //   }

  //   @include desktop {
  //     align-items: flex-start;

  //     .figure {
  //       display: grid;
  //       grid-template-columns: minmax($gap, 15%) 1fr 1fr 1fr minmax($gap, 15%);
  //       grid-template-rows: minmax(100px, 15%) 1fr 1fr 1fr minmax(100px, 15%);
  //       width: 100%;
  //     }

  //     .featured {
  //       display: initial;
  //       grid-column: 2 / 5;
  //       grid-row: 2 / 5;
  //     }

  //     article {
  //       grid-row: 2 / 5;
  //       align-self: center;
  //       grid-column: 2 / 5;
  //       max-width: 500px;
  //       position: relative;
  //     }
  //   }

  //   @include cinema() {
  //     article {
  //       align-self: center;
  //       grid-column: 2;
  //       max-width: 500px;
  //       position: relative;
  //       left: -6rem;
  //     }
  //   }
  // }


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

    .featured {
      display: none;
      width: 100%;
    }

    article {
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
      align-items: center;
      justify-content: center;
      display: flex;
      top: 11.3rem;

      /deep/ article {
        max-width: 50vw;
      }
    }

    @include desktop {
      display: grid;
      grid-template-columns: minmax($gap, 15%) 1fr 1fr 1fr minmax($gap, 15%);
      grid-template-rows: minmax(100px, 15%) 1fr 1fr 1fr 1fr 1fr minmax(100px, 15%);
      width: 100%;

      .featured {
        display: initial;
        grid-column: 2 / 6;
        grid-row: 2 / 5;
        max-height: 600px;
      }

      article {
        grid-column: 1 / 4;
        grid-row: 4 / 5;
        max-width: 500px;
        position: relative;
      }
    }
  }
</style>
