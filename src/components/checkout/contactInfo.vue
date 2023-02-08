<template>
  <div>
    <v-text-field
      required
      v-model="data.name"
      label="Name"
    />
    
    <v-text-field
      required
      v-model="data.email"
      label="Email"
    />
    
    <v-text-field
      required
      label="Phone Number"
      v-model="data.phone"
    />

    <v-row
      class="ma-2 justify-end"
    >
      <v-btn
        text
        @click="$router.replace({name: 'cart'})"
        class="mr-3"
      >
        Cancel
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
  }
}
</script>