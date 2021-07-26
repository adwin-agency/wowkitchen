<template>
  <div class="technic-details">
    <div class="container">
      <div class="technic-details__inner">
        <router-link
          v-if="$_media.sm"
          :to="{name: 'technics'}"
          class="technic-details__link"
        >
          Вернуться в каталог
        </router-link>
        <div class="technic-details__gallery">
          <div class="technic-details__thumbs">
            <Swiper
              v-if="info.pictures"
              :key="info.id"
              direction="vertical"
              :slides-per-view="4"
              :space-between="8"
              watch-slides-visibility
              watch-slides-progress
              @swiper="setThumbsSwiper"
              class="technic-details__thumbs-slider"
            >
              <SwiperSlide
                v-for="(picture, index) in info.pictures"
                :key="index"
                class="technic-details__thumbs-slide"
              >
                <img
                  :src="$_basepath + picture.small.path"
                  alt=""
                >
                <!-- <AppIcon
                  v-if="slide.video"
                  name="play"
                  class="technic-details__play-icon"
                /> -->
              </SwiperSlide>
            </Swiper>
          </div>          
          <Swiper
            v-if="info.pictures"
            :key="info.id"
            navigation
            scrollbar
            :thumbs="{ swiper: thumbsSwiper }"
            @slideChangeTransitionStart="thumbsSwiper.updateSlidesClasses()"
            class="technic-details__slider"
          >
            <SwiperSlide
              v-for="(picture, index) in info.pictures"
              :key="index"
              class="technic-details__slide"
            >
              <img
                :src="$_basepath + ($_mobile ? picture.small.path : picture.medium.path)"
                alt
              >         
            </SwiperSlide>
            <span
              v-if="!$_media.sm && info.discount"
              class="technic-details__discount"
            >
              %
            </span>
          </Swiper>
        </div>        
        <div class="technic-details__main">
          <router-link
            v-if="!$_media.sm"
            :to="{name: 'technics'}"
            class="technic-details__link"
          >
            Вернуться в каталог
          </router-link>
          <h1 class="technic-details__title">{{info.name}}</h1>
          <div class="technic-details__cost">
            <div class="technic-details__prices">
              <p class="technic-details__price">{{info.price}} ₽</p>
              <p
                v-if="info.old_price"
                class="technic-details__old-price"
              >{{info.old_price}} ₽</p>
            </div>
            <span
              v-if="$_media.sm && info.discount"
              class="technic-details__discount"
            >
              %
            </span>
          </div>
          <p
            v-if="$_media.sm"
            class="technic-details__expand"
            @click="toggleInfo('props')"
          >
            Характеристики
            <AppIcon
              name="plus"
              class="technic-details__expand-icon"
            />
          </p>
          <div
            ref="props"
            class="technic-details__props"
          >
            <p
              v-for="(feature, index) in info.features"
              :key="index"
              class="technic-details__prop"
            >
              <span>{{feature.text}}</span>{{feature.value}}
            </p>
          </div>
          <div class="technic-details__btns">
            <AppButton
              title="Купить"
              class="technic-details__btn"
            />
            <button
              type="button"
              class="technic-details__favorite"
              @click="toggleFavorite(info)"
            >
              <AppBookmark
                class="technic-details__favorite-icon"
                :class="{'is-active': isFavorite}"
              />
              Добавить в подборку
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Scrollbar, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue' 
import AppIcon from './base/AppIcon.vue'
import AppButton from './base/AppButton.vue'
import AppBookmark from './base/AppBookmark.vue'
import useFavorites from '../composition/favorites'

SwiperCore.use([Navigation, Scrollbar, Thumbs])

export default {
  name: 'TecnicDetails',
  components: {
    Swiper,
    SwiperSlide,
    AppIcon,
    AppButton,
    AppBookmark
  },
  props: {
    info: Object
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
      slides: [
        { image: 'technics-card-01.jpg' },
        { image: 'technics-card-02.jpg' },
        { image: 'technics-card-03.jpg' },
        { image: 'technics-card-04.jpg' },
        { image: 'technics-card-05.jpg' },
        { image: 'technics-card-06.jpg' },
      ],
      props: [
        { title: 'Габариты', desc: '60 x 51' },
        { title: 'Установка', desc: 'Независимая' },
        { title: 'Тип', desc: 'Газовая' },
        { title: 'Конфорки', desc: '4' },
        { title: 'Материал', desc: 'Закалённое стекло' },
        { title: 'Цвет', desc: 'Черный' },
        { title: 'Особенности', desc: 'Газ-контроль, автоматический электроподжиг' },
      ],

      thumbsSwiper: null,
      activeInfo: null,
      infoTimeout: null
    }
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },

    toggleInfo(ref) {
      const closing = this.activeInfo ? this.$refs[this.activeInfo] : null
      const opening = this.activeInfo !== ref ? this.$refs[ref] : null

      clearTimeout(this.infoTimeout)
      
      if (closing) {
        closing.style.height = `${closing.scrollHeight}px`

        this.infoTimeout = setTimeout(() => {
          closing.style.height = ''
        }, 0)
      }

      if (opening) {
        opening.style.height = `${opening.scrollHeight}px`

        this.infoTimeout = setTimeout(() => {
          opening.style.height = 'auto'
        }, 300)
      }

      this.activeInfo = this.activeInfo !== ref ? ref : null
    }
  }
}
</script>

<style lang="scss">
.technic-details {
  &__link {
    font-weight: bold;
    font-size: 14px;
    color: $color-green;
  }

  &__gallery {
    margin-top: 12px;
  }

  &__thumbs {
    display: none;
  }

  &__slider {
    position: relative;
    margin: 0 (-$container-padding);
    padding-bottom: 10px;

    .swiper-button-prev,
    .swiper-button-next {
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

    .swiper-scrollbar {
      position: absolute;
      left: $container-padding;
      right: $container-padding;
      bottom: 0;
    }
  }

  &__slide {
    border: 2px solid $color-lightgray;
    padding-top: 100%;

    img {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: calc(100% - 60px);
      height: calc(100% - 60px);
      object-fit: contain;
    }
  }

  &__main {
    margin-top: 4px;
  }

  &__title {
    font-weight: 500;
    font-size: 24px;
    color: #000;
  }

  &__cost {
    display: flex;
    align-items: flex-start;
    margin-top: 2px;
    margin-bottom: 8px;
  }

  &__price {
    font-weight: bold;
    font-size: 22px;
    color: #000;
  }

  &__old-price {
    font-weight: 500;
    font-size: 16px;
    color: $color-lightviolet;
    text-decoration: line-through;
  }

  &__discount {
    margin-left: 26px;
    border-radius: 20px 0 20px 0;
    padding: 9px 22px;
    font-weight: bold;
    font-size: 18px;
    color: $color-lightgray;
    background-color: $color-pink;
  }

  &__expand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 0;
    font-weight: 600;
    font-size: 16px;

    &-icon {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      fill: $color-lightviolet;
    }
  }

  &__props {
    height: 0;
    transition: height .3s ease;
    overflow: hidden;
  }

  &__prop {
    display: flex;
    margin-bottom: 14px;
    font-weight: 500;
    font-size: 12px;
    color: #949494;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      width: 39%;
      margin-right: 10px;
      flex-shrink: 0;
      font-weight: bold;
    }
  }

  &__btns {
    margin-top: 20px;
    text-align: center;
  }

  &__btn {
    width: 100%;
  }

  &__favorite {
    display: inline-flex;
    align-items: center;
    margin-top: 18px;
    font-weight: 500;
    font-size: 12px;
    color: $color-lightviolet;
    transition: opacity .3s ease;

    &:hover {
      opacity: 0.7;
    }

    &-icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      fill: currentColor;
    }
  }

  @include media(md) {
    &__inner {
      display: flex;
      flex-wrap: wrap;
    }

    &__gallery {
      display: flex;
      align-items: flex-start;
      margin-top: 10px;
      margin-left: -$container-padding;
      width: 58.5%;
    }

    &__thumbs {
      display: block;
      width: 80px;
    }

    &__thumbs-slider {
      height: 344px;
    }

    &__thumbs-slide {
      border: 2px solid $color-lightgray;
      padding: 8px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 5px solid transparent;
        transition: border-color .3s ease;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      &.swiper-slide-thumb-active::after {
        border-color: $color-green;
      }
    }

    &__thumbs-arrow {
      margin: 45px auto 0;
      width: 44px;
      height: 11px;
      transform: rotate(90deg);
      fill: $color-lightviolet;
    }

    &__slider {
      flex: 1;
      margin-left: 10px;
      margin-right: 0;
      padding-bottom: 0;

      .swiper-button-prev {
        left: 20px;
      }

      .swiper-button-next {
        right: 20px;
      }

      .swiper-scrollbar {
        display: none;
      }
    }

    &__slide {
      height: 385px;
      padding-top: 0;
    }

    &__discount {
      position: absolute;
      top: 24px;
      right: 8px;
      z-index: 1;
    }

    &__main {
      flex: 1;
      margin-top: 0;
      margin-left: 40px;
    }

    &__title {
      margin-top: 32px;
      font-size: 30px;
    }

    &__cost {
      align-items: center;
      margin-top: 6px;
      margin-bottom: 0;
    }

    &__prices {
      display: flex;
    }

    &__price {
      font-weight: 500;
      font-size: 22px;
    }

    &__old-price {
      margin-left: 26px;
      font-size: 22px;
    }

    &__props {
      margin-top: 38px;
      height: auto;
    }

    &__prop {
      margin-bottom: 10px;
    }

    &__btns {
      margin-top: 28px;
      max-width: 220px;
    }
  }

  @include media(lg) {
    &__gallery {
      margin-left: 0;
      margin-top: 0;
      width: 55.5%;
    }

    &__slide {
      height: 500px;
      padding: 30px;
    }

    &__discount {
      right: 28px;
    }

    &__main {
      margin-top: 15px;
    }

    &__title {
      margin-top: 18px;
    }

    &__cost {
      margin-top: 0;
    }

    &__props {
      margin-top: 58px;
      max-width: 410px;
    }

    &__btns {
      display: flex;
      align-items: center;
      margin-top: 45px;
      max-width: none;
    }

    &__btn {
      margin-right: 50px;
      margin-bottom: 0;
      width: auto;
      min-width: 190px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__favorite {
      margin-top: 0;
    }
  }

  @include media(xl) {    
    &__inner {
      margin: 0 80px;
    }

    &__gallery {
      width: 52%;
    }

    &__slider {
      margin-left: 20px;
    }

    &__slide {
      height: 524px;
    }

    &__discount {
      top: 34px;
    }

    &__main {
      margin-left: 80px;
    }

    &__props {
      margin-top: 58px;
    }
  }
}
</style>
