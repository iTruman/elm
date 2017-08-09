// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */

// 配置路由
const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
]

const router = new VueRouter({
  routes
})

// 挂 载
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
