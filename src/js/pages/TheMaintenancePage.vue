<template>
  <main class="page has-inset is-gapless maintenance">
    <div class="container">
      <corvin-page-heading :heading="tempMaintenanceHeadingData" />
    </div>
  </main>
</template>

<script>
  import CorvinPageHeading from '../components/CorvinPageHeading.vue';

  const tempMaintenanceHeadingData = {
    title: 'Maintenance',
    content: 'Taking good care of your flooring is the best way to guarantee its long life. We have put together some maintenance strategies below for our various flooring categories.',
    media: {
      alt: 'Maintenance hero image. Wood flooring.',
      src: 'https://corvin.nyc3.digitaloceanspaces.com/dev/hero/maintenance/maintenance-hero-image.jpg'
    }
  };

  const faqs = [
    {
      intro: {
        heading: 'Why choose hardwood?',
        copy: 'Wood flooring is among the best investment you can make in your home. In addition to being beautiful, wood floors are appropriate for all styles – casual, formal, classic, and country.'
      },
      entries: [
        {
          title: 'Best places to install hardwood',
          content: 'Solid hardwood can be installed on or above grade (any portion of the home above ground, i.e. no basements), whereas engineered hardwood can be installed on all grades. However, neither is recommended for bathrooms or rooms with excessive moisture.'
        },
        {
          title: 'Maintenance:',
          content: "<strong>Do’s</strong>Use a soft cloth to blot spills and spots as soon as they happen. Always avoid allowing liquids to stand on your hardwood floor. Sweep, dust, or vacuum your floor regularly. If vacuuming, use a hard floor attachment to avoid scratching or dulling your floor’s finish. <strong>Don’ts</strong>Don’t use oil-based, wax, polish, or strong ammoniated products, which can dull your floor’s finish. Don’t use steel wool, scouring powders or other abrasive cleaners, which can scratch or damage your floor’s finish. Don't wash or wet-mop the floor with soap, water, oil-soap detergent, or any other liquid cleaning material. This could cause swelling, warping, delamination and joint-line separation, and void the warranty. Don't use any type of buffing machine."
        },
        {
          title: 'Specialty Hardwood Cleaning',
          content: 'Remove sticky substances, such as candle wax or chewing gum, by applying ice to harden the substance and then gently scraping with a plastic scraper. (Tip: A credit card makes a good substitute.) Be careful not to scratch the flooring surface. Wipe clean with a damp cloth.'
        },
        {
          title: 'Protective Hardwood Floor Care',
          content: 'Use entry mats, which will help collect the dirt, sand, grit and other substances such as oil, asphalt, or driveway sealer that can be tracked onto your hardwood flooring. To prevent slipping, use an approved vinyl rug underlayment. (Tip: Don’t use rubber- or foam-backed plastic mats, as they may discolor the flooring.) Use floor protectors and wide-load-bearing leg bases or rollers to minimize indentations and scratches from heavy objects. (Tip: As a rule, the heavier the object, the wider the floor protector should be.)'
        },
        {
          title: 'Preventative Hardwood Floor Care',
          content: 'Maintain a normal indoor relative humidity level between 35% and 55% throughout the year to minimize the natural expansion and contraction of wood. Follow these tips for winter (heating) and summer months (non-heating): Heating Season (Dry): A humidifier is recommended to prevent excess shrinkage due to low humidity levels. Wood-stove and electric heat tends to create very dry conditions. Non-Heating Season (Wet): An air conditioner, dehumidifier or periodically turning on your heating system can maintain humidity during the summer months. Avoid excessive exposure to water during periods of inclement weather. <strong>Use care with sharp objects:</strong> Remove shoes with spiked or damaged heels before walking on your hardwood floor; they can leave scratches or indentations in hardwood. Trim pets’ nails regularly. <strong>Rearrange your rugs and furniture periodically to allow the flooring to age evenly.</strong> Avoid prolonged exposure to sunlight, which can soften the tone of different species of hardwood to varying degrees and accelerate the oxidation and aging of wood. Protect the floor when moving by using a dolly for heavy furniture or appliances. Never try to slide or roll heavy objects across your hardwood floor.'
        }
      ]
    }
  ]

  export default {
    components: {
      CorvinPageHeading
    },
    data() {
      return {
        tempMaintenanceHeadingData
      };
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>

<style scoped>

</style>