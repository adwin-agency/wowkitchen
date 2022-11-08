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
      :showBtn="isShowBtn && currentPage > 1 && currentPage < pages"
      :pagination="!isShowBtn && pages > 1"
      :pages="pages"
      :currentPage="currentPage"
      :loading="loading"
      @show-more="showMore(true)"
    />
    <Projects catalog />
    <DiscountPreview catalog />
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
import DiscountPreview from '../components/DiscountPreview.vue'

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
    id: 'popular',
    title: 'Популярное',
    items: [
      { title: 'Маленькие кухни', value: 'malenkie-kukhni' },
      { title: 'Практичные кухни', value: 'praktichnye-kukhni' },
      { title: 'ТОП-5 кухонь месяца', value: 'top-5-kukhon-mesyatsa' }
    ]
  },
  {
    id: 'tag',
    items: [
      { title: 'Кухни сканди', value: 'kukhni-skandi'},
      { title: 'Кухни белые', value: 'kukhni-belye'},
      { title: 'Кухни глянцевые', value: 'kukhni-glyantsevye'},
      { title: 'Кухни матовые', value: 'kukhni-matovye'},
      { title: 'Кухни до потолка', value: 'kukhni-do-potolka'},
      { title: 'Кухни без ручек', value: 'kukhni-bez-ruchek'},
      { title: 'Кухни лофт', value: 'kukhni-loft'},
      { title: 'Кухни неоклассика', value: 'kukhni-neoklassika'}
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
    Projects,
    DiscountPreview
  },
  data() {
    return {
      // sortOptions: sortOptions,
      filterGroups: filterGroups,
      cards: [],
      pages: 1,
      articles: [],
      reviews: [],
      isMobile: this.$_mobile,
      loading: false
    }
  },
  computed: {
    isShowBtn() {
      return this.$_mobile
    },
    currentPage() {
      return +this.$route.query.page || 1
    }
  },
  async created() {
    this.$watch(
      () => this.$route,
      () => {
        if (this.$route.name === 'kitchens') {
          this.setBreadCrumbs(this.$route)
          this.fetchData(this.$route)
        }
      },
      { immediate: true }
    )

    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
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

    async fetchData(route) {
      this.loading = true

      if (!this.articles.length) {
        const articlesResponse = await api.loadCards({ name: 'blog' })
        this.articles = articlesResponse.populars.slice(0, 3)
      }

      if (!this.reviews.length) {
        const reviewsResponse = await api.loadCards({ name: 'reviews' })
        this.reviews = reviewsResponse.reviews.slice(0, 4)
      }

      if (route.params.showAll) {
        const response = await api.loadCards({ ...route, query: { ...route.query, all: true } })
        this.cards = response.goods
        this.pages = response.pages
        this.loading = false

        return
      }

      if (route.params.showMore) {
        const response = await api.loadCards(route)
        this.cards = [...this.cards, ...response.goods]
        this.pages = response.pages
        this.loading = false

        return
      }

      if (this.isShowBtn) {
        const response = await api.loadCards({ ...route, query: { ...route.query, all: true } })
        this.cards = response.goods
        this.pages = response.pages
        this.loading = false

        if (this.currentPage > 1) {
          this.$nextTick(() => {
            const targetCard = document.querySelector(`.catalog__card:nth-child(${this.cards.length - response.last + 1})`)
            const header = document.querySelector('.header')

            if (targetCard) {
              window.scrollTo(0, targetCard.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 20)
            }
          })
        }

        return
      }

      const response = await api.loadCards(route)
      this.cards = response.goods
      this.pages = response.pages
      this.loading = false
    },

    async showMore(clicked) {
      if (clicked) {
        window.VK && window.VK.Goal('initiate_checkout')
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'show_more' })

        this.$router.push({ params: { showAll: true }, query: { ...this.$route.query, page: this.pages } })
      } else {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'page_' + (this.currentPage + 1) })

        this.$router.push({ params: { showMore: true }, query: { ...this.$route.query, page: this.currentPage + 1 } })
      }
    },

    handleResize() {
      if (this.isMobile !== this.$_mobile) {
        this.$router.go()
      }
    },

    handleScroll() {
      if (!this.isShowBtn || this.currentPage > 1 || this.loading || this.currentPage >= this.pages) {
        return
      }

      const scrollY = window.scrollY
      const catalog = document.querySelector('.catalog')
      const targetY = catalog.getBoundingClientRect().bottom + scrollY - window.innerHeight

      if (scrollY >= targetY) {
        this.showMore()
      }
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
