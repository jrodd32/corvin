<template>
  <main class="page is-gapless no-bottom-padding home">
    <div class="departments">
      <div class="furniture">
        <figure>
          <a
            class="overlay-link"
            href="https://www.corvinsofbardstown.com/"
            rel="noopener"
            target="_BLANK"
          >
            <span class="hidden-text">Corvin's of Bardstown</span>
          </a>

          <img
            alt="Furniture landing page background image"
            src="../../images/furniture-landing-img.jpg"
          />

          <figcaption>
            <h2>Furniture</h2>
          </figcaption>
        </figure>
      </div>
      <div class="flooring">
        <figure>
          <router-link
            class="overlay-link"
            to="/home"
          >
            <span class="hidden-text">Flooring</span>
          </router-link>

          <img
            alt="Flooring landing page background image"
            src="../../images/flooring-landing-img.jpg"
          />

          <figcaption>
            <h2>Flooring</h2>
          </figcaption>
        </figure>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>

<style lang="scss" scoped>
  figure {
    position: relative;

    img {
      height: auto;
      width: 100%;
    }

    .overlay-link {
      background-color: rgba(0,0,0,.8);
      transition: background-color 0.5s ease;

      &:hover {
        background-color: rgba(0,0,0,.001);;
      }
    }

    figcaption {
      align-items: center;
      bottom: 0;
      display: flex;
      justify-content: center;
      left: 0;
      margin: 0;
      padding: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    h2 {
      background-color: rgba(0,0,0,.8);
      color: $white;
      font-size: 2.4rem;
      letter-spacing: 18px;
      margin: 0;
      padding-bottom: 0.5em;
      padding-top: 0.5em;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      width: 100%;
      z-index: 2;
    }
  }

  @include cinema() {
    .departments {
      display: flex;
      flex-flow: row nowrap;

      .furniture,
      .flooring {
        flex: 0 1 50%;
      }
    }
  }
</style>

