<template>
  <header class="landing-page-header">
    <figure>
      <img
        alt="Corvin's furiture and flooring logo"
        src="../../images/logos/corvins-combo-logo-landing-page.svg"
        class="logo"
      />
    </figure>

    <h1>Welcome to Corvin’s in Bardstown, please choose a department.</h1>
  </header>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .landing-page-header {
    background-color: $primaryBlue;
    padding-bottom: $u8;
    padding-top: $u8;
    display: flex;
    flex-direction: column;
    align-items: center;

    figure {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;
      width: 240px;
    }

    h1 {
      color: $tertiaryBlue;
      font-size: 3.6rem;
      margin-bottom: 0;
      margin-left: auto;
      margin-right: auto;
      margin-top: 1em;
      max-width: 720px;
      text-align: center;

      @include cinema() {
        max-width: initial;
      }
    }
  }
</style>
