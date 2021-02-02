<template>
    <div> <!-- Parent div of the template -->
        <v-container>
            <h2>BROWSE OUR CATALOG</h2>
            <h2> MARK YOUR FAVORITES MANGAS</h2>
            <h2>PREPARE AND EXPORT YOUR READING LIST</h2>
            <p class="selection__instructions">Click to display the corresponding titles.</p>

<div class="selection__type selection__type--general">
    <button class="btn btn--general" @click="type='anime'">Anime</button>
    <button class="btn btn--general" @click="type='manga'">Manga</button>
</div>

            <div v-if="type === 'anime'" class="selection__type selection__type--general">
                <!-- Buttons which offset the function to display corresponding items fetched from the API -->
                <!-- Instead of a dozen buttons, v-for based on data -->
                <!-- And add event listeners ? -->
                <!-- 'https://api.jikan.moe/v3/top/anime/1/bypopularity', -->
                <button @click="show('top', type, page, 'bypopularity'), filter = 'top'" class="btn btn--general">
                    Popular
                </button>

                <button @click="show('https://api.jikan.moe/v3/top/anime/1/favorite', true)" class="btn btn--general">
                    Community's favourites
                </button>

                <button @click="show('https://api.jikan.moe/v3/top/anime/1/upcoming', true)" class="btn btn--general">
                    Upcoming
                </button>
            </div>


            <div v-else-if="type === 'manga'" class="selection__type selection__type--general">
                <button @click="show('https://api.jikan.moe/v3/top/anime/1/bypopularity', true)" class="btn btn--general">
                    
                </button>
            </div>

            <div v-if="type !== null" class="selection__type selection__type--genre">
                <h3>SELECTION BY GENRE</h3>
                <button @click="show('genre', type, 1, page), filter = 'genre'" class="btn btn--genre">
                    Action
                </button>

<!-- 
                <button @click="show('https://api.jikan.moe/v3/genre/anime/1/1', 0)" class="btn btn--genre">
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
                </button>  -->
            </div>




            <!-- Generation of a grid of cards when pressing any button -->    
            <v-row>
                <v-col 
                    cols="12" xs="12" sm="6" md="4" lg="3" 
                    v-for="(item, i) in table" :key="i"
                >    
                <v-card data-app> 



<!-- POPUP -->
<v-dialog
        transition="dialog-top-transition"
        max-width="950"
      >
        <template v-slot:activator="{  on, attrs }">
        <v-img

            :src="item.image_url"
            @click="showGenres(item)"
            alt="item.title"
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
            >{{item.title}}</v-toolbar>

            <v-card-text  class = "card">
              <img class = "image2" :src="item.image_url">
              <div v-if="filter === 'top'" class = "cardText">
                <b>Type:</b> {{item.type}}
                <br>
                <b>Episodes:</b> {{item.episodes}}
                <br>
                <b>Start date:</b> {{item.start_date}}
                <br>
                <b>End date:</b> {{item.end_date}}
                <br>
                <b>Members:</b> {{item.members}}
                <br>
                <b>Score:</b> {{item.score}}/10
                <br>
                <a :href= item.url>Read more</a>
              </div>

              <div v-if="filter === 'genre'" class = "cardText">
                <b>Type:</b> {{item.type}}
                <br>
                <b>Episodes:</b> {{item.episodes}}
                <br>
                <b>Members:</b> {{item.members}}
                <br>
                <b>Synopsis:</b> {{item.synopsis}}
                <br>
                <b >Score:</b> {{item.score}}/10
                <br>
                <b @click="showGenres(item)" class ="genres"></b>
                <br>
                <a :href= item.url>Read more</a>
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
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-subtitle>{{ item.score }}/10</v-card-subtitle> 
                    
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
    import axiosMixin from "../mixins/axiosMixin"
    import animePathsMixin from "../mixins/animePathsMixin"

    export default {
        name: "Mangas",
        mixins: [axiosMixin, animePathsMixin],
        data () {
            return {
                table: [], // the array where the data is stored
                like: 'LIKE',
                type: null,
                filter: null,
                page: 1,
            }
        },
        methods: {
            makeFavorite () {
                console.log("New favorite added")
                this.like = 'LIKED'
            },
            showDialog() {
console.log(this.genres[0])
            },
            hideDialog() {

            },
            changeType (type) {
                this.type = type
            },
            showGenres (item) {     
                let string = "Genres: "
                for(let i = 0; i < item.genres.length; i++){
                string +=  '<a href="' + item.genres[i].url +'">' + item.genres[i].name + ' </a>'
                }  
                setTimeout(() => {  
                    let genreshow = document.getElementsByClassName("genres");
                    for (let i = 0; i < genreshow.length; i++) {
                    if (genreshow[i]) {
                 genreshow[i].innerHTML = string;
              }
            }        
        },  1);
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
 height: 400px; 
 display: flex; 
justify-content: center;
}

.cardText{
  padding-top: 8px;
  text-align: left;
}
</style>