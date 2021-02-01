<template>
    <div> <!-- Parent div of the template -->
        <v-container>
            <h2>BROWSE OUR CATALOG</h2>
            <h2> MARK YOUR FAVORITES MANGAS</h2>
            <h2>PREPARE AND EXPORT YOUR READING LIST</h2>
            <p class="selection__instructions">Click to display the corresponding titles.</p>

            <div class="selection__type selection__type--general">
                <!-- Buttons which offset the function to display corresponding items fetched from the API -->
                <!-- Instead of a dozen buttons, v-for based on data -->
                <!-- And add event listeners ? -->
                <button 
                    @click="show('https://api.jikan.moe/v3/top/anime/1/bypopularity', true)" 
                    class="btn btn--general"
                    v-scroll-to="'#displayGrid'"
                >
                    Popular
                </button>

                <button @click="show('https://api.jikan.moe/v3/top/anime/1/favorite', true)" class="btn btn--general">
                    Community's favourites
                </button>

                <button @click="show('https://api.jikan.moe/v3/top/anime/1/upcoming', true)" class="btn btn--general">
                    Upcoming
                </button>
            </div>

            <div class="selection__type selection__type--genre">
                <h3>SELECTION BY GENRE</h3>

                <!-- Instead of a dozen buttons, v-for based on data -->
                <button @click="show('https://api.jikan.moe/v3/genre/anime/1', 0)" class="btn btn--genre">
                    Action
                </button>

                <button @click="show('https://api.jikan.moe/v3/genre/anime/2', 0)" class="btn btn--genre">
                    Adventure
                </button>

                <button @click="show('https://api.jikan.moe/v3/genre/anime/8', 0)" class="btn btn--genre">
                    Drama
                </button>

                <button @click="show('https://api.jikan.moe/v3/genre/anime/10', 0)" class="btn btn--genre">
                    Fantasy
                </button>

                <button @click="show('https://api.jikan.moe/v3/genre/anime/11', 0)" class="btn btn--genre">
                    Game
                </button>

                <button @click="show('https://api.jikan.moe/v3/genre/anime/14', 0)" class="btn btn--genre">
                    Horror
                </button>

                <button @click="show('https://api.jikan.moe/v3/genre/anime/16', 0)" class="btn btn--genre">
                    Magic
                </button>

                <button @click="show('https://api.jikan.moe/v3/genre/anime/18', 0)" class="btn btn--genre">
                    Mecha
                </button>

                <button @click="miyazaki" class="btn btn--genre btn--miyazaki">
                    Miyazaki
                </button>

                <button @click="show('https://api.jikan.moe/v3/genre/anime/19', 0)" class="btn btn--genre">
                    Music
                </button>

                <button @click="show('https://api.jikan.moe/v3/genre/anime/22', 0)" class="btn btn--genre">
                    Romance
                </button>

                <button @click="show('https://api.jikan.moe/v3/genre/anime/24', 0)" class="btn btn--genre">
                    Sci-Fi
                </button>
            </div>




            <!-- Generation of a grid of cards when pressing any button -->    
            <v-row
                id="displayGrid">
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
                <b>Fans from myanimelist.com:</b> {{anime.members}}
                <br>
                <b>Score:</b> {{anime.score}}/10
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
                    
                    <!-- 
                    <button @click="makeFavorite">
                            {{ like }} 
                        </button> -->

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
    import 'material-design-icons-iconfont/dist/material-design-icons.css' // importing because with CLI no default HTML in /src
    import axiosMixin from "../mixins/axiosMixin.js"
    import animePathsMixin from "../mixins/animePathsMixin.js"

    export default {
        name: "Mangas",
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



<style>

.image {
    height: 200px;
    vertical-align: top;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    object-fit: contain;
}

.image2 {
  float: left;
  padding: 10px 15px 0 0
}

* {
  box-sizing: border-box;
}

.card {
 height: 300px; 
 display: flex; 
justify-content: center;
}

.cardText{
  padding-top: 40px;
  text-align: left;
}
</style>