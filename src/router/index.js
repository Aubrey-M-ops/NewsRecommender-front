import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: homepage
    }
  ]
})
