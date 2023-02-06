<template>
  <v-card class="">
    <v-img :src="product.image" width="200" height="200"></v-img>
    <v-card-title>
      {{ product.name }}
    </v-card-title>
    <v-card-subtitle>
      ${{ product.price }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        outlined
        color="success"
        @click="addItemToCart({productIdx: i})"
      >
        <v-icon small left>mdi-plus</v-icon>
        add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: {
    product: Object,
    addItemToCart: Function,
    i: Number,
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