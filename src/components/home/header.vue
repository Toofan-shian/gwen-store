<template>
  <v-sheet
    :height="sheetHeight"
    class=""
    elevation="1"
  >
    <v-container
      class=""
      fill-height
    >
      <v-row
        class=" justify-center"

      >
        <h1
          class=" display-4 hidden-md-and-down"
        >
          Welcome To Gwen-Shop
        </h1>
        <h1
          class=" display-3 hidden-sm-and-down hidden-lg-and-up"
        >
          Welcome To Gwen-Shop
        </h1>
        <h1
          class=" display-1 hidden-md-and-up"
        >
          Welcome To Gwen-Shop
        </h1>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '200px'
        case 'sm': return '300px'
        case 'md': return '300px'
        case 'ls': return '300px'
        case 'xl': return '350px'
      }
      return '300px'
    }
  }
}
</script>

<style scoped>
.border {
  border: 1px solid red;
}
.border-blue {
  border: 1px solid blue;
}
</style>