<template>
  <div class="wardrobe-details">
    <div class="container">
      <div class="wardrobe-details__inner">
        <div class="wardrobe-details__gallery">
          <div class="wardrobe-details__thumbs">
            <Swiper
              direction="vertical"
              :slides-per-view="$_media.md ? 3 : $_media.lg ? 4 : 5"
              :space-between="$_media.md ? 5 : 8"              
              watch-slides-visibility
              watch-slides-progress
              @swiper="setThumbsSwiper"
              class="wardrobe-details__thumbs-slider"
            >
              <SwiperSlide
                v-for="(slide, index) in slides"
                :key="index"
                class="wardrobe-details__thumbs-slide"
                :class="{'wardrobe-details__thumb_video': slide.video}"
              >
                <img
                  :src="require(`@/assets/img/${slide.image || slide.video}`)"
                  alt=""
                >
                <AppIcon
                  v-if="slide.video"
                  name="play"
                  class="wardrobe-details__play-icon"
                />
              </SwiperSlide>
            </Swiper>
            <AppIcon
              name="long-arrow"
              class="wardrobe-details__thumbs-arrow"
            />
          </div>          
          <Swiper
            scrollbar
            :thumbs="{ swiper: thumbsSwiper }"
            @slideChangeTransitionStart="thumbsSwiper.updateSlidesClasses()"
            class="wardrobe-details__slider"
          >
            <SwiperSlide
              v-for="(slide, index) in slides"
              :key="index"
              class="wardrobe-details__slide"
            >
              <img
                v-if="slide.image"
                :src="require(`@/assets/img/${slide.image}`)"
                alt=""
              >
              <template v-if="slide.video">
                <video
                  src=""
                  :poster="require(`@/assets/img/${slide.video}`)"
                ></video>
              </template>          
            </SwiperSlide>
            <button
              v-if="$_media.sm && slides.find(i => i.video)"
              type="button"
              class="wardrobe-details__play"
            >
              <AppIcon
                name="play"
                class="wardrobe-details__play-icon"
              />
            </button>
          </Swiper>
        </div>        
        <div class="wardrobe-details__main">
          <h1 class="wardrobe-details__title">УитниХьюстон</h1>
          <div class="wardrobe-details__cost">
            <div class="wardrobe-details__prices">
              <p class="wardrobe-details__price">54 500 ₽</p>
              <p class="wardrobe-details__old-price">109 000 ₽</p>
            </div>
            <span class="wardrobe-details__discount">-50%</span>
          </div>
          <p
            v-if="$_media.sm"
            class="wardrobe-details__expand"
            @click="toggleInfo('desc')"
          >
            Описание
            <AppIcon
              name="plus"
              class="wardrobe-details__expand-icon"
            />
          </p>
          <div
            ref="desc"
            class="wardrobe-details__desc"
          >
            <p>Функциональным и вместительным хочется видеть шкаф в прихожей.  Эта модель результат зрелых размышлений и многолетнего опыта наших специалистов с учётом всех пожеланий клиента.</p>
          </div>
          <p
            v-if="$_media.sm"
            class="wardrobe-details__expand"
            @click="toggleInfo('props')"
          >
            Характеристики
            <AppIcon
              name="plus"
              class="wardrobe-details__expand-icon"
            />
          </p>
          <div
            ref="props"
            class="wardrobe-details__props"
          >
            <p
              v-for="(prop, index) in props"
              :key="index"
              class="wardrobe-details__prop"
            >
              <span>{{prop.title}}</span>{{prop.desc}}
            </p>
          </div>
          <div class="wardrobe-details__btns">
            <AppButton
              title="Рассчитать проект"
              class="wardrobe-details__btn"
            />
            <AppButton
              bordered
              title="Вызвать дизайнера"
              class="wardrobe-details__btn"
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
import SwiperCore, { Scrollbar, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue' 
import AppIcon from './base/AppIcon.vue'
import AppButton from './base/AppButton.vue'

SwiperCore.use([Scrollbar, Thumbs])

export default {
  name: 'WardrobeDetails',
  components: {
    Swiper,
    SwiperSlide,
    AppIcon,
    AppButton
  },
  data() {
    return {
      slides: [
        { image: 'wardrobe-details-slide.jpg' },
        { image: 'wardrobe-details-slide.jpg' },
        { video: 'wardrobe-details-slide.jpg' },
        { image: 'wardrobe-details-slide.jpg' },
        { image: 'wardrobe-details-slide.jpg' },
        { image: 'wardrobe-details-slide.jpg' },
      ],
      props: [
        { title: 'Планировка', desc: 'Встроенный' },
        { title: 'Фасад', desc: 'ЛДСП + Зеркало' },
        { title: 'Корпус', desc: 'ЛДСП' },
      ],
      features: [
        { title: 'от 3 дней', desc: 'срок производства' },
        { title: '3000+', desc: 'вариантов комбинаций' },
        { title: '2 года', desc: 'гарантия на материалы' },
        { title: '3 часа', desc: 'на монтаж' },
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
.wardrobe-details {
  &__thumbs {
    display: none;
  }

  &__slider {
    position: relative;
    margin: 0 (-$container-padding);
    padding-bottom: 6px;

    .swiper-scrollbar {
      position: absolute;
      left: $container-padding;
      right: $container-padding;
      bottom: 0;
    }
  }

  &__slide {
    height: 260px;

    img, video {
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
    font-weight: 500;
    font-size: 14px;

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
    transition: height .3s ease;
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
        object-fit: cover;
      }

      &.swiper-slide-thumb-active::after {
        border-color: $color-green;
      }

      &_video {
        &::before {
          content: "";
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

      .swiper-scrollbar {
        display: none;
      }
    }

    &__slide {
      height: 376px;
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
