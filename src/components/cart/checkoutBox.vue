<template>
  <v-card
    outlined
    class="pa-2 my-2"
    
  >
    <v-card-text>
      <div
        v-for="(value, key) in orderSummery"
        :key="value"
      >
        <v-row
          class="justify-space-between mx-0 my-3 text-subtitle-1"
        >
          <span>{{ key }}</span>
          <span>{{ value }}</span>
        </v-row>
        <v-divider width="100%"></v-divider>
      </div>
      <v-row
        class="justify-space-between mx-0 my-3 text-subtitle-1 font-weight-black"
      >
        <span>Estimated Total</span>
        <span>${{ total }}</span>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn
        block
        color="primary mb-2"
        to="/checkout"
      >
        Checkout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      total: 380,
      orderSummery: {
        SubTotal: `$${5000}`,
        Shipping: 'Free',
        Tax: '$0.00'
      }
    }
  }
}

</script>