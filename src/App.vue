<template>
  <div id="app">
    <mangas/>
  </div>
</template>

<script>
import mangas from './components/mangas.vue'

export default {
  name: 'App',
  components: {
    mangas
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
v-btn{
  color:black
}
</style>
