<template>
  <div class="page-heading is-contained">
    <div class="page-heading-content">
      <h1
        v-if="hasHeadingTitle"
        v-html="heading.title"
      />

      <p
        v-if="hasHeadingContent"
        v-html="heading.content"
      />
    </div>

    <div
      v-if="hasHeadingMedia"
      class="page-heading-media"
    >
      <img
        :alt="heading.media.alt"
        :src="heading.media.src"
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      heading: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      hasHeadingContent() {
        return this.heading
               && 'content' in this.heading;
      },
      hasHeadingTitle() {
        return this.heading
               && 'title' in this.heading;
      },
      hasHeadingMedia() {
        return this.heading
               && 'media' in this.heading;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .page-heading {
    margin-top: 0!important;
    margin-bottom: $u6;

    p {
      margin-bottom: 0;
    }

    &-content {
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

      &-content {
        padding-bottom: $u10;
        padding-left: $u10;
        padding-right: $u10;
        padding-top: $u10;
      }
    }

    @include desktop() {
      &-content {
        p {
          max-width: 80vw;
        }
      }
    }

    @include cinema() {
      &-content {
        p {
          max-width: 60vw;
        }
      }
    }
  }
</style>