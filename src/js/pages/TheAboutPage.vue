<template>
  <main class="page is-inset is-gapless about">
    <corvin-page-heading :heading="tempAboutHeading" />

    <div class="about-intro is-contained">
      <div class="content">
        <p>
          Mark started the business in a small 5,000SF building selling only furniture and has since grown it to a 100,000SF building selling Furniture, Flooring, a Traders Mall and a Moving service.
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
          <span>Our Mission:</span>
          To champion every client’s flooring with passion &amp; integrity.
        </blockquote>
      </aside>
    </div>

    <div class="about-team is-contained">
      <h2 class="section-heading">Our Team</h2>

      <div class="profiles">
        <corvin-profile
          v-for="(profile, index) in profiles"
          :profile="profile"
          :key="index"
        />
      </div>
    </div>

    <div class="about-cta">
      <h3>Contact one of our team members today and we will assist you</h3>
    </div>
  </main>
</template>

<script>
  import CorvinPageHeading from '../components/CorvinPageHeading.vue';
  import CorvinProfile from '../components/CorvinProfile.vue';

  const services = [
    {
      name: 'Service Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      icon: 'https://placehold.it/150x150',
      class: 'column is-one-quarter'
    },

    {
      name: 'Service Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      icon: 'https://placehold.it/150x150',
      class: 'column is-one-quarter'
    },

    {
      name: 'Service Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      icon: 'https://placehold.it/150x150',
      class: 'column is-one-quarter'
    },

    {
      name: 'Service Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      icon: 'https://placehold.it/150x150',
      class: 'column is-one-quarter'
    },

    {
      name: 'Service Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      icon: 'https://placehold.it/150x150',
      class: 'column is-one-quarter'
    },

    {
      name: 'Service Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      icon: 'https://placehold.it/150x150',
      class: 'column is-one-quarter'
    },

    {
      name: 'Service Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      icon: 'https://placehold.it/150x150',
      class: 'column is-one-quarter'
    },

    {
      name: 'Service Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?',
      icon: 'https://placehold.it/150x150',
      class: 'column is-one-quarter'
    }
  ];

  const profiles = [
    {
      name: 'Mark Corvin',
      title: 'CO-OWNER, PRESIDENT',
      email: 'mark.corvin@corvinsfurniture.com',
      phone: '(270) 555-5555',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'David Brown',
      title: 'FLOORING MANAGER',
      email: 'david.brown@corvinsfurniture.com',
      phone: '(270) 555-5555',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'Tyler Corvin',
      title: 'ASSISTANT FLOORING MANAGER',
      email: 'tyler.corvin@corvinsfurniture.com',
      phone: '(270) 555-5555',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'Paola Ogadzhanova ',
      title: 'MARKETING MANAGER',
     email: 'paola@corvinsfurniture.com',
     phone: '(270) 555-5555',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'Mark Corvin',
      title: 'CO-OWNER, PRESIDENT',
      email: 'mark.corvin@corvinsfurniture.com',
      phone: '(270) 555-5555',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'David Brown',
      title: 'FLOORING MANAGER',
      email: 'david.brown@corvinsfurniture.com',
      phone: '(270) 555-5555',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'Tyler Corvin',
      title: 'ASSISTANT FLOORING MANAGER',
      email: 'tyler.corvin@corvinsfurniture.com',
      phone: '(270) 555-5555',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    },

    {
      name: 'Paola Ogadzhanova ',
      title: 'MARKETING MANAGER',
     email: 'paola@corvinsfurniture.com',
     phone: '(270) 555-5555',
      image: 'https://placehold.it/256x280',
      alt: 'Profile image'
    }
  ];

  const tempAboutHeading = {
    title: "About Corvin's",
    content: 'Corvin’s Flooring & Furniture, LLC has been a family-owned business in Bardstown, Kentucky since its founding in 1987. We are a current member of the Bardstown Chamber of Commerce.',
    media: {
      alt: 'Picture of the Corvin furniture team.',
      src: 'https://satyr.io/1920x700'
    }
  };

  export default {
    components: {
      CorvinPageHeading,
      CorvinProfile
    },
    data() {
      return {
        profiles,
        services,
        tempAboutHeading
      };
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>

<style lang="scss" scoped>
  .about-intro,
  .about-team,
  .about-cta {
    padding-left: $u6;
    padding-right: $u6;

    @include tablet() {
      padding-left: $u10;
      padding-right: $u10;
    }
  }

  .about-intro {
    margin-bottom: $u10;
    padding-bottom: $u10;

    .pull-quote {
      color: $tertiaryBlue;
      font-family: $font-primary;
      font-size: 3rem;
      line-height: 1;

      span {
        color: $primaryBlue;
        display: block;
      }
    }

    @include tablet() {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;

      .content {
        flex: 1 1 60%;
      }

      .pull-quote {
        margin-left: $u6;
        flex: 1 1 35%;

        blockquote {
          margin-top: 0;
        }
      }
    }

    @include desktop() {
      .content {
        flex: 1 1 50%;
      }

      .pull-quote {
        flex: 1 1 40%;
        margin-left: $u12;
        font-size: 4rem;
      }
    }

    // @include widescreen() {
    //   padding-left: $u14;
    //   padding-right: $u14;
    // }
  }

  .about-team {
    margin-bottom: $u6;

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
