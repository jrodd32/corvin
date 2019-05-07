<template>
  <div
    class="product"
    :class="classModifiers"
  >
    <img
      :alt="product.image.alt"
      :src="product.image.src"
      class="product-image"
    />

    <h2
      v-html="product.title"
      class="product-title"
    />

    <p
      v-for="paragraph in product.description"
      v-html="paragraph"
      class="product-description"
    />

    <router-link
      :to="`/store/${product.slug}`"
      class="button product-button"
    >
      View details
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        default() {
          return {};
        }
      },
      classModifiers: {
        type: String,
        default() {
          return '';
        }
      }
    }
  }
</script>

<style scoped>

</style>