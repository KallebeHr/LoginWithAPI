<template>
  <v-app>
    <v-main>
      <NavBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import NavBar from './components/NavBar.vue'
  import Login from './components/Login.vue'
  import Register from './components/Register.vue'
  //
</script>
