<template>
  <v-card>
        <v-toolbar>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Welcome to Manga World</v-toolbar-title>
          <v-spacer></v-spacer>
          <router-link to="/">Home Page</router-link>
          <v-spacer></v-spacer>
          <router-link to="/mangas">Mangas</router-link>
          <v-spacer></v-spacer>
          <router-link to="/AboutUs">About Us</router-link>
        </v-toolbar>
  </v-card>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

