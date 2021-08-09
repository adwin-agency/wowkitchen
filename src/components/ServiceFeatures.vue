<template>
  <div class="service-features">
    <div class="container">
      <p class="service-features__title">{{title}}</p>
      <template v-if="$_media.sm">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="service-features__item"
        >
          <p class="service-features__num">#{{index + 1}}</p>
          <p class="service-features__desc">{{feature}}</p>
        </div>
      </template>
      <template v-else>
        <Swiper
          navigation
          class="service-features__slider"
        >
          <SwiperSlide
            v-for="(feature, index) in features"
            :key="index"
            class="service-features__slide"
          >
            <p class="service-features__num">#{{index + 1}}</p>
            <p class="service-features__desc">{{feature}}</p>
          </SwiperSlide>
        </Swiper>
      </template>
    </div>
    <img
      src="@/assets/img/tape.png"
      alt
      class="service-features__img"
    >
  </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

SwiperCore.use([Navigation])

export default {
  name: 'ServiceFeatures',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    title: String,
    features: Array
  }
}
</script>

<style lang="scss">
.service-features {
  position: relative;
  padding: 30px 0 50px;

  color: #fff;
  background-color: $color-green;

  &__title {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
  }

  &__slider {
    margin-left: 0;
    margin-top: 22px;
    width: calc(100% - 30px);

    .swiper-button-prev {
      display: none;
    }

    .swiper-button-next {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }
  }

  &__item {
    display: flex;
    max-width: calc(100% - 50px);
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__slide {
    display: flex;
    padding-right: 120px;
  }

  &__num {
    margin-right: 20px;
    font-weight: 300;
    font-size: 40px;
    color: $color-yellow;
  }

  &__desc {
    margin-top: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: (24/16);
  }

  &__img {
    position: absolute;
    right: -150px;
    bottom: -5px;
    width: 470px;
  }

  @include media(xxs) {
    &__img {
      right: -180px;
      width: 560px;
    }
  }

  @include media(md) {
    padding: 30px 30px 60px;

    .container {
      padding: 0;
    }

    &__title {
      margin-bottom: 0;
    }

    &__num {
      margin-right: 28px;
      font-size: 50px;
    }

    &__desc {
      min-height: (24/16 * 3em);
    }

    &__img {
      right: -190px;
      width: 600px;
    }
  }

  @include media(lg) {
    padding: 50px 50px 80px;

    &__title {
      font-size: 24px;
    }

    &__slider {
      width: 500px;
    }

    &__num {
      margin-right: 38px;
      font-size: 66px;
    }

    &__desc {
      font-size: 16px;
    }

    &__img {
      left: 165px;
      right: auto;
      width: 715px;
    }
  }

  @include media(xl) {
    padding: 60px 75px 80px;

    &__slider {
      width: 610px;
    }

    &__img {
      left: 185px;
      width: 910px;
    }
  }
}
</style>
