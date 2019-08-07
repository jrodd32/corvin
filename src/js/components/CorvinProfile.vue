<template>
  <div class="profile">
    <img
      :alt="profile.teamMemberImage.alt"
      :src="profile.teamMemberImage.src"
      class="profile-image"
    />
    <h2 class="profile-name">
      {{ profile.teamMemberName }}
    </h2>
    <p class="profile-title">
      {{ profile.teamMemberTitle }}
    </p>
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
  };
</script>

<style lang="scss" scoped>
  .profile {
    margin-bottom: $u10;

    &-image {
      margin-bottom: $u4;
    }

    &-name {
      font-size: 2.4rem;
    }

    &-title,
    &-email,
    &-phone {
      margin-bottom: 0;
    }
  }
</style>
