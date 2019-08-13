<template>
  <corvin-loading v-if="loading" />

  <main
    v-else
    class="page is-inset is-gapless about"
  >
    <corvin-page-hero
      v-if="hasHeading"
      :hero="data.content.hero"
    />


    <content-quote
      :item="data.content.contentQuote"
      class="about-intro is-contained content-wrapper"
    />

    <hr class="is-contained" />

    <div class="about-team is-contained content-wrapper">
      <h2 class="section-heading">Our Team</h2>

      <div class="profiles">
        <corvin-profile
          v-for="(profile, index) in data.content.team.team"
          :profile="profile"
          :key="index"
        />
      </div>
    </div>

    <div class="about-cta">
      <div class="is-contained">
        <h3>Contact one of our team members today and we will assist you</h3>
      </div>
    </div>
  </main>
</template>

<script>
  import { ajaxPageProps } from '../core/page';
  import ContentQuote from '../components/ContentQuote.vue';
  import CorvinLoading from '../components/CorvinLoading.vue';
  import CorvinPageHero from '../components/CorvinPageHero.vue';
  import CorvinProfile from '../components/CorvinProfile.vue';

  const profiles = [
    {
      name: 'Mark Corvin',
      title: 'CO-OWNER, PRESIDENT',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'David Brown',
      title: 'FLOORING MANAGER',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'Tyler Corvin',
      title: 'ASSISTANT FLOORING MANAGER',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'Paola Ogadzhanova ',
      title: 'MARKETING MANAGER',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'Mark Corvin',
      title: 'CO-OWNER, PRESIDENT',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'David Brown',
      title: 'FLOORING MANAGER',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'Tyler Corvin',
      title: 'ASSISTANT FLOORING MANAGER',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'Paola Ogadzhanova ',
      title: 'MARKETING MANAGER',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    }
  ];

  export default {
    components: {
      ContentQuote,
      CorvinLoading,
      CorvinPageHero,
      CorvinProfile
    },
    mixins: [ajaxPageProps],
    data() {
      return {
        jsonUrl: `/${this.$api.pages.home}`,
        profiles
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
  .about-team {
    margin-bottom: $u6;
    margin-top: $u10;
    padding-top: $u10;

    h2 {
      font-size: 2.8rem;
      text-transform: uppercase;
      text-align: center;
    }

    .profiles {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }

    @include tablet() {
      margin-bottom: $u10;

      .profiles {
        flex-flow: row wrap;
        justify-content: space-between;
      }
    }

    @include desktop() {
      .profile {
        flex: 0 1 33%;
      }
    }

    @include cinema {
      .profile {
        flex: 0 1 25%;
      }
    }
  }

  .about-cta {
    background-image: url('../../images/pull-quote-bg.jpg.png');
    background-size: cover;
    padding: $u6;

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

<style lang="scss">
  hr {
    border-top: 1px solid #BFD4DE;
    height: 0;
    width: 100%;
  }
</style>
