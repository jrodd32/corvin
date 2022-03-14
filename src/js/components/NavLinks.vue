<template>
  <div class="navbar-menu is-contained">
    <div class="navbar-logo home-link">
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

    <div class="navbar-links">
      <div class="navbar-item has-dropdown">
        <a
          class="navbar-link"
          href="https://visualizer.corvinsflooring.com"
          rel="nofollow"
          target="_blank"
        >
          Flooring visualizer
        </a>
      </div>

      <div class="navbar-item has-dropdown">
        <router-link
          class="navbar-link"
          to="/shop"
        >
          Shop
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

      <div class="navbar-item">
        <router-link
          class="navbar-link"
          to="/gallery"
        >
          Gallery
        </router-link>
      </div>
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

    @include desktop() {
      font-size: 2rem;
    }

    @include widescreen() {
      font-size: 2.2rem;
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

    .navbar-links {
      display: flex;
      flex-flow: row wrap;
    }

    .navbar-item {
      margin-right: $u4;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  @include desktop() {
    .navbar-item {
      margin-right: $u8;
    }
  }

  @include widescreen() {
    .navbar-item {
      margin-right: $u12;
    }
  }
</style>
