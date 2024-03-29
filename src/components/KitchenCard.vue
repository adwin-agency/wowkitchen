<template>
  <div
    v-if="info"
    :class="[
      'kitchen-card',
      {'kitchen-card_large': large},
      {'kitchen-card_slide': slide},
      {'is-disabled': disabled}
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="kitchen-card__img-box">
      <Swiper
        v-if="!slide"
        :key="info.id + +large"
        loop
        navigation
        :lazy="{ loadPrevNext: true }"
        class="kitchen-card__slider"
        @swiper="setSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide
          v-for="(picture, index) in info.pictures"
          :key="index"
        >
          <img
            v-if="index === 0"
            :src="$_basepath + ($_mobile ? picture.small.path : large ? picture.large.path : picture.medium.path)"
            alt
            class="kitchen-card__img"
          >
          <img
            v-else
            :data-src="$_basepath + ($_mobile ? picture.small.path : large ? picture.large.path : picture.medium.path)"
            alt
            class="kitchen-card__img swiper-lazy"
          >
          <router-link
            :to="{name: 'kitchen', params: {code: info.url}}"
            class="kitchen-card__link"
          ></router-link>
          <button
            type="button"
            class="kitchen-card__zoom-btn"
            @click="openModalImages(index)"
          >
            <AppIcon
              name="zoom"
              class="kitchen-card__zoom-icon"
            />
          </button>
        </SwiperSlide>
      </Swiper>
      <template v-else>
        <img
          :src="$_basepath + ($_mobile ? info.pictures[0].small.path : info.pictures[0].medium.path)"
          alt
          class="kitchen-card__img"
        >
        <router-link
          :to="{name: 'kitchen', params: {code: info.url}}"
          class="kitchen-card__link"
        ></router-link>
      </template>
      <div
        v-if="info.video?.desktop"
        class="kitchen-card__video-btn"
      >
        <AppVideoButton
          overview
          :expand="!large"
          :title="large ? 'Смотреть видеообзор' : 'Видеообзор'"
          :video="$_mobile ? info.video.mobile || info.video.desktop : info.video.desktop"
          :class="{'is-active': !large && hover}"
        />
      </div>

    </div>
    <div class="kitchen-card__content">
      <div class="kitchen-card__header">
        <!-- <p class="kitchen-card__category">Кухня</p> -->
        <p class="kitchen-card__title">
          <router-link :to="{name: 'kitchen', params: {code: info.url}}">
            <span>Кухня</span>
            “{{info.name}}”
          </router-link>
        </p>
        <div class="kitchen-card__actions">
          <button
            type="button"
            class="kitchen-card__action"
            @click="toggleFavorite(info)"
          >
            <AppBookmark
              class="kitchen-card__action-icon"
              :class="{'is-active': isFavorite}"
            />
          </button>
          <AppShare
            v-if="large"
            :shareTitle="info.name"
            :shareUrl="'/kitchen/' + info.url"
            class="kitchen-card__share"
          />
        </div>
      </div>
      <!-- <div
        v-if="info.features && ($_desktop && !large || large && noPrice)"
        class="kitchen-card__props"
      >
        <p
          v-for="(feature, index) in Object.values(info.features)"
          :key="index"
          class="kitchen-card__prop"
        >
          <span>{{feature.title}}</span>
          {{feature.title === 'Фасад' ? 'Egger' : feature.value}}
        </p>
      </div> -->
      <div
        v-if="!noPrice"
        class="kitchen-card__prices"
      >
        <span class="kitchen-card__discount">-{{info.discount}}%</span>
        <p class="kitchen-card__old-price">{{info.old_price}} ₽</p>
        <p class="kitchen-card__price">{{info.price}} ₽</p>
        <p class="kitchen-card__price-note">цена за кухонный гарнитур</p>
      </div>
      <div class="kitchen-card__calc">
        <AppButton
          :size="!large ? 'small' : ''"
          :bordered="!large"
          :title="noPrice ? 'Узнать стоимость' : 'Рассчитать кухню'"
          modalName="calc"
          class="kitchen-card__btn"
          @click="handleBtnClick"
        />
        <!-- <p class="kitchen-card__calc-desc">Бесплатный расчёт проекта по вашим размерам</p> -->
      </div>
    </div>
  </div>
  <div
    v-else
    :class="[
      'kitchen-card',
      {'kitchen-card_large': large},
      {'kitchen-card_slide': slide},
      'is-placeholder'
    ]"
  >
    <div class="kitchen-card__img-box"></div>
    <div class="kitchen-card__content">
      <div class="kitchen-card__header"></div>
      <!-- <div
        v-if="($_desktop && !large || large && noPrice)"
        class="kitchen-card__props"
      ></div> -->
      <div
        v-if="!noPrice"
        class="kitchen-card__prices"
      ></div>
      <div class="kitchen-card__calc"></div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppBookmark from './base/AppBookmark.vue'
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppVideoButton from './base/AppVideoButton.vue'
import AppShare from './base/AppShare.vue'
import useFavorites from '../composition/favorites'
import api from '../api'

SwiperCore.use([Navigation, Lazy])

export default {
  name: 'KitchenCard',
  components: {
    Swiper,
    SwiperSlide,
    AppButton,
    AppIcon,
    AppVideoButton,
    AppBookmark,
    AppShare
  },
  props: {
    info: Object,
    noPrice: Boolean,
    large: Boolean,
    slide: Boolean,
    disabled: Boolean
  },
  setup(props) {
    const { isFavorite, toggleFavorite } = useFavorites(props)
    return {
      isFavorite,
      toggleFavorite
    }
  },
  data() {
    return {
      hover: false,
      swiper: null,
      isWatched: false
    }
  },
  watch: {
    large() {
      setTimeout(() => {
        this.swiper?.update()
      })
    }
  },
  methods: {
    handleMouseEnter() {
      this.hover = true
    },
    handleMouseLeave() {
      this.hover = false
    },

    openModalImages(index) {
      this.$store.commit('setModal', 'images')
      this.$store.commit('setModalData', {
        images: this.info.pictures,
        index: index
      })
    },

    handleBtnClick() {
      const { name, id, category_rus, price } = this.info
      this.$store.commit('setProductData', { name, id, category: `Кухни/${category_rus}`, price, product: 'kitchen' })
    },

    setSwiper(swiper) {
      this.swiper = swiper
    },

    onSlideChange() {
      if (!this.swiper || this.isWatched) return

      const { name, id, category_rus, price } = this.info
      api.ecommerce('detail', id, name, `Кухни/${category_rus}`, price)

      this.isWatched = true
    }
  }
}
</script>

<style lang="scss">
.kitchen-card {
  $b: &;

  @keyframes loading-placeholder {
    from {
      transform: translateX(-70%);
    }
    to {
      transform: translateX(70%);
    }
  }

  &.is-placeholder {
    pointer-events: none;

    #{$b} {
      &__img-box,
      &__header,
      &__props,
      &__prices,
      &__calc {
        position: relative;
        border: none;
        background-color: #ddd;
        overflow: hidden;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            to right,
            transparent 30%,
            #fff 50%,
            transparent 70%
          );
          animation: loading-placeholder 1s infinite;
        }
      }

      &__header {
        width: 120px;
        height: 40px;
      }

      &__prices {
        width: 140px;
        height: 78px;
      }

      &__calc {
        width: 100%;
        height: 56px;
      }
    }
  }

  &_slide {
    #{$b} {
      &__content {
        display: block;
      }

      &__title {
        span {
          display: inline;
        }
      }

      &__prices {
        margin-top: 10px;
      }

      &__price {
        &-note {
          max-width: none;
        }
      }
    }
  }

  &__img-box {
    display: block;
    position: relative;
    padding-top: 75%;
    overflow: hidden;
  }

  &__slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    .swiper-button-prev,
    .swiper-button-next {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }

    .swiper-button-prev {
      left: 0;
    }

    .swiper-button-next {
      right: 0;
    }
  }

  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__discount {
    margin-right: 10px;
    border-radius: 18px 0 18px 0;
    padding: 4px 8px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    background-color: $color-pink;
    color: $color-lightgray;
  }

  &__video-btn {
    position: absolute;
    left: 20px;
    bottom: 15px;
  }

  &__zoom-btn {
    display: none;
  }

  &__content {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding: 0 10px;
  }

  &__header {
    display: flex;
  }

  &__category {
    grid-column: 1 / 3;
    font-size: 12px;
  }

  &__title {
    font-weight: 500;
    font-size: 18px;
    color: #000;

    span {
      display: block;
    }
  }

  &__actions {
    display: flex;
    margin-left: 6px;
  }

  &__action {
    fill: $color-lightviolet;
    transition: opacity 0.3s ease, fill 0.3s ease;

    &:hover {
      opacity: 0.7;
    }

    &.is-active {
      fill: black;
    }
  }

  &__action-icon {
    display: block;
    width: 20px;
    height: 20px;
  }

  &__desc {
    display: flex;
    align-items: flex-start;
    margin-top: 6px;
  }

  &__prices {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: end;
    align-items: center;
    text-align: right;
  }

  &__price {
    grid-column: 1/3;
    font-weight: bold;
    font-size: 18px;
    color: #000;
  }

  &__old-price {
    font-weight: 500;
    font-size: 16px;
    color: $color-lightviolet;
    text-decoration: line-through;
  }

  &__price-note {
    grid-column: 1/3;
    margin-top: 2px;
    max-width: 140px;
    padding-left: 10px;
    font-size: 12px;
  }

  &__calc {
    grid-column: 1 / 3;
    margin-top: 18px;
    font-size: 12px;
    line-height: calc(16/12);
    text-align: center;
    color: #7f7f7f;

    &-desc {
      margin-top: 10px;
      max-width: 100%;
    }
  }

  &__btn {
    width: 100%;
  }

  @include media(xxs) {
    &_slide {
      #{$b} {
        &__content {
          display: grid;
        }

        &__title {
          span {
            display: block;
          }
        }

        &__price {
          &-note {
            max-width: 140px;
          }
        }
      }
    }

    &__title {
      span {
        display: inline;
      }
    }

    &__price {
      font-size: 20px;
    }
  }

  @include media(xs) {
    &.is-placeholder {
      #{$b} {
        &__prices {
          width: 180px;
          height: 66px;
        }
      }
    }

    &_slide {
      #{$b} {
        &__title {
          span {
            display: inline;
          }
        }
        
        &__price {
          &-note {
            max-width: none;
          }
        }
      }
    }

    &__price {
      &-note {
        max-width: none;
      }
    }
  }

  @include media(md) {
    &.is-disabled {
      #{$b} {
        &__video-btn {
          opacity: 0;
          pointer-events: none;
        }

        &__content {
          opacity: 0;
          pointer-events: none;
        }
      }
    }

    &.is-placeholder {
      #{$b} {
        &__header {
          width: 220px;
          height: 26px;
        }

        &__calc {
          width: 194px;
          height: 56px;
        }
      }
    }

    &_slide {
      transition: opacity 0.3s ease;

      #{$b} {
        &__img-box {
          height: 250px;
        }

        &__video-btn {
          left: 30px;
          bottom: 25px;
        }

        &__content {
          transition: opacity 0.3s ease;
        }

        &__title {
          font-size: 16px;
        }

        &__prices {
          margin-top: 0;
        }

        &__discount {
          margin-right: 5px;
        }

        &__price {
          font-size: 20px;
        }

        &__old-price {
          font-size: 16px;
        }

        &__btn {
          margin-top: 3px;
        }
      }
    }

    &__img-box {
      padding-top: 0;
      height: 390px;
      border-radius: 12px;
    }

    &__slider {
      .swiper-button-prev {
        left: 20px;
      }

      .swiper-button-next {
        right: 20px;
      }
    }

    &__video-btn {
      left: 40px;
      bottom: 45px;
    }

    &__zoom-btn {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: rgba(#fff, 0.5);
      transform: translate(-50%, -50%);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: 2;
    }

    &__zoom-icon {
      margin: 1px 0 0 2px;
      width: 100%;
      height: 100%;
    }

    &__content {
      align-items: start;
      margin-top: 12px;
      padding: 0 10px;
      transition: opacity 0.3s ease;
    }

    &__header {
      margin-bottom: 0;
    }

    &__title {
      font-size: 22px;
    }

    &__prices {
      grid-column: 2/3;
      grid-row: 1/3;
    }

    &__price {
      font-size: 22px;
    }

    &__old-price {
      font-size: 18px;
    }

    &__calc {
      grid-column: 1/2;
      margin-top: 12px;
      width: 194px;
    }
  }

  @include media(lg) {
    &:hover {
      #{$b} {
        &__img-box {
          box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.19);
        }

        &__zoom-btn {
          opacity: 1;
          pointer-events: all;
        }
      }
    }

    &.is-placeholder {
      #{$b} {
        &__prices {
          width: 180px;
          height: 80px;
        }
      }
    }

    &_large {
      position: relative;

      #{$b} {
        &__img-box {
          height: 520px;
          border-radius: 0 0 100px 0;
        }

        &__video-btn {
          left: 38px;
          bottom: 34px;
        }

        &__content {
          display: block;
          position: absolute;
          right: 80px;
          bottom: -64px;
          margin-top: 0;
          min-width: 400px;
          border-radius: 8px;
          padding: 22px 40px 28px;
          background-color: #fff;
          box-shadow: 0px 20px 38px 0px rgba(53, 53, 53, 0.11);
          z-index: 1;
        }

        &__header {
          justify-content: space-between;
          align-items: center;
        }

        &__category {
          grid-column: auto;
          margin-bottom: 2px;
          font-weight: 500;
          font-size: 10px;
          text-transform: uppercase;
          color: $color-lightviolet;
        }

        &__actions {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }

        &__price-box {
          display: flex;
          align-items: center;
          padding-right: 0;
        }

        &__prices {
          grid-template-columns: auto auto;
          justify-content: space-between;
          justify-items: initial;
          margin-top: 18px;
          text-align: left;
        }

        &__price {
          grid-column: 1/2;
          grid-row: 1/2;
          margin-right: 0;
          margin-bottom: -8px;
        }

        &__old-price {
          grid-column: 2/3;
          grid-row: 1/2;
          font-size: 16px;
        }

        &__price-note {
          grid-column: 1/2;
          grid-row: 2/3;
          margin-top: 0;
          padding-left: 0;
        }

        &__discount {
          grid-column: 2/3;
          grid-row: 2/3;
          justify-self: end;
          margin-top: -4px;
          margin-right: 0;
        }

        &__props {
          margin-top: 16px;
        }

        &__calc {
          margin-top: 14px;
          width: 100%;
        }

        &__btn {
          width: 100%;
        }
      }

      &.is-placeholder {
        #{$b} {
          &__header {
            width: 190px;
          }

          &__prices {
            width: 100%;
            height: 52px;
          }

          &__calc {
            width: 100%;
            height: 60px;
          }
        }
      }
    }

    &_slide {
      #{$b} {
        &__img-box {
          height: 300px;
        }

        &__video-btn {
          left: 40px;
          bottom: 40px;
        }

        &__title {
          font-size: 22px;
        }

        &__props {
          margin-top: 10px;
        }

        &__discount {
          margin-right: 10px;
        }

        &__price {
          font-size: 32px;
        }

        &__old-price {
          font-size: 18px;
        }
      }
    }

    &__img-box {
      height: 300px;
      transition: box-shadow 0.3s ease;
    }

    &__video-btn {
      left: 40px;
      bottom: 28px;
    }

    &__content {
      margin-top: 20px;
    }

    &__action {
      margin-right: 14px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__props {
      display: flex;
      flex-wrap: wrap;
      margin-top: 6px;
      padding-right: 12px;
    }

    &__prop {
      margin-right: 18px;
      margin-bottom: 8px;
      font-size: 11px;
      white-space: nowrap;
      opacity: 0.5;

      span {
        font-weight: 500;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    &__prop-title {
      font-weight: 500;
      margin-right: 6px;
    }

    &__price {
      font-size: 32px;
    }
  }

  @include media(xl) {
    &_large {
      #{$b} {
        &__img-box {
          height: 660px;
        }

        &__video-btn {
          left: 68px;
          bottom: 55px;
        }

        &__content {
          right: 90px;
          bottom: -98px;
          padding: 38px 40px 40px;
        }

        &__calc {
          margin-top: 24px;
        }
      }
    }

    &_slide {
      #{$b} {
        &__img-box {
          height: 380px;
        }

        &__content {
          margin-top: 30px;
        }
      }
    }

    &__img-box {
      height: 380px;
    }

    &__discount {
      right: 40px;
    }

    &__video-btn {
      bottom: 38px;
    }

    &__content {
      margin-top: 30px;
    }
  }
}
</style>
