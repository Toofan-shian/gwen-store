<template>
  <v-container class="">
    <v-row>
      <v-col
        class=""
        sm="7"
        md="6"
        offset-md="1"
        lg="6"
        offset-lg="1"
      >
        <v-row>
          <h3 class="mx-4 my-8  text-h4 text-sm-h5 text-md-h4">Your Cart</h3>
        </v-row>
        <productList/>
      </v-col>
      <v-col
      class=""
      sm="5"
      md="4"
      cols="12"
      >
        <v-row>
          <h3 class="mx-4 my-8  text-h4 text-sm-h5 text-md-h4">Order Summary</h3>
        </v-row>
        <checkoutBox class=""/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import checkoutBox from '@/components/cart/checkoutBox.vue';
import productList from '@/components/cart/productList.vue';

export default {
  components: {
    checkoutBox,
    productList,
  }  
}

</script>