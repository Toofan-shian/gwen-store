<template>
  <div>
    <v-overlay :value="overlay" class="flex-culomn" v-if="this.overlay">
      <v-row
        class="flex-column justify-center align-center"
      >
        <v-progress-circular
          indeterminate
          class="mb-8"
          size="50"
        />
        <p class="text-center display-1">Order Processing...</p>
      </v-row>
    </v-overlay>

    <v-container  class="" v-else>
      <v-row class="my-8">
        <v-col
          class=""
          sm="8"
          offset-sm="2"
          lg="6"
          offset-lg="3"
        >
          <h2
            class="display-1 text-center"
          >
            Thanks For Shopping<br/>Your Order Will Be Shipped Soon
          </h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
    }
  },
  beforeMount() {
    this.overlay = true;
  },
  mounted() {
    setTimeout(() => {
      this.overlay = false;
    }, 3000);
  }
}
</script>