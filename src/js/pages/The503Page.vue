<template>
  <h1>Site maintenance</h1>
</template>

<script>
  export default {
    mounted() {
      document.title = 'Site Maintenance';
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>
