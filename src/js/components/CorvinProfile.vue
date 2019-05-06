<template>
  <div class="profile">
    <img
      :alt="profile.image.alt"
      :src="profile.image"
      class="profile-image"
    >
    <h2 class="profile-name">{{ profile.name }}</h2>
    <p class="profile-title">{{ profile.title }}</p>
    <p class="profile-email">{{ profile.email }}</p>
    <p>{{ profile.bio }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      profile: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>

</style>