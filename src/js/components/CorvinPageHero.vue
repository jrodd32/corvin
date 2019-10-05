<template>
  <div
    :class="modifiers"
    class="page-hero"
  >
    <div class="page-hero-content is-contained content-wrapper">
      <h1
        v-if="hasHeadline"
        v-html="hero.headline"
      />

      <div
        v-if="hasContent"
        class="page-hero-intro"
      >
        <div v-html="hero.content" />
      </div>
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
      modifiers() {
        return {
          'has-content': this.hasContent,
          'has-media': this.hasMedia
        };
      },
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

    &.has-media {
      margin-bottom: $u10;
    }

    &-content {
      padding-bottom: $u6;
      // padding-left: $u6;
      // padding-right: $u6;
      padding-top: $u6;
    }

    &.has-content:not(.has-media) {
      .page-hero-content {
        padding-bottom: $u10;
      }

      p:last-of-type {
        margin-bottom: 0;
      }
    }

    &-media {
      img {
        height: auto;
        width: 100%;
      }
    }

    @include tablet() {
      &.has-media {
        margin-bottom: 14rem;
      }

      &.has-content:not(.has-media) {
        .page-hero-content {
          padding-bottom: 14rem;
        }
      }

      &-content {
        padding-bottom: 9.6rem;
        padding-top: 9.6rem;
      }

      div {
        font-size: 2.4rem;
        line-height: 3.6rem;
      }
    }
  }

  .page-hero-intro {
    color: #9A9A9A;
    margin-bottom: 0;
    font-size: 1.8rem;

    @include desktop() {
      max-width: 80vw;
    }

    @include cinema() {
      max-width: 55vw;
    }
  }
</style>