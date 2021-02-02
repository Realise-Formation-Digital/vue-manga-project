<template>
  <div> <!-- Parent div of the template -->

    <p>In preparation! Check Manga instead.</p>
       <!-- V-for to generate the general buttons -->
      <v-row> 
        <v-col 
          v-for="(category, index) in categories" 
          :key="index"
        >    
          <button @click="show(category.url, true)" class="btn btn--genre">
            {{ category.name }}
          </button> 
        </v-col>
      </v-row>

 <!-- Generation of a grid of cards when pressing any button -->    
      <v-row
        id="displayGrid"
      >
        <v-col 
          cols="12" xs="12" sm="6" md="4" lg="3" 
          v-for="(anime, i) in result" :key="i"
        >    
          <v-card data-app> 
            <v-card-title>{{ anime.title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>

<Popup></Popup>

    </div>
</template>

<script>
  
  import axiosMixin from "../mixins/axiosMixin.js"
  import animePathsMixin from "../mixins/animePathsMixin.js"
  import Popup from './Popup.vue'
  export default {
    name: "Mangas",
    mixins: [axiosMixin, animePathsMixin],
    data () {
      return {
        result: [], // the array where the data is stored
        like: 'LIKE'
        }
    },
    components: {
      Popup
    }
  }
</script>



<style>
</style>