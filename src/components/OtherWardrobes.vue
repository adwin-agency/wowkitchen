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
          loop
          :looped-slides="4"
          navigation
          :slides-per-view="$_media.sm ? 1 : $_media.md ? 2 : 3"
          :space-between="$_media.sm ? 20 : 50"
          watch-slides-visibility
          class="other-wardrobes__slider"
        >
          <SwiperSlide
            v-for="(wardrobe, index) in wardrobes"
            :key="index"
            v-slot="{ isVisible }"
            class="other-wardrobes__slide"
          >
            <ProductCard
              :info="wardrobe"
              cardType="wardrobe"
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
  props: {
    wardrobes: Array
  }
}
</script>

<style lang="scss">
.other-wardrobes {
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

  &__slide {
      transition: opacity .3s ease;

      &:not(.swiper-slide-visible) {
        opacity: 0.2;
        pointer-events: none;
      }
    }

  @include media(md) {
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

      .swiper-button-prev,
      .swiper-button-next {
        display: block;
        position: absolute;
        top: 155px;
        transform: translateY(-50%);
        z-index: 2;
      }

      .swiper-button-prev {
        left: 30px;
      }

      .swiper-button-next {
        right: 140px;
      }
    }

    &__slide {
      width: calc(50% - 10px);
    }
  }

  @include media(lg) {
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
    &__cards {
      margin-top: 70px;

      .container {
        max-width: calc(50% + #{$container-max-width-xl / 2});
      }
    }

    &__slider {
      padding-right: 380px;

      .swiper-button-prev,
      .swiper-button-next {
        top: 190px;
      }

      .swiper-button-next {
        right: 185px;
      }
    }
  }
}
</style>
