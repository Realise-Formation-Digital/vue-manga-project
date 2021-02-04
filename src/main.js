import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueRouter from 'vue-router'
// Importing parts
// import Footer from '@components/Footer'.vue

// Importing pages
import Browse from '@/components/Browse'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import 'vuetify/dist/vuetify.min.css';

// Vue.use(Vuetify)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/browse',
    component: Browse
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