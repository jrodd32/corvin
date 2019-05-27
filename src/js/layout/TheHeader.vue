<template>
  <header
    v-if="showHome"
    class="header header-home"
  >
    <figure>
      <img
        alt="Corvin's furiture and flooring logo"
        src="../../images/corvins-combo-logo.png@2x.png"
        class="logo"
      />
    </figure>

    <h1>Welcome to Corvin’s in Bardstown, please choose a department.</h1>
  </header>

  <header
    v-else
    class="header"
  >
    <div class="utility">
      <social-links />

      <div class="tagline">
        <p>Corvin's: A trusted name in Kentucky since 1987</p>
      </div>

      <div class="phone">
        <a href="tel:1-502-348-7474">Call Us (502) 348-7474</a>
      </div>
    </div>

    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="dropdown navigation"
    >
      <div class="navbar-menu">
        <div class="navbar-item home-link">
          <router-link
            to="/"
            class="navbar-link"
          >
            Home
          </router-link>
        </div>

        <div class="navbar-item has-dropdown">
          <router-link
            class="navbar-link"
            to="/shop"
          >
            Shop Now
          </router-link>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Sub 1
            </a>
            <a class="navbar-item">
              Sub 2
            </a>
            <a class="navbar-item">
              Sub 3
            </a>
            <hr class="navbar-divider">
            <div class="navbar-item">
              Sub under divider
            </div>
          </div>
        </div>

        <div class="navbar-item">
          <router-link
            class="navbar-link"
            to="/about"
          >
            About
          </router-link>
        </div>

        <div class="navbar-logo">
          <router-link
            class="navbar-item"
            to="/"
          >
            <img
              alt="Corvin's flooring logo"
              src="../../images/menu-logo.jpg@2x.png"
            />
          </router-link>
        </div>

        <div class="navbar-item">
          <router-link
            class="navbar-link"
            to="/gallery"
          >
            Gallery
          </router-link>
        </div>

        <div class="navbar-item">
          <router-link
            class="navbar-link"
            to="/flooring-101"
          >
            Flooring 101
          </router-link>
        </div>

        <div class="navbar-item">
          <router-link
            class="navbar-link"
            to="/contact"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import { headerFooterProps } from '../core/mixins';
  import SocialLinks from '../components/SocialLinks.vue';

  export default {
    components: {
      SocialLinks
    },
    mixins: [
      headerFooterProps
    ]
  };
</script>

<style lang="scss" scoped>
  .header-home {
    background-color: $primaryBlue;
    padding-bottom: 2em;
    padding-top: 2em;

    figure {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;
    }

    h1 {
      color: $tertiaryBlue;
      font-size: 3.6rem;
      margin-bottom: 0;
      margin-top: 1em;
      text-align: center;
    }
  }

  .phone a,
  .tagline p {
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .tagline p {
    font-family: $font-primary;
  }

  .phone a {
    font-weight: bold;
  }

  .utility {
    background-color: $utility;
    display: flex;
    padding: $u4;

    & > * {
      margin-bottom: 0;
    }

    .social-links {
      display: none;
    }

    @include tablet() {
      flex-flow: row nowrap;
      justify-content: space-between;
    }

    @include desktop() {
      .social-links {
        display: block;
      }
    }
  }

  .navbar {
    background-color: $primaryBlue;

    a {
      color: $white;
      font-weight: bold;
    }

    @include tablet() {
      .navbar-menu {
        align-items: center;
        display: flex;
        flex-flow: row wrap;
        height: 8rem;
        justify-content: space-between;
        padding-left: $u4;
        padding-right: $u4;
      }

      .home-link {
        display: none;
      }

      .navbar-logo {
        order: 1;
      }

      .navbar-item {
        order: 2;
      }
    }

    @include desktop() {
      .home-link {
        display: block;
      }

      .navbar-logo,
      .navbar-item {
        order: initial;
      }
    }
  }

  .navbar-dropdown {
    display: none;
  }
</style>
