<template>
  <div class="v-reviews">
    <ReviewsTop />
    <ReviewsMain />
    <Design />
  </div>
</template>

<script>
import Design from '../components/Design.vue'
import ReviewsMain from '../components/ReviewsMain.vue'
import ReviewsTop from '../components/ReviewsTop.vue'

export default {  
  name: 'ReviewsView',
  components: {
    ReviewsTop,
    ReviewsMain,
    Design
  }
}
</script>
