import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '@/views/Index'
import List from '@/views/List'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
