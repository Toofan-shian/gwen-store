<template>
  <v-card
    outlined
    class="pa-3"
  >
    <v-cart-title >
      <h3 class="title mb-2">Payment Detais</h3>
    </v-cart-title>
    <v-card-text>

      <span class="text-bold">Name</span>
      <v-text-field
        v-model="name"
        outlined
        clearable
      >
      </v-text-field>
      
      <span>Email</span>
      <v-text-field
        v-model="email"
        outlined
        clearable
      >
      </v-text-field>

      <h4 class="subtitle-1 font-weight-black">Total: ${{ total }}</h4>
    </v-card-text>

    <v-card-actions>
      <v-btn
        outlined
        color="success"
        
        
      >
        Complete Checkout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      total: 380,
      name: null,
      email: null
    }
  }
}

</script>