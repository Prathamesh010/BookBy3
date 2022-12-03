<template>
  <div id="app">
    <v-app>
      <Navbar />
      <router-view />
      <Flash />
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Flash from '@/components/Flash.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Flash,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}

// custom scrollbar color
::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track-piece {
  background-color: black;
}

::-webkit-scrollbar-thumb {
  background: rgb(214, 50, 50);
}
</style>
