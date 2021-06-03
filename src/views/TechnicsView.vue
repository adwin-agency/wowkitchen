<template>
  <div class="v-technics">
    <CatalogBanners type="technics" />
    <Catalog
      type="technics"
      :sortOptions="sortOptions"
      :filterCategories="filterCategories"
      :filterGroups="filterGroups"
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
      sortOptions: [
        'По популярности',
        'По цене'
      ],
      filterCategories: [
        'Варочые панели',
        'Духовые шкафы',
        'Холодильники',
        'Посудомоечные машины',
        'Вытяжки'
      ],
      filterGroups: [
        {
          id: 'type',
          title: 'Тип',
          items: [
            { title: 'Все', value: 'Все', all: true },
            { title: 'Газовая', value: 'Газовая' },
            { title: 'Электрическая', value: 'Электрическая' },
            { title: 'Индукционная', value: 'Индукционная' }
          ]
        },
        {
          id: 'plates',
          title: 'Количество конфорок',
          items: [
            { title: '2', value: '2' },
            { title: '3', value: '3' },
            { title: '4', value: '4' },
          ]
        },
        {
          id: 'width',
          title: 'Ширина, см',
          items: [
            { title: '35', value: '35' },
            { title: '45', value: '45' },
            { title: '60', value: '60' },
          ]
        },
        {
          id: 'companies',
          title: 'Производитель',
          items: [
            { title: 'Название компании', value: 'Название компании' },
            { title: 'Название другой компании', value: 'Название другой компании' },
          ]
        },
      ],
      cards: [
        {
          type: 'technic',
          image: 'technics-card-01.jpg',
          title: 'SIMFER H 60 D 17',
          price: '14 500 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-02.jpg',
          discount: '%',
          title: 'CANDY 640 SGN',
          price: '34 700 ₽',
          oldPrice: '40 000 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-03.jpg',
          title: 'CANDY PV 640 SN',
          price: '54 500 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-04.jpg',
          title: 'CANDY CLG 64 SGX',
          price: '20 500 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-05.jpg',
          title: 'CANDY PL 40 ASX',
          price: '54 500 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-06.jpg',
          discount: '%',
          title: 'CANDY CI 640 C',
          price: '32 840 ₽',
          oldPrice: '35 990 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-01.jpg',
          title: 'SIMFER H 60 D 17',
          price: '14 500 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-02.jpg',
          discount: '%',
          title: 'CANDY 640 SGN',
          price: '34 700 ₽',
          oldPrice: '40 000 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-03.jpg',
          title: 'CANDY PV 640 SN',
          price: '54 500 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-04.jpg',
          title: 'CANDY CLG 64 SGX',
          price: '20 500 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-05.jpg',
          title: 'CANDY PL 40 ASX',
          price: '54 500 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
        {
          type: 'technic',
          image: 'technics-card-06.jpg',
          discount: '%',
          title: 'CANDY CI 640 C',
          price: '32 840 ₽',
          oldPrice: '35 990 ₽',
          props: [
            {title: 'Тип', value: 'Электрическая'},
            {title: 'Габариты, см', value: '60 x 50'},
            {title: 'Гарантия', value: '2 года'},
          ],
        },
      ]
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
