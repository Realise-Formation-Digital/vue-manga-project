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

    <div>
      <iframe src="https://api.jikan.moe/v3/anime/1" width="1450"></iframe>
    </div>
    


    <br />
    <br />
  </div>
</template>

<script>
export default {
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
    };
  },
};
</script>


