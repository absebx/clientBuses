import Vue from 'vue'
import App from './App.vue'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import VueRouter from 'vue-router'
import Personas from './components/Personas.vue';
import Buses from './components/Buses.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/personas', component: Personas },
  { path: '/buses', component: Buses }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
