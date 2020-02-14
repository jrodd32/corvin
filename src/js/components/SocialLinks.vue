<template>
  <div class="social-links">
    <ul>
      <li>
        <doe-link
          class="social-icon fb"
          href="https://www.facebook.com/corvinsflooring/"
          new-window
        >
          <span class="hidden-element">Facebook</span>
        </doe-link>
      </li>
      <li>
        <doe-link
          class="social-icon tw"
          href="https://twitter.com/CorvinsFAF"
          new-window
        >
          <span class="hidden-element">Twitter</span>
        </doe-link>
      </li>
      <li>
        <doe-link
          class="social-icon yt"
          href="https://www.youtube.com/channel/UCDY-gaYV_eT1jfS2Cr521ow?view_as=subscriber"
          new-window
        >
          <span class="hidden-element">YouTube</span>
        </doe-link>
      </li>
      <li>
        <doe-link
          class="social-icon ig"
          href="https://www.instagram.com/corvinsfurnitureandflooring/"
          new-window
        >
          <span class="hidden-element">Instagram</span>
        </doe-link>
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
      background-position: center;
      display: block;
      height: 3.6rem;
      width: 3.6rem;

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