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
          v-if="products"
          :slides-per-view="$_media.sm ? 'auto' : 2"
          :space-between="$_media.sm ? 10 : $_media.md ? 30 : $_media.lg ? 40 : 50"
          scrollbar
          :looped-slides="3"
          navigation
          watch-slides-visibility
          class="other-products__slider"
        >
          <SwiperSlide
            v-for="(product, index) in products"
            :key="index"
            v-slot="{ isVisible }"
            class="other-products__slide"
          >
            <ProductCard
             slide
             cardType="kitchen"
             :disabled="!isVisible"
             :info="product"
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
    heading: String,
    products: Array
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

  &__slide {
    width: calc(100% - 60px);
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

      .swiper-button-prev,
      .swiper-button-next {
        display: block;
        position: absolute;
        top: 125px;
        transform: translateY(-50%);
        z-index: 2;
      }

      .swiper-button-prev {
        left: 30px;
      }

      .swiper-button-next {
        right: 115px;
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

      .swiper-button-prev,
      .swiper-button-next {
        top: 150px;
      }

      .swiper-button-next {
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

      .swiper-button-prev,
      .swiper-button-next {
        top: 190px;
      }

      .swiper-button-next {
        right: 170px;
      }
    }
  }
}
</style>
