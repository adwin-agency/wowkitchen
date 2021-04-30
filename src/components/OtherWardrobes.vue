<template>
  <div class="other-wardrobes">
    <div class="other-wardrobes__header">
      <div class="container">
        <h2 class="other-wardrobes__heading">Вам может понравиться</h2>
      </div>
    </div>
    <div class="other-wardrobes__cards">
      <div class="container">
        <Swiper
          scrollbar
          navigation
          :slides-per-view="$_media.sm ? 1 : $_media.md ? 2 : 3"
          :space-between="$_media.sm ? 20 : $_media.md ? 95 : 50"
          watch-slides-visibility
          class="other-wardrobes__slider"
        >
          <SwiperSlide
            v-for="(item, index) in cards"
            :key="index"
            v-slot="{ isVisible }"
            class="other-wardrobes__slide"
          >
            <ProductCard
              :cardData="item"
              wardrobe
              :disabled="!isVisible"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProductCard from './ProductCard.vue'

SwiperCore.use([Navigation, Scrollbar])

export default {
  name: 'OtherWardrobes',
  components: {
    Swiper,
    SwiperSlide,
    ProductCard
  },
  data() {
    return {
      cards: [
        {
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
.other-wardrobes {
  padding: 40px 0 55px;

  &__cards {
    margin-top: 30px;
  }

  &__slider {
    margin: 0 (-$container-padding);
    padding-bottom: 35px;
    overflow: visible;

    .swiper-scrollbar {
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 0;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  @include media(md) {
    padding: 75px 0 65px;

    &__cards {
      .container {
        margin-right: 0;
        padding-right: 0;
        max-width: calc(50% + #{$container-max-width-md / 2});
      }
    }

    &__slider {
      margin: 0;
      padding-right: 330px;
      padding-bottom: 0;

      .swiper-scrollbar {
        display: none;
      }

      .swiper-button-next {
        display: block;
        position: absolute;
        top: 155px;
        right: 140px;
        transform: translateY(-50%);
        z-index: 2;
      }
    }

    &__slide {
      width: calc(50% - 10px);
      transition: opacity .3s ease;

      &:not(.swiper-slide-visible) {
        opacity: 0.2;
        pointer-events: none;
      }
    }
  }

  @include media(lg) {
    padding: 110px 0 65px;

    &__cards {
      margin-top: 40px;

      .container {
        max-width: calc(50% + #{$container-max-width-lg / 2});
      }
    }

    &__slider {
      padding-right: 310px;
    }
  }

  @include media(xl) {
    padding: 135px 0 100px;

    &__cards {
      margin-top: 70px;

      .container {
        max-width: calc(50% + #{$container-max-width-xl / 2});
      }
    }

    &__slider {
      padding-right: 380px;

      .swiper-button-next {
        top: 190px;
        right: 185px;
      }
    }
  }
}
</style>
