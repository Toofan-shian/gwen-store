<template>
  <v-container class="border">
    <v-row>
      <v-col
        class="border"
        sm="8"
        md="5"
        offset-md="2"
        lg="4"
        offset-lg="3"
      >
        <productList/>
      </v-col>
      <v-col
        class="border"
        sm="4"
        md="3"
      >
        <checkoutBox/>
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