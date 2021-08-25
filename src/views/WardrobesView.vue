<template>
  <div class="v-wardrobes">
    <CatalogBanners
      type="wardrobes"
      title="Шкафы-купе на заказ"
    />
    <Catalog
      type="wardrobes"
      cardType="wardrobe"
      :filterGroups="filterGroups"
      :cards="cards"
      :showBtn="isShowBtn && currentPage < pages"
      :pagination="!isShowBtn && pages > 1"
      :pages="pages"
      :currentPage="currentPage"
      :loading="loading"
      @show-more="showMore"
    />
    <WardrobeMaterials />
    <QuizPreview
      mobileLight
      type="wardrobes"
    />
    <Design />
  </div>
</template>

<script>
import CatalogBanners from '../components/CatalogBanners.vue'
import Catalog from '../components/Catalog.vue'
import Design from '../components/Design.vue'
import QuizPreview from '../components/QuizPreview.vue'
import WardrobeMaterials from '../components/WardrobeMaterials.vue'
import api from '../api'

// const sortOptions = [
//   { title: 'По популярности' },
//   { title: 'По цене' }
// ]

const filterGroups = [
  {
    id: 'category',
    title: 'Планировка',
    items: [
      { title: 'Все', value: 'all' },
      { title: 'Прямые', value: 'pryamye' },
      { title: 'Встроенные', value: 'vstroennye' },
      { title: 'Угловые', value: 'uglovye' }
    ]
  },
  {
    id: 'location',
    title: 'Расположение',
    items: [
      { title: 'Все', value: 'all' },
      { title: 'Гостиная', value: 'gostinay' },
      { title: 'Спальня', value: 'spalnya' },
      { title: 'Детская', value: 'detskay' },
      { title: 'Прихожая', value: 'prihoshay' }
    ]
  },
  // {
  //   id: 'facade',
  //   title: 'Декор фасадов',
  //   items: [
  //     { title: 'Зеркало', value: 'zerkalo' },
  //     { title: 'Фотопечать', value: 'fotopechat' },
  //     { title: 'Экокожа', value: 'ekokozha' },
  //     { title: 'ЛДСП', value: 'ldsp' },
  //     { title: 'Тонированное стекло', value: 'tonsteklo' },
  //     { title: 'Пескоструйный рисунок', value: 'peskrisunok' }
  //   ]
  // },
  // {
  //   id: 'color',
  //   title: 'Цвет',
  //   items: [
  //     { color: true, value: '#ffffff' },
  //     { color: true, value: '#353535' },
  //     { color: true, value: '#e32936' },
  //     { color: true, value: '#04b991' },
  //     { color: true, value: '#5a53e9' },
  //     { color: true, value: '#fcd210' },
  //     { color: true, value: '#b39f50' }
  //   ]
  // }
]

export default {
  name: 'WardrobesView',
  components: {
    CatalogBanners,
    Catalog,
    Design,
    QuizPreview,
    WardrobeMaterials
  },
  data() {
    return {
      // sortOptions: sortOptions,
      filterGroups: filterGroups,
      cards: [],
      pages: 1,
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
        if (this.$route.name === 'wardrobes') {
          this.setBreadCrumbs(this.$route)
          this.fetchData(this.$route)
        }
      },
      { immediate: true }
    )

    window.addEventListener('resize', this.handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    setBreadCrumbs(route) {
      const query = route.query
      let crumbs

      if (query.category) {
        const categoryTitle = filterGroups.find(i => i.id === 'category').items.find(i => i.value === query.category).title
        crumbs = [{ path: '/wardrobes', title: 'Шкафы-купе' }, { title: categoryTitle }]
      } else {
        crumbs = [{ title: 'Шкафы-купе' }]
      }
    
      this.$store.commit('setBreadCrumbs', crumbs)
    },

    async fetchData(route) {
      this.loading = true

      if (route.params.showMore) {
        const response = await api.loadCards(route)
        this.cards = [...this.cards, ...response.goods]
        this.pages = response.pages
        this.loading = false

        return
      }

      if (this.isShowBtn) {
        const response = await api.loadCards({...route, query: {...route.query, all: true}})
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

    async showMore() {
      this.$router.push({ params: { showMore: true }, query: { ...this.$route.query, page: this.currentPage + 1 } })
    },

    async handleResize() {
      if (this.isMobile !== this.$_mobile) {
        this.fetchData(this.$route)
      }
    }
  }
}
</script>

<style lang="scss">
.v-wardrobes {
  .catalog {
    margin-top: 20px;
  }

  .wardrobe-materials {
    margin-top: 55px;
  }

  .quiz-preview {
    margin-top: 50px;
  }

  @include media(md) {
    .catalog {
      margin-top: 0;
    }

    .wardrobe-materials {
      margin-top: 75px;
    }

    .design {
      margin-top: 80px;
      margin-bottom: 70px;
    }
  }

  @include media(lg) {
    .wardrobe-materials {
      margin-top: 95px;
    }

    .quiz-preview {
      margin-top: 90px;
    }

    .design {
      margin-top: 100px;
      margin-bottom: 105px;
    }
  }

  @include media(xl) {
    .wardrobe-materials {
      margin-top: 110px;
    }

    .quiz-preview {
      margin-top: 110px;
    }

    .design {
      margin-top: 115px;
      margin-bottom: 90px;
    }
  }
}
</style>
