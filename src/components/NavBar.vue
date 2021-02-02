<template>
  <nav>
    <v-tollbar flat app>
      <v-tool-bar-title class="text-uppercasegrey--text">
        <span class="font-weight-light">Welcome to Animanga</span>
      </v-tool-bar-title>
      <v-spacer></v-spacer>
      <v-btn router-link to ="/">Home Page</v-btn>
      <v-btn router-link to ="/mangas">Manga</v-btn>
      <v-btn router-link to ="/animes">Anime</v-btn>
      <v-btn router-link to ="/aboutus">About Us</v-btn>
    </v-tollbar>
  </nav>
</template>


