<template>
  <h1>404</h1>
</template>

<script>
  export default {
    mounted() {
      if (window.prerender) {
        document.title = 'Page Not Found';
        this.$eventBus.$emit('page-loaded');
      }
    }
  };
</script>
