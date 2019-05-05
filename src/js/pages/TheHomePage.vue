<template>
  <main class="page is-gapless home"></main>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    activated() {
      this.$emit('page-activated');
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>
