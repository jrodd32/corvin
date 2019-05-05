<template>
  <footer class="footer">
    <div class="footer-brand">
      <img
        alt=""
        src="../../images/corvins-combo-logo.png@2x.png"
      >
      <h3>Championing every client's flooring with passion and integrity</h3>
    </div>

    <div class="hours-newsletter">
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

    <div class="sub-footer">
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

    & > * {
      padding-bottom: $u6;
      padding-left: $u4;
      padding-right: $u4;
      padding-top: $u6;
    }

    p {
      margin-bottom: 0;
    }
  }

  .footer-brand {
    img {
      display: block;
      margin: 0 auto $u6 auto;
      width: 237px;
    }

    @include tablet() {
      h3 {
        font-size: 2.4rem;
        text-align: center;
      }
    }
  }

  .hours-newsletter {
    background-color: $secondaryBlue;

    .subscribe {
      p {
        color: $info;
        text-transform: uppercase;
      }
    }

    .location-hours {
      margin-top: $u6;
    }

    @include tablet() {
      display: flex;
      flex-flow: row wrap;

      .location-info,
      .subscribe {
        display: flex;
      }

      .location-info {
        flex-flow: row wrap;
      }

      .subscribe {
        flex-flow: column;
      }

      .location-info {
        flex: 1 1 50%;
        justify-content: space-between;
      }

      .subscribe {
        flex: 1 1 50%;
      }

      .newsletter {
        display: flex;
        flex-flow: row nowrap;

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
      }
    }
  }

  .sub-footer {
    @include tablet() {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;

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
</style>
