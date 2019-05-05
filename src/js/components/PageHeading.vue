<template>
  <div class="page-heading">
    <h1
      v-if="hasHeadingTitle"
      v-html="heading.title"
    />
    <p
      v-if="hasHeadingContent"
      v-html="heading.content"
    />
  </div>
</template>

<script>
  export default {
    props: {
      heading: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      hasHeadingContent() {
        return this.heading
               && 'content' in this.heading;
      },
      hasHeadingTitle() {
        return this.heading
               && 'title' in this.heading;
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>