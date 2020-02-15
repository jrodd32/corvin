<template>
  <corvin-loading v-if="loading" />

  <main
    v-else
    class="page has-inset is-gapless gallery"
  >
    <corvin-page-hero :hero="data.content.hero" />

    <div
      v-if="hasImages"
      class="image-gallery is-contained"
    >
      <transition-group
        class="thumbnails"
        name="thumbnailfade"
        tag="div"
      >
        <base-picture
          v-for="thumb in data.content.gallery.square"
          :key="thumb.url"
          :picture="thumb"
          @click.native="showLightbox(thumb.url)"
        />
      </transition-group>

      <lightbox
        id="mylightbox"
        ref="lightbox"
        :directory="assetDir"
        :images="transformedImages"
        :timeoutDuration="5000"
      />
    </div>
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';
  import {
    clearAllBodyScrollLocks,
    disableBodyScroll,
  } from 'body-scroll-lock';

  import CorvinLoading from '../components/CorvinLoading.vue';
  import CorvinPageHero from '../components/CorvinPageHero.vue';

  const bodyElement = document.body;

  export default {
    components: {
      CorvinLoading,
      CorvinPageHero,
    },
    filters: {
      appendDirectory(imageName, dir) {
        return dir + imageName;
      },
    },
    mixins: [ajaxPageProps],
    data() {
      return {
        assetDir: 'https://corvin.nyc3.digitaloceanspaces.com/gallery/',
        jsonUrl: `/${this.$api.pages.gallery}`,
      };
    },
    computed: {
      hasImages() {
        return 'content' in this.data
               && 'gallery' in this.data.content
               && 'square' in this.data.content.gallery
               && this.data.content.gallery.square.length > 0;
      },
      transformedImages() {
        const images = [];

        this.data.content.gallery.square.forEach((image) => {
          images.push({
            name: image.url.split('/').pop(),
          });
        });

        return images;
      },
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    },
    methods: {
      showLightbox(imageName) {
        // TODO: disabled / re-enable body-scoll
        this.$refs.lightbox.show(imageName);
      },
    },
  };
</script>

<style lang="scss" scoped>
.thumbnails {
  display: flex;
  flex-direction: column;

  .image {
    display: block;
    margin-bottom: $u4;
  }

  /deep/ .image-content {
    width: 100%;
  }

  @include tablet() {
    flex-flow: row wrap;
    justify-content: flex-start;

    .image {
      flex: 0 1 calc(50% - #{$u2});
      margin-right: $u4;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }

  @include desktop() {
    .image {
      flex: 0 1 calc(33% - #{$u2});

      &:nth-child(2n) {
        margin-right: $u4;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }

  @include ultrawide() {
    .image {
      flex: 0 1 calc(25% - #{$u3});

      &:nth-child(2n),
      &:nth-child(3n) {
        margin-right: $u4;
      }

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
}
</style>