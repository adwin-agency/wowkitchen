<template>
  <div class="interesting">
    <div class="interesting__header">
      <div class="container container_side-fixed">
        <h2 class="interesting__heading">Вам может быть интересно</h2>
      </div>
    </div>
    <div class="interesting__cards">
      <div class="container container_side-fixed">
        <Swiper
          :slides-per-view="$_media.sm ? 'auto' : 2"
          :space-between="$_mobile ? 20 : $_media.lg ? 40 : 60"
          watch-slides-visibility
          navigation
          class="interesting__slider"
        >
          <SwiperSlide
            v-for="(card, index) in cards"
            :key="$_media.sm ? index : index + 100"
            class="interesting__slide"
          >
            <router-link
              :to="card.route"
              class="interesting__card"
              :style="`background-image: url(${require(`@/assets/img/${card.img}`)})`"
            >
              <p class="interesting__title">{{card.title}}</p>
            </router-link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

const cards = [
  { img: 'measure.jpg', route: '/', title: 'Как проходит замер' },
  { img: 'delivery.jpg', route: '/delivery', title: 'Доставка' },
  { img: 'fixing.jpg', route: '/', title: 'Сборка' },
  { img: 'payment.jpg', route: '/payment', title: 'Оплата' }
]

SwiperCore.use([Navigation])

export default {
  name: 'Interesting',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    payment: Boolean
  },
  data() {
    return {
      cards: this.payment ? cards.filter(i => i.route !== '/payment') : cards
    }
  }
}
</script>

<style lang="scss">
.interesting {
  $b: &;

  padding: 40px 0;
  background-color: $color-lightgray;
  overflow: hidden;

  &__cards {
    margin-top: 24px;
  }

  &__slider {
    overflow: visible;

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  &__slide {
    width: 200px;
  }

  &__card {
    display: flex;
    align-items: flex-end;
    position: relative;
    border-radius: 12px;
    padding: 26px 20px;
    min-height: 200px;
    background-size: cover;
    box-shadow: 0px 19px 26px 0px rgba(0, 0, 0, 0.21);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.44;
    }
  }

  &__title {
    position: relative;
    font-weight: bold;
    font-size: 16px;
    line-height: (20/16);
    color: #fff;
  }

  @include media(md) {
    padding: 50px 0 90px;

    &__cards {
      margin-top: 32px;

      .container {
        padding-right: 0;
        max-width: none;
      }
    }

    &__slider {
      padding-right: 270px;

      .swiper-button-next {
        display: block;
        position: absolute;
        top: 50%;
        right: 140px;
        transform: translateY(-50%);
        z-index: 2;
      }
    }

    &__slide {
      transition: opacity .3s ease;

      &:not(.swiper-slide-visible) {
        opacity: 0.2;
        pointer-events: none;

        #{$b} {
          &__title {
            opacity: 0;
          }
        }
      }
    }

    &__card {
      padding: 26px 30px;
    }

    &__title {
      font-size: 18px;
      transition: opacity .3s ease;
    }
  }

  @include media(lg) {
    padding: 45px 0 85px;

    &__card {
      padding: 45px 40px;
      min-height: 300px;
    }
  }

  @include media(xl) {
    padding: 105px 0 125px;

    &__slider {
      padding-right: 380px;

      .swiper-button-next {
        right: 215px;
      }
    }
  }
}
</style>
