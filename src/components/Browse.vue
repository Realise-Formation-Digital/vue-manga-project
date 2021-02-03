<template>
  <v-container>
    <!-- Start by declaring type variable -->
    <button
      class="btn--general btn--anime"
      @click="filterReset(), (type = 'anime')"
    >
      Anime
    </button>
    <button
      class="btn--general btn--manga"
      @click="filterReset(), (type = 'manga')"
    >
      Manga
    </button>

    <!-- Hidden if didnt chose anime or manga -->
    <v-container class="grey lighten-5">
      <v-row>
        <v-col>
          <div
            v-if="type === 'anime'"
            class="selection__type selection__type--genre"
          >
            <h3>SORT BY POPULARITY</h3>
            <v-divider class="divide"></v-divider>
            <!-- Buttons which offset the function to display corresponding items fetched from the API -->
            <!-- Pass 4 parameters in function show() to create API url.  -->
            <!-- Change variable "filter" for popup parameters -->
            <button
              v-for="(item, index) in anime_subtype"
              :key="index"
              @click="filterTop(item)"
              class="btn btn--genre"
            >
              {{ item.name }}
            </button>
          </div>

          <div
            v-if="type === 'manga'"
            class="selection__type selection__type--genre"
          >
            <h3>SORT BY POPULARITY</h3>
            <v-divider class="divide"></v-divider>
            <button
              v-for="(item, index) in manga_subtype"
              :key="index"
              @click="filterTop(item)"
              class="btn btn--genre"
            >
              {{ item.name }}
            </button>
          </div>
        </v-col>
        <v-col>
          <!-- Same as above but for genres selection -->
          <div
            v-if="type !== null"
            class="selection__type selection__type--genre"
          >
            <h3>GENRE</h3>
            <v-divider class="divide"></v-divider>
            <button
              v-for="(item, index) in genres"
              :key="index"
              @click="filterGenre(index)"
              class="btn btn--genre"
            >
              {{ item }}
            </button>
          </div>
        </v-col>
        <v-col>
          <v-form
            v-if="type !== null"
            data-app
            class="selection__type selection__type--genre"
          >
            <h3>SEARCH</h3>
            <v-divider class="divide"></v-divider>
            <v-container>
              <v-text-field
                v-model="search"
                label="What are you looking for?"
                type="text"
                @keydown.enter="filterSearch(search)"
              >
                <template v-slot:append>
                  <v-btn class="btn btn--genre" @click="filterSearch(search)">
                    GO
                  </v-btn>
                </template>
              </v-text-field>
            </v-container>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <!-- Current filter settings -->
    <p v-if="filter !== null" style="font-size: 50px">
      {{ type }} / {{ filter }} / {{ genres[genre - 1] }} {{ top }}
      {{ search }} / Page :{{ page }}
    </p>

    <!-- Generation of a grid of cards when pressing any button -->
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="2"
        v-for="(item, i) in table"
        :key="i"
      >
        <v-card data-app>
          <v-dialog transition="dialog-top-transition" max-width="950">
            <!-- Loop to fill the grid with images from API -->
            <template v-slot:activator="{ on, attrs }">
              <v-img
                :src="item.image_url"
                @click="showGenres(item)"
                alt="item.title"
                height="200px"
                v-bind="attrs"
                v-on="on"
              ></v-img>
            </template>

            <!-- On click create genres parameter (since there are more than 1 genre for each item) -->
            <!-- On click show popup -->
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark>{{ item.title }}</v-toolbar>

                <v-card-text class="card">
                  <!-- Popup image -->
                  <img class="image2" :src="item.image_url" />

                  <!-- Popup layouts for different filters (each api has different parameters) -->
                  <div v-if="filter === 'top'" class="cardText">
                    <b>Type:</b> {{ item.type }}
                    <br />
                    <b>Episodes:</b> {{ item.episodes }}
                    <br />
                    <b>Start date:</b> {{ item.start_date }}
                    <br />
                    <b>End date:</b> {{ item.end_date }}
                    <br />
                    <b>Members:</b> {{ item.members }}
                    <br />
                    <b>Score:</b> {{ item.score }}/10
                    <br />
                    <a :href="item.url">Read more</a>
                  </div>

                  <div
                    v-if="filter === 'genre' || filter === 'search'"
                    class="cardText"
                  >
                    <b>Type:</b> {{ item.type }}
                    <br />
                    <b>Episodes:</b> {{ item.episodes }}
                    <br />
                    <b>Members:</b> {{ item.members }}
                    <br />
                    <b>Synopsis:</b> {{ item.synopsis }}
                    <br />
                    <b>Score:</b> {{ item.score }}/10
                    <br />
                    <b class="genres"></b>
                    <br />
                    <a :href="item.url">Read more</a>
                  </div>
                </v-card-text>

                <!-- Close button -->
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Close</v-btn>
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

    <!-- Page buttons -->
    <div
      v-if="filter === 'genre' || filter === 'search'"
      class="selection__type selection__type--genre"
    >
      <button
        v-for="n in 30"
        :key="n"
        class="btn btn--genre"
        @click="(page = n), show(filter, type, genre, page)"
      >
        {{ n }}
      </button>
    </div>

    <div v-if="filter === 'top'" class="selection__type selection__type--genre">
      <button
        v-for="n in 30"
        :key="n"
        class="btn btn--genre"
        @click="(page = n), show(filter, type, page, top)"
      >
        {{ n }}
      </button>
    </div>
  </v-container>
</template>

<script>
import "material-design-icons-iconfont/dist/material-design-icons.css";
import axiosMixin from "../mixins/axiosMixin";
import animePathsMixin from "../mixins/animePathsMixin";

export default {
  name: "Mangas",
  mixins: [axiosMixin, animePathsMixin],
  data() {
    return {
      table: [], // data from api
      type: null, // anime or manga
      filter: null, // top or genre or search
      page: 1, // start at first page
      top: null, // string for filter top
      genre: null, // number for filter genre
      search: null, // string from search bar for filter search
    };
  },
  methods: {
    //Checks if current filter is genres, creates a string of genres for selected item, add text with innerHTML
    showGenres(item) {
      if (this.filter === "genre") {
        let string = "Genres: ";
        for (let i = 0; i < item.genres.length; i++) {
          string +=
            '<a href="' +
            item.genres[i].url +
            '">' +
            item.genres[i].name +
            " </a>";
        }
        //Timeout because we need to create element and THEN do getElement...
        setTimeout(() => {
          let genreshow = document.getElementsByClassName("genres");
          for (let i = 0; i < genreshow.length; i++) {
            genreshow[i].innerHTML = string;
          }
        }, 1);
      }
    },
  },
};
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
  padding: 10px 15px 0 0;
}

* {
  box-sizing: border-box;
}

.card {
  height: 400px;
  display: flex;
  justify-content: center;
}

.cardText {
  padding-top: 8px;
  text-align: left;
}
</style>