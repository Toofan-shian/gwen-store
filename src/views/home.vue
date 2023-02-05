<template>
  <div>
    <Header/>
    <popularProducts/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/home/footer.vue'
import Header from '../components/home/header.vue'
import popularProducts from '@/components/home/popularProducts.vue';

export default {
  components: {
    Footer,
    Header,
    popularProducts,
  }
}

</script>