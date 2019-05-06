<template>
  <div>
    <h2>Our Team</h2>
    <corvin-profile
      v-for="profile in profiles"
      :profile="profile"
      :key="profile.name"
    />
  </div>
</template>

<script>
  import { profiles } from '../core/data';
  import CorvinProfile from '../components/CorvinProfile.vue';

  export default {
    data() {
      return {
        profiles
      };
    },
    components: {
      CorvinProfile
    }
  }
</script>

<style scoped>

</style>