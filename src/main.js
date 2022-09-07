import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import routes from './route'
import store from './store/index'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode: "history"
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
