<template>
  <v-container class="border-b ">
    <v-row>
      <v-col
        class=""
        sm="7"
        md="6"
        offset-md="1"
        lg="6"
        offset-lg="1"
      >
        <productList/>
      </v-col>
      <v-col
        class=""
        sm="5"
        md="4"
      >
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