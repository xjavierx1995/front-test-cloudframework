import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home/:id',
    name: 'Home',
    component: Home
  },
  {
    path: '/form/:id',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  { 
    path: "*",
    name: '404',
    component:  () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
