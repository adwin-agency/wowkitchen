<template>
  <div class="details">
    <div class="details__top">
      <div class="container">
        <Swiper
          :scrollbar="{ hide: false }"
          navigation
          class="details__slider"
        >
          <SwiperSlide
            v-for="n in 3"
            :key="n"
            class="details__slide"
          >
            <img src="@/assets/img/details-slide.jpg" alt="">
          </SwiperSlide>
          <button
            type="button"
            class="details__video"
          >
            <AppIcon
              name="play"
              class="details__video-icon"
            />
            <span class="details__video-title">Видеообзор проекта</span>
          </button>
          <AppIcon
            name="wow-pattern"
            class="details__pattern"
          />
        </Swiper>
        <div
          v-if="!$_mobile"
          class="details__characteristics"
        >
          <p
            v-for="(item, index) in characteristics"
            :key="index"
            class="details__characteristic"
          >
            <span>{{item[0]}}</span>{{item[1]}}
          </p>
        </div>
      </div>
    </div>
    <div class="details__main">
      <div class="container">
        <div class="details__content">
          <div
            v-if="!$_mobile"
            class="details__info"
          >
            <h2 class="details__title">{{title}}</h2>
            <p
              v-for="(item, index) in desc"
              :key="index"
              class="details__desc"
            >
              {{item}}
            </p>
          </div>
          <DetailsCard
            :cardData="card"
            class="details__card"
          />
          <div
            v-if="$_mobile"
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
                    v-for="(item, index) in characteristics"
                    :key="index"
                    class="details__characteristic"
                  >
                    <span>{{item[0]}}</span>{{item[1]}}
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
                  <h2 class="details__title">{{title}}</h2>
                  <p
                    v-for="(item, index) in desc"
                    :key="index"
                    class="details__desc"
                  >
                    {{item}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          slides-per-view="auto"
          :space-between="$_mobile ? 10 : $_tablet ? 30 : 50"
          class="details__gallery"
        >
          <SwiperSlide
            v-for="n in 3"
            :key="n"
            class="details__gallery-item"
          >
            <img src="@/assets/img/details-gallery.jpg" alt="">
          </SwiperSlide>
        </Swiper>
        <div class="details__features">
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
import SwiperCore, { Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppIcon from './base/AppIcon.vue'
import DetailsCard from './DetailsCard.vue'

SwiperCore.use([Navigation, Scrollbar])

export default {
  name: 'Details',
  components: {
    AppIcon,
    DetailsCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      card: {
        type: 'Гарнитур',
        title: 'АдрианаЛима',
        price: '78 900 ₽',
        oldPrice: '157 800 ₽',
        discount: '-50%'
      },
      characteristics: [
        ['Стиль', 'Минимализм'],
        ['Фасад', 'Эмаль'],
        ['Фурнитура', 'Blum']
      ],
      title: 'О модели',
      desc: [
        'Сочетание древесины и насыщенного графитового цвета — залог стильной кухни! А если к правильной цветовой гамме добавить необычное решение по зонированию, то двойной эффект гарантирован.',
        'В нашем случае угловой гарнитур дополнен барной стойкой, которая за счет удачного расположения может быть задействована с двух сторон.'
      ],

      activeExpand: null,
      expandTimeout: null
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
    height: 260px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &__video {
    position: absolute;
    left: 30px;
    bottom: 30px;
    z-index: 1;

    &-icon {
      width: 42px;
      height: 42px;
    }

    &-title {
      display: none;
    }
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
    font-weight: 500;
    font-size: 14px;

    &-icon {
      width: 20px;
      height: 20px;
      margin: 0 10px;
      fill: $color-lightviolet;
    }
  }

  &__hidden {
    height: 0;
    transition: height .3s ease;
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
    overflow: visible;

    &-item {
      width: calc(100% - 20px);
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
      height: 480px;
    }

    &__video {
      display: flex;
      align-items: center;
      left: 95px;
      bottom: 40px;
      border-radius: 100px;
      padding: 9px;
      background-color: $color-yellow;

      &::before {
        content: "";
        position: absolute;
        left: 30px;
        top: 50%;
        width: 86px;
        height: 86px;
        border-radius: 50%;
        border: 1px solid $color-yellow;
        opacity: 0.3;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }

      &-title {
        display: inline-block;
        padding: 0 15px;
        padding-right: 25px;
        font-weight: bold;
        font-size: 12px;
      }
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

      &-item {
        width: calc(100% - 160px);
        height: 400px;
      }
    }

    &__features {
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

    &__video {
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

    &__video {
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
