<template>
  <div class="profile">
    <img
      :alt="profile.teamMemberImage.alt"
      :src="profile.teamMemberImage.url|profileImage"
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
    },
    filters: {
      profileImage(url) {
        return url.length > 0
               ? url
               : 'https://placehold.it/256x280';
      }
    }
  };
</script>

<style lang="scss" scoped>
  .profile {
    padding-top: $u10;
    text-align: center;

    &-image {
      margin-bottom: $u4;
    }

    &-name {
      font-size: 2.4rem;
    }

    &-name,
    &-email,
    &-phone {
      margin-bottom: 0;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }
</style>
