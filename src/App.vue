<template>
  <div id="app">
    <UsersListing />
  </div>
</template>
<script>
import UsersListing from './views/UsersListing/UsersListing.vue';

export default {
  components: {
    UsersListing,
  },
};
</script>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
