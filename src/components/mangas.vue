
<template>
   <div>
<!-- <div class ="divv" v-for="(item, index) in table" :key="index" @click="show(item)">
  <img class="image" :src="item.image_url">
  <h4>{{item.title}}</h4>
</div> -->

<div class ="divv" v-for="(item, index) in table" :key="index" data-app>
      <v-dialog
        transition="dialog-top-transition"
        max-width="450"
      >
        <template v-slot:activator="{  on, attrs }">
        <v-img
            class = "image"
            :src=item.image_url
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
            <v-card-text class = "card">
              <img class = "image2" :src="item.image_url">
              <div class = "cardText">
                <b>Type:</b> {{item.type}}
                <br>
                <b>Volumes:</b> {{item.volumes}}
                <br>
                <b>Start date:</b> {{item.start_date}}
                <br>
                <b>End date:</b> {{item.end_date}}
                <br>
                <b>Members:</b> {{item.members}}
                <br>
                <b>Score:</b> {{item.score}}
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
      <h4>{{item.title}}</h4>
</div>
</div>
</template>

<script>

// Make a request for a user with a given ID
export default {
  name: 'mangas',
  props: {
    messageToShow: Object
  },
  async mounted(){
    this.table = this.getTable()
  },
  data() {
    return {
      table: [],
      selectedItem: null,
      dialog: false
    }
  },
  methods: {
async getTable() {
  try{
    const axios = require('axios');


//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//, {headers: {"Access-Control-Allow-Origin": "*"}}


    const result = await axios.get("https://api.jikan.moe/v3/top/manga/1/bypopularity");
    console.log(result.data);
    this.table = result.data.top
  }catch(e) {
    console.log("error")
  }
},

/* show(item) { 
  this.selectedItem = item;
  alert(this.selectedItem.title)
  //("Name: " + item.name + "\nTagline: " + item.tagline + "\nFirst brewed: " + item.first_brewed + "\nDescription: " + item.description);
}, */

  },

} 


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#first {  
    background-color:rgb(45, 71, 121);
    color: rgb(225, 235, 255);
}

.divv{
    width: 170px;
    height: 250px;
    vertical-align: top;
    display: inline-block;
    text-align: center;
    border: 1px solid lightgray;
  
    cursor: pointer;
}

.divv:hover {
  border: 1px solid rgb(0, 0, 0);
}

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
