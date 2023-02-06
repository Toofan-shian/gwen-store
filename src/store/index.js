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
      const {productIdx, quantity} = payload;
      const cartIdx = state.cart.findIndex(item => {
        return item.productIdx = productIdx
      })
      if (cartIdx == -1) {
        state.cart.push({productIdx, quantity})
      } else {
        state.cart[cartIdx].quantity += 1
      }
    },
    updateSnackbar(state, setting) {
      state.snackBar = {
        ...state.snackBar,
        ...setting
      }
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('addToCart', payload)
    },
    updateSnackbar(context, payload) {
      context.commit('updateSnackbar', payload)
    }
  },
  modules: {
  }
})
