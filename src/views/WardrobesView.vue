<template>
  <div class="v-wardrobes">
    <CatalogBanners type="wardrobes" />
    <Catalog
      type="wardrobes"
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
          type: 'wardrobe',
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
