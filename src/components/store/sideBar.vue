<template>
  <div>
    <v-sheet
      elevation="4"
      class="pa-2"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-radio-group
        v-model="price"
      >
        <template
          v-slot:label
        >
          <h4 class="subtitle-1">Filter Price</h4>
        </template>

        <v-radio
          v-for="p in prices"
          :key="p"
          :label="p"
          :value="p"
        >
        </v-radio>
      </v-radio-group>
    </v-sheet>

    <v-expansion-panels v-else>
      <v-expansion-panel>

        <v-expansion-panel-header class="px-4 py-0">
          <h4 class="subtitle-1">Filter Price</h4>
        </v-expansion-panel-header>
  
        <v-expansion-panel-content>
            <v-radio-group
              v-model="price"
              row
            >
              <v-radio
                v-for="p in prices"
                :key="p"
                :label="p"
                :value="p"
              >
              </v-radio>
            </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: [
        'Any',
        'Under $50',
        '$50 to $100',
        '$100 to $500',
        'Over $500'
      ],
      price: 'Any'
    }
  }
}
</script>

<style scoped>

</style>