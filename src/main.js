import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export

Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Mangas from './components/Mangas.vue'
import HomePage from './components/HomePage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/mangas', component: Mangas }
  ]

  const router = new VueRouter({
    routes: routes // short for `routes: routes`
  })


new Vue({
    router,
render: h => h(App),
vuetify
}).$mount('#app');