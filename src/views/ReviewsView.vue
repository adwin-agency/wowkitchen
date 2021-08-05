<template>
  <div class="v-reviews">
    <ReviewsTop
      :categories="categories"
      :reviews="reviews.slice(0, 6)"
    />
    <ReviewsMain
      :reviews="reviews.slice(6)"
      :showBtn="currentPage < pages"
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
      pages: 1,
      currentPage: 1
    }
  },
  async created() {
    const response = await api.loadCards(this.$route)
    this.reviews = response.reviews
    this.pages = response.pages
    // this.setBreadCrumbs(this.$route)
  },
  async beforeRouteUpdate(to) {
    const response = await api.loadCards(to)
    this.reviews = response.reviews
    this.pages = response.pages
    this.currentPage = 1
    // this.setBreadCrumbs(to)
  },
  methods: {
    setBreadCrumbs(route) {
      const query = route.query
      let crumbs

      if (query.category) {
        const categoryTitle = categories.find(i => i.value === query.category).title
        crumbs = [{ path: '/reviews', title: 'Отзывы' }, { title: categoryTitle }]
      } else {
        crumbs = [{ title: 'reviews' }]
      }
    
      this.$store.commit('setBreadCrumbs', crumbs)
    },

    async showMore() {
      this.currentPage++
      const response = await api.loadCards(this.$route, this.currentPage)
      this.reviews = [...this.reviews, ...response.reviews]
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
