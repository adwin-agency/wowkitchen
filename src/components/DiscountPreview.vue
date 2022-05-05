<template>
  <div
    v-if="bonuses.length"
    class="discount-preview"
    :class="{'discount-preview_catalog': catalog}"
  >
    <div class="container">
      <div class="discount-preview__box">
        <p class="discount-preview__title">
          <AppIcon
            class="discount-preview__title-icon"
            name="discount"
          />
          Актуальные акции
        </p>
        <div class="discount-preview__cards">
          <button
            class="discount-preview__prev"
            ref="prev"
          ></button>
          <Swiper
            class="discount-preview__slider"
            slidesPerView="auto"
            loop
            @swiper="onSwiper"
          >
            <SwiperSlide
              v-for="item in bonuses"
              :key="item"
              class="discount-preview__slide"
            >
              <DiscountCard
                class="discount-preview__card"
                :id="item"
              />
            </SwiperSlide>
          </Swiper>
          <button
            class="discount-preview__next"
            ref="next"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppIcon from './base/AppIcon.vue'
import DiscountCard from './DiscountCard.vue'

export default {
  name: 'DiscountPreview',
  components: {
    Swiper,
    SwiperSlide,
    AppIcon,
    DiscountCard
  },
  props: {
    catalog: Boolean
  },
  computed: {
    bonuses() {
      return this.$store.state.bonuses
    }
  },
  methods: {
    onSwiper(swiper) {
      swiper.params.navigation.prevEl = this.$refs.prev
      swiper.params.navigation.nextEl = this.$refs.next
      swiper.navigation.init()
    }
  }
}
</script>

<style lang="scss">
.discount-preview {
  padding: 50px 0;
  background-color: #eaebf1;

  &_catalog {
    padding-top: 0;
  }

  &__box {
    margin: 0 (-$container-padding);
    padding: 20px 0;
    background-color: #fff;
  }

  &__title {
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    &-icon {
      width: 26px;
      height: 26px;
      margin-right: 12px;
    }
  }

  &__cards {
    margin-top: 20px;
  }

  &__prev,
  &__next {
    display: none;
  }

  &__slider {
    padding: 0 10px;
  }

  &__slide {
    width: calc(100% - 10px);
    max-width: 420px;
    margin-right: 10px;
  }

  @include media(xxs) {
    &__box {
      margin: 0;
      border-radius: 20px;
    }

    &__slide {
      width: calc(100% - 20px);
    }
  }

  @include media(md) {
    &__box {
      padding: 56px 40px 52px;
    }

    &__title {
      padding: 0;
    }

    &__cards {
      display: flex;
      align-items: center;
      margin-top: 28px;
    }

    &__prev,
    &__next {
      display: block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: rgba(60, 60, 60, 0.2);
      background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iYXJyb3ciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY2IiBoZWlnaHQ9IjY2IiB2aWV3Qm94PSIwIDAgNjYgNjYiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMzYzNjM2M7CiAgICAgICAgb3BhY2l0eTogMC4zOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmM2Y0Zjk7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGlkPSLQrdC70LvQuNC/0YFfOV/QutC+0L/QuNGPIiBkYXRhLW5hbWU9ItCt0LvQu9C40L/RgSA5INC60L7Qv9C40Y8iIGNsYXNzPSJjbHMtMSIgY3g9IjMzIiBjeT0iMzMiIHI9IjMzIi8+CiAgPHBhdGggaWQ9ImFycm93X3JpZ2h0X9C60L7Qv9C40Y8iIGRhdGEtbmFtZT0iYXJyb3dfcmlnaHQg0LrQvtC/0LjRjyIgY2xhc3M9ImNscy0yIiBkPSJNMTEwNi42NSw1NjQuM2gwYTEuMDU1LDEuMDU1LDAsMCwwLTEuNDYsMGwtOC41Niw4LjI2NWExLjk0OSwxLjk0OSwwLDAsMCwwLDIuODI4bDguNjIsOC4zMjZhMS4wNTgsMS4wNTgsMCwwLDAsMS40NS4wMWgwYTAuOTcsMC45NywwLDAsMCwuMDEtMS40MjRsLTcuODktNy42MTlhMC45ODMsMC45ODMsMCwwLDEsMC0xLjQxNGw3LjgzLTcuNTU4QTAuOTgzLDAuOTgzLDAsMCwwLDExMDYuNjUsNTY0LjNaIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMzMgMzMpIHRyYW5zbGF0ZSgtMTA2OSAtNTQxKSIvPgo8L3N2Zz4K);
      background-position: center;
    }

    &__prev {
      margin-right: 14px;
      transform: rotate(180deg);
    }

    &__next {
      margin-left: 14px;
    }

    &__slider {
      flex: 1;
      padding: 0;
    }

    &__slide {
      width: calc(50% - 10px);
      max-width: none;
      margin-right: 20px;
    }
  }

  @include media(lg) {
    padding: 92px 0;

    &_catalog {
      padding-top: 0;
    }
  }

  @include media(xl) {
    &__slide {
      width: calc(33.333% - 13px);
    }
  }
}
</style>