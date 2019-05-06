<template>
  <div
    :class="class"
    class="service"
  >
    <figure class="service-icon image">
      <img
        :alt="icon.alt"
        :src="icon.src"
      >
    </figure>

    <div class="service-info">
      <h2 class="service-title">{{ service.name }}</h2>
      <p class="service-description">{{ service.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {},
      service: {}
    }
  }
</script>

<style scoped>

</style>