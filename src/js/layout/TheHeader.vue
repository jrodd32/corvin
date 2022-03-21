<template>
  <landing-page-header
    v-if="showLandingHeader"
  />

  <header
    v-else-if="isMobile"
    class="header header-mobile"
  >
    <div class="header-mobile-wrapper">
      <div class="navbar-logo">
        <router-link
          class="navbar-item"
          to="/home"
        >
          <img
            alt="Corvin's flooring logo"
            src="../../images/logos/corvins-combo-logo-navbar.svg"
          />
        </router-link>
      </div>

      <button
        :class="toggleMobileNavClassNames"
        @click.prevent="toggleNav"
        class="navbar-button"
      >
        <div class="navbar-button-icon">
          <span />
          <span />
          <span />
        </div>
        <span>{{ toggleText }}</span>
      </button>
    </div>

    <div
      :class="mobileNavWrapperClasses"
      class="mobile-nav"
    >
      <nav-links />

      <div class="mobile-utility">
        <div class="is-contained">
          <div class="links">
            <div class="link">
              <router-link
                class="navbar-link"
                to="/contact-us"
              >
                Contact
              </router-link>
            </div>

            <div class="link">
              <router-link
                class="navbar-link"
                to="/maintenance"
              >
                Maintenance Tips
              </router-link>
            </div>

            <div class="link phone">
              <a href="tel:1-502-348-7474">(502) 348-7474</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <header
    v-else
    class="header"
  >
    <div class="utility">
      <div class="is-contained">
        <div class="links">
          <div class="link">
            <router-link
              class="navbar-link"
              to="/contact-us"
            >
              Contact
            </router-link>
          </div>

          <div class="link">
            <router-link
              class="navbar-link"
              to="/maintenance"
            >
              Maintenance Tips
            </router-link>
          </div>

          <div class="link phone">
            <a href="tel:1-502-348-7474">(502) 348-7474</a>
          </div>
        </div>
      </div>
    </div>

    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="dropdown navigation"
    >
      <nav-links />
    </nav>
  </header>
</template>

<script>
  import {
    disableBodyScroll,
    clearAllBodyScrollLocks,
  } from 'body-scroll-lock';
  import { windowProps } from '../core/mixins';
  import NavLinks from '../components/NavLinks.vue';
  import LandingPageHeader from './LandingPageHeader.vue';
  import SocialLinks from '../components/SocialLinks.vue';

  const bodyElement = document.body;

  export default {
    components: {
      LandingPageHeader,
      NavLinks,
      SocialLinks,
    },
    mixins: [
      windowProps,
    ],
    data() {
      return {
        showLandingHeader: false,
        showNav: false,
      };
    },
    computed: {
      mobileNavWrapperClasses() {
        return {
          active: this.showNav,
        };
      },
      toggleMobileNavClassNames() {
        return {
          'has-mobile-nav-active': this.showNav,
          'has-active-nav-item': this.activeNavItem,
        };
      },
      toggleText() {
        return this.showNav ? 'Close' : 'Menu';
      },
    },
    watch: {
      $route() {
        this.showLandingHeader = window.location.pathname === '/';
        this.showNav = false;
      },
      showNav(showNav) {
        if (showNav) {
          disableBodyScroll(bodyElement);
          return;
        }

        clearAllBodyScrollLocks();
      },
    },
    created() {
      this.showLandingHeader = window.location.pathname === '/';
    },
    methods: {
      toggleNav() {
        this.showNav = !this.showNav;
        bodyElement.classList.toggle('disable-scroll');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }

  .navbar-logo img {
    width: 14.4rem;
  }

  .header-mobile {
    background-color: $primaryBlue;
    color: $info;
    padding-bottom: $u4;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: $u4;

    .header-mobile-wrapper {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }

    .mobile-nav {
      background-color: $primaryBlue;
      height: 0;
      opacity: 0;
      overflow: hidden;
      transition: height 0.3s ease-in-out;
      transition: opacity 0.3s ease-in-out;

      &.active {
        position: absolute;
        height: calc(100vh - 10rem);
        left: 0;
        right: 0;
        top: 10rem;
        opacity: 1;

        .navbar-menu {
          display: flex;
          flex-flow: column nowrap;
          height: calc(100vh - 20rem);
          justify-content: space-around;
          text-align: center;
        }
      }

      /deep/ .navbar-logo {
        display: none;
      }
    }

    .mobile-utility {
      .links {
        flex-flow: column nowrap;
      }

      .link {
        margin-bottom: 1rem;
        margin-right: 0;
      }
    }
  }

  .navbar-button {
    align-self: flex-end;
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

  .links {
    display: flex;
    justify-content: flex-end;
    padding: 0 $u4;
    width: 100%;
  }

  .link {
    font-weight: bold;
    margin-right: $u4;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .utility {
    background-color: $utility;
    padding: $u1;

    a {
      color: $primaryBlue;
    }

    .is-contained {
      display: flex;

      & > * {
        margin-bottom: 0;
      }
    }


    .social-links {
      display: none;
    }

    @include tablet() {
      .is-contained {
        flex-flow: row nowrap;
      }
    }

    @include desktop() {
      .social-links {
        display: block;
      }
    }
  }

  .navbar {
    background-color: $primaryBlue;
  }

  .navbar-dropdown {
    display: none;
  }
</style>
