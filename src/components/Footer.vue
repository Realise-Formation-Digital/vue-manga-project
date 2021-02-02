<template>
   <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
     
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  data: () => ({
      links: [
        'Home Page',
        'Mangas',
        'Anime',
        'Contact Us',
      ],
    }),
};


</script>

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
