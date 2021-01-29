
<template>
   <div>
<div class ="divv" v-for="(item, index) in table" :key="index" @click="show(item)">
  <img class="image" :src="item.image_url">
  <p>{{item.title}}</p>
</div>
</div>
</template>

<script>

// Make a request for a user with a given ID
export default {
  name: 'beers',
  props: {
    messageToShow: Object
  },
  data() {
    return {
      table: this.getTable(),
      selectedItem: null
    }
  },
  methods: {
async getTable() {
  try{
    const axios = require('axios');
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
    width: 235px;
    height: 230px;
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
    width: 235px;
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

