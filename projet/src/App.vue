<template>
  <sequential-entrance>
    <div class="box" v-for="app in apps" :key="app">{{ app }}</div>
  </sequential-entrance>
</template>

<script>
import projet from './components/projet.vue'

export default {
  name: 'App',
  components: {
    projet
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
