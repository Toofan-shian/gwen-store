<template>
  <div>
    <v-text-field
      required
      v-model="data.street"
      label="Street Address"
    />
    
    <v-text-field
      required
      v-model="data.state"
      label="State"
    />
    
    <v-text-field
      required
      v-model="data.zip"
      label="Zip"
    />

    <v-row
      class="justify-end ma-2"
    >
      <v-btn
        text
        @click="previous"
        class="mr-3"
      >
        Go Back
      </v-btn>

      <v-btn
        color="primary"
        @click="next"
      >
        Continue
      </v-btn>
    </v-row>
  </div>
</template>

<script>

export default {
  props: {
    next: Function,
    data: Object,
    previous: Function,
  }
}
</script>