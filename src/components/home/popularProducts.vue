<template>
  <v-container class="mb-16">

    <v-row class="mt-1">
      <v-col class="" lg="8" offset-lg="2" sm="10" offset-sm="1">
        <h3 class="">
          Popular Products
          <v-btn
            color="primary"
            to="store"
            text
            small
          >
            view all
          </v-btn>
        </h3>
      </v-col>
    </v-row>


    <v-row>
      <v-col class="" lg="8" offset-lg="2" sm="10" offset-sm="1">
        <v-row>
          <v-col
            v-for="product in this.$store.state.products.slice(0,3)"
            :key="product.name"
            class="d-flex justify-center"
            md="4"
          >
            <VerticalProduct
              :product="product"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalProduct from '../cards/verticalProduct.vue';

export default {
  components: {
    VerticalProduct,
  },
  computed: {
    printBreak() {
      let name = this.$vuetify.breakpoint.name
      return name
    }
  }
}
</script>

<style scoped>
.border {
  border: 1px solid red;
}
.border-b {
  border: 1px solid blue;
}
</style>