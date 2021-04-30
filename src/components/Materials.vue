<template>
  <div class="materials">
    <div class="container">
      <div class="materials__inner">
        <div class="materials__header">
          <h2 class="materials__heading">Из чего делается ваша кухня</h2>
          <div class="materials__info">
            <p class="materials__desc">Отличное сочетание цены, качества и экологичности в более, чем 200 цветовых вариациях</p>
            <AppButton
              class="materials__btn"
              href="/"
              bordered
              title="Подробнее о материалах"
            />
          </div>
        </div>
        <Swiper
          v-if="$_windowWidth < $_breakpoints.md"
          class="materials__slider"
          :slidesPerView="'auto'"
          :spaceBetween="10"
        >
          <SwiperSlide
            v-for="(card, index) in cards"
            :key="index"
            class="materials__slide"
            v-slot="{ isActive }"
          >
            <MaterialCard
              :active="isActive"
              :cardData="card"
            />
          </SwiperSlide>
        </Swiper>
        <div
          v-else
          class="materials__cards"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="materials__cards-col"
            :class="{'materials__cards-col_lg': index === 0}"
          >
            <MaterialCard
              :cardData="card"
              :lg="index === 0"
            />
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import MaterialCard from './MaterialCard.vue'
import AppButton from './base/AppButton.vue'

export default {
  name: 'Materials',
  components: {
    AppButton,
    MaterialCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      cards: [
        {
          features: [{icon: 'leaf', title: 'Экологичные'}, {icon: 'umbrella', title: 'Водостойкие'}],
          title: 'Фасады',
          desc: 'Прочные и износостойкие из плит МДФ с ПВХ-плёнкой или пластиком. Обладают повышенными показателями влагостойкости.'
        },
        {
          features: [{icon: 'star', title: 'Известные бренды'}, {icon: 'clock', title: 'Долговечная'}],
          title: 'Фурнитура',
          desc: 'качественная фурнитура BLUM, Hettich, BOYARD'
        },
        {
          features: [{icon: 'thermometer', title: 'Жаропрочные'}, {icon: 'texture', title: 'Текстурные'}],
          title: 'Столешницы',
          desc: 'прочные столешницы из ЛДСП и искуственного камня толщиной до 60 мм'
        },
        {
          features: [{icon: 'grid', title: 'Широкий выбор'}, {icon: 'clock', title: 'Долговечная'}],
          title: 'Техника',
          desc: 'разнообразный выбор от отечественных и зарубежных производителей'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.materials {
  padding: 40px 0;
  background-color: $color-lightgray;

  &__info {
    margin-top: 12px;
  }

  &__desc {
    font-size: 14px;
    line-height: (30/14);
  }

  &__btn {
    margin-top: 12px;
    width: 100%;
    max-width: 280px;
  }

  &__slider {
    margin-top: 28px;
    overflow: visible;
  }

  &__slide {
    width: calc(100% - 20px);
  }

  @include media(md) {
    padding: 26px 0 0;

    &__inner {
      margin: 0 auto;
      max-width: 780px;

      &::after {
        content: "";
        display: block;
        height: 1px;
        margin-top: -100px;
      }
    }

    &__header {
      display: flex;
    }

    &__heading {
      flex: 1;
      margin-right: 110px;
    }

    &__info {
      margin-top: 0;
      width: 61.5%;
    }

    &__desc {
      margin-right: -40px;
    }

    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 30px -10px 0;
    }

    &__cards-col {
      display: flex;
      width: 50%;
      padding: 0 10px;
      margin-bottom: 20px;
    }
  }

  @include media(lg) {
    padding-top: 34px;

    .container {
      margin-left: 0;
      padding-left: 0;
      max-width: calc(50% + #{$container-max-width-lg / 2});
    }

    &__inner {
      margin: 0;
      max-width: none;

      &::after {
        margin-top: -125px;
      }
    }

    &__header {
      margin-left: 34%;
      padding-left: 62px;
    }

    &__heading {
      margin-right: 80px;
    }

    &__info {
      width: 64%;
      padding-right: 50px;
    }

    &__desc {
      margin-right: 0;
      font-size: 16px;
      line-height: (29/16);
    }

    &__btn {
      margin-top: 18px;
    }

    &__cards {
      flex-wrap: nowrap;
      margin-top: 34px;
    }

    &__cards-col {
      flex: 1;
      width: auto;

      &_lg {
        flex: 0 34%;
        margin-top: -300px;
      }
    }
  }

  @include media(xl) {
    padding-top: 64px;

    .container {
      max-width: calc(50% + #{$container-max-width-xl / 2});
    }

    &__inner {
      &::after {
        margin-top: -115px;
      }
    }

    &__header {
      margin-left: 38.5%;
      padding-left: 30px;
    }

    &__info {
      width: 69.5%;
      padding-right: 210px;
    }

    &__btn {
      margin-top: 24px;
    }

    &__cards {
      margin: 64px -35px 0;
    }

    &__cards-col {
      padding: 0 35px;

      &_lg {
        margin-top: -330px;
        flex-basis: 38.5%;
      }
    }
  }
}
</style>
