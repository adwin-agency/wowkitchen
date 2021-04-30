<template>
  <div class="v-wardrobes">
    <CatalogBanners type="wardrobes" />
    <Catalog
      wardrobes
      :sortOptions="sortOptions"
      :filterGroups="filterGroups"
      :cards="cards"
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
      sortOptions: [
        'По популярности',
        'По цене'
      ],
      filterGroups: [
        {
          id: 'plan',
          title: 'Планировка',
          items: [
            { title: 'Все', value: 'Все', all: true },
            { title: 'Прямая', value: 'Прямая' },
            { title: 'Встроенная', value: 'Встроенная' },
            { title: 'Угловая', value: 'Угловая' }
          ]
        },
        {
          id: 'location',
          title: 'Расположение',
          items: [
            { title: 'Все', value: 'Все', all: true },
            { title: 'Гостиная', value: 'Гостиная' },
            { title: 'Спальня', value: 'Спальня' },
            { title: 'Детская', value: 'Детская' },
            { title: 'Прихожая', value: 'Прихожая' }
          ]
        },
        {
          id: 'decor',
          title: 'Декор фасадов',
          items: [
            { title: 'Зеркало', value: 'Зеркало' },
            { title: 'Фотопечать', value: 'Фотопечать' },
            { title: 'Экокожа', value: 'Экокожа' },
            { title: 'ЛДСП', value: 'ЛДСП' },
            { title: 'Тонированное стекло', value: 'Тонированное стекло' },
            { title: 'Пескоструйный рисунок', value: 'Пескоструйный рисунок' }
          ]
        },
        {
          id: 'color',
          title: 'Цвет',
          items: [
            { color: true, value: '#ffffff' },
            { color: true, value: '#353535' },
            { color: true, value: '#e32936' },
            { color: true, value: '#04b991' },
            { color: true, value: '#5a53e9' },
            { color: true, value: '#fcd210' },
            { color: true, value: '#b39f50' }
          ]
        }
      ],
      cards: [
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          image: 'cupboard-card.jpg',
          discount: '-50%',
          title: 'УитниХьюстон',
          props: [
            {title: 'Планировка', value: 'Встроенный'},
            {title: 'Фасад', value: 'ЛДСП + Зеркало'},
            {title: 'Корпус', value: 'ЛДСП'},
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        }
      ]
    }
  }
}
</script>
