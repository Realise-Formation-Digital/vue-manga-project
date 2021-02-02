<template>
  <v-card>
    <img src="../assets/animania.png" alt="Header with pictures of characters from animes and mangas" style="width: 100%">
        <v-toolbar>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Welcome to Animania</v-toolbar-title>
          <v-spacer></v-spacer>
          <router-link to="/">Home Page</router-link>
          <v-spacer></v-spacer>
          <router-link to="/mangas">Mangas</router-link>
          <v-spacer></v-spacer>
          <router-link to="/animes">Animes</router-link>
          <v-spacer></v-spacer>
          <router-link to="/aboutus">About Us</router-link>
        </v-toolbar>
  </v-card>
</template>


