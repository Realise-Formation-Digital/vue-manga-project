import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export



// Importing parts
// import Footer from '@components/Footer'.vue

// Importing pages
import Animes from '@/components/Animes'
import Home from '@/components/Home'
import Contact from '@/components/Contact'

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
vuetify
}).$mount('#app');