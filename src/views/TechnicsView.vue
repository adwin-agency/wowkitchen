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
      :showBtn="currentPage < pages"
      :pages="pages"
      :currentPage="currentPage"
      @sort-change="sortChange"
      @show-more="showMore"
      @change-page="changePage"
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
  { title: 'Холодильники', value: 'kholodilniki' },
  { title: 'Посудомоечные машины', value : 'posudomoechnye-mashiny' },
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
      currentPage: 1,
      isMobile: this.$_mobile
    }
  },
  async created() {
    this.setBreadCrumbs(this.$route)

    this.initialSort = this.$route.query.price || 'default'

    const response = await api.loadCards(this.$route)
    this.cards = response.goods
    this.pages = response.pages

    window.addEventListener('resize', this.handleResize)
  },
  async beforeRouteUpdate(to) {
    this.setBreadCrumbs(to)

    const response = await api.loadCards(to)
    this.cards = response.goods
    this.pages = response.pages
    this.currentPage = 1
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

    async sortChange(value) {
      const query = {...this.$route.query}
      
      if (value === 'default') {
        delete query.price
      } else {
        query.price = value
      }

      this.$router.push({ query })
    },

    async showMore() {
      this.currentPage++
      const response = await api.loadCards(this.$route, this.currentPage)
      this.cards = [...this.cards, ...response.goods]
    },

    async changePage(num) {
      window.scrollTo(0, 0)
      this.currentPage = num
      const response = await api.loadCards(this.$route, this.currentPage)
      this.cards = response.goods
    },

    async handleResize() {
      if (this.isMobile !== this.$_mobile) {
        window.scrollTo(0, 0)
        this.isMobile = this.$_mobile
        
        this.currentPage = 1
        const response = await api.loadCards(this.$route, this.currentPage)
        this.cards = response.goods
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
