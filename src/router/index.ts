import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { components } from '../config'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  }
] as RouteConfig[]

components.forEach(name => {
  routes.push({
    path: `/${name}`,
    component: () => import(`../views/${name}/index.vue`)
  })
})

const router = new VueRouter({
  routes
})

export default router
