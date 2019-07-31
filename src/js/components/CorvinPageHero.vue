<template>
  <div class="page-hero">
    <div class="page-hero-wrapper is-contained">
      <h1
        v-if="hasHeadline"
        v-html="hero.headline"
      />

      <div
        v-if="hasContent"
        v-html="hero.content"
        class="intro"
      />
    </div>

    <div
      v-if="hasMedia"
      class="page-hero-media"
    >
      <img
        :alt="hero.backgroundImage.alt"
        :src="hero.backgroundImage.url"
      />
    </div>
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
      hasContent() {
        return this.hero
               && 'content' in this.hero
               && this.hero.content.length > 0;
      },
      hasHeadline() {
        return this.hero
               && 'headline' in this.hero
               && this.hero.headline.length > 0;
      },
      hasMedia() {
        return this.hero
               && 'backgroundImage' in this.hero
               && 'url' in this.hero.backgroundImage
               && this.hero.backgroundImage.url.length > 0;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .page-hero {
    margin-top: 0!important;
    margin-bottom: $u6;

    &-wrapper {
      padding-bottom: $u6;
      padding-left: $u6;
      padding-right: $u6;
      padding-top: $u6;
    }

    &-media {
      img {
        height: auto;
        width: 100%;
      }
    }

    @include tablet() {
      margin-bottom: $u10;

      &-wrapper {
        padding-bottom: 10rem;
        padding-top: 10rem;
      }

      p {
        font-size: 2.4rem;
        line-height: 3.6rem;
      }
    }
  }

  /deep/ .intro {
    p {
      color: #9A9A9A;
      margin-bottom: 0;
      font-size: 1.8rem;
    }

    @include desktop() {
      p {
        max-width: 80vw;
      }
    }

    @include cinema() {
      p {
        max-width: 50vw;
      }
    }
  }
</style>