import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueRouter from 'vue-router'

import Mangas from '@/components/Mangas'
import Home from '@/components/Home'

Vue.config.productionTip = false

new Vue({
render: h => h(App),
vuetify
}).$mount('#app');


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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  render: h => h(App),
  router: router, // la valeur doit être le nom de la constante de l'objet VueRouter instancié
}).$mount('#app')
