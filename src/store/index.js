import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products,
    cart: [],
    snackBar: {
      show: false,
      color: 'success',
      massage: 'Successfully Added To Cart'
    }
  },
  getters: {
  },
  mutations: {
    addToCart(state, payload) {
      
    }
  },
  actions: {
  },
  modules: {
  }
})
