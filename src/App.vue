<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Banque à mangas (je suis le header affiché depuis App.vue)</h1>
    <p>
      <router-link to="/">Home</router-link><br>
      <router-link to="/mangas">Mangas</router-link><br>
      <router-link to="/contact">Drop us a message</router-link>
      <router-view></router-view>
    </p>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
export default {
  name: 'App',
  components: {
     /* HelloWorld */
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
