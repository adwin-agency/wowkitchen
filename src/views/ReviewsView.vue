<template>
  <div class="v-reviews">
    <ReviewsTop
      :categories="categories"
      :reviews="reviews.slice(0, 6)"
    />
    <ReviewsMain
      :reviews="reviews.slice(6, count)"
      :showBtn="reviews.length > count"
      @show-more="showMore"
    />
    <Design />
  </div>
</template>

<script>
import Design from '../components/Design.vue'
import ReviewsMain from '../components/ReviewsMain.vue'
import ReviewsTop from '../components/ReviewsTop.vue'
import api from '../api'

const categories = [
  { title: 'Все статьи', value: 'all' },
  { title: 'Кухни', value: 'kitchens' },
  { title: 'Шкафы', value: 'closets' }
]

export default {  
  name: 'ReviewsView',
  components: {
    ReviewsTop,
    ReviewsMain,
    Design
  },
  data() {
    return {
      categories: categories,
      reviews: [],
      count: 11
    }
  },
  async created() {
    const response = await api.loadCards(this.$route)
    this.reviews = response.reviews
  },
  async beforeRouteUpdate(to) {
    const response = await api.loadCards(to)
    this.reviews = response.reviews
  },
  methods: {
    async showMore() {
      this.count += 6
    }
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
