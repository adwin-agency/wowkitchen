<template>
  <div class="v-sizing">
    <SizingTop />
    <SizingMain />
    <Steps />
    <RatedReviews :cards="reviews" />
  </div>
</template>

<script>
import RatedReviews from '../components/RatedReviews.vue'
import SizingMain from '../components/SizingMain.vue'
import SizingTop from '../components/SizingTop.vue'
import Steps from '../components/Steps.vue'
import api from '../api'

export default {
  name: 'SizingView',
  components: {
    SizingTop,
    SizingMain,
    Steps,
    RatedReviews
  },
  data() {
    return {
      reviews: []
    }
  },
  async created() {
    const reviewsResponse = await api.loadCards({ name: 'reviews' })
    this.reviews = reviewsResponse.reviews.slice(0, 4)
  }
}
</script>

<style lang="scss">
.v-sizing {
  .rated-reviews {
    margin-top: 85px;
    margin-bottom: 50px;
  }

  @include media(md) {
    .rated-reviews {
      margin-top: 130px;
      margin-bottom: 55px;
    }
  }

  @include media(lg) {
    .rated-reviews {
      margin-top: 140px;
      margin-bottom: 120px;
    }
  }

  @include media(xl) {
    .rated-reviews {
      margin-top: 170px;
      margin-bottom: 130px;
    }
  }
}
</style>
