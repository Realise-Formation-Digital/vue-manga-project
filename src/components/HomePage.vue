<template>
  <div>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img :src="item.src" aspect-ratio="2" class="grey lighten-2">
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
    <v-row>
      <v-btn
        v-for="item in items"
        :key="item.id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img :src="item.src" aspect-ratio="2" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-btn>
    </v-row>
    <br />
    <br />
  </div>
</template>

<script>
export default {
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
    };
  },
};
</script>

