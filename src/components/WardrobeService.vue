<template>
  <div class="wardrobe-service">
    <div class="container">
      <div class="wardrobe-service__inner">
        <h2 class="wardrobe-service__heading">4 причины заказать шкаф именно у нас</h2>
        <div class="wardrobe-service__items">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="wardrobe-service__item"
          >
            <span class="wardrobe-service__num">{{item.num}}</span>
            <p class="wardrobe-service__title">{{item.title}}</p>
            <p
              v-html="item.desc"
              class="wardrobe-service__desc"
            ></p>
            <button
              v-if="item.modal"
              type="button"
              class="wardrobe-service__link"
              @click="openModal(item.modal.name)"
            >
              {{item.modal.title}}
              <AppIcon
                name="long-arrow"
                class="wardrobe-service__arrow"
              />
            </button>
            <router-link
              v-if="item.link"
              :to="item.link.to"
              class="wardrobe-service__link"
            >
              {{item.link.title}}
              <AppIcon
                name="long-arrow"
                class="wardrobe-service__arrow"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

const items = [
  { num: '01', title: 'Бесплатный вызов дизайнера', desc: 'Вы познакомитесь с выполненными проектами, а дизайнер подберёт лучшие фасады, цвета и конструктив, составит и рассчитает проект вашей мечты <span>бесплатно</span>.', modal: { name: 'designer', title: 'Пригласить дизайнера' } },
  { num: '02', title: 'Безопасность и экологичность конструкции', desc: 'Материалы от наших поставщиков соответствуют классам эмиссии Е0,5 и Е1. Что допустимо даже для использования в детских и медицинских учреждениях.' },
  { num: '03', title: 'Индивидуальный дизайн', desc: 'Мы создаем мебель на заказ и часто разрабатываем уникальные интерьерные решения, подчёркивающие индивидуальность владельца.' },
  { num: '04', title: 'Гарантия на шкафы 2 года', desc: 'Мы не только берём на себя всю работу от создания макетов до финальной сборки на объекте, но и предоставляем гарантийное обслуживание на целых 24 месяца.', link: { to: { name: 'about' }, title: 'Подробнее о производстве' } },
]

export default {
  name: 'WardrobeService',
  components: {
    AppIcon
  },
  data() {
    return {
      items: items
    }
  },
  methods: {
    openModal(name) {
      this.$store.commit('setModal', name)
    }
  }
}
</script>

<style lang="scss">
.wardrobe-service {
  $b: &;
  
  &__items {
    margin-top: 22px;
  }

  &__item {
    position: relative;
    margin-bottom: 40px;
  }

  &__num {
    position: absolute;
    right: -5px;
    bottom: -22px;
    font-weight: 900;
    font-size: 100px;
    color: $color-lightgray;
    z-index: -1;
  }

  &__title {
    font-weight: bold;
    font-size: 16px;
    line-height: (22/16);
  }

  &__desc {
    margin-top: 6px;
    font-weight: 300;
    font-size: 14px;
    line-height: (20/12);

    span {
      font-weight: 500;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    font-weight: bold;
    font-size: 13px;
    color: $color-green;

    &:hover {
      #{$b}__arrow {
        transform: translateX(10px);
      }
    }
  }

  &__arrow {
    flex-shrink: 0;
    margin-left: 12px;
    width: 43px;
    height: 11px;
    fill: #04b991;
    transition: transform .3s ease;
  }

  @include media(md) {
    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 48px;
      margin-bottom: -60px;
    }

    &__item {
      width: calc(50% - 40px);
      min-height: 130px;
      margin-bottom: 60px;
    }

    &__num {
      right: 35px;
      bottom: -35px;
      width: 150px;
    }

    &__desc {
      margin-top: 16px;
      margin-right: -2px;
    }
  }

  @include media(lg) {
    &__inner {
      display: flex;
    }

    &__heading {
      width: 350px;
    }

    &__items {
      flex: 1;
      margin-top: 5px;
      margin-left: 50px;
      margin-bottom: -55px;
    }

    &__item {
      width: calc(50% - 30px);
      min-height: 140px;
      margin-bottom: 55px;
    }

    &__num {
      right: 5px;
      bottom: -30px;
    }

    &__desc {
      padding-right: 40px;
    }

    &__link {
      margin-top: 20px;
    }
  }

  @include media(xl) {    
    &__inner {
      margin: 0 80px;
    }

    &__items {
      margin-left: 130px;
      margin-right: 40px;
    }

    &__num {
      right: 25px;
    }

    &__desc {
      padding-right: 55px;
    }
  }
}
</style>
