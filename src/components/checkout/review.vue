<template>
  <div>
    <v-list disabled dense>
      <v-subheader class="title">Review Order</v-subheader>

      <v-list-item-group color="primary">
        <v-list-item
          v-for="(value, key) in data"
          :key="key"
          
        >
          <v-list-item-content>
            <v-list-item-title>
                <span class="mr-6">{{ key }}: </span>
                <span>{{ value }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-row
      class="justify-end ma-3"
    >
      <v-btn
        text
        class="mr-3"
        @click="previous"
      >
        Go Back
      </v-btn>

      <v-btn
        color="primary"
        @click="submitOrder"
      >
        Submit
      </v-btn>
    </v-row>
  </div>
</template>

<script>

export default {
  props: {
    data: Object,
    previous: Function,
    submitOrder: Function
  }
}
</script>