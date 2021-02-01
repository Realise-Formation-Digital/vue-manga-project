export default {
    methods: {
        hello() {
            console.log("Hello and good job")
        },
        async show(url, top) {
            try {
            const axios = require ('axios')
            const response = await axios.get(url) 
            top === true ? this.result = response.data.top : this.result = response.data.anime
            console.log("Data fetched and displayed on page");
            } catch (e) {
                console.error(e)
            }
        },
        async miyazaki() {
            try {
            const axios = require ('axios')
            const response = await axios.get('https://api.jikan.moe/v3/person/1870') 
            this.result = response.data.anime_staff_positions.anime
            console.log("Data fetched and displayed on page" + this.result);
            } catch (e) {
                console.error(e)
            }
        }
    }
}