<template>
  <div class="materials">
    <MaterialsIntro class="materials__intro" />
    <div class="materials__cards">
      <div class="container container_side-fixed">
        <div class="materials__row">
          <div class="materials__col">
            <MaterialCard
              v-for="(card, index) in sortedCards.slice(0, 2)"
              :key="index"
              :cardData="card"
              class="materials__card"
            />
          </div>
          <div class="materials__col">
            <MaterialCard
              v-for="(card, index) in sortedCards.slice(2)"
              :key="index"
              :cardData="card"
              class="materials__card"
            />
          </div>
        </div>
      </div>
    </div>
    <MaterialsPartners />
    <Interesting />
  </div>
</template>

<script>
import MaterialCard from './MaterialCard.vue'
import MaterialsPartners from './MaterialsPartners.vue'
import Interesting from './Interesting.vue'
import MaterialsIntro from './MaterialsIntro.vue'

const cards = [
  {
    sort: 0,
    image: 'material-card-01.jpg',
    title: 'Материалы для кухонь',
    desc: 'Мы следим за кухонными трендами и всегда предлагаем нашим клиентам только самые современные решения',
    props: [
      {
        title: 'ЛДСП от компании Kronospan для корпусов',
        desc: 'Экологичные <b>утолщённые плиты от австрийского производителя</b> с защитой от влаги, высоких температур и механических воздействий'
      },
      {
        title: 'МДФ Egger + плёнка для фасадов',
        desc: 'Австрийское качество и широкий выбор цветов и фактур. Склеивается под давлением, устойчив к перепадам температур, влажности и механическим воздействиям'
      }
    ],
    btn: { route: 'kitchens', title: 'Смотреть каталог кухонь' }
  },
  {
    sort: 2,
    image: 'material-card-04.jpg',
    title: 'Материалы для шкафов',
    desc: 'Наши шкафы получаются не только вместительными, но качественно собранными',
    props: [
      {
        title: 'ЛДСП от компании Kronospan для корпусов',
        desc: 'Экологичные <b>утолщённые плиты от австрийского производителя</b> с защитой от влаги, высоких температур и механических воздействий'
      },
      {
        title: 'Тонированное стекло для фасадов',
        desc: 'Множество вариаций цветов и фактур на самый притязательный вкус'
      },
      {
        title: 'Зеркала для фасадов',
        desc: 'С покрытием, удерживающим все осколки в случае разбития фасада'
      }
    ],
    btn: { route: 'wardrobes', title: 'Смотреть каталог шкафов' }
  },
  {
    sort: 1,
    image: 'material-card-03.jpg',
    title: 'Высококлассная фурнитура',
    desc: 'Залог долговечности вашей кухни или шкафа, а также гарант комфортного использования',
    props: [
      {
        partner: 'boyard',
        desc: 'Петли, ручки, тандем- и метабоксы от <b>отечественного производителя</b> отличают доступные цены и действительно хорошее качество'
      },
      {
        partner: 'blum',
        desc: 'Изделия австрийской компании от петель до складных подъёмников повышают комфорт использования мебели во всех жилых помещениях'
      }
    ]
  }
]

export default {
  name: 'Materials',
  components: {
    MaterialCard,
    MaterialsPartners,
    Interesting,
    MaterialsIntro
  },
  data() {
    return {
      cards: cards
    }
  },
  computed: {
    sortedCards() {
      const cards = [...this.cards]
      return this.$_media.sm ? cards : cards.sort((a, b) => a.sort - b.sort)
    }
  }
}
</script>

<style lang="scss">
.materials {
  &__intro {
    margin-top: 30px;
  }

  &__cards {
    padding: 38px 0 32px;
  }

  &__card {
    margin-bottom: 30px;
  }

  @include media(md) {
    &__intro {
      margin-top: 70px;
    }

    &__cards {
      padding: 45px 0 25px;
    }

    &__row {
      display: flex;
      justify-content: space-between;
    }

    &__col {
      width: calc(50% - 20px);
    }

    &__card {
      margin-bottom: 50px;
    }
  }

  @include media(lg) {
    &__intro {
      margin-top: 110px;
    }

    &__cards {
      padding: 36px 0 0;
    }

    &__col {
      width: calc(50% - 30px);
    }

    &__card {
      margin-bottom: 60px;
    }
  }

  @include media(xl) {
    &__cards {
      padding: 75px 0 15px;
    }

    &__col {
      width: calc(50% - 40px);
    }

    &__card {
      margin-bottom: 90px;
    }
  }
}
</style>
