<template>
  <div class="materials">
    <div class="materials__cards">
      <div class="container container_side-fixed">
        <div class="materials__row">
          <div class="materials__col">
            <MaterialCard
              v-for="(card, index) in sortedCards.slice(0, 3)"
              :key="index"
              :cardData="card"
              class="materials__card"
            />
          </div>
          <div class="materials__col">
            <MaterialCard
              v-for="(card, index) in sortedCards.slice(3)"
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

export default {
  name: 'Materials',
  components: {
    MaterialCard,
    MaterialsPartners,
    Interesting
  },
  data() {
    return {
      cards: [
        {
          sort: 0,
          image: 'material-card-01.jpg',
          title: 'Материалы для кухонь',
          desc: 'Мы следим за кухонными трендами и всегда предлагаем нашим клиентам только самые современные решения',
          props: [
            {
              title: 'ЛДСП',
              desc: 'С защитой от влаги, высоких температур и механических воздействий'
            },
            {
              title: 'МДФ + плёнка',
              desc: 'Широкий выбор цветов и фактур, склеивается под давлением'
            }
          ],
          btn: 'Смотреть кухни из этих материалов'
        },
        {
          sort: 3,
          image: 'material-card-02.jpg',
          title: 'Материалы для кухонь PREMIUM-класса',
          desc: 'Материалы высшего качества для самых искушенных клиентов.',
          props: [
            {
              title: 'Утолщенный ЛДСП',
              desc: 'Плиты толщиной до 60 мм с защитным покрытием против влаги и температур'
            },
            {
              title: 'Эмаль',
              desc: 'Износостойкий и эстетичный материал фасадов'
            },
            {
              title: 'Натуральный и искуственный камень',
              desc: 'Прочный монолитный материал'
            }
          ],
          btn: 'Смотреть кухни из этих материалов'
        },
        {
          sort: 1,
          image: 'material-card-03.jpg',
          title: 'Фурнитура',
          desc: 'Наша фирма сотрудничает только с ведущими поставщиками фурнитуры',
        },
        {
          sort: 4,
          image: 'material-card-04.jpg',
          title: 'Материалы для шкафов',
          desc: 'Наши шкафы получаются не только вместительными, но качественно собранными',
          props: [
            {
              title: 'ЛДСП',
              desc: 'С защитой от влаги, высоких температур и механических воздействий'
            },
            {
              title: 'Тонированное стекло',
              desc: 'Множество вариаций цветов и фактур на самый притязательный вкус'
            },
            {
              title: 'Зеркала',
              desc: 'Спокрытием, удерживающим все осколки в случае разбития фасада'
            }
          ],
          btn: 'Смотреть каталог шкафов'
        },
        {
          sort: 2,
          image: 'material-card-05.jpg',
          title: 'Материалы для диванов',
          desc: 'Сидя и лёжа на наших диванах вы в целом, и ваша спина в частности, испытаете максимальный комфорт',
          props: [
            {
              title: 'Текстиль',
              desc: 'Плотный и износостойки материал во множестве цветовых вариаций'
            },
            {
              title: 'Экокожа',
              desc: 'Экологичный материал, безопасен для животных, прост в очистке'
            }
          ],
          btn: 'Смотреть каталог диванов'
        }
      ]
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
  &__cards {
    padding: 38px 0 32px;
  }

  &__card {
    margin-bottom: 30px;
  }

  @include media(md) {
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
      padding: 68px 0 15px;
    }

    &__col {
      width: calc(50% - 40px);
    }
  }
}
</style>
