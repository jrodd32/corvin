<template>
  <footer class="footer landing-page-footer">
    <div class="wrapper">
      <div class="location-listing">
        <h4 class="location-heading">Our Showroom</h4>
        <p>3465 E John Rowan Blvd</p>
        <p>Bardstown, KY 40004-2241</p>
      </div>

      <div class="location-phone">
        <a
          v-if="isMobile"
          class="phone"
          href="tel:1-502-348-7474"
        >
          Call Us @ (502) 348-7474
        </a>

        <p v-else>Call Us @ (502) 348-7474</p>
      </div>

      <div class="location-hours">
        <h5 class="location-heading">Our hours</h5>
        <p>Monday thru Friday: 9:00am–6:00pm</p>
        <p>Saturdays: 9:00am–6:00pm</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import { windowProps } from '../core/mixins';

  export default {
    mixins: [
      windowProps
    ]
  };
</script>

<style lang="scss" scoped>
.footer {
    background-color: $secondaryBlue;
    color: $white;
    width: 100%;

    & > * {
      padding-bottom: $u6;
      padding-left: $u4;
      padding-right: $u4;
      padding-top: $u6;
    }

    p {
      margin-bottom: 0;
    }

    @include tablet() {
      & > * {
        padding-left: $u6;
        padding-right: $u6;
      }
    }

    @include ultrawide() {
      & > * {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: $tertiaryBlue;
  }

  h4,
  h5 {
    font-size: 1.6rem;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .landing-page-footer {
    padding-bottom: $u8;
    padding-left: $u4;
    padding-right: $u4;
    padding-top: $u8;
    text-align: center;

    .wrapper {
      display: flex;
      flex-flow: column nowrap;
      margin: 0 auto;
      max-width: $container;
      width: 100%;
    }

    .location-listing,
    .location-hours {
      margin-bottom: $u6;
    }

    .location-phone a,
    .location-phone p {
      border: 1px solid;
      color: $info;
      display: block;
      font-family: $font-primary;
      padding: 1em;

      &:hover {
        background-color: #2A3940;
      }
    }

    .location-phone {
      flex: 1 1 100%;
      order: 3;
    }

    @include tablet() {
      .wrapper {
        flex-flow: row wrap;
      }

      .location-listing,
      .location-hours {
        flex: 0 1 50%;
      }
    }

    @include desktop() {
      .wrapper {
        align-items: center;
        justify-content: center;
      }

      .location-listing,
      .location-phone,
      .location-hours {
        flex: 0 1 28%;
        margin-bottom: 0;
        order: initial;
      }
    }

    @include cinema() {
      .location-phone {
        min-width: 53.2rem;

        p {
          align-items: center;
          display: flex;
          font-size: 1.4em;
          justify-content: center;
          min-height: 9rem;
        }
      }
    }
  }
</style>
