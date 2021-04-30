<template>
  <div class="card-slider">
    <div class="container">
      <Swiper
        class="card-slider__slides"
        slides-per-view="auto"
        :spaceBetween="10"
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
          <Card class="card-slider__card" :title="card.title" :icon="card.icon" />
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
    width: 160px;
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

    &__slide {
      transition: opacity .3s ease;

      &:not(.swiper-slide-visible) {
        opacity: 0.2;
        pointer-events: none;
      }
    }

    &__card {
      height: 280px;
    }

    .swiper-button-next {
      display: block;
      position: absolute;
      top: 50%;
      right: 108px;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iYXJyb3ciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY2IiBoZWlnaHQ9IjY2IiB2aWV3Qm94PSIwIDAgNjYgNjYiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMzYzNjM2M7CiAgICAgICAgb3BhY2l0eTogMC4zOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmM2Y0Zjk7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGlkPSLQrdC70LvQuNC/0YFfOV/QutC+0L/QuNGPIiBkYXRhLW5hbWU9ItCt0LvQu9C40L/RgSA5INC60L7Qv9C40Y8iIGNsYXNzPSJjbHMtMSIgY3g9IjMzIiBjeT0iMzMiIHI9IjMzIi8+CiAgPHBhdGggaWQ9ImFycm93X3JpZ2h0X9C60L7Qv9C40Y8iIGRhdGEtbmFtZT0iYXJyb3dfcmlnaHQg0LrQvtC/0LjRjyIgY2xhc3M9ImNscy0yIiBkPSJNMTEwNi42NSw1NjQuM2gwYTEuMDU1LDEuMDU1LDAsMCwwLTEuNDYsMGwtOC41Niw4LjI2NWExLjk0OSwxLjk0OSwwLDAsMCwwLDIuODI4bDguNjIsOC4zMjZhMS4wNTgsMS4wNTgsMCwwLDAsMS40NS4wMWgwYTAuOTcsMC45NywwLDAsMCwuMDEtMS40MjRsLTcuODktNy42MTlhMC45ODMsMC45ODMsMCwwLDEsMC0xLjQxNGw3LjgzLTcuNTU4QTAuOTgzLDAuOTgzLDAsMCwwLDExMDYuNjUsNTY0LjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2OSAtNTQxKSIvPgo8L3N2Zz4K);
      background-size: contain;
      transition: opacity .3s ease;
      transform: translateY(-50%) rotate(180deg);
      cursor: pointer;
      z-index: 2;

      &.swiper-button-disabled {
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  @include media(lg) {
    .container {
      max-width: calc(50% + #{$container-max-width-lg / 2});
    }

    &__slides {
      padding-right: 370px;
    }

    &__card {
      height: 330px;
    }

    .swiper-button-next {
      right: 186px;
    }
  }

  @include media(xl) {
    .container {
      max-width: calc(50% + #{$container-max-width-xl / 2});
    }
    
    &__card {
      height: 430px;
    }
  }
}
</style>
