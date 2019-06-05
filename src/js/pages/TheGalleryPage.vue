<template>
  <main class="page">
    <div class="container">
      <h1>Gallery Page</h1>
    </div>
  </main>
</template>

<script>
  export default {
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>

<style scoped>

</style>