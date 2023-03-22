<template>
  <div class="v-technics">
    <CatalogBanners
      type="technics"
      :title="title"
    />
    <Catalog
      type="technics"
      cardType="technic"
      :sortOptions="sortOptions"
      :initialSort="initialSort"
      :filterCategories="filterCategories"
      :cards="cards"
      :showBtn="isShowBtn && currentPage < pages"
      :pagination="!isShowBtn && pages > 1"
      :pages="pages"
      :currentPage="currentPage"
      :loading="loading"
      @sort-change="sortChange"
      @show-more="showMore"
    />
    <Design />
    <Steps />
  </div>
</template>

<script>
import Catalog from '../components/Catalog.vue'
import CatalogBanners from '../components/CatalogBanners.vue'
import Design from '../components/Design.vue'
import Steps from '../components/Steps.vue'
import api from '../api'

const sortOptions = [
  { title: 'Сначала популярные', value: 'default' },
  { title: 'Сначала дешёвые', value: 'min_to_max' },
  { title: 'Сначала дорогие', value: 'max_to_min' }
]

const filterCategories = [
  { title: 'Вся техника', value: 'all' },
  { title: 'Варочные панели', value: 'varochnye-paneli' },
  { title: 'Духовые шкафы', value: 'dukhovye-shkafy' },
  // { title: 'Холодильники', value: 'kholodilniki' },
  // { title: 'Посудомоечные машины', value : 'posudomoechnye-mashiny' },
  { title: 'Вытяжки', value: 'vytyazhki' }
]

export default {
  name: 'TechnicsView',
  components: {
    CatalogBanners,
    Catalog,
    Design,
    Steps
  },
  data() {
    return {
      sortOptions: sortOptions,
      initialSort: null,
      filterCategories: filterCategories,
      title: '',
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
        if (this.$route.name === 'technics') {
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
        const categoryTitle = filterCategories.find(i => i.value === query.category).title
        this.title = categoryTitle
        crumbs = [{ path: '/technics', title: 'Техника' }, { title: categoryTitle }]
      } else {
        this.title = 'Техника'
        crumbs = [{ title: 'Техника' }]
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

    async sortChange(value) {
      const query = {...this.$route.query}

      delete query.page
      
      if (value === 'default') {
        delete query.price
      } else {
        query.price = value
      }

      this.$router.push({ query })
    },

    async showMore() {
      this.$router.push({ params: { showMore: true }, query: { ...this.$route.query, page: this.currentPage + 1 } })
    },

    handleResize() {
      if (this.isMobile !== this.$_mobile) {
        this.$router.go()
      }
    }
  }
}
</script>

<style lang="scss">
.v-technics {
  .catalog {
    margin-top: 30px;
  }

  .design {
    margin-top: 40px;
  }

  .steps {
    margin-top: 45px;
    margin-bottom: 35px;
  }

  @include media(md) {
    .catalog {
      margin-top: 0;
    }

    .design {
      margin-top: 80px;
    }

    .steps {
      margin-top: 115px;
      margin-bottom: 100px;
    }
  }

  @include media(lg) {
    .design {
      margin-top: 120px;
    }

    .steps {
      margin-top: 120px;
      margin-bottom: 130px;
    }
  }

  @include media(xl) {
    .design {
      margin-top: 165px;
    }

    .steps {
      margin-bottom: 160px;
    }
  }
}
</style>
