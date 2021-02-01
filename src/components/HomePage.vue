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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
	--color-red: rgb(129, 23, 23);
	--color-red-hover:  rgb(95, 13, 13);
}
nav {
  margin-bottom: 50px;
}
.nav-tab {
  background: var(--color-red);
}
.nav-tab:hover {
  background: var(--color-red-hover);
}
.nav-tab:active {
  background: seashell;
}
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
v-app-bar {
  border: 0px solid black;
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;  
}
body {
    font-family: sans-serif;
    background-color: #2b2b2b;
    color: white;
}
div>h2:first-child {
    margin-top: 40px;
}
h2 {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  margin-bottom: 0px;
}
h2:nth-of-type(2) {
  font-size: 1.8em;
}
h2:nth-of-type(3) {
  font-size: 2.1em;
  margin-bottom: 25px;
}
h3 {
  margin-bottom: 10px;  
}
/**has to be made true only for bigger screens */
.selection__type {
  margin: 10px auto;
  padding: 2em;
  width: 60%;
  border-radius: 50px;
  margin-bottom: 20px;
}
.selection__type--general {
  background-color: rgb(119, 119, 119);
}
.selection__type--genre {
  background-color: rgb(71, 71, 71);
}
.selection__instructions {
  color:rgb(119, 119, 119)
}
.btn {
    background: white;
    color: black;
    padding: 10px 20px;
    border-radius: 20px; 
    margin: 1%;
}
.btn:hover {
  background-color: var(--color-red);
}
.btn--general {
  background: rgb(88, 88, 88);
  color: white;
}
.btn--genre {
  background: rgb(49, 49, 49);
  color: white;
}
.btn--miyazaki {
  background-image: url('../assets/totoro.jpg');
  background-size: 100px 50px;
  text-shadow: 1px 1px 2px black;
}
.btn--miyazaki:hover {
  opacity: 0.65;
}
footer {
  margin-top: 5%;
}
.breakWord {
  word-break: break-word;
  -webkit-line-clamp: unset !important;
  white-space: normal;
}
</style>
