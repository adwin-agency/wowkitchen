<template>
  <div class="v-kitchens">
    <CatalogBanners
      type="kitchens"
      title="Кухни на заказ"
    />
    <Catalog
      type="kitchens"
      cardType="kitchen"
      switcher
      :filterGroups="filterGroups"
      :cards="cards"
      :showBtn="currentPage < pages"
      @show-more="showMore"
    />
    <Projects catalog />
    <QuizPreview type="kitchens" />
    <RatedReviews :cards="reviews" />
    <Steps />
    <PopularArticles
      :cards="articles"
      allBtn
    />
  </div>
</template>

<script>
import CatalogBanners from '../components/CatalogBanners.vue'
import Catalog from '../components/Catalog.vue'
import PopularArticles from '../components/PopularArticles.vue'
import RatedReviews from '../components/RatedReviews.vue'
import QuizPreview from '../components/QuizPreview.vue'
import Steps from '../components/Steps.vue'
import Projects from '../components/Projects.vue'
import api from '../api'

// const sortOptions = [{ title: 'Сначала дешёвые' }, { title: 'Сначала популярные' }, { title: 'Сначала дорогие' }, { title: 'Сначала новые' }]

const filterGroups = [
  {
    id: 'category',
    title: 'Планировка',
    items: [
      { title: 'Все', value: 'all' },
      { title: 'Угловые', value: 'uglovye', icon: 'kit1' },
      { title: 'Прямые', value: 'pryamye', icon: 'kit2' },
      { title: 'П-образные', value: 'p-obraznye', icon: 'kit3' },
      { title: 'С барной стойкой', value: 's-barnoy-stoykoy', icon: 'kit4' },
      { title: 'С островом', value: 's-ostrovom', icon: 'kit5' }
    ]
  },
  {
    id: 'tag',
    title: 'Популярное',
    items: [
      { title: 'Маленькие кухни', value: 'mk' },
      { title: 'ТОП-5 кухонь месяца', value: 'top5' },
      { title: 'Гарнитуры для хрущёвок', value: 'hru' },
      { title: 'Практичные кухни', value: 'pra' }
    ]
  }
  // {
  //   id: 'style',
  //   title: 'Стиль',
  //   items: [
  //     { title: 'Скандинавия', value: 'scandinaviya' },
  //     { title: 'Неоклассика', value: 'neoklassika' },
  //     { title: 'Минимализм', value: 'minimalizm' },
  //     { title: 'Лофт', value: 'loft' },
  //     { title: 'Современный', value: 'sovremenniy' }
  //   ]
  // },
  // {
  //   id: 'facade',
  //   title: 'Фасад',
  //   items: [
  //     { title: 'Эмаль', value: 'emal' },
  //     { title: 'Пластик', value: 'plastik' },
  //     { title: 'Плёнка+МДФ', value: 'plenka_mdf' },
  //     { title: 'Акрил', value: 'akril' }
  //   ]
  // }
]

export default {
  name: 'KitchensView',
  components: {
    CatalogBanners,
    Catalog,
    QuizPreview,
    PopularArticles,
    Steps,
    RatedReviews,
    Projects
  },
  data() {
    return {
      // sortOptions: sortOptions,
      filterGroups: filterGroups,
      cards: [],
      pages: 1,
      currentPage: 1,
      articles: [],
      reviews: []
    }
  },
  async created() {
    this.setBreadCrumbs(this.$route)

    const kitchensResponse = await api.loadCards(this.$route)
    this.cards = kitchensResponse.goods
    this.pages = kitchensResponse.pages

    const articlesResponse = await api.loadCards({ name: 'blog' })
    this.articles = articlesResponse.populars.slice(0, 3)

    const reviewsResponse = await api.loadCards({ name: 'reviews' })
    this.reviews = reviewsResponse.reviews.slice(0, 4)
  },
  async beforeRouteUpdate(to) {
    this.setBreadCrumbs(to)
    this.cards = null

    const response = await api.loadCards(to)
    this.cards = response.goods
    this.pages = response.pages
    this.currentPage = 1
  },
  methods: {
    setBreadCrumbs(route) {
      const query = route.query
      let crumbs

      if (query.category) {
        const categoryTitle = filterGroups.find((i) => i.id === 'category').items.find((i) => i.value === query.category).title
        crumbs = [{ path: '/kitchens', title: 'Кухни' }, { title: categoryTitle }]
      } else {
        crumbs = [{ title: 'Кухни' }]
      }

      this.$store.commit('setBreadCrumbs', crumbs)
    },

    async showMore() {
      this.currentPage++
      const response = await api.loadCards(this.$route, this.currentPage)
      this.cards = [...this.cards, ...response.goods]
    }
  }
}
</script>

<style lang="scss">
.v-kitchens {
  .catalog {
    margin-top: 20px;
  }

  .projects {
    margin-top: 50px;
  }

  .rated-reviews {
    margin-top: 50px;
  }

  .steps {
    margin-top: 55px;
  }

  .popular-articles {
    margin-top: 50px;
    margin-bottom: 55px;
  }

  @include media(md) {
    .catalog {
      margin-top: 0;
    }

    .projects {
      margin-top: 0;
    }

    .rated-reviews {
      margin-top: 100px;
    }

    .steps {
      margin-top: 85px;
    }

    .popular-articles {
      margin-top: 90px;
      margin-bottom: 75px;
    }
  }

  @include media(lg) {
    .rated-reviews {
      margin-top: 120px;
    }

    .steps {
      margin-top: 75px;
    }

    .popular-articles {
      margin-top: 100px;
      margin-bottom: 60px;
    }
  }

  @include media(xl) {
    .rated-reviews {
      margin-top: 150px;
    }

    .steps {
      margin-top: 115px;
    }

    .popular-articles {
      margin-bottom: 100px;
    }
  }
}
</style>
