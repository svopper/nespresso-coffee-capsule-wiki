import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Content from './components/Content'

import { store } from './store'

Vue.use(VueRouter)

const routes = [
  {path: '/capsules/:capsuleId', component: Content},
  {path: '*', redirect: '/capsules/1'}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
