<!--

1. CSS: How to import the below: 

  // styles/generic/_index.scss

// Generic styling for bare HTML elements (like H1, A, etc.).
// These come with default styling from the browser so that
// we can redefine them here.
@import './reset.scss';

@import './animations.scss';

@import './colors.scss';

@import './elevation.scss';

@import './transitions.scss';

2. Help to correct the button with array for categories

-->


<template>
  <div>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
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

    <v-btn block>Mangas</v-btn>

    <v-btn block>Animes</v-btn>

  <br>
  <br>
  </div>
</template>

<script>
import axiosMixin from "../mixins/axiosMixin.js";
import animePathsMixin from "../mixins/animePathsMixin.js";

export default {
  name: "Mangas",
  mixins: [axiosMixin, animePathsMixin],
  data() {
    return {

      items: [
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
      category: [
        {
          id: 1,
          src: "test",
        },
      ],

    };
  },
  
};
</script>

