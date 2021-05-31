<template>
  <div class="v-kitchens">
    <CatalogBanners type="kitchens" />
    <Catalog
      switcher
      :sortOptions="sortOptions"
      :filterGroups="filterGroups"
      :cards="cards"
    />
    <QuizPreview type="kitchens" />
    <PopularArticles allBtn />
    <Steps />
    <ReviewsSample />
  </div>
</template>

<script>
import CatalogBanners from '../components/CatalogBanners.vue'
import Catalog from '../components/Catalog.vue'
import PopularArticles from '../components/PopularArticles.vue'
import ReviewsSample from '../components/ReviewsSample.vue'
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
    ReviewsSample
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
