import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export

// Importing parts
// import Footer from '@components/Footer'.vue

// Importing pages
import Mangas from '@/components/Mangas'
import Animes from '@/components/Animes'
import Home from '@/components/Home'
import Contact from '@/components/Contact'

// import 'vuetify/dist/vuetify.min.css';

// Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/mangas',
    component: Mangas
  },
  {
    path: '/animes',
    component: Animes
  },
  { 
    path: '/contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  render: h => h(App),
  vuetify,
  router: router, // la valeur doit être le nom de la constante de l'objet VueRouter instancié
}).$mount('#app')