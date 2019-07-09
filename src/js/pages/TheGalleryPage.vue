<template>
  <main class="page has-inset is-gapless gallery">
    <corvin-page-heading :heading="tempGalleryHeadingData" />

    <div class="image-gallery">
      <transition-group
        class="thumbnails"
        name="thumbnailfade"
        tag="div"
      >
        <figure
          v-for="(thumb, index) in images"
          :key="index"
        >
          <img
            @click="showLightbox(thumb.name)"
            :src="thumb.name|appendDirectory(assetDir)"
            :alt="thumb.alt"
            :title="thumb.alt"
          />
        </figure>
      </transition-group>

      <lightbox
        id="mylightbox"
        ref="lightbox"
        :directory="assetDir"
        :images="images"
        :timeoutDuration="5000"
      />
    </div>
  </main>
</template>

<script>
  import CorvinPageHeading from '../components/CorvinPageHeading.vue';

  const images = [
    {
      alt: '',
      filter: '',
      name: 'bathroom@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'bed@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'brown-flooring@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'carpet@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'couch@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'dark-flooring@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'family-room@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'grey-flooring@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'half-wall@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'kitchen-island@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'light-hardwood@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'stairs@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'stools@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'tile@2x.jpg'
    },
    {
      alt: '',
      filter: '',
      name: 'white-stools@2x.jpg'
    }
  ];

  const tempGalleryHeadingData = {
    title: 'Gallery',
    content: 'Corvin’s wouldn’t exist without the amazing people with creative ideas we’ve had the opportunity to serve over the years. We’d love to show off your rooms with our products. Tag your photos on Instagram with #CorvinsFlooring or email your us to be featured.'
  };

  export default {
    components: {
      CorvinPageHeading
    },
    filters: {
      appendDirectory(imageName, dir) {
        return dir + imageName;
      }
    },
    data() {
      return {
        images,
        tempGalleryHeadingData
      };
    },
    computed: {
      assetDir() {
        if (this.$local || this.$dev) {
          return 'https://corvin.nyc3.digitaloceanspaces.com/dev/gallery/';
        }

        return 'https://corvin.nyc3.digitaloceanspaces.com/prod/gallery/';
      }
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    },
    methods: {
      showLightbox(imageName) {
        this.$refs.lightbox.show(imageName);
      }
    }
  };
</script>

<style lang="scss" scoped>
.thumbnails {
  display: flex;
  flex-direction: column;
  margin: 0 $u4 $u4 $u4;

  figure {
    display: block;
    margin-bottom: $u4;
  }

  img {
    width: 100%;
  }

  // @include tablet() {
  //   flex-flow: row wrap;
  //   justify-content: space-between;

  //   figure {
  //     flex: 0 1 49%;
  //   }
  // }

  // @include desktop() {
  //   justify-content: space-around;

  //   figure {
  //     flex: 0 1 33%;
  //   }
  // }

  // @include ultrawide() {
  //   justify-content: flex-start;

  //   figure {
  //     flex: 0 1 calc(25% - #{$u2});
  //     margin-right: $u4;

  //     &:nth-child(4n) {
  //       margin-right: 0;
  //     }
  //   }
  // }

  @include tablet() {
    flex-flow: row wrap;
    justify-content: flex-start;

    figure {
      flex: 0 1 calc(50% - #{$u2});
      margin-right: $u4;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }

  @include desktop() {
    figure {
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
    figure {
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