
<template>
   <div>
<div class ="divv" v-for="(item, index) in table" :key="index" @click="show(item)">
  <img class="image" :src="item.image_url">
  <h4>{{item.title}}</h4>
</div>

<div data-app>
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{  on, attrs }">
        <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          ></v-btn> 
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the top</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
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

show(item) { 
  this.selectedItem = item;
  alert(this.selectedItem.title)
  //("Name: " + item.name + "\nTagline: " + item.tagline + "\nFirst brewed: " + item.first_brewed + "\nDescription: " + item.description);
},

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
    height: 270px;
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

* {
  box-sizing: border-box;
}

</style>

