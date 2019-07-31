<template>
  <corvin-loading v-if="loading" />

  <main
    v-else
    class="page has-inset is-gapless maintenance"
  >
    <corvin-page-hero :hero="data.content.hero" />

    <corvin-accordion class="is-contained content-wrapper">
      <corvin-accordion-row
        v-for="(faq, index) in data.faqEntries"
        :key="index"
        :heading="faq.faqSectionHeading"
        :intro="faq.faqSectionIntro"
        :content="faq.faqSectionContent"
      />
    </corvin-accordion>

    <div class="maintenance-cta">
      <h3>Still have questions? Contact us and one of our staff will help.</h3>
    </div>
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';

  import CorvinLoading from '../components/CorvinLoading.vue';
  import CorvinPageHero from '../components/CorvinPageHero.vue';
  import CorvinAccordion from '../components/CorvinAccordion.vue';
  import CorvinAccordionRow from '../components/CorvinAccordionRow.vue';

  export default {
    components: {
      CorvinAccordion,
      CorvinAccordionRow,
      CorvinLoading,
      CorvinPageHero
    },
    mixins: [
      ajaxPageProps
    ]
  };
</script>

<style lang="scss" scoped>
  /* TODO: refactor this CTA into a component
           Code below used on About page for sure
           Maybe more
  */
  .maintenance-cta {
    background-image: url('../../images/maintenance-cta.jpg');
    background-size: cover;
    padding: $u6;

    h3 {
      color: $white;
    }

    & > * {
      margin-bottom: 0;
    }

    @include tablet() {
      padding: $u10;
    }

    @include desktop() {
      padding: $u14;

      h3 {
        margin: 0 auto;
        max-width: 50vw;
        text-align: center;
      }
    }
  }
</style>
