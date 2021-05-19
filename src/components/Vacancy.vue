<template>
  <div class="vacancy">
    <div class="vacancy__main">
      <div class="container container_side-fixed">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="vacancy__item"
        >
          <div
            class="vacancy__title"
            @click="toggleItem(item.id)"
          >
            <span>{{item.title}}</span>
            <AppIcon
              :name="activeItem === item.id ? 'minus' : 'plus'"
              class="vacancy__title-icon"
            />
          </div>
          <div
            class="vacancy__panel"
            :ref="item.id"
          >
            <div class="vacancy__content">
              <div class="vacancy__group">
                <p class="vacancy__group-title">Требования</p>
                <ul class="vacancy__list">
                  <li
                    v-for="(listItem, index) in item.requirements"
                    :key="index"
                    class="vacancy__list-item"
                  >
                    {{listItem}}
                  </li>
                </ul>
              </div>
              <div class="vacancy__group">
                <p class="vacancy__group-title">Условия</p>
                <ul class="vacancy__list">
                  <li
                    v-for="(listItem, index) in item.offer"
                    :key="index"
                    class="vacancy__list-item"
                  >
                    {{listItem}}
                  </li>
                </ul>
              </div>
              <p class="vacancy__contact">Присылайте свое резюме на почту <a href="#">blah-blah@sample.ru</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Interesting />
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'
import Interesting from './Interesting.vue'

export default {
  name: 'Vacancy',
  components: {
    Interesting,
    AppIcon
  },
  data() {
    return {
      items: [
        {
          id: 'v1',
          title: 'Сборщик-монтажник',
          requirements: ['опыт работы по сборке кухонь от 3х лет', 'наличие собственного инструмента', 'ответственность, пунктуальность, неконфликтность'],
          offer: [
            'гибкий график работы',
            'обеспечение высоким уровнем заказов',
            'работа по Санкт-Петербургу и ближайшему пригороду',
            'скидки на продукцию компании',
            'заработная плата от 80 000 рублей'
          ]
        },
        {
          id: 'v2',
          title: 'Оператор call-центра',
          requirements: ['опыт работы по сборке кухонь от 3х лет', 'наличие собственного инструмента', 'ответственность, пунктуальность, неконфликтность'],
          offer: [
            'гибкий график работы',
            'обеспечение высоким уровнем заказов',
            'работа по Санкт-Петербургу и ближайшему пригороду',
            'скидки на продукцию компании',
            'заработная плата от 80 000 рублей'
          ]
        },
        {
          id: 'v3',
          title: 'Дизайнер-замерщик',
          requirements: ['опыт работы по сборке кухонь от 3х лет', 'наличие собственного инструмента', 'ответственность, пунктуальность, неконфликтность'],
          offer: [
            'гибкий график работы',
            'обеспечение высоким уровнем заказов',
            'работа по Санкт-Петербургу и ближайшему пригороду',
            'скидки на продукцию компании',
            'заработная плата от 80 000 рублей'
          ]
        }
      ],

      activeItem: null,
      itemTimeout: null
    }
  },
  methods: {
    toggleItem(id) {
      const closing = this.activeItem ? this.$refs[this.activeItem] : null
      const opening = this.activeItem !== id ? this.$refs[id] : null

      clearTimeout(this.itemTimeout)
      
      if (closing) {
        closing.style.height = `${closing.scrollHeight}px`

        this.itemTimeout = setTimeout(() => {
          closing.style.height = ''
        }, 0)
      }

      if (opening) {
        opening.style.height = `${opening.scrollHeight}px`

        this.itemTimeout = setTimeout(() => {
          opening.style.height = 'auto'
        }, 300)
      }

      this.activeItem = this.activeItem !== id ? id : null
    }
  }
}
</script>

<style lang="scss">
.vacancy {
  &__main {
    padding: 28px 0 40px;
  }

  &__item {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 (-$container-padding);
    padding: 20px;
    border-bottom-right-radius: 30px;
    font-weight: bold;
    font-size: 16px;
    color: #000;
    background-color: $color-lightgray;

    &-icon {
      width: 20px;
      height: 20px;
      fill: $color-lightviolet;
    }
  }

  &__panel {
    height: 0;
    transition: height .3s ease;
    overflow: hidden;
  }

  &__content {
    padding: 22px 0 10px;
  }

  &__group {
    & + & {
      margin-top: 30px;
    }

    &-title {
      font-weight: 500;
      font-size: 13px;
    }
  }

  &__list {
    margin-top: 16px;

    &-item {
      display: flex;
      font-weight: 300;
      font-size: 13px;
      line-height: (30/13);

      &::before {
        content: '';
        flex-shrink: 0;
        margin-top: 14px;
        width: 23px;
        height: 2px;
        margin-right: 16px;
        background-color: $color-green;
      }
    }
  }

  &__contact {
    margin-top: 25px;
    font-weight: 500;
    font-size: 16px;
    line-height: (28/16);

    a {
      text-decoration: underline;
      color: $color-green;
    }
  }

  @include media(md) {
    &__main {
      padding: 50px 0 65px;
    }

    &__item {
      max-width: 640px;
      margin-bottom: 20px;
    }

    &__title {
      margin: 0;
      padding: 30px 30px 30px 60px;
    }

    &__content {
      padding: 30px 60px 25px;
    }
  }

  @include media(lg) {
    &__item {
      max-width: 720px;
    }

    &__title {
      padding: 30px 50px 30px 60px;
    }
  }

  @include media(xl) {
    &__main {
      padding: 50px 0 115px;
    }
    
    &__item {
      margin-left: 60px;
    }

    &__content {
      padding: 60px 60px 45px;
    }

    &__group {
      & + & {
        margin-top: 50px;
      }
    }
  }
}
</style>
