<template>
  <footer class="footer">
    <div class="footer-brand">
      <img
        alt=""
        src="../../images/corvins-combo-logo.png@2x.png"
      />
      <h3>Championing every client's flooring with passion and integrity</h3>
    </div>

    <div class="footer-info">
      <div class="footer-info-wrapper">
        <div class="location-info">
          <div class="location-listing">
            <h4 class="location-heading">Bardstown Showroom</h4>
            <p>3465 E John Rowan Blvd</p>
            <p>Bardstown, KY 40004-2241</p>
            <p>P: (502) 348-7474 // F: (502) 337-6003</p>
          </div>

          <div class="location-hours">
            <h5 class="location-heading">Our hours</h5>
            <p>Monday thru Friday: 9:00am–6:00pm</p>
            <p>Saturdays: 9:00am–6:00pm</p>
            <p>Sundays: Closed</p>
          </div>
        </div>

        <div class="subscribe">
          <p>Subscribe for product releases <span>&amp; tips on maintainence</span></p>

          <div class="field newsletter">
            <input
              class="input has-placeholder"
              placeholder="Email"
              type="text"
            />
            <button class="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-sub">
      <social-links />

      <div class="copyright">
        <p>
          All content <sup>&copy;</sup> Corvin’s Flooring &amp; Furniture, LLC or authorized vendors. All rights reserved.
        </p>
      </div>

      <div class="flooring">
        <img
          alt="Shaw flooring"
          src="../../images/shaw-logo.png@2x.png"
        />
      </div>
    </div>
  </footer>
</template>

<script>
  import SocialLinks from '../components/SocialLinks.vue';

  export default {
    components: {
      SocialLinks
    }
  };
</script>

<style lang="scss" scoped>
  .footer {
    background-color: $primaryBlue;
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

  .footer-brand {
    padding-top: 10rem;
    padding-bottom: 6rem;

    img {
      display: block;
      margin: 0 auto $u6 auto;
      width: 237px;
    }

    h3 {
      margin-bottom: 0;
    }

    @include tablet() {
      h3 {
        font-size: 2.4rem;
        text-align: center;
      }
    }

    @include desktop() {
      font-size: 3.6rem;
      line-height: 4.2rem;
    }
  }

  .footer-info {
    background-color: $secondaryBlue;

    p {
      line-height: 3rem;
    }

    &-wrapper {
      max-width: $ultrawide;
      margin-left: auto;
      margin-right: auto;
    }

    .subscribe {
      p {
        color: $info;
        font-size: 1.8rem;
        line-height: 2.4rem;
        padding-bottom: 1.8rem;
        text-transform: uppercase;
      }

      .newsletter {
        display: flex;
        flex-flow: row nowrap;
      }

      .field {
        padding: 0;
      }
    }

    .location-hours,
    .subscribe {
      margin-top: $u6;
    }

    .submit {
      appearance: none;
      background-color: $tertiaryBlue;
      display: block;
      font-size: 1.2rem;
      min-height: 2.4em;
      line-height: 2.4em;
      padding: .3rem 2rem;
      text-transform: uppercase;
    }

    @include tablet() {
      &-wrapper {
        align-items: center;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
      }

      .location-info,
      .subscribe {
        display: flex;
      }

      .location-info {
        flex-flow: row wrap;
        flex: 1 1 45%;
        justify-content: space-between;
      }

      .subscribe {
        align-self: center;
        flex-flow: column nowrap;
        flex: 1 1 50%;
        margin-top: 0;
      }
    }

    @include widescreen() {
      padding-bottom: 8rem;
      padding-top: 8rem;

      .location-info {
        justify-content: flex-start;
      }

      .location-listing {
        margin-right: $u10;
      }

      .location-hours {
        margin-top: 0;
      }

      .subscribe {
        flex: 0 1 25%;
      }
    }
  }

  .footer-sub {
    max-width: $ultrawide;
    margin-left: auto;
    margin-right: auto;

    & > * {
      margin-bottom: $u6;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .copyright {
      font-size: 1.4rem;
    }

    @include tablet() {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;

      & > * {
        margin-bottom: 0;
      }

      .social-links,
      .flooring {
        flex: 0 0 50%;
      }

      .copyright {
        flex: 1 0 100%;
        order: 3;
        margin-top: $u4;

        p {
          text-align: center;
        }
      }

      .social-links {
        order: 1;
      }

      .flooring {
        order: 2;

        display: flex;
        justify-content: flex-end;
      }
    }

    @include desktop() {
      .social-links,
      .copyright,
      .flooring {
        order: initial;
      }

      .social-links,
      .flooring {
        flex: auto;
      }

      .copyright {
        flex: 0 1 75%;
        margin-top: 0;
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

  .footer-home {
    .wrapper {
      margin: 0 auto;
      max-width: $container;
      width: 100%;
    }

    .location-listing,
    .location-phone {
      margin-bottom: $u6;
    }

    .location-phone a,
    .location-phone p {
      border: 1px solid;
      color: $info;
      display: block;
      font-family: $font-primary;
      padding: 1em;
      text-align: center;
    }

    @include tablet() {
      .wrapper {
        display: flex;
        flex-flow: row wrap;
      }

      .location-listing,
      .location-hours {
        flex: 1 1 50%;
        text-align: center;
      }

      .location-phone {
        flex: 1 1 100%;
        order: 3;
      }
    }

    @include desktop() {
      .location-listing,
      .location-phone,
      .location-hours {
        flex: 0 1 33%;
        margin-bottom: 0;
        order: initial;
        text-align: center;
      }
    }
  }
</style>
