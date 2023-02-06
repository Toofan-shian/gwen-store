<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view/>
    </v-main>
    <v-snackbar
      v-model="$store.state.snackBar.show"
      :top="true"
      :right="true"
      :color="$store.state.snackBar.color"
      :timeout="60000"
      :multiLine="true"
      app
    >
      <v-row justify="space-between" align="center">
        <h3 class="subtitle-1 pl-2">{{ $store.state.snackBar.massage }}</h3>
        <v-btn
          class=""
          text
          dark
          @click="$store.dispatch('updateSnackbar', {show: false})"
        >
          Close
        </v-btn>
      </v-row>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar,

  },

  data: () => ({
    
  }),
  computed: {

  }
};
</script>

<style>
.border {
  border: 1px solid red;
}
.border-b {
  border: 1px solid blue;
}
</style>
