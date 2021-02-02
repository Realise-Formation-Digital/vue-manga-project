<template>
  <div id="app" class="grey lighten-4">
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


<style>
:root {
	--color-red: rgb(129, 23, 23);
	--color-red-hover:  rgb(95, 13, 13);
}
nav {
  margin-bottom: 50px;
}
.nav-tab {
  background: var(--color-red);
}
.nav-tab:hover {
  background: var(--color-red-hover);
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
    background-color: #f3eded;
    color: rgb(10, 10, 10);
}
div>h2:first-child {
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
h3 {
  margin-bottom: 10px;  
}
/**has to be made true only for bigger screens */
.selection__type {
  margin: 10px auto;
  padding: 2em;
  width: 60%;
  border-radius: 50px;
  margin-bottom: 20px;
}
.selection__type--general {
  background-color: rgb(119, 119, 119);
}
.selection__type--genre {
  background-color: rgb(71, 71, 71);
}
.selection__instructions {
  color:rgb(119, 119, 119)
}
.btn {
    background: white;
    color: black;
    padding: 10px 20px;
    border-radius: 20px; 
    margin: 1%;
}
.btn:hover {
  background-color: var(--color-red);
}
.btn--general {
  background: rgb(88, 88, 88);
  color: white;
}
.btn--genre {
  background: rgb(49, 49, 49);
  color: white;
}
.btn--miyazaki {
  background-image: url('./assets/totoro.jpg');
  background-size: 100px 50px;
  text-shadow: 1px 1px 2px black;
}
.btn--miyazaki:hover {
  opacity: 0.65;
}
footer {
  margin-top: 5%;
}
.breakWord {
  word-break: break-word;
  -webkit-line-clamp: unset !important;
  white-space: normal;
}
</style>

