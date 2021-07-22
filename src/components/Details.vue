<template>
  <div class="details">
    <div class="details__top">
      <div class="container">
        <Swiper
          :key="info.id"
          :scrollbar="{ hide: false }"
          loop
          navigation
          :lazy="{ loadPrevNext: true }"
          class="details__slider"
        >
          <SwiperSlide
            v-for="(picture, index) in info.pictures"
            :key="index"
            class="details__slide"
          >
            <img
              v-if="index === 0"
              :src="`http://wowkitchen.beget.tech${$_mobile ? picture.small.path : picture.large.path}`"
              alt
            >
            <img
              v-else
              :data-src="`http://wowkitchen.beget.tech${$_mobile ? picture.small.path : picture.large.path}`"
              alt
              class="swiper-lazy"
            >
          </SwiperSlide>
          <AppVideoButton
            title="Видеообзор проекта"
            :video="$_mobile ? info.video?.mobile : info.video?.desktop"
            size="large"
            class="details__video-btn"
          />
          <AppIcon
            name="wow-pattern"
            class="details__pattern"
          />
        </Swiper>
        <div
          v-if="!$_media.sm"
          class="details__characteristics"
        >
          <p
            v-for="(feature, name) in info.features"
            :key="name"
            class="details__characteristic"
          >
            <span>{{feature.title}}</span>{{feature.value}}
          </p>
        </div>
      </div>
    </div>
    <div class="details__main">
      <div class="container">
        <div class="details__content">
          <div
            v-if="!$_media.sm"
            class="details__info"
          >
            <h2 class="details__title">О кухне</h2>
            <p class="details__desc">{{info.description}}</p>
          </div>
          <DetailsCard
            :info="info"
            class="details__card"
          />
          <div
            v-if="$_media.sm"
            class="details__items"
          >
            <div class="details__item">
              <p
                class="details__expand"
                @click="onExpandClick('char')"
              >
                Характеристики
                <AppIcon
                  name="plus"
                  class="details__expand-icon"
                />
              </p>
              <div
                ref="char"
                class="details__hidden"
              >
                <div class="details__characteristics">
                  <p
                    v-for="(feature, index) in info.features"
                    :key="index"
                    class="details__characteristic"
                  >
                    <span>{{feature.title}}</span>{{feature.value}}
                  </p>
                </div>
              </div>
            </div>
            <div class="details__item">
              <p
                class="details__expand"
                @click="onExpandClick('info')"
              >
                Описание
                <AppIcon
                  name="plus"
                  class="details__expand-icon"
                />
              </p>
              <div
                ref="info"
                class="details__hidden"
              >
                <div class="details__info">
                  <h2 class="details__title">О кухне</h2>
                  <p class="details__desc">{{info.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="details__gallery">
      <div class="container container_slider">
        <Swiper
          :key="info.id"
          :slides-per-view="$_media.sm ? 'auto' : 1"
          :space-between="$_media.sm ? 10 : $_media.md ? 30 : 50"
          watch-slides-visibility
          loop
          :looped-slides="2"
          navigation
          :lazy="{ loadPrevNext: true, loadPrevNextAmount: 2 }"
          class="details__gallery-slider"
        >
          <SwiperSlide
            v-if="info.video_customer"
            class="details__gallery-item"
          >
            <video
              ref="video"
              :src="`http://wowkitchen.beget.tech${$_mobile ? info.video_customer.mobile : info.video_customer.desktop}`"
            ></video>
            <button
              v-if="!activeVideo"
              type="button"
              class="details__gallery-play"
              @click="playVideo"
            >
              <AppIcon name="play" />
            </button>
          </SwiperSlide>
          <SwiperSlide
            v-for="(picture, index) in info.pictures"
            :key="index"
            class="details__gallery-item"
          >
            <img
              v-if="index === 0"
              :src="`http://wowkitchen.beget.tech${$_mobile ? picture.small.path : picture.medium.path}`"
              alt
            >
            <img
              v-else
              :data-src="`http://wowkitchen.beget.tech${$_mobile ? picture.small.path : picture.medium.path}`"
              alt
              class="swiper-lazy"
            >
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="details__features">
      <div class="container">
        <div class="details__features-list">
          <div class="details__feature">
            <p class="details__feature-title">0%</p>
            <p>рассрочка на 6 месяцев</p>
          </div>
          <div class="details__feature">
            <p class="details__feature-title">2 года</p>
            <p>гарантия на материалы</p>
          </div>
          <div class="details__feature">
            <p class="details__feature-title">от 14 дней</p>
            <p>на изготовление гарнитура</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Scrollbar, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppIcon from './base/AppIcon.vue'
import DetailsCard from './DetailsCard.vue'
import AppVideoButton from './base/AppVideoButton.vue'

SwiperCore.use([Navigation, Scrollbar, Lazy])

export default {
  name: 'Details',
  components: {
    AppIcon,
    DetailsCard,
    Swiper,
    SwiperSlide,
    AppVideoButton
  },
  props: {
    info: Object
  },
  data() {
    return {
      activeExpand: null,
      expandTimeout: null,
      activeVideo: false
    }
  },
  methods: {
    onExpandClick(id) {
      clearTimeout(this.expandTimeout)

      if (this.activeExpand) {
        const closing = this.$refs[this.activeExpand]
        closing.style.height = `${closing.scrollHeight}px`

        this.expandTimeout = setTimeout(() => {
          closing.style.height = ''
        }, 0)
      }

      if (this.activeExpand !== id) {
        const opening = this.$refs[id]
        opening.style.height = `${opening.scrollHeight}px`

        this.expandTimeout = setTimeout(() => {
          opening.style.height = 'auto'
        }, 300)

        this.activeExpand = id
      } else {
        this.activeExpand = null
      }
    },

    playVideo() {
      this.activeVideo = true
      this.$refs.video.play()
    }
  }
}
</script>

<style lang="scss">
.details {
  &__slider {
    position: relative;
    margin: 0 (-$container-padding);
    padding-bottom: 6px;

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }

    .swiper-scrollbar {
      position: absolute;
      left: $container-padding;
      right: $container-padding;
      bottom: 0;
    }
  }

  &__slide {
    position: relative;
    padding-top: 75%;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__video-btn {
    position: absolute;
    left: 30px;
    bottom: 30px;
  }

  &__pattern {
    display: none;
  }

  &__card {
    margin-top: 22px;
  }

  &__items {
    margin-top: 28px;
  }

  &__item {
    border-top: 1px solid $color-lightgray;
  }

  &__expand {
    display: flex;
    justify-content: space-between;
    padding: 18px 0;
    font-weight: 600;
    font-size: 16px;

    &-icon {
      width: 20px;
      height: 20px;
      margin: 0 10px;
      fill: $color-lightviolet;
    }
  }

  &__hidden {
    height: 0;
    transition: height 0.3s ease;
    overflow: hidden;
  }

  &__characteristics {
    padding: 10px 0 20px;
  }

  &__characteristic {
    margin-bottom: 20px;
    font-size: 13px;
    opacity: 0.8;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      margin-right: 20px;
      font-weight: bold;
    }
  }

  &__info {
    padding: 10px 0;
  }

  &__desc {
    margin-top: 18px;
    font-weight: 300;
    font-size: 14px;
    line-height: (30/14);
    color: #000;

    & + & {
      margin-top: 10px;
    }
  }

  &__gallery {
    margin: 25px (-$container-padding) 0;

    &-slider {
      overflow: visible;

      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }

    &-item {
      position: relative;
      width: calc(100% - 20px);
      height: 200px;

      img,
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-play {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 59px;
      height: 59px;
      border-radius: 50%;
      background-color: $color-yellow;
      transform: translate(-50%, -50%);

      &:hover {
        svg {
          transform: scale(1.1);
        }
      }

      svg {
        width: 100%;
        height: 100%;
        transition: transform .3s ease;
      }
    }
  }

  &__features {
    margin-top: 50px;
  }

  &__feature {
    margin-bottom: 18px;
    font-size: 14px;
    line-height: (20/14);

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      margin-bottom: 2px;
      font-weight: bold;
      font-size: 22px;
    }
  }

  @include media(md) {
    &__top {
      .container {
        max-width: 1120px;
      }
    }

    &__slider {
      margin: 0;
      padding-bottom: 0;
      border-radius: 0 0 120px 0;

      .swiper-button-prev,
      .swiper-button-next {
        display: inline-block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
      }

      .swiper-button-prev {
        left: 80px;
      }

      .swiper-button-next {
        right: 80px;
      }

      .swiper-scrollbar {
        display: none;
      }
    }

    &__slide {
      padding-top: 0;
      height: 480px;
    }

    &__video-btn {
      left: 95px;
      bottom: 40px;
    }

    &__pattern {
      display: block;
      position: absolute;
      top: -20px;
      right: -210px;
      width: 520px;
      height: 520px;
      fill: $color-lightgray;
      opacity: 0.2;
      pointer-events: none;
      z-index: 1;
    }

    &__characteristics {
      display: flex;
      flex-wrap: wrap;
      width: calc(50% + 130px);
      padding: 15px 55px;
      background-color: $color-lightgray;
    }

    &__characteristic {
      margin: 15px 25px;

      &:last-child {
        margin-bottom: 15px;
      }
    }

    &__content {
      display: flex;
    }

    &__info {
      flex: 1;
      margin-top: 45px;
      padding: 0;
      padding-right: 40px;
    }

    &__card {
      position: relative;
      margin-top: -200px;
      width: 340px;
      z-index: 1;
    }

    &__gallery {
      margin-top: 60px;

      &-slider {
        padding-right: 320px;

        .swiper-button-prev,
        .swiper-button-next {
          display: block;
          position: absolute;
          top: 50%;
          z-index: 2;
          transform: translateY(-50%);
        }

        .swiper-button-prev {
          left: 30px;
        }

        .swiper-button-next {
          right: 170px;
        }
      }

      &-item {
        width: auto;
        height: 400px;
        transition: opacity .3s ease;

        &:not(.swiper-slide-visible) {
          opacity: 0.2;
          pointer-events: none;
        }
      }

      &-play {
        width: 83px;
        height: 83px;
      }
    }

    &__features-list {
      display: flex;
      justify-content: space-around;
    }

    &__feature {
      margin-bottom: 0;

      &-title {
        font-size: 42px;
      }
    }
  }

  @include media(lg) {
    &__top {
      .container {
        max-width: 1340px;
      }
    }

    &__slider {
      .swiper-button-prev {
        left: 30px;
      }

      .swiper-button-next {
        right: 30px;
      }
    }

    &__slide {
      height: 580px;
    }

    &__video-btn {
      left: 30px;
    }

    &__pattern {
      width: 620px;
      height: 620px;
    }

    &__characteristics {
      width: calc(50% + 230px);
      padding: 15px 25px;
    }

    &__characteristic {
      margin: 15px 45px;
    }

    &__content {
      padding-right: 60px;
    }

    &__info {
      margin-top: 55px;
      padding-right: 140px;
    }

    &__desc {
      margin-top: 22px;
      font-size: 16px;
      line-height: (34/16);
    }

    &__gallery {
      margin-top: 75px;

      &-slider {
        padding-right: 300px;

        .swiper-button-next {
          right: 160px;
        }
      }

      &-item {
        width: calc(100% - 140px);
        height: 570px;
      }
    }

    &__features {
      margin-top: 70px;
      padding: 0 110px 0 40px;
    }
  }

  @include media(xl) {
    &__top {
      .container {
        max-width: 1620px;
      }
    }

    &__slider {
      .swiper-button-prev {
        left: 70px;
      }

      .swiper-button-next {
        right: 70px;
      }
    }

    &__slide {
      height: 700px;
    }

    &__video-btn {
      left: 70px;
      bottom: 65px;
    }

    &__pattern {
      right: -260px;
      width: 740px;
      height: 740px;
    }

    &__characteristics {
      width: calc(50% + 260px);
      padding: 15px 20px;
    }

    &__characteristic {
      margin: 15px 60px;
    }

    &__content {
      padding-right: 140px;
    }

    &__card {
      margin-top: -230px;
      width: 390px;
    }

    &__info {
      margin-top: 60px;
      padding-left: 140px;
    }

    &__gallery {
      margin-top: 105px;

      &-slider {
        padding-right: 450px;

        .swiper-button-next {
          right: 220px;
        }
      }

      &-item {
        width: calc(100% - 300px);
        height: 650px;
      }
    }

    &__features {
      margin-top: 100px;
      padding: 0 190px 0 120px;
    }
  }
}
</style>
