<template>
  <div class="navbar-menu is-contained">
    <div class="navbar-item home-link">
      <router-link
        to="/home"
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
          src="../../images/logos/corvins-combo-logo-navbar.svg"
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
        to="/maintenance"
      >
        Maintenance
      </router-link>
    </div>

    <div class="navbar-item">
      <router-link
        class="navbar-link"
        to="/contact-us"
      >
        Contact Us
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .navbar-item a {
    color: $white;
    font-weight: bold;
    font-size: 1.8rem;

    &:hover,
    &.router-link-exact-active {
      color: $orange;
    }
  }
  .navbar-logo img {
    width: 14.4rem;
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
</style>