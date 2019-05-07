<template>
  <div class="social-links">
    <ul>
      <li>
        <a
          class="social-icon fb"
          href="https://facebook.com/"
          target="_BLANK"
          rel="noopener"
        >
          <span class="hidden-element">Facebook</span>
        </a>
      </li>
      <li>
        <a
          class="social-icon tw"
          href="https://twitter.com/"
          target="_BLANK"
          rel="noopener"
        >
          <span class="hidden-element">Twitter</span>
        </a>
      </li>
      <li>
        <a
          class="social-icon yt"
          href="httsp://youtub.com/"
          target="_BLANK"
          rel="noopener"
        >
          <span class="hidden-element">YouTube</span>
        </a>
      </li>
      <li>
        <a
          class="social-icon ig"
          href="https://instagram.com/"
          target="_BLANK"
          rel="noopener"
        >
          <span class="hidden-element">Instagram</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .social-links {
    ul {
      display: flex;
      margin-bottom: 0;
    }

    @include tablet() {
      ul {
        flex-flow: row nowrap;
      }
    }
  }

  .social-icon {
      background-repeat: no-repeat;
      background-size: cover;
      display: block;
      height: 2.7rem;
      width: 2.7rem;

      &.fb {
        background-image: url('../../images/Facebook.png.png');
      }

      &.tw {
        background-image: url('../../images/Twitter.png.png');
      }

      &.yt {
        background-image: url('../../images/Youtube.png.png');
      }

      &.ig {
        background-image: url('../../images/Instagram.png.png');
      }
  }
</style>