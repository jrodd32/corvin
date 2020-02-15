
<template>
  <corvin-loading v-if="loading" />

  <main
    v-else
    class="page is-inset is-gapless contact"
  >
    <corvin-page-hero
      v-if="hasHeading"
      :hero="data.content.hero"
    />

    <div class="is-contained content-wrapper">
      <h2
        v-if="hasSubHeading"
        v-html="data.headline"
      />
      <hr />
      <div class="contact-form-wrapper">
        <contact-form />

        <aside class="contact-sidebar">
          <doe-link
            v-if="hasMedia"
            class="media"
            href="https://www.google.com/maps/place/Corvin's+Furniture+and+Flooring/@37.8051981,-85.4346541,17z/data=!4m5!3m4!1s0x88684e03de6dc2fb:0xc7d862ea25029012!8m2!3d37.8051981!4d-85.4324656"
            is-anchor
            new-window
          >
            <base-picture :picture="data.landscape" />
          </doe-link>

          <div
            v-if="hasSidebar"
            class="content content-sidebar"
            v-html="data.sidebar"
          />
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
  import CorvinPageHero from '../components/CorvinPageHero.vue';
  import ContactForm from '../components/forms/ContactForm.vue';
  import { ajaxPageProps } from '../core/page';

  export default {
    components: {
      ContactForm,
      CorvinPageHero,
    },
    mixins: [
      ajaxPageProps,
    ],
    data() {
      return {
        loading: false,
        jsonUrl: `/${this.$api.pages.contact}`
      };
    },
    computed: {
      hasHeading() {
        return 'content' in this.data
               && 'hero' in this.data.content
               && 'headline' in this.data.content.hero
               && this.data.content.hero.headline.length > 0;
      },
      hasSidebar() {
        return 'sidebar' in this.data
               && this.data.sidebar.length > 0;
      },
      hasSubHeading() {
        return 'headline' in this.data
               && this.data.headline.length > 0;
      },
      hasMedia() {
        return 'landscape'in this.data
               && 'sources' in this.data.landscape
               && this.data.landscape.sources.length > 0;
      },
    },
  };
</script>
<style lang="scss">
  .bold-cap {
    font-weight: 600;
    text-transform: uppercase;
  }

  .no-margin {
    margin-bottom: 0;
  }

  .is-blue,
  .contact-sidebar .is-blue {
    color: $primaryBlue;
  }

  .contact-sidebar span {
    display: block;

    &:not(is-blue) {
      color: $font-color-dark;
    }
  }
</style>

<style lang="scss" scoped>
  .contact-sidebar {
    margin-top: 5rem;

    /deep/ .image-content {
      width: 100%;
    }
  }

  .media {
    display: block;
    margin-bottom: 3rem;
    width: 100%;
  }

  .contact-form-wrapper {
    display: flex;
    flex-flow: column nowrap;

    align-content: flex-start;
    justify-content: center;

    .fields {
      width: 100%;
    }

    .field {
      max-width: 100%;
    }
  }

  @include tablet() {
    .contact-form-wrapper {
      flex-flow: row nowrap;
      justify-content: space-between;
    }

    .form {
      flex: 0 1 60%;
    }

    .contact-sidebar {
      margin-left: $u12;
      flex: 0 1 40%;
    }

    .contact-sidebar {
      margin-top: 1em;
      padding-left: 2rem;
    }
  }

  @include widescreen {
    .contact-sidebar {
      padding-left: 0;
    }

    /deep/ .fields {
      flex-flow: row nowrap;
    }
  }
</style>