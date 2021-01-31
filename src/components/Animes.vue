<template>

    <div> <!-- Parent div of the template -->
        <p>In preparation! Check Manga instead.</p>
    </div>
</template>


<script>
  import 'material-design-icons-iconfont/dist/material-design-icons.css' // importing because with CLI no default HTML in /src
  import axiosMixin from "../mixins/axiosMixin"

  export default {
    name: "Animes",
    mixins: [axiosMixin],
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