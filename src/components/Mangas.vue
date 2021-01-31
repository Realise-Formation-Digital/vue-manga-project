<template>

    <div> <!-- Parent div of the template -->
    <v-container>
        <h2>BROWSE OUR CATALOG</h2>
        <h2> MARK YOUR FAVORITES MANGAS</h2>
        <h2>PREPARE AND EXPORT YOUR READING LIST</h2>
        <p class="selection__instructions">Click to display the corresponding titles.</p>

        <div class="selection__type selection__type--general">
            <!-- Buttons which offset the function to display corresponding items fetched from the API -->
            <button @click="show" class="btn btn--general">
                Popular
            </button>

            <button @click="show" class="btn btn--general">
                Upcoming
            </button>

            <button @click="show" class="btn btn--general">
                Community's favourites
            </button>
        </div>

        <div class="selection__type selection__type--genre">
            <h3>SELECTION BY GENRE</h3>

            <button @click="show" class="btn btn--genre">
                Action
            </button>

            <button @click="show" class="btn btn--genre">
                Adventure
            </button>

            <button @click="show" class="btn btn--genre">
                Drama
            </button>

            <button @click="show" class="btn btn--genre">
                Ecchi
            </button>

            <button @click="show" class="btn btn--genre">
                Fantasy
            </button>

            <button @click="show" class="btn btn--genre">
                Game
            </button>
        </div>


        <!-- Generation of a grid of cards when pressing any button -->    
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="(anime, i) in result" :key="i">    
                <v-card width="250px">
                    
                    <!-- Title breaks, fix needed --->
                    <v-card-title>#{{ anime.rank }} {{ anime.title }}</v-card-title>
                    <v-card-subtitle>{{ anime.score }}/10</v-card-subtitle>
                    <v-img :src="anime.image_url" alt="anime.title" height="250px"></v-img>
                    
                    <!-- Icon which allows to make an item a favorite -->
                    <button @click="makeFavorite">
                        {{ like }}
                    </button>

                    <br> 

                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>


<script>
    import 'material-design-icons-iconfont/dist/material-design-icons.css' // importing because with CLI no default HTML in /src
    import axiosMixin from "../mixins/axiosMixin"

    export default {
        name: "Mangas",
        mixins: [axiosMixin],
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
</style>