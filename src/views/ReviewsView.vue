<template>
  <div class="v-reviews">
    <ReviewsTop :reviews="reviews" />
    <ReviewsMain :reviews="reviews" />
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
  },
  data() {
    return {
      reviews: []
    }
  },
  async created() {
    const response = await fetch(`http://wowkitchen.beget.tech/local/templates/wow/api/reviews.php`)
    const responseJson = await response.json()

    this.reviews = responseJson.reviews

    console.log(responseJson.reviews)
  }
}
</script>

<style lang="scss">
.v-reviews {
  .reviews-top {
    margin-top: 20px;
  }

  .reviews-main {
    margin-top: 15px;
  }

  @include media(md) {
    .reviews-top {
      margin-top: 40px;
    }

    .reviews-main {
      margin-top: 55px;
    }

    .design {
      margin-top: 80px;
      margin-bottom: 60px;
    }
  }

  @include media(lg) {
    .reviews-main {
      margin-top: 75px;
    }

    .design {
      margin-top: 90px;
      margin-bottom: 100px;
    }
  }

  @include media(xl) {
    .design {
      margin-bottom: 120px;
    }
  }
}
</style>
