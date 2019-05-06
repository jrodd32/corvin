<template>
  <div>
    <h2>Our Services</h2>
    <corvin-service
      v-for="service in services"
      :key="service.name"
      :service="service"
    />
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>