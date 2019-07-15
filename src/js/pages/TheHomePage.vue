<template>
  <main class="page is-gapless home">
    <div class="departments">
      <div class="furniture">
        <figure>
          <a
            href="https://www.corvinsofbardstown.com/"
            target="_BLANK"
            rel="noopener"
            class="overlay-link"><span class="hidden-text">Corvin's of Bardstown</span></a>
          <img
            alt="Furniture landing page background image"
            src="../../images/furniture-landing-img.jpg@2x.png"
          />

          <figcaption>
            <h2>Furniture</h2>
          </figcaption>
        </figure>
      </div>
      <div class="flooring">
        <router-link to="/home">
          <figure>
            <img
              alt="Flooring landing page background image"
              src="../../images/flooring-landing-img.jpg@2x.png"
            />

            <figcaption>
              <h2>Flooring</h2>
            </figcaption>
          </figure>
        </router-link>
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

    figcaption {
      align-items: center;
      background-color: rgba(0,0,0,.6);
      bottom: 0;
      display: flex;
      justify-content: center;
      left: 0;
      margin: 0;
      padding: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: background-color 0.5s ease;

      &:hover {
        background-color: rgba(0,0,0,.001);;
      }
    }

    h2 {
      background-color: rgba(0,0,0,.5);
      color: $white;
      font-size: 2.4rem;
      letter-spacing: 18px;
      margin: 0;
      padding-bottom: 0.5em;
      padding-top: 0.5em;
      text-align: center;
      text-transform: uppercase;
      width: 100%;
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

