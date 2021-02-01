<!-- POPUP -->
<template>
    <div>
        <v-dialog
        transition="dialog-top-transition"
        max-width="450"
        >
        <template v-slot:activator="{  on, attrs }">
            <v-img
            :src="anime.image_url"
            alt="anime.title"
            height="250px"
            v-bind="attrs"
            v-on="on"
            ></v-img> 
        </template>

        <template v-slot:default="dialog">
            <v-card>
            <v-toolbar
                color="primary"
                dark
            >
            {{anime.title}}
            </v-toolbar>
            <v-card-text class = "card">
                <img class = "image2" :src="anime.image_url">
                <div class = "cardText">
                <b>Type:</b> {{anime.type}}
                <br>
                <b>Fans from myanimelist.com:</b> {{anime.members}}
                <br>
                <b>Score:</b> {{anime.score}}/10
                <br>
                <a 
                    :href= anime.url>
                    Read more
                </a>
                </div>
            </v-card-text>

            <v-card-actions  
                class="justify-end"
                >
                <v-btn
                text
                @click="dialog.value = false"
                >
                Close
                </v-btn> 
            </v-card-actions>
            </v-card>
        </template>
        </v-dialog>         
    </div>
</template>

<script>
export default {
    name: "Popup"
}
</script>

<style>

</style>