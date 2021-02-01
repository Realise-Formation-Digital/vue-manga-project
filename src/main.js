import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export
import { routes } from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'


const VueScrollTo = require('vue-scrollto')

// Vue.use(Vuetify)
Vue.use(VueScrollTo)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  render: h => h(App),
  vuetify,
  axios,
  router: router, // la valeur doit être le nom de la constante de l'objet VueRouter instancié
}).$mount('#app')