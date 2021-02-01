<template>

    <div> <!-- Parent div of the template -->
        <p>In preparation! Check Manga instead.</p>


            <!-- V-for to generate the general buttons -->
            <v-row> 
                <v-col 
                    v-for="(item, index) in result" :key="index">    
                    <button @click="show(this.url, true)" class="btn btn--genre">
                        {{ name }}
                    </button> 
                </v-col>
            </v-row>

    </div>
</template>


<script>
  import 'material-design-icons-iconfont/dist/material-design-icons.css' // importing because with CLI no default HTML in /src
  import axiosMixin from "../mixins/axiosMixin"
  import animePathsMixin from "../mixins/animePathsMixin"
  export default {
    name: "Animes",
    mixins: [axiosMixin, animePathsMixin],
    data () {
      return {
        result: [], // the array where the data is stored
        like: 'LIKE'
        }
    }
  }
</script>



<style>
</style>