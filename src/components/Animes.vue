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
      <button class="btn btn--general" @click="(type = 'anime'), (table = [])">
        Anime
      </button>
      <button class="btn btn--general" @click="(type = 'manga'), (table = [])">
        Manga
      </button>
    </div>

    <!-- Hidden if didnt chose anime or manga -->
    <div
      v-if="type === 'anime'"
      class="selection__type selection__type--general"
    >
      <h3>SELECTION BY POPULARITY</h3>
      <!-- Buttons which offset the function to display corresponding items fetched from the API -->
      <!-- Pass 4 parameters in function show() to create API url.  -->
      <!-- Change variable "filter" for popup parameters -->
      <button
        v-for="(item, index) in anime_subtype"
        :key="index"
        @click="
          (filter = 'top'),
            (top = item.url),
            (genre = null),
            show(filter, type, 1, top)
        "
        class="btn btn--general"
      >
        {{ item.name }}
      </button>
    </div>

    <div
      v-if="type === 'manga'"
      class="selection__type selection__type--general"
    >
      <button
        v-for="(item, index) in manga_subtype"
        :key="index"
        @click="showTop(item)"
        class="btn btn--general"
      >
        {{ item.name }}
      </button>
    </div>

    <!-- Same as above but for genres selection -->
    <div v-if="type !== null" class="selection__type selection__type--genre">
      <h3>SELECTION BY GENRE</h3>
      <button
        v-for="(item, index) in genres"
        :key="index"
        @click="showGenre(index)"
        class="btn btn--genre"
      >
        {{ item }}
      </button>
    </div>

    <v-form
      v-if="type !== null"
      data-app
      class="selection__type selection__type--genre"
    >
      <v-container>
        <v-text-field
          v-model="message"
          clearable
          label="What are you looking for?"
          type="text"
        >
          <template v-slot:append>
            <v-btn @click="showSearch(message)"> SEARCH </v-btn>
          </template>
        </v-text-field>
      </v-container>
    </v-form>

    <!-- Current search settings -->
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
      like: "LIKE", //?
      type: null, // anime or manga
      filter: null, // top or genre
      page: 1, // start at first page
      top: null, // parameter for filter top
      genre: null, // parameter for filter genre
      search: null,
    };
  },
  methods: {
    makeFavorite() {
      console.log("New favorite added");
      this.like = "LIKED";
    },

    //Clear filter, make a new one and launch function show
    showSearch(message) {
      this.top = null;
      this.genre = null;
      this.search = message;
      this.filter = "search";
      this.show(this.filter, this.type, this.search, 1);
    },

    // same^^
    showGenre(index) {
      (this.top = null), (this.search = null);
      (this.genre = index + 1),
        (this.filter = "genre"),
        this.show(this.filter, this.type, this.genre, 1);
    },

    // same^^
    showTop(item) {
      this.search = null;
      this.genre = null;
      (this.top = item.url),
        (this.filter = "top"),
        this.show(this.filter, this.type, 1, this.top);
    },

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