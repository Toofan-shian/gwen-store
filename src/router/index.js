import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Store from '../views/store'
import Cart from '../views/cart'

Vue.use(VueRouter)

const routes = [
{
  name: 'home',
  path: '/',
  component: Home
},
{
  name: 'store',
  path: '/store',
  component: Store,
},
{
  name: 'cart',
  path: '/cart',
  component: Cart,
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
