<template>
  <div class="other-products">
    <div class="other-products__header">
      <div class="container">
        <h2 class="other-products__heading">{{heading}}</h2>
        <a href='#' class="other-products__link">Перейти в каталог кухонь</a>
      </div>
    </div>
    <div class="other-products__cards">
      <div class="container">
        <Swiper
          :slides-per-view="$_mobile ? 1 : 2"
          :space-between="$_mobile ? 30 : $_media.lg ? 40 : 50"
          scrollbar
          navigation
          watch-slides-visibility
          class="other-products__slider"
        >
          <SwiperSlide
            v-for="(card, index) in cards"
            :key="index"
            v-slot="{ isVisible }"
            class="other-products__slide"
          >
            <ProductCard
             slide
             :disabled="!isVisible"
             :cardData="card"
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
  name: 'OtherProducts',
  components: {    
    Swiper,
    SwiperSlide,
    ProductCard,
  },
  props: {
    heading: String
  },
  data() {
    return {
      cards: [
        {
          type: 'kitchen',
          image: 'catalog-card-01.jpg',
          discount: '-50%',
          category: 'Гарнитур',
          title: 'АнджелинаДжоли',
          props: [
            {title: 'Фасад', value: 'Эмаль'},
            {title: 'Стиль', value: 'Прованс'}
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          type: 'kitchen',
          image: 'catalog-card-02.jpg',
          discount: '-50%',
          category: 'Гарнитур',
          title: 'ТайраБэнкс',
          props: [
            {title: 'Фасад', value: 'Эмаль'},
            {title: 'Стиль', value: 'Прованс'}
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          type: 'kitchen',
          image: 'catalog-card-03.jpg',
          discount: '-50%',
          category: 'Гарнитур',
          title: 'ТайраБэнкс',
          props: [
            {title: 'Фасад', value: 'Эмаль'},
            {title: 'Стиль', value: 'Прованс'}
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          type: 'kitchen',
          image: 'catalog-card-04.jpg',
          discount: '-50%',
          category: 'Гарнитур',
          title: 'ТайраБэнкс',
          props: [
            {title: 'Фасад', value: 'Эмаль'},
            {title: 'Стиль', value: 'Прованс'}
          ],
          price: '54 500 ₽',
          oldPrice: '109 000 ₽'
        },
        {
          type: 'kitchen',
          image: 'catalog-card-05.jpg',
          discount: '-50%',
          category: 'Гарнитур',
          title: 'ТайраБэнкс',
          props: [
            {title: 'Фасад', value: 'Эмаль'},
            {title: 'Стиль', value: 'Прованс'}
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
.other-products {
  padding: 45px 0 40px;
  background-color: $color-lightgray;

  &__link {
    display: inline-block;
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    color: $color-green;
  }

  &__cards {
    margin-top: 34px;
  }

  &__slider {
    padding-bottom: 38px;
    overflow: visible;

    .swiper-scrollbar {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  @include media(md) {
    padding: 52px 0 58px;

    &__cards {
      .container {
        margin-right: 0;
        padding-right: 0;
        max-width: calc(50% + #{$container-max-width-md / 2});
      }
    }

    &__slider {
      padding-right: 220px;
      padding-bottom: 0;

      .swiper-scrollbar {
        display: none;
      }

      .swiper-button-next {
        display: block;
        position: absolute;
        top: 125px;
        right: 115px;
        transform: translateY(-50%);
        z-index: 2;
      }
    }

    &__slide {
      transition: opacity .3s ease;

      &:not(.swiper-slide-visible) {
        opacity: 0.2;
        pointer-events: none;
      }
    }
  }

  @include media(lg) {
    padding: 72px 0 54px;

    &__link {
      margin-top: 20px;
    }

    &__cards {
      .container {
        max-width: calc(50% + #{$container-max-width-lg / 2});
      }
    }

    &__slider {
      padding-right: 310px;

      .swiper-button-next {
        top: 150px;
        right: 165px;
      }
    }
  }

  @include media(xl) {
    padding: 105px 0 98px;

    &__cards {
      margin-top: 56px;

      .container {
        max-width: calc(50% + #{$container-max-width-xl / 2});
      }
    }

    &__slider {
      padding-right: 330px;

      .swiper-button-next {
        top: 190px;
        right: 170px;
      }
    }
  }
}
</style>
