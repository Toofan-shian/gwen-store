<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="9"
        lg="7"
        offset-sm="3"
        offset-lg="4"
      >
      <h3 class="title ma-0">All Procuts</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class=""
        md="3"
        offset-lg="1"
        xs="12"
      >
        <sideBar/>
      </v-col>

      <v-col
        class=""
        cols="12"
        md="9"
        lg="7"
      >
        <productsDisplay/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import productsDisplay from '@/components/store/productsDisplay.vue';
import sideBar from '@/components/store/sideBar.vue';

export default {
  components: {
    productsDisplay,
    sideBar,
  }
}

</script>