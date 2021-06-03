<template>
  <div class="v-kitchens">
    <CatalogBanners type="kitchens" />
    <Catalog
      type="kitchens"
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
      sortOptions: [
        'Сначала дешёвые',
        'Сначала популярные',
        'Сначала дорогие',
        'Сначала новые'
      ],
      filterGroups:[
        {
          id: 'plan',
          title: 'Планировка',
          items: [
            { title: 'Угловая', value: 'Угловая', icon: 'kit1' },
            { title: 'Прямая', value: 'Прямая', icon: 'kit2' },
            { title: 'П-образная', value: 'П-образная', icon: 'kit3' },
            { title: 'С барной стойкой', value: 'С барной стойкой' },
            { title: 'С островом', value: 'С островом' }
          ]
        },
        {
          id: 'style',
          title: 'Стиль',
          items: [
            { title: 'Лофт', value: 'Лофт' },
            { title: 'Скандинавия', value: 'Скандинавия' },
            { title: 'Минимализм', value: 'Минимализм' },
            { title: 'Классика', value: 'Классика' }
          ]
        },
        {
          id: 'facade',
          title: 'Фасад',
          items: [
            { title: 'Эмаль', value: 'Эмаль' },
            { title: 'Пластик', value: 'Пластик' },
            { title: 'Плёнка+МДФ', value: 'Плёнка+МДФ' },
            { title: 'Акрил', value: 'Акрил' }
          ]
        }
      ],
      cards: [
        {
          type: 'kitchen',
          image: 'catalog-card-01.jpg',
          discount: '-50%',
          category: 'Гарнитур',
          title: 'ХайдиКлум',
          props: [
            {title: 'Фасад', value: 'Эмаль'},
            {title: 'Стиль', value: 'Прованс'}
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽',
          video: true
        },
        {
          type: 'kitchen',
          image: 'catalog-card-02.jpg',
          discount: '-50%',
          category: 'Гарнитур',
          title: 'ТайраБэнкс',
          props: [
            {title: 'Фасад', value: 'Эмаль'},
            {title: 'Стиль', value: 'Прованс'}
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽',
          video: true
        },
        {
          type: 'kitchen',
          image: 'catalog-card-03.jpg',
          discount: '-50%',
          category: 'Гарнитур',
          title: 'ТайраБэнкс',
          props: [
            {title: 'Фасад', value: 'Эмаль'},
            {title: 'Стиль', value: 'Прованс'}
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽',
          video: true
        },
        {
          type: 'kitchen',
          image: 'catalog-card-04.jpg',
          discount: '-50%',
          category: 'Гарнитур',
          title: 'ТайраБэнкс',
          props: [
            {title: 'Фасад', value: 'Эмаль'},
            {title: 'Стиль', value: 'Прованс'}
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽',
          video: true
        },
        {
          type: 'kitchen',
          image: 'catalog-card-05.jpg',
          discount: '-50%',
          category: 'Гарнитур',
          title: 'ТайраБэнкс',
          props: [
            {title: 'Фасад', value: 'Эмаль'},
            {title: 'Стиль', value: 'Прованс'}
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽',
          video: true
        }
      ]
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
