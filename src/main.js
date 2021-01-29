import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
render: h => h(App),
vuetify
}).$mount('#app');