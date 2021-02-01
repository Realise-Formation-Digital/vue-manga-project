<template>
  <div>
    <img src="../assets/theworldo.gif" alt="Dio The World">
    <img src="../assets/katon.gif" alt="Dio The World" style="width: 350px;height:250px;">
    <img src="../assets/finalflash.gif" alt="Dio The World">
    <br>
    <button @click="show('https://api.jikan.moe/v3/top/anime/1/bypopularity', true)" class="btn btn--general">
    Test</button>
    
                <!-- Generation of a grid of cards when pressing any button -->    
            <v-row>
                <v-col 
                    cols="12" xs="12" sm="6" md="4" lg="3" 
                    v-for="(anime, i) in result" :key="i"
                >    
                <v-card data-app> 
            


<!-- POPUP -->
<v-dialog
        transition="dialog-top-transition"
        max-width="450"
      >
        <template v-slot:activator="{  on, attrs }">
        <v-img

            :src="anime.image_url"
            alt="anime.title"
            height="250px"
            v-bind="attrs"
            v-on="on"
          ></v-img> 
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >{{anime.title}}</v-toolbar>
            <v-card-text class = "card">
              <img class = "image2" :src="anime.image_url">
              <div class = "cardText">
                <b>Type:</b> {{anime.type}}
                <br>
                <b>Volumes:</b> {{anime.volumes}}
                <br>
                <b>Start date:</b> {{anime.start_date}}
                <br>
                <b>End date:</b> {{anime.end_date}}
                <br>
                <b>Members:</b> {{anime.members}}
                <br>
                <b>Score:</b> {{anime.score}}
                <br>
                <a :href= anime.url>Read more</a>
              </div>
            </v-card-text>
            <v-card-actions  class="justify-end">
               <v-btn
                text
                @click="dialog.value = false"
                
              >Close</v-btn> 
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
         
                    <!-- Title breaks, fix needed --->
                    <v-card-title>{{ anime.title }}</v-card-title>
                    <v-card-subtitle>{{ anime.score }}/10</v-card-subtitle> 
                    
                    <!-- 
                    <button @click="makeFavorite">
                            {{ like }} 
                        </button> -->

                    </v-card>
                </v-col>
            </v-row>
        
    
    <br>
  </div>
  

</template>

<script>
    import axiosMixin from "../mixins/axiosMixin.js"
    import animePathsMixin from "../mixins/animePathsMixin.js"

    export default {
        name: "Animes",
        mixins: [axiosMixin, animePathsMixin],
        data () {
            return {
                result: [], // the array where the data is stored
                like: 'LIKE'
            }
        },
        methods: {
            makeFavorite () {
                console.log("New favorite added")
                this.like = 'LIKED'
            }
        }
    }
</script>

