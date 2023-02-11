<template>
  <v-card class="mx-4 my-2" width="100%" outlined>
    <div class="d-flex">
      <v-img
        :src="product.image"
        width="120"
        height="120"
        max-width="120"
      ></v-img>

      <div class="d-flex flex-column ">
        <v-card-title>
          {{ product.name }}
        </v-card-title>
        <v-card-subtitle>
          ${{ product.price }}
        </v-card-subtitle>

        <v-btn
          class="pa-0 ml-7"
          text
          small
          plain
          icon
        >
          remove
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['product']
}
</script>