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
      <h2>Contact Us</h2>
      <hr />
      <div class="contact-form-wrapper">
        <contact-form />

        <aside class="contact-sidebar">
          <figure class="media">
            <img
              alt="Image of a map to Corvin furniture"
              src="../../images/corvin-location-map.jpg"
            />
          </figure>

          <div class="content">
            <p>
              <span class="bold-cap is-blue">Corvin’s Flooring &amp; Furniture</span>
              <span>3465 E. John Rowan Blvd.</span>
              <span>Bardstown, KY 40004-2241</span>
            </p>

            <p class="bold-cap is-blue no-margin">
              Phone: (502) 348-7474
            </p>
            <p class="bold-cap is-blue">
              Fax: (502) 337-6003
            </p>

            <p>
              <span class="bold-cap is-blue">Store hours</span>
              <span>Monday thru Friday: 9:00am–6:00pm</span>
              <span>Saturday: 9:00am–3:00pm</span>
              <span>Sunday: Closed</span>
            </p>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
  import CorvinPageHero from '../components/CorvinPageHero.vue';
  import ContactForm from '../components/forms/ContactForm.vue';
  // import { ajaxPageProps } from '../core/page';

  const data = {
    content: {
      hero: {
        content: 'Customer service is a priority of Corvin’s Flooring. Please contact us using the information below and we will respond to your message within 24 hours.',
        headline: 'Contact Us',
        backgroundImage: {
          alt: 'Contact page hero image',
          url: '../../images/contact-us-hero.jpg'
        }
      }
    }
  };

  export default {
    // mixins: [
    //   ajaxPageProps
    // ],
    components: {
      ContactForm,
      CorvinPageHero
    },
    data() {
      return {
        loading: false,
        data,
        jsonUrl: `/${this.$api.pages.contact}`
      };
    },
    computed: {
      hasHeading() {
        return true;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .contact-sidebar {
    margin-top: 5rem;
  }

  .media {
    margin-bottom: 3rem;
  }

  .bold-cap {
    font-weight: 600;
    text-transform: uppercase;
  }

  .no-margin {
    margin-bottom: 0;
  }

  span {
    display: block;

    &:not(is-blue) {
      color: $font-color-dark;
    }
  }

  .is-blue {
    color: $primaryBlue;
  }

  .contact-form-wrapper {
    display: flex;
    flex-flow: column nowrap;

    align-content: flex-start;
    justify-content: center;

    input {
      width: 100%;
    }
  }

  /deep/ .field {
    width: 100%;
  }

  @include tablet() {
    .contact-form-wrapper {
      flex-flow: row nowrap;
      justify-content: space-between;
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