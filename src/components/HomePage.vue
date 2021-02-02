<template>
  <div>
     <v-row>
    <v-col
      v-for="item in items"
      :key="item.id"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="item.src"
        
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
    
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
                like: 'LIKE',
                items: [
                  {
                    id:1,
                    src: require ("../assets/theworldo.gif"),
                  }, 
                  {
                    id:2,
                    src: require ("../assets/finalflash.gif"),
                  },
                  {
                    id:3,
                    src: require ("../assets/katon.gif"),
                  },  
                ]
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

