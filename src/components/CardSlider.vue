<template>
  <div class="card-slider">
    <div class="container">
      <Swiper
        class="card-slider__slides"
        slides-per-view="auto"
        :spaceBetween="10"
        loop
        :looped-slides="3"
        navigation
        :watchSlidesVisibility="true"
        :breakpointsInverse="true"
        :breakpoints="{
          [$_breakpoints.md]: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          [$_breakpoints.lg]: {
            slidesPerView: 2,
            spaceBetween: 60
          }
        }"
      >
        <SwiperSlide
          v-for="(card, index) in cards"
          :key="index"
          class="card-slider__slide"
        >
          <Card
            :route="card.route"
            :title="card.title"
            :icon="card.icon"
            class="card-slider__card"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>  
</template>

<script>
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Card from './Card.vue'

SwiperCore.use([Navigation])

export default {
  name: 'CardSlider',
  components: {
    Swiper,
    SwiperSlide,
    Card
  },
  props: {
    cards: Array
  }
}
</script>

<style lang="scss">
.card-slider {

  &__slides {
    position: relative;
    overflow: visible;
  }

  &__slide {
    width: calc(100% - 60px);
    transition: opacity .3s ease;

    &:not(.swiper-slide-visible) {
      opacity: 0.2;
      pointer-events: none;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  @include media(md) {
    .container {
      margin-right: 0;
      padding-right: 0;
      max-width: calc(50% + #{$container-max-width-md / 2});
    }

    &__slides {
      padding-right: 220px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }

    .swiper-button-prev {
      left: 30px;
    }

    .swiper-button-next {
      right: 108px;
    }
  }

  @include media(lg) {
    .container {
      max-width: calc(50% + #{$container-max-width-lg / 2});
    }

    &__slides {
      padding-right: 370px;
    }

    .swiper-button-next {
      right: 186px;
    }
  }

  @include media(xl) {
    .container {
      max-width: calc(50% + #{$container-max-width-xl / 2});
    }
  }
}
</style>
