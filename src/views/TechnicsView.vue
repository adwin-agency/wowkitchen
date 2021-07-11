<template>
  <div class="v-technics">
    <CatalogBanners type="technics" />
    <Catalog
      type="technics"
      cardType="technic"
      :sortOptions="sortOptions"
      :filterCategories="filterCategories"
      :cards="cards"
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
  { title: 'По популярности' },
  { title: 'По цене' }
]

const filterCategories = [
  { title: 'Варочые панели', value: 'varochnye-paneli' },
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
      filterCategories: filterCategories,
      cards: []
    }
  },
  async created() {
    this.cards = await api.loadCards(this.$route)
  },
  async beforeRouteUpdate(to) {
    this.cards = await api.loadCards(to)
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
