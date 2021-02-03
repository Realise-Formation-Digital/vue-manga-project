<template>
  <div>
    <v-row>
      <v-col
        v-for="image in images"
        :key="image.id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img :src="image.src" aspect-ratio="2" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>

    <br />
    <br />

    <v-btn color="#9FA8DA" @click="fetchmanga()"> Character List </v-btn>

    <v-btn color="#90CAF9" @click="fetchanime()"> Animes List </v-btn>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Character Name</th>
            <th class="text-left">Role</th>
            <th class="text-left">Image</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(character, i) in characters" :key="i">
            <td>{{ character.name }}</td>
            <td>{{ character.role }}</td>
            <td> <v-avatar>
      <img
        :src="character.image_url"
        alt="John"
      >
    </v-avatar></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <br />
    <br />
  </div>
</template>

<script>
export default {
  //Data me permet de declarer mes variables pour ce composant
  // Ici un array s appel par list, par ex Mangas
  data() {
    return {
      images: [
        {
          id: 1,
          src: require("../assets/theworldo.gif"),
        },
        {
          id: 2,
          src: require("../assets/finalflash.gif"),
        },
        {
          id: 3,
          src: require("../assets/katon.gif"),
        },
      ],
      characters: [],
    };
  },
  methods: {
    async fetchmanga() {
      try {
        const axios = require("axios");
        const response = await axios.get(
          "https://api.jikan.moe/v3/manga/1/characters"
        );
        console.log(response);
        this.characters = response.data.characters;
      } catch (e) {
        console.log("error:", e);
      }
    },
    async fetchanime() {
      try {
        const axios = require("axios");
        const response = await axios.get(
          "https://api.jikan.moe/v3/genre/anime/1"
          );
        console.log(response);
        this.characters = response.data.characters;
      } catch (e) {
        console.log("error:", e);
      }
    },
  },
};
</script>


