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
    <p
      v-if="hasPhone"
      class="profile-phone"
    >
      {{ profile.phone }}
    </p>
    <p
      v-if="hasEmail"
      class="profile-email"
    >
      {{ profile.email }}
    </p>
  </div>
</template>

<script>
  export default {
    filters: {
      profileImage(url) {
        return url.length > 0
               ? url
               : 'https://placehold.it/256x280';
      }
    },
    props: {
      profile: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      hasEmail() {
        return 'email' in this.profile
               && this.email.profile !== null
               && this.profile.email.length > 0;
      },
      hasPhone() {
        return 'phone' in this.profile
               && this.profile.phone !== null
               && this.profile.phone.length > 0;
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
    &-title,
    &-email,
    &-phone {
      margin-bottom: 0;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }
</style>
