<template>
    <div>
        <h1>Browse our catalog of mangas</h1>
        <p>Click any of our buttons to see a list.</p>

        <button @click="showChosen('http://localhost:8000/v3/top/anime/1/bypopularity')"></button>
        <div v-for="(anime, index) in result.data" :key="index"> 
            {{anime.title}}<br>
        </div>
    </div>
</template>

<script>
import { axiosMixin } from '../mixins/axiosMixin.js'

export default {
    name: "Mangas",
    mixins: [axiosMixin],
    data () {
        return {
            result: []
        }
    }
}

</script>

<style>
</style>