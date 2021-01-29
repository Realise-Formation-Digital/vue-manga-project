import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Mangas from '@/components/Mangas'
import Home from '@/components/Home'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: './home',
    component: Home
  },
  {
    path: './mangas',
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
