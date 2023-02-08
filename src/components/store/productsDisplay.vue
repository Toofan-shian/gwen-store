<template>
  <div>
    <!-- <h3 class="title">All Procuts</h3> -->
    <v-row>
     <v-col
       v-for="(product, i) in $store.state.products"
       :key="product.name"
       class="d-flex justify-center"
       sm="6"
       md="4"
       cols="12"
     >
       <VerticalProduct
        :product="product"
        :addItemToCart="addItemToCart"
        :i="i"
       />
     </v-col>
    </v-row>
  </div>
</template>

<script>
import VerticalProduct from '../cards/verticalProduct.vue';


export default {
  components: { VerticalProduct },
  methods: {
    addItemToCart(itemIdx, quantity = 1) {
      this.$store.dispatch('addToCart', {itemIdx, quantity})
      this.$store.dispatch('updateSnackbar', {show: true})
    }
  }
}
</script>

<style scoped>

</style>