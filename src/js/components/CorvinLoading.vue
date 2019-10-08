<template>
  <div class="overlay">
    <div class="wrap">
      <div class="loading">
        <div class="bounceball"></div>
        <div class="text">LOADING</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  $width: 15px;
  $height: 15px;
  $bounce_height: 30px;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    font-family: Montserrat;
    background-color: $white;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    color: $primaryBlue;
  }

  .text {
    color: $orange;
    display: inline-block;
    margin-left: 5px;
  }

  .bounceball {
    position: relative;
    display: inline-block;
    height: 37px;
    width: $width;
    &:before {
      position: absolute;
      content: '';
      display: block;
      top: 0;
      width: $width;
      height: $height;
      border-radius: 50%;
      background-color: $orange;
      transform-origin: 50%;
      animation: bounce 500ms alternate infinite ease;
    }
  }

  @keyframes bounce {
    0% {
      top: $bounce_height;
      height: 5px;
      border-radius: 60px 60px 20px 20px;
      transform: scaleX(2);
    }
    35% {
      height: $height;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0;
    }
  }
</style>
