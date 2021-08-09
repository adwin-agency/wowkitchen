<template>
  <div class="v-installing">
    <ServiceTop />
    <ServiceMain />
    <Steps />
    <RatedReviews :cards="reviews" />
  </div>
</template>

<script>
import RatedReviews from '../components/RatedReviews.vue'
import ServiceMain from '../components/ServiceMain.vue'
import ServiceTop from '../components/ServiceTop.vue'
import Steps from '../components/Steps.vue'
import api from '../api'

export default {
  name: 'InstallingView',
  components: {
    ServiceTop,
    ServiceMain,
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
.v-installing {
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
