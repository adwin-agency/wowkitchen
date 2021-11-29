<template>
  <div class="wardrobe-details">
    <div class="container">
      <div class="wardrobe-details__inner">
        <div class="wardrobe-details__gallery">
          <div class="wardrobe-details__thumbs">
            <Swiper
              v-if="info"
              direction="vertical"
              :slides-per-view="$_media.md ? 3 : $_media.lg ? 4 : 5"
              :space-between="$_media.md ? 5 : 8"
              watch-slides-visibility
              watch-slides-progress
              loop
              @swiper="setThumbsSwiper"
              class="wardrobe-details__thumbs-slider"
            >
              <SwiperSlide
                v-for="(picture, index) in info.pictures"
                :key="index"
                class="wardrobe-details__thumbs-slide"
              >
                <img
                  :src="$_basepath + picture.small.path"
                  alt
                >
                <!-- <AppIcon
                  v-if="slide.video"
                  name="play"
                  class="wardrobe-details__play-icon"
                /> -->
              </SwiperSlide>
            </Swiper>
            <div
              v-else
              class="wardrobe-details__thumbs-slider"
            >
              <div class="wardrobe-details__thumbs-slide"></div>
            </div>
            <AppIcon
              name="long-arrow"
              class="wardrobe-details__thumbs-arrow"
            />
          </div>
          <Swiper
            v-if="info"
            navigation
            scrollbar
            :thumbs="{ swiper: thumbsSwiper }"
            loop
            @swiper="setMainSwiper"
            @slideChangeTransitionStart="thumbsSwiper.updateSlidesClasses()"
            class="wardrobe-details__slider"
          >
            <SwiperSlide
              v-for="(picture, index) in info.pictures"
              :key="index"
              class="wardrobe-details__slide"
            >
              <img
                :src="$_basepath + ($_mobile ? picture.small.path : picture.medium.path)"
                alt
              >
              <button
                v-if="!$_media.sm"
                type="button"
                class="wardrobe-details__zoom-btn"
                @click="openModalImages(index)"
              >
                <AppIcon
                  name="zoom"
                  class="wardrobe-details__zoom-icon"
                />
              </button>
              <!-- <template v-if="slide.video">
                <video
                  src=""
                  :poster="require(`@/assets/img/${slide.video}`)"
                ></video>
              </template>           -->
            </SwiperSlide>
            <!-- <button
              v-if="$_media.sm && slides.find(i => i.video)"
              type="button"
              class="wardrobe-details__play"
            >
              <AppIcon
                name="play"
                class="wardrobe-details__play-icon"
              />
            </button> -->
          </Swiper>
          <div
            v-else
            class="wardrobe-details__slider"
          >
            <div class="wardrobe-details__slide"></div>
          </div>
        </div>
        <div class="wardrobe-details__main">
          <h1 class="wardrobe-details__title">{{info?.name}}</h1>
          <!-- <div class="wardrobe-details__cost">
            <div class="wardrobe-details__prices">
              <p class="wardrobe-details__price">{{info.price}} ₽</p>
              <p
                v-if="info.old_price"
                class="wardrobe-details__old-price"
              >{{info.old_price}} ₽</p>
            </div>
            <span
              v-if="info.discount"
              class="wardrobe-details__discount"
            >-{{info.discount}}%</span>
          </div> -->
          <p
            v-if="$_media.sm"
            class="wardrobe-details__expand"
            @click="toggleInfo('desc')"
          >
            Описание
            <AppIcon
              :name="activeInfo === 'desc' ? 'minus' : 'plus'"
              class="wardrobe-details__expand-icon"
            />
          </p>
          <div
            ref="desc"
            class="wardrobe-details__desc"
          >
            <p>{{info?.description}}</p>
          </div>
          <p
            v-if="$_media.sm"
            class="wardrobe-details__expand"
            @click="toggleInfo('props')"
          >
            Характеристики
            <AppIcon
              :name="activeInfo === 'props' ? 'minus' : 'plus'"
              class="wardrobe-details__expand-icon"
            />
          </p>
          <div
            ref="props"
            class="wardrobe-details__props"
          >
            <p
              v-for="(feature, name) in info?.features"
              :key="name"
              class="wardrobe-details__prop"
            >
              <span>{{feature.title}}</span>{{feature.value}}
            </p>
          </div>
          <div class="wardrobe-details__btns">
            <AppButton
              title="Узнать стоимость"
              modalName="calc"
              class="wardrobe-details__btn"
              @click="handleBtnClick"
            />
            <AppButton
              bordered
              title="Вызвать дизайнера"
              modalName="designer"
              class="wardrobe-details__btn"
              @click="handleBtnClick"
            />
          </div>
        </div>
        <div class="wardrobe-details__features">
          <p
            v-for="(feature, index) in features"
            :key="index"
            class="wardrobe-details__feature"
          >
            <span>{{feature.title}}</span><br>{{feature.desc}}
          </p>
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

SwiperCore.use([Navigation, Scrollbar, Thumbs])

export default {
  name: 'WardrobeDetails',
  components: {
    Swiper,
    SwiperSlide,
    AppIcon,
    AppButton
  },
  props: {
    info: Object
  },
  data() {
    return {
      props: [
        { title: 'Планировка', desc: 'Встроенный' },
        { title: 'Фасад', desc: 'ЛДСП + Зеркало' },
        { title: 'Корпус', desc: 'ЛДСП' }
      ],
      features: [
        { title: 'от 3 дней', desc: 'срок производства' },
        { title: '3000+', desc: 'вариантов комбинаций' },
        { title: '2 года', desc: 'гарантия на материалы' },
        { title: '3 часа', desc: 'на монтаж' }
      ],

      mainSwiper: null,
      thumbsSwiper: null,
      activeInfo: null,
      infoTimeout: null
    }
  },
  methods: {
    setMainSwiper(swiper) {
      this.mainSwiper = swiper
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper
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
    },

    handleBtnClick() {
      if (!this.info) {
        return
      }
      
      const { name, id } = this.info
      this.$store.commit('setProductData', { name, id, product: 'wardrobe' })
    },

    openModalImages(index) {
      if (!this.info) {
        return
      }

      this.$store.commit('setModal', 'images')
      this.$store.commit('setModalData', { images: this.info.pictures, index: index })
    }
  }
}
</script>

<style lang="scss">
.wardrobe-details {
  $b: &;

  &__thumbs {
    display: none;
  }

  &__slider {
    position: relative;
    margin: 0 (-$container-padding);
    padding-bottom: 6px;

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
    padding-top: 81%;

    img,
    video {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__play {
    position: absolute;
    left: 16px;
    bottom: 28px;
    z-index: 1;

    &-icon {
      width: 42px;
      height: 42px;
    }
  }

  &__main {
    margin-top: 6px;
  }

  &__title {
    font-weight: 500;
    font-size: 22px;
  }

  &__cost {
    display: flex;
    align-items: flex-start;
    margin-top: 2px;
    margin-bottom: 8px;
  }

  &__price {
    font-weight: bold;
    font-size: 18px;
  }

  &__old-price {
    font-weight: 500;
    font-size: 14px;
    color: $color-lightviolet;
    text-decoration: line-through;
  }

  &__discount {
    margin-left: 22px;
    border-radius: 20px 0 20px 0;
    padding: 5px 12px;
    font-weight: bold;
    font-size: 18px;
    color: $color-lightgray;
    background-color: $color-pink;
  }

  &__expand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $color-lightgray;
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

  &__desc,
  &__props {
    height: 0;
    transition: height 0.3s ease;
    overflow: hidden;
  }

  &__desc {
    font-size: 13px;
    line-height: (24/13);

    p {
      padding-bottom: 20px;
    }
  }

  &__prop {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    font-weight: 500;
    font-size: 12px;
    color: #949494;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      font-weight: bold;
    }
  }

  &__btns {
    margin-top: 24px;
  }

  &__btn {
    width: 100%;
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__features {
    margin-top: 36px;
  }

  &__feature {
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 13px;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      font-weight: bold;
      font-size: 30px;
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
      margin-left: -$container-padding;
      width: 58.5%;
    }

    &__thumbs {
      display: block;
      width: 80px;
    }

    &__thumbs-slider {
      height: 256px;
    }

    &__thumbs-slide {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 5px solid transparent;
        transition: border-color 0.3s ease;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &.swiper-slide-thumb-active::after {
        border-color: $color-green;
      }

      &_video {
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          opacity: 0.39;
        }
      }
    }

    &__thumbs-arrow {
      margin: 45px auto 0;
      width: 44px;
      height: 11px;
      transform: rotate(90deg);
      fill: $color-lightviolet;
    }

    &__play-icon {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }

    &__slider {
      flex: 1;
      margin-left: 10px;
      margin-right: 0;
      padding-bottom: 0;
      border-bottom-right-radius: 80px;

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
      height: 376px;
      padding-top: 0;

      &:hover {
        #{$b}__zoom-btn {
          opacity: 1;
          pointer-events: all;
        }
      }
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

    &__main {
      flex: 1;
      margin-top: -5px;
      margin-left: 50px;
    }

    &__title {
      font-size: 30px;
    }

    &__cost {
      align-items: center;
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

    &__discount {
      padding: 9px 12px;
    }

    &__desc,
    &__props {
      height: auto;
    }

    &__desc {
      margin-top: 22px;
      margin-right: 8px;

      p {
        padding-bottom: 0;
      }
    }

    &__props {
      margin-top: 30px;
      margin-right: 80px;
      max-width: 270px;
    }

    &__btns {
      max-width: 250px;
    }

    &__features {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      width: 100%;
      padding: 0 40px;
    }

    &__feature {
      min-width: 140px;
      margin-bottom: 0;
    }
  }

  @include media(lg) {
    &__gallery {
      margin-left: 0;
      width: 55.5%;
    }

    &__thumbs-slider {
      height: 344px;
    }

    &__slider {
      margin-left: 20px;
    }

    &__slide {
      height: 490px;
    }

    &__main {
      margin-top: 32px;
    }

    &__cost {
      margin-top: -6px;
    }

    &__desc {
      margin-top: 25px;
    }

    &__props {
      margin-top: 36px;
    }

    &__prop {
      margin-bottom: 12px;
    }

    &__btns {
      display: flex;
      margin-top: 45px;
      max-width: none;
    }

    &__btn {
      margin-right: 20px;
      margin-bottom: 0;
      width: auto;
      min-width: 220px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__features {
      margin-top: 60px;
      padding: 0 80px;
    }
  }

  @include media(xl) {
    &__inner {
      margin: 0 80px;
    }

    &__gallery {
      width: 52%;
    }

    &__thumbs-slider {
      height: 432px;
    }

    &__slide {
      height: 524px;
    }

    &__main {
      margin-left: 60px;
    }

    &__desc {
      margin-right: 0;
    }

    &__props {
      margin-top: 25px;
    }

    &__features {
      margin-top: 76px;
      padding: 0 160px;
    }
  }
}
</style>
