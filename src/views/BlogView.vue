<template>
  <div class="v-blog">
    <BlogTop
      :categories="categories"
      :mainCard="mainCards[0]"
      :videoCards="videoCards"
      :popularCards="popularCards"
    />
    <BlogCards :cards="mainCards.slice(1, 7)" />
    <DesignCall />
    <BlogCards
      :cards="mainCards.slice(7)"
      subscribe
      :showBtn="currentPage < pages"
      @show-more="showMore"
    />
    <!-- <ArticleSet /> -->
    <QuizPreview type="kitchens" />
  </div>
</template>

<script>
import BlogCards from '../components/BlogCards.vue'
// import ArticleSet from '../components/ArticleSet.vue'
import BlogTop from '../components/BlogTop.vue'
import DesignCall from '../components/DesignCall.vue'
import QuizPreview from '../components/QuizPreview.vue'
import api from '../api'

const categories = [
  { title: 'Все статьи', value: 'all' },
  { title: 'Лайфхаки', value: 'layfxaki' },
  // { title: 'Спорные вопросы', value: 'spornye-voprosy' },
  { title: 'От эксперта', value: 'ot-eksperta' },
  // { title: 'Планировки', value: 'planirovki' },
  { title: 'Идеи для кухни', value: 'idei-dlya-kukhni' },
  { title: 'Кухня в деле', value: 'kukhnya-v-dele' },
  { title: 'Видео', value: 'videos', bold: true },
  { title: 'Популярное', value: 'populyarnoe', bold: true }
]

export default {
  name: 'BlogView',
  components: {
    BlogTop,
    BlogCards,
    DesignCall,
    // ArticleSet,
    QuizPreview
  },
  data() {
    return {
      categories: categories,
      mainCards: [],
      videoCards: [],
      popularCards: [],
      pages: 1,
      currentPage: 1
    }
  },
  async created() {
    await this.initBlog(this.$route)
  },
  async beforeRouteUpdate(to) {
    this.currentPage = 1
    await this.initBlog(to)
  },
  methods: {
    async initBlog(route) {
      const response = await api.loadCards(route)
      this.mainCards = response.goods
      this.videoCards = response.goods_video
      this.popularCards = response.goods_popular
      this.pages = response.pages
      this.setBreadCrumbs(route)
    },
    setBreadCrumbs(route) {
      const query = route.query
      let crumbs

      if (query.category) {
        const categoryTitle = categories.find(
          i => i.value === query.category
        ).title
        crumbs = [{ path: '/blog', title: 'Блог' }, { title: categoryTitle }]
      } else {
        crumbs = [{ title: 'Блог' }]
      }

      this.$store.commit('setBreadCrumbs', crumbs)
    },

    async showMore() {
      this.currentPage++
      const response = await api.loadCards({
        ...this.$route,
        query: { ...this.$route.query, page: this.currentPage }
      })
      this.mainCards = [...this.mainCards, ...response.goods]
    }
  }
}
</script>

<style lang="scss">
.v-blog {
  .blog-top {
    margin-top: 25px;
  }

  .blog-cards {
    margin-top: 45px;
  }

  .design-call {
    margin-top: 55px;
  }

  .article-set {
    margin-top: 50px;
  }

  .quiz-preview {
    margin-top: 20px;
  }

  @include media(md) {
    .blog-top {
      margin-top: 40px;
    }

    .blog-cards {
      margin-top: 30px;
    }

    .design-call {
      margin-top: 80px;
      margin-bottom: 65px;
    }

    .article-set {
      margin-top: 80px;
    }

    .quiz-preview {
      margin-top: 80px;
    }
  }

  @include media(lg) {
    .blog-top {
      margin-top: 30px;
    }

    .blog-cards {
      margin-top: 55px;
    }

    .design-call {
      margin-top: 170px;
      margin-bottom: 110px;
    }

    .quiz-preview {
      margin-top: 95px;
    }
  }

  @include media(xl) {
    .blog-top {
      margin-top: 60px;
    }

    .blog-cards {
      margin-top: 85px;
    }

    .design-call {
      margin-top: 160px;
      margin-bottom: 95px;
    }

    .article-set {
      margin-top: 90px;
    }

    .quiz-preview {
      margin-top: 125px;
    }
  }
}
</style>
