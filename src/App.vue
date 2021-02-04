<template>
  <div id="app">
    <img
      src="./assets/animania.png"
      alt="Header with pictures of characters from animes and mangas"
      style="width: 100%"
    />

    <!-- Nav menu with router-links -->
    <!-- <v-app-bar fixed> -->
    <nav class="navbar navbar-expand-lg fixed-top row nav-tab">
      <router-link tag="li" class="col nav-tab" class-active="active" to="/"
        >Home</router-link
      ><br />
      <router-link
        tag="li"
        class="col nav-tab"
        class-active="active"
        to="/browse"
        >Browse</router-link
      >
      <router-link
        tag="li"
        class="col nav-tab"
        class-active="active"
        to="/contact"
        >Drop us a message</router-link
      >
      <hr />
    </nav>
    <!-- </v-app-bar> -->

    <!-- Components (pages) displayed here -->
    <router-view></router-view>

    <!-- Footer goes here -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
/* import HelloWorld from './components/HelloWorld.vue' */
export default {
  name: "App",
  components: {
    /* HelloWorld */
    Footer,
  },
};
</script>

<style>
:root {
  --color-red: rgb(129, 23, 23);
  --color-red-hover: rgb(95, 13, 13);
}

nav {
  margin-bottom: 50px;
}

.nav-tab {
  background: var(--color-red);
}

.nav-tab:hover {
  background: var(--color-red-hover);
  cursor: pointer;
}

.nav-tab:active {
  background: seashell;
}

#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

v-app-bar {
  border: 0px solid black;
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

body {
  font-family: sans-serif;
  background-color: #2b2b2b;
  color: white;
}

div > h2:first-child {
  margin-top: 40px;
}

h2 {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  margin-bottom: 0px;
}

h2:nth-of-type(2) {
  font-size: 1.8em;
}

h2:nth-of-type(3) {
  font-size: 2.1em;
  margin-bottom: 25px;
}

.divide {
  margin: 8px 20px 15px 10px;
}

/**has to be made true only for bigger screens */
.selection__type {
  margin: 20px auto;
  padding: 2em;
  margin-bottom: 20px;
  border: 1px solid black;
}

.selection__type--general {
  background-color: rgb(119, 119, 119);
}

.selection__type--genre {
  background-color: rgb(71, 71, 71);
}

.selection__instructions {
  color: rgb(119, 119, 119);
}

.btn {
  background: white;
  color: black ;
  padding: 10px 20px ;
  border-radius: 10px !important;
  margin: 1% !important;
}

.btn:hover {
  background-color: var(--color-red) !important;
}

.btn--general {
  margin-top: 30px;
  padding: 15px 200px;
  background-repeat: no-repeat;
  background-size: cover;
  text-shadow: 2px 2px 2px black;
  color: white;
  font-size: 60px;
  border: 1px solid black
}

.btn--genre {
  background: rgb(49, 49, 49) !important;
  color: white !important;
  
}

.btn--manga {
  background-image: url("./assets/totoro.jpg");
}

.btn--anime {
  background-image: url("./assets/death.jpg");
}

.btn--general:hover {
  opacity: 0.65;
}

footer {
  margin-top: 3%;
}

.breakWord {
  word-break: break-word;
  -webkit-line-clamp: unset !important;
  white-space: normal;
}

</style>
