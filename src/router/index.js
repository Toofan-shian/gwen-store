import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Store from '../views/store'
import Cart from '../views/cart'
import Checkout from '../views/checkout'
import thankYou from '../views/thankYou'

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
},
{
  name: 'checkout',
  path: '/checkout',
  component: Checkout
},
{
  name: 'thankYou',
  path: 'thank-you',
  component: thankYou,
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
