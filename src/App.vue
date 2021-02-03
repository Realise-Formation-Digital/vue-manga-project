<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'




export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>




