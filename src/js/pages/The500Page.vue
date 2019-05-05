<template>
  <h1>500</h1>
</template>

<script>
  export default {
    mounted() {
      document.title = 'Error';
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>
