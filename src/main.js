import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export

Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Mangas from './components/Mangas.vue'
import Animes from './components/Animes.vue'
import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'
import Footer from './components/Footer.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/mangas', component: Mangas },
    { path: '/animes', component: Animes },
    { path: '/aboutus', component: AboutUs },
    { path: '/footer', component: Footer }
  ]

  const router = new VueRouter({
    routes: routes // short for `routes: routes`
  })


new Vue({
    router,
render: h => h(App),
vuetify
}).$mount('#app');