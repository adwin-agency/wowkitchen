<template>
  <div class="v-wardrobes">
    <CatalogBanners type="wardrobes" />
    <Catalog
      type="wardrobes"
      cardType="wardrobe"
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
import api from '../api'

const sortOptions = ['По популярности', 'По цене']

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
      cards: []
    }
  },
  async created() {
    this.cards = await api.loadCards(this.$route)
    window.sidebar && window.sidebar.updateSticky()
  },
  async beforeRouteUpdate(to) {
    this.cards = await api.loadCards(to)
    window.sidebar && window.sidebar.updateSticky()
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
