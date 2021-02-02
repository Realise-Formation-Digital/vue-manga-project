<template>
  <!-- Parent div of the template -->
  <v-container>
    <h2>BROWSE OUR CATALOG</h2>
    <h2>MARK YOUR FAVORITES MANGAS</h2>
    <h2>PREPARE AND EXPORT YOUR READING LIST</h2>
    <p class="selection__instructions">
      Click to display the corresponding titles.
    </p>

    <div class="selection__type selection__type--general">
      <button class="btn btn--general" @click="type = 'anime'">Anime</button>
      <button class="btn btn--general" @click="type = 'manga'">Manga</button>
    </div>

    <!-- Hidden if didnt chose anime or manga -->
    <!-- LOOP NEEDED -->
    <div v-if="type !== null" class="selection__type selection__type--general">
      <!-- Buttons which offset the function to display corresponding items fetched from the API -->
      <!-- Pass 4 parameters in function show() to create API url.  -->
      <!-- Change variable "filter" for popup parameters -->
      <button
        @click="
          (filter = 'top'), (top = 'bypopularity'), show(filter, type, 1, top)
        "
        class="btn btn--general"
      >
        Popular
      </button>
    </div>

    <!-- Same as above but for genres selection -->
    <div v-if="type !== null" class="selection__type selection__type--genre">
      <h3>SELECTION BY GENRE</h3>
      <button
        @click="(filter = 'genre'), (genre = 1), show(filter, type, genre, 1)"
        class="btn btn--genre"
      >
        Action
      </button>
    </div>

    <!-- Generation of a grid of cards when pressing any button -->
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
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
                height="250px"
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

                  <div v-if="filter === 'genre'" class="cardText">
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
      v-if="filter === 'genre'"
      class="selection__type selection__type--general"
    >
      <button
        v-for="n in 25"
        :key="n"
        class="btn btn--general"
        @click="(page = n), show(filter, type, genre, page)"
      >
        {{ n }}
      </button>
    </div>

    <div
      v-if="filter === 'top'"
      class="selection__type selection__type--general"
    >
      <button
        v-for="n in 25"
        :key="n"
        class="btn btn--general"
        @click="(page = n), show(filter, type, page, top)"
      >
        {{ n }}
      </button>
    </div>
  </v-container>
</template>


<script>
import "material-design-icons-iconfont/dist/material-design-icons.css"; // importing because with CLI no default HTML in /src
import axiosMixin from "../mixins/axiosMixin";
import animePathsMixin from "../mixins/animePathsMixin";
export default {
  name: "Mangas",
  mixins: [axiosMixin, animePathsMixin],
  data() {
    return {
      table: [], // data from api
      like: "LIKE",
      type: null, // anime or manga
      filter: null, // top or genre
      page: 1, // start at first page
      top: null, // parameter for filter top
      genre: null, // parameter for filter genre
    };
  },
  methods: {
    makeFavorite() {
      console.log("New favorite added");
      this.like = "LIKED";
    },
    showDialog() {
      console.log(this.genres[0]);
    },
    hideDialog() {},
    changeType(type) {
      this.type = type;
    },
    //Checks if current filter if genres, creates a string of genres for selected item, add text with innerHTML
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