<template>
  <div class="v-kitchens">
    <CatalogBanners type="kitchens" />
    <Catalog
      type="kitchens"
      cardType="kitchen"
      switcher
      :sortOptions="sortOptions"
      :filterGroups="filterGroups"
      :cards="cards"
    />
    <QuizPreview type="kitchens" />
    <PopularArticles allBtn />
    <Steps />
    <RatedReviews v-if="!$_media.sm" />
  </div>
</template>

<script>
import CatalogBanners from '../components/CatalogBanners.vue'
import Catalog from '../components/Catalog.vue'
import PopularArticles from '../components/PopularArticles.vue'
import RatedReviews from '../components/RatedReviews.vue'
import QuizPreview from '../components/QuizPreview.vue'
import Steps from '../components/Steps.vue'

const sortOptions = ['Сначала дешёвые', 'Сначала популярные', 'Сначала дорогие', 'Сначала новые']

const filterGroups = [
  {
    id: 'category',
    title: 'Планировка',
    items: [
      { title: 'Угловая', value: 'uglovye', icon: 'kit1' },
      { title: 'Прямая', value: 'pryamye', icon: 'kit2' },
      { title: 'П-образная', value: 'p-obraznye', icon: 'kit3' },
      { title: 'С барной стойкой', value: 's-barnoy-stoykoy' },
      { title: 'С островом', value: 's-ostrovom' }
    ]
  },
  {
    id: 'style',
    title: 'Стиль',
    items: [
      { title: 'Скандинавия', value: 'scandinaviya' },
      { title: 'Неоклассика', value: 'neoklassika' },
      { title: 'Минимализм', value: 'minimalizm' },
      { title: 'Лофт', value: 'loft' },
      { title: 'Современный', value: 'sovremenniy' }
    ]
  },
  {
    id: 'facade',
    title: 'Фасад',
    items: [
      { title: 'Эмаль', value: 'emal' },
      { title: 'Пластик', value: 'plastik' },
      { title: 'Плёнка+МДФ', value: 'plenka_mdf' },
      { title: 'Акрил', value: 'akril' }
    ]
  }
]

// const cards = [
//   {
//     type: 'kitchen',
//     image: 'catalog-card-01.jpg',
//     discount: '-50%',
//     category: 'Гарнитур',
//     title: 'ХайдиКлум',
//     props: [
//       { title: 'Фасад', value: 'Эмаль' },
//       { title: 'Стиль', value: 'Прованс' }
//     ],
//     price: '54 500 ₽',
//     oldPrice: '109 000 ₽',
//     video: true
//   },
//   {
//     type: 'kitchen',
//     image: 'catalog-card-02.jpg',
//     discount: '-50%',
//     category: 'Гарнитур',
//     title: 'ТайраБэнкс',
//     props: [
//       { title: 'Фасад', value: 'Эмаль' },
//       { title: 'Стиль', value: 'Прованс' }
//     ],
//     price: '54 500 ₽',
//     oldPrice: '109 000 ₽',
//     video: true
//   },
//   {
//     type: 'kitchen',
//     image: 'catalog-card-03.jpg',
//     discount: '-50%',
//     category: 'Гарнитур',
//     title: 'ТайраБэнкс',
//     props: [
//       { title: 'Фасад', value: 'Эмаль' },
//       { title: 'Стиль', value: 'Прованс' }
//     ],
//     price: '54 500 ₽',
//     oldPrice: '109 000 ₽',
//     video: true
//   },
//   {
//     type: 'kitchen',
//     image: 'catalog-card-04.jpg',
//     discount: '-50%',
//     category: 'Гарнитур',
//     title: 'ТайраБэнкс',
//     props: [
//       { title: 'Фасад', value: 'Эмаль' },
//       { title: 'Стиль', value: 'Прованс' }
//     ],
//     price: '54 500 ₽',
//     oldPrice: '109 000 ₽',
//     video: true
//   },
//   {
//     type: 'kitchen',
//     image: 'catalog-card-05.jpg',
//     discount: '-50%',
//     category: 'Гарнитур',
//     title: 'ТайраБэнкс',
//     props: [
//       { title: 'Фасад', value: 'Эмаль' },
//       { title: 'Стиль', value: 'Прованс' }
//     ],
//     price: '54 500 ₽',
//     oldPrice: '109 000 ₽',
//     video: true
//   }
// ]

export default {
  name: 'KitchensView',
  components: {
    CatalogBanners,
    Catalog,
    QuizPreview,
    PopularArticles,
    Steps,
    RatedReviews
  },
  data() {
    return {
      sortOptions: sortOptions,
      filterGroups: filterGroups,
      cards: []
    }
  },
  created() {
    this.loadKitchens(this.$route)
  },
  beforeRouteUpdate(to) {
    this.loadKitchens(to)
  },
  methods: {
    async loadKitchens(route) {
      const query = route.query
      let search = []

      for (let key in query) {
        search.push(`${key}=${query[key]}`)
      }

      search = search.join('&')

      if (search) {
        search = '?' + search
      }

      const response = await fetch(`http://wowkitchen.beget.tech/local/templates/wow/api/kitchens.php${search}`)
      const responseJson = await response.json()

      this.cards = responseJson.goods

      if (window.sidebar) {
        window.sidebar.updateSticky()
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

  .quiz-preview {
    margin-top: 50px;
  }

  .popular-articles {
    margin-top: 50px;
  }

  .steps {
    margin-top: 55px;
    margin-bottom: 55px;
  }

  @include media(md) {
    .catalog {
      margin-top: 0;
    }

    .quiz-preview {
      margin-top: 0;
    }

    .popular-articles {
      margin-top: 70px;
    }

    .steps {
      margin-top: 85px;
      margin-bottom: 0;
    }

    .rated-reviews {
      margin-top: 125px;
      margin-bottom: 75px;
    }
  }

  @include media(lg) {
    .popular-articles {
      margin-top: 100px;
    }

    .steps {
      margin-top: 75px;
    }

    .rated-reviews {
      margin-top: 120px;
      margin-bottom: 60px;
    }
  }

  @include media(xl) {
    .steps {
      margin-top: 115px;
    }

    .rated-reviews {
      margin-top: 150px;
      margin-bottom: 100px;
    }
  }
}
</style>
