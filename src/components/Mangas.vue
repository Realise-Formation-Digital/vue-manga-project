<template>
    <div>
        <h1>Browse our catalog of mangas</h1>
        <p>Click any of our buttons to see a list.</p>

        <button @click="show">
            I am the dreaded ANIME button
        </button>

        <div v-for="(anime, i) in result" :key="i"> <!-- why is data written here ? -->
            {{ anime.title }}
        </div>
    </div>
</template>

<script>

export default {
    name: "Mangas",
    data () {
      return {
        result: []
      }
    },
    methods: {
        async show() {
            try {
            const axios = require ('axios')
            const url = 'https://api.jikan.moe/v3/top/anime/1/bypopularity'
            const reponse = await axios.get(url) /* why is data NOT written here ? */
            this.result = reponse.data.top
            console.log("Data fetched in result.data", this.result);
            console.log("Data in result.data.top", this.result);
            //console.log("Data in result.data.top[1].title", this.result.data.top[1].title);
        } catch (e) {
            console.error(e)
        }
        }
    }
}

</script>

<style>
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>