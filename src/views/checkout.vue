<template>
  <v-container class="border-b">
    <v-row>
      <v-col
        class="border"
        sm="8"
        offset-sm="2"
        
      >
        <v-stepper v-model="stepper">
          <v-stepper-header>
            <v-stepper-step
              step="1"
              :complete="stepper > 1"
            >
              Contact Info
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
            step="2"
            :complete="stepper > 2"
            >
            Shipping Info
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              step="3"
            >
              Review
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <contactInfo
                :next="next"
                :data="data"
              />
            </v-stepper-content>

            <v-stepper-content step="2">
              <shippingInfo
                :next="next"
                :previous="previous"
                :data="data"
              />
            </v-stepper-content>

            <v-stepper-content step="3">
              <review
                :data="data"
                :previous="previous"
                :submitOrder="submitOrder"
              />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import contactInfo from '@/components/checkout/contactInfo.vue';
import shippingInfo from '@/components/checkout/shippingInfo.vue';
import review from '@/components/checkout/review.vue';

export default {
  components: {
    contactInfo,
    shippingInfo,
    review,
  },
  data() {
    return {
      stepper: 1,
      data: {
        email: '',
        name: '',
        state: '',
        zip: '',
        phone: '',
        street: '',
      }
    }
  },
  methods: {
    next() {
      this.stepper += 1;
    },
    previous() {
      this.stepper -= 1;
    },
    submitOrder() {
      this.$router.replace({name: 'thankYou'})
    }
  }
}
</script>