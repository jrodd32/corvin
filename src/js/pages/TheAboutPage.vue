<template>
  <main class="page">
    <div class="container">
      <h1>About Us</h1>

      <div class="internal-navigation">
        <span
          @click="scrollTo('history')"
        >Our History</span>
        <span
          @click="scrollTo('team')"
        >Our Team</span>
        <span
          @click="scrollTo('showroom')"
        >Our Showroom</span>
        <span
          @click="scrollTo('services')"
        >Our Services</span>
      </div>
    </div>

    <div class="container">
      <div class="about-intro">
        <div class="content">
          <p>
            Corvin's Flooring has been a family-owned business in Bardstown, KY since 1987 and is a
            current member of the Chamber of Commerce. Mark started the business in a small 5,000SF
            building selling only furniture and has since grown it to a 100,000SF building selling Furniture,
            Flooring, a Traders Mall and a Moving service.
          </p>
          <p>
            People shop at Corvin's because we have one of the biggest showrooms in the state of Kentucky.
            We will aggressively bid out any job small or big and promise to treat all of our customers
            as if they are family. Our sales staff is very knowledgeable on all aspects of floorings
            and will make sure each job is done correctly.
          </p>
          <p>
            We offer a vast array of different options in Hardwood, Laminate, Tile, Vinyl and Carpet. Our
            Shaw products include: Anso, Caress, Clearly Chic, ClearTouch, EverTouch, R2X Stain Remover,
            LifeHappens, St. Jude Carpet Cushion, Tuftex, and Floorte. We also install all flooring and
            we do custom showers.
          </p>
        </div>
        <aside class="pull-quote">
          <blockquote>
              Our Mission:
              To champion
              every client’s
              flooring
              with passion
              & integrity.
          </blockquote>
        </aside>
      </div>
    </div>

    <div class="section about-history" id="history">
      <h2 class="section-heading">Our History</h2>
      <div class="columns">
        <figure class="image column is-one-quarter">
          <img src="https://placehold.it/400x600" alt="">
        </figure>

        <div class="content column">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, recusandae? Animi quod pariatur, debitis aliquid laborum quasi unde iure corporis?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, recusandae? Animi quod pariatur, debitis aliquid laborum quasi unde iure corporis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae assumenda maiores quos animi consequuntur, repudiandae doloremque sed possimus tempora sit?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>

    <div class="section about-team" id="team">
      <div class="container">
        <h2 class="section-heading">Our Team</h2>
        <corvin-profiles />
      </div>
    </div>

    <div class="section about-showroom" id="showroom">
      <h2 class="section-heading">Our Showroom</h2>

      <div class="gallery">
        <figure class="gallery-image image">
          <img src="https://placehold.it/2400x1200" alt="">
        </figure>
        <div class="gallery-thumbnails">
          <figure class="gallery-thumbnail"><img src="https://placehold.it/400x300" alt=""></figure>
          <figure class="gallery-thumbnail"><img src="https://placehold.it/400x300" alt=""></figure>
          <figure class="gallery-thumbnail"><img src="https://placehold.it/400x300" alt=""></figure>
          <figure class="gallery-thumbnail"><img src="https://placehold.it/400x300" alt=""></figure>
        </div>
      </div>
    </div>

    <div class="section about-services" id="services">
      <div class="container is-fluid">
        <h2 class="section-heading">Our Services</h2>

        <div class="columns is-multiline">
        <!-- Services here -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { smoothScroll } from '../core/mixins';
  import CorvinsHero from '../components/CorvinsHero.vue';
  import CorvinProfiles from '../components/CorvinProfiles.vue';

  const services = [
    {
      'name': 'Service Name',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      'icon': 'https://placehold.it/150x150',
      'class': 'column is-one-quarter'
    },

    {
      'name': 'Service Name',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      'icon': 'https://placehold.it/150x150',
      'class': 'column is-one-quarter'
    },

    {
      'name': 'Service Name',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      'icon': 'https://placehold.it/150x150',
      'class': 'column is-one-quarter'
    },

    {
      'name': 'Service Name',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      'icon': 'https://placehold.it/150x150',
      'class': 'column is-one-quarter'
    },

    {
      'name': 'Service Name',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      'icon': 'https://placehold.it/150x150',
      'class': 'column is-one-quarter'
    },

    {
      'name': 'Service Name',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      'icon': 'https://placehold.it/150x150',
      'class': 'column is-one-quarter'
    },

    {
      'name': 'Service Name',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      'icon': 'https://placehold.it/150x150',
      'class': 'column is-one-quarter'
    },

    {
      'name': 'Service Name',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      'icon': 'https://placehold.it/150x150',
      'class': 'column is-one-quarter'
    }
  ];

  const profiles = [
    {
      'name': 'Mark Corvin',
      'title': 'CO-OWNER, PRESIDENT',
      'email': 'mark.corvin',
      'bio': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dolorum? Voluptatum dicta obcaecati necessitatibus, pariatur ea adipisci eius dolore, omnis facilis autem eaque natus, soluta rem voluptate blanditiis nulla veniam.',
      'image': 'https://placehold.it/300x400',
      'alt': 'Profile image',
    },

    {
      'name': 'David Brown',
      'title': 'FLOORING MANAGER',
      'email': 'david.brown',
      'bio': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dolorum? Voluptatum dicta obcaecati necessitatibus, pariatur ea adipisci eius dolore, omnis facilis autem eaque natus, soluta rem voluptate blanditiis nulla veniam.',
      'image': 'https://placehold.it/300x400',
      'alt': 'Profile image',
    },

    {
      'name': 'Tyler Corvin',
      'title': 'ASSISTANT FLOORING MANAGER',
      'email': 'tyler.corvin',
      'bio': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dolorum? Voluptatum dicta obcaecati necessitatibus, pariatur ea adipisci eius dolore, omnis facilis autem eaque natus, soluta rem voluptate blanditiis nulla veniam.',
      'image': 'https://placehold.it/300x400',
      'alt': 'Profile image',
    },

    {
      'name': 'Paola Ogadzhanova ',
      'title': 'MARKETING MANAGER',
      'email': 'paola',
      'bio': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dolorum? Voluptatum dicta obcaecati necessitatibus, pariatur ea adipisci eius dolore, omnis facilis autem eaque natus, soluta rem voluptate blanditiis nulla veniam.',
      'image': 'https://placehold.it/300x400',
      'alt': 'Profile image',
    }
  ];

  export default {
    data() {
      return {
        profiles,
        services
      };
    },
    mixins: [
      smoothScroll
    ],
    components: {
      CorvinsHero,
      CorvinProfiles
    },
    activated() {
      // /about = 6
      const hasScrollTarget = window.location && window.location.pathname.length > 6;

      let target = hasScrollTarget ? window.location.pathname : false;

      switch (target) {
        case '/about/history':
          target = 'history';
          break;
        case '/about/team':
          target = 'team';
          break;
        case '/about/showroom':
          target = 'showroom';
          break;
        case '/about/services':
          target = 'services';
          break;
        default:
          break;
      }

      if (target) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.smoothScroll(document.getElementById(target));
          }, 400);
        });
      }
    },
    methods: {
      scrollTo(target = null) {
        if (!target) {
          return;
        }

        this.$router.push(`/about/${target}`);
      }
    }
  }
</script>

<style scoped>
  .internal-navigation span {
    cursor: pointer;
    display: inline-block;
  }
</style>