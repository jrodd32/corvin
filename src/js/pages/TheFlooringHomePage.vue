<template>
  <main class="page flooring-home is-gapless is-inset">
    <div class="hero">
      <figure>
        <img
          :alt="data.hero.media.alt"
          :src="data.hero.media.src"
        />

        <figcaption>
          <h1 v-html="data.hero.headline" />
          <p v-html="data.hero.content" />

          <doe-link
            :href="data.hero.button.href"
            :text="data.hero.button.text"
            is-orange
          />
        </figcaption>
      </figure>
    </div>

    <div class="shop-by-category">
      <h2>Shop by category</h2>

      <div
        v-for="category in data.categories"
        class="category"
      >
        <h3>{{ category.title }}</h3>

        <figure>
          <img
            :alt="category.image.alt"
            :src="category.image.src"
          />
        </figure>

        <doe-link
          :href="category.link.href"
          :text="category.link.text"
          is-blue
        />
      </div>
    </div>

    <div class="customer-quote">
      <blockquote>
        {{ data.blockquote.quote }}

        <span class="line" />

        <cite>{{ data.blockquote.cite.person }} <span v-html="data.blockquote.cite.location" /></cite>
      </blockquote>
    </div>

    <div class="social">
      <div class="content">
        <h4 v-html="data.social.headline" />
        <p v-html="data.social.content" />

        <div class="media">
          <figure v-for="image in data.social.media">
            <img
              :alt="image.alt"
              :src="image.src"
            />
          </figure>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  const hero = {
    headline: 'The Benefits of Hardwood',
    content: 'Beautiful and long-lasting, hardwood floors make an elegant choice for nearly any room in your home. When choosing hardwood, the color, character, and construction type are the important factors to consider.',
    button: {
      href: '/flooring-101',
      text: 'Read more'
    },
    media: {
      alt: 'Hardwood flooring planks image',
      src: '../../images/homepage-hero-img.jpg@2x.png'
    }
  };

  const categories = [
    {
      title: 'Carpet',
      image: {
        alt: '',
        src: '../../images/carpet-homepage-img.jpg@2x.png'
      },
      link: {
        href: '/',
        text: 'Shop Now'
      }
    },
    {
      title: 'Hardwood',
      image: {
        alt: '',
        src: '../../images/hardwood-home-img.jpg@2x.png'
      },
      link: {
        href: '/',
        text: 'Shop Now'
      }
    },
    {
      title: 'Engineered Hardwood',
      image: {
        alt: '',
        src: '../../images/engineered-hardwood-home-img.jpg@2x.png'
      },
      link: {
        href: '/',
        text: 'Shop Now'
      }
    },
    {
      title: 'Laminate',
      image: {
        alt: '',
        src: '../../images/laminate-homepage-img.jpg@2x.png'
      },
      link: {
        href: '/',
        text: 'Shop Now'
      }
    },
    {
      title: 'Tile',
      image: {
        alt: '',
        src: '../../images/tile-homepage-img.jpg@2x.png'
      },
      link: {
        href: '/',
        text: 'Shop Now'
      }
    },
    {
      title: 'Vinyl Plank',
      image: {
        alt: '',
        src: '../../images/vinyl-homepage-img.jpg@2x.png'
      },
      link: {
        href: '/',
        text: 'Shop Now'
      }
    }
  ];

  const blockquote = {
    cite: {
      person: 'Alex Nugent',
      location: 'Bardstown, KY'
    },
    quote: 'Awesome family owned business! You can tell immediately that Corvin’s Furniture, Flooring, and In-Town Moving has a strong focus on providing exceptional customer service. The staff is knowledgeable, friendly, and there to help guide you through your entire experience. Product selection is top notch and all quality stuff. Highly recommend using this business!!'
  };

  const social = {
    headline: 'SHOW OFF YOUR ROOM',
    content: 'Follow us on Instagram and hashtag your photos of our products in-use with #CorvinsFlooring to be featured in our customer gallery',
    media: [
      {
        alt: 'Social media image',
        src: '../../images/social.png'
      },
      {
        alt: 'Social media image',
        src: '../../images/social2.png'
      },
      {
        alt: 'Social media image',
        src: '../../images/social3.png'
      },
      {
        alt: 'Social media image',
        src: '../../images/social4.png'
      },
      {
        alt: 'Social media image',
        src: '../../images/social5.png'
      },
      {
        alt: 'Social media image',
        src: '../../images/social6.png'
      },
      {
        alt: 'Social media image',
        src: '../../images/social7.png'
      },
      {
        alt: 'Social media image',
        src: '../../images/social8.png'
      },
      {
        alt: 'Social media image',
        src: '../../images/social9.png'
      }
    ]
  };

  export default {
    data() {
      return {
        data: {
          blockquote,
          categories,
          hero,
          social
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  .hero {
    background-image: url('../../images/homepage-hero-bg.jpg@2x.png');
    background-size: cover;
    padding: $u6;

    img {
      display: none;
    }

    figcaption {
      background-color: rgba(42, 57, 64, .8);
      color: $white;
      padding: $u4;
    }

    h1 {
      color: $white;
      font-size: 2.4rem;
    }
  }

  .shop-by-category {
    background-color: $secondaryBlue;
    padding-bottom: $u10;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: $u10;

    h2 {
      color: $tertiaryBlue;
      font-size: 2.4rem;
      letter-spacing: 5px;
      margin-bottom: $u10;
      text-align: center;
      text-transform: uppercase;
    }

    .category {
      margin-bottom: $u10;
      text-align: center;

      h3 {
        color: $tertiaryBlue;
        font-family: $font-body;
        font-size: 1.4rem;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      figure {
        margin-bottom: $u6;
      }
    }
  }

  .customer-quote {
    background-image: url('../../images/homepage-quote-bg.jpg@2x.png');
    background-size: cover;

    padding-bottom: $u10;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: $u10;

    text-align: center;

    blockquote {
      color: $primaryBlue;
      font-family: $font-primary;
      font-weight: bold;
    }

    cite {
      font-family: $font-body;
      font-size: 2.4rem;
      font-weight: bold;

      span {
        display: block;
        font-family: $font-primary;
        font-size: 1.8rem;
        font-style: italic;
        font-weight: normal;
      }
    }

    .line{
      background-color: $orange;
      display: block;
      height: 1px;
      margin: 1em auto;
      width: 106px;
    }
  }

  .social {
    padding-bottom: $u10;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: $u10;
    h4 {
      @include font-primary;
    }

    .content {
      text-align: center;
    }

    .media {
      figure {
        margin-bottom: $u4;
      }

      img {
        height: auto;
        width: 100%
      }
    }
  }
</style>
