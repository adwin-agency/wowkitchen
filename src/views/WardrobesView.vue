<template>
  <div class="v-wardrobes">
    <CatalogBanners
      type="wardrobes"
      title="Шкафы-купе на заказ"
    />
    <Catalog
      type="wardrobes"
      cardType="wardrobe"
      :sortOptions="sortOptions"
      :filterGroups="filterGroups"
      :cards="cards"
      :showBtn="currentPage < pages"
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

const sortOptions = [
  { title: 'По популярности' },
  { title: 'По цене' }
]

const filterGroups = [
  {
    id: 'category',
    title: 'Планировка',
    items: [
      { title: 'Все', value: 'all' },
      { title: 'Прямая', value: 'pryamye' },
      { title: 'Встроенная', value: 'vstroennye' },
      { title: 'Угловая', value: 'uglovye' }
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
      sortOptions: sortOptions,
      filterGroups: filterGroups,
      cards: [],
      pages: 1,
      currentPage: 1
    }
  },
  async created() {
    const response = await api.loadCards(this.$route)
    this.cards = response.goods
    this.pages = response.pages
    this.setBreadCrumbs(this.$route)
  },
  async beforeRouteUpdate(to) {
    const response = await api.loadCards(to)
    this.cards = response.goods
    this.pages = response.pages
    this.currentPage = 1
    this.setBreadCrumbs(to)
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

    async showMore() {
      this.currentPage++
      const response = await api.loadCards(this.$route, this.currentPage)
      this.cards = [...this.cards, ...response.goods]
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
