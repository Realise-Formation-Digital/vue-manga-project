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
    // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      name: "John Doe",
      email: {
        value: "jo@hnd.oe",
        valid: true
      },
      features: ["Reactivity", "Encapsulation", "Data Binding"],
      selection: {
        member: "0",
        framework: "vue",
        features: []
      },
      message: {
        text: `Dear Mr. President,\n...`,
        maxlength: 255
      },
      submitted: false
    };
  },
  methods: {
    // submit form handler
    submit: function() {
      this.submitted = true;
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    //isEmail: function(value) {
      //return emailRegExp.test(value);
    //},
    // check or uncheck all
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }
  },
  watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value);
    }
  },
    router,
render: h => h(App),
vuetify
}).$mount('#app');