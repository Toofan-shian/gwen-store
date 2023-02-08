<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>
        Gwen-Shop
      </v-toolbar-title>
      <span class="ml-8">{{ breakPointName }}</span>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        v-if="isXs"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-items v-else>
        
        <v-btn text to="/">
          <v-icon left>mdi-home</v-icon>
          Home
        </v-btn>
  
        <v-btn text to="store">
          <v-icon left>mdi-store</v-icon>
          Store
        </v-btn>

        <v-btn text to="cart">
          <v-icon left>mdi-cart</v-icon>
          Cart
        </v-btn>
        
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      right
      absolute
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :to="link.route"
          :key="link.title"
        >
          <v-list-item-icon>
            <v-icon left>
              {{ link.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ link.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {title: 'Home', route: '/', icon: 'mdi-home'},
        {title: 'Store', route: '/store', icon: 'mdi-store'},
        {title: 'Cart', route: '/cart', icon: 'mdi-cart'}
      ]
    }
  },
  computed: {
    breakPointName() {
      return this.$vuetify.breakpoint.name
    },
    isXs() {
      let breakPoint = this.$vuetify.breakpoint.name;
      if (breakPoint == 'xs') {
        return true;
      } return false;
    }
  }
}
</script>