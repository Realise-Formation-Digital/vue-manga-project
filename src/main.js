import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export
import { routes } from './routes'

// import 'vuetify/dist/vuetify.min.css';

// Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  render: h => h(App),
  vuetify,
  router: router, // la valeur doit être le nom de la constante de l'objet VueRouter instancié
}).$mount('#app')