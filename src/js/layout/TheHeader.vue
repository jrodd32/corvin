<template>
  <header
    v-if="isMobile"
    class="header header-mobile"
  >
    <div class="navbar-logo">
      <router-link
        class="navbar-item"
        to="/home"
      >
        <img
          alt="Corvin's flooring logo"
          src="../../images/menu-logo.jpg@2x.png"
        />
      </router-link>
    </div>

    <button
      :class="toggleMobileNavClassNames"
      class="navbar-button"
      @click.prevent="toggleNav"
    >
      <div class="navbar-button-icon">
        <span />
        <span />
        <span />
      </div>
      <span>{{ toggleText }}</span>
    </button>
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
            <hr class="navbar-divider" />
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
            to="/home"
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
  import { windowProps } from '../core/mixins';
  import SocialLinks from '../components/SocialLinks.vue';

  export default {
    components: {
      SocialLinks
    },
    mixins: [
      windowProps
    ],
    data() {
      return {
        showNav: false
      };
    },
    computed: {
      toggleMobileNavClassNames() {
        return {
          'has-mobile-nav-active': this.showNav,
          'has-active-nav-item': this.activeNavItem
        };
      },
      toggleText() {
        return this.showNav ? 'Close' : 'Menu';
      }
    },
    methods: {
      toggleNav() {
        this.showNav = !this.showNav;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .header-mobile {
    align-items: center;
    background-color: $primaryBlue;
    color: $info;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-bottom: $u4;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: $u4;
  }

  .navbar-button {
    background-color: $secondaryBlue;
    color: $info;
    border: 0;
    width: 7rem;
    cursor: pointer;
    font-size: 1.6rem;
    text-align: left;
    padding: 12px 12px 10px;

    &:focus {
      outline: 0;
    }

    > span {
      display: block;
      margin-top: .5rem;
      line-height: normal;
    }

    @include tablet() {
      display: none;
    }
  }

  .navbar-button-icon {
    position: relative;
    width: 32px;
    height: 22px;

    span {
      position: absolute;
      display: block;
      background-color: $info;
      width: 32px;
      height: 2px;
      transition: all .2s ease;

      &:first-child {
        top: 0;
      }

      &:nth-child(2) {
        transition: all .1s ease;
        top: 1rem;
      }

      &:last-child {
        bottom: 0;
      }
    }

    .navbar-button.has-mobile-nav-active & {
      span {
        &:first-child {
          top: 1rem;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
          visibility: hidden;
        }
        &:last-child {
          bottom: 1rem;
          transform: rotate(135deg);
        }
      }
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
