// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'

Vue.config.productionTip = false

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   ...App
// })

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: {App}
// })

// new Vue({
//   el: '#app',
//   router,
//   render (h) {
//     return h(App)
//   }
// })

// new Vue({
//   router,
//   ...App
// }).$mount('#app')

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
