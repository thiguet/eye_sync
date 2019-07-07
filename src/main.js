import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import routes from "@/routes.js";

Vue.config.productionTip = false

const router = new Router({
  linkExactActiveClass: 'active-link',
  routes
})

Vue.use(Router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
