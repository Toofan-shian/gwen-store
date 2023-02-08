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

    <v-btn
      outlined
      color="success"
      max-width="100%"
      to="/checkout"
    >
      <span
        style="font-size: 0.80rem; padding: 4px; text-transform: capitalize;"
      >
        Checkout
      </span>
    </v-btn>

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