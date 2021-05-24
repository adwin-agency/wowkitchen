<template>
  <div class="reviews-sample">
    <div class="container">
      <div class="reviews-sample__inner">
        <div class="reviews-sample__header">
          <AppIcon
            name="quotes"
            class="reviews-sample__quotes"
          />
          <h2 class="reviews-sample__heading">За что любят наши кухни</h2>
          <p class="reviews-sample__desc">Отзывы довольных клиентов говорят сами за себя.</p>
          <AppButton
            v-if="$_windowWidth >= $_breakpoints.lg"
            href="/"
            class="reviews-sample__btn"
            title="Смотреть все отзывы"
          />
        </div>
        <template v-if="$_windowWidth < $_breakpoints.lg">
          <Swiper
            :space-between="10"
            navigation
            :scrollbar="{ hide: false }"
            :watchSlidesVisibility="true"
            :breakpointsInverse="true"
            :breakpoints="{
              [$_breakpoints.md]: {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }"
            class="reviews-sample__slider"
          >
            <SwiperSlide
              v-for="(card, index) in cards"
              :key="index"
              class="reviews-sample__slide"
            >
              <ReviewCard
                :cardData="card"
                mod="sample"
                class="reviews-sample__card"
              />
            </SwiperSlide>
          </Swiper>
          <div class="reviews-sample__footer">
            <AppButton
              href="/"
              class="reviews-sample__btn"
              title="Смотреть все отзывы"
            />
          </div>
        </template>
        <div
          v-else
          class="reviews-sample__cards"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="reviews-sample__cards-col"
          >
            <ReviewCard
              :cardData="card"
              mod="sample"
              class="reviews-sample__card"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ReviewCard from './ReviewCard.vue'
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'

SwiperCore.use([Scrollbar])

export default {
  name: 'ReviewsSample',
  components: {
    Swiper,
    SwiperSlide,
    AppButton,
    AppIcon,
    ReviewCard
  },
  data() {
    return {
      cards: [
        { image: 'review-card-01.jpg', title: 'ХайдиКлум' },
        { image: 'review-card-02.jpg', title: 'ТайраБэнкс' },
        { image: 'review-card-03.jpg', title: 'ЖизельБундхен' },
        { image: 'review-card-04.jpg', title: 'АдрианаЛима' }
      ]
    }
  }
}
</script>

<style lang="scss">
.reviews-sample {
  $b: &;

  padding: 40px 0 50px;

  &__header {
    position: relative;
  }

  &__quotes {
    position: absolute;
    top: -30px;
    right: -92px;
    width: 194px;
    height: 143px;
    fill: #f3f4f9;
    z-index: -1;
  }

  &__desc {
    margin-top: 5px;
    font-size: 14px;
    line-height: (26/14);
  }

  &__slider {
    margin-top: 20px;
    padding-bottom: 16px;
    overflow: visible;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper-scrollbar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    border-radius: 3px;
    background-color: #aca8c3;
  }

  .swiper-scrollbar-drag {
    height: 100%;
    border-radius: inherit;
    background-color: $color-green;
  }

  &__footer {
    margin-top: 10px;
  }

  &__btn {
    width: 100%;
  }

  @include media(md) {    
    padding: 40px 0 55px;

    &__quotes {
      right: 10px;
    }

    &__slider {
      margin-top: 30px;
      margin-right: calc((#{$container-max-width-md - $container-padding * 2} - 100vw) / 2);
      padding-right: 286px;
      padding-bottom: 0;
    }

    &__slide {
      border-radius: 8px;
      background-color: #fff;

       #{$b} {
          &__card {
            transition: opacity .3s ease;
            transform: translateZ(0);
          }
       }

      &:not(.swiper-slide-visible) {
        #{$b} {
          &__card {
            opacity: 0.2;
            pointer-events: none;
          }
        }
      }
    }

    .swiper-button-next {
      display: block;
      position: absolute;
      top: 50%;
      right: 162px;
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

    .swiper-scrollbar {
      display: none;
    }

    &__footer {
      margin-top: 30px;
      text-align: center;
    }

    &__btn {
      width: auto;
      min-width: 260px;
    }
  }

  @include media(lg) {
    padding: 50px 0 120px;

    &__inner {
      display: flex;
    }

    &__header {
      flex: 1;
      margin-right: 40px;
      padding: 78px 60px;
    }

    &__quotes {
      left: -72px;
      top: -8px;
      right: auto;
      width: 247px;
      height: 182px;
    }

    &__desc {
      margin-top: 30px;
    }

    &__btn {
      margin-top: 60px;
    }

    &__cards {
      display: flex;
      flex-wrap: wrap;
      width: calc(66% + 30px);
      margin: 0 -15px -30px;
    }

    &__cards-col {
      width: 50%;
      padding: 0 15px;
      margin-bottom: 30px;
    }
  }

  @include media(xl) {
    padding: 85px 0 130px;

    &__inner {
      max-width: 1500px;
    }

    &__header {
      margin-right: 120px;
      padding: 112px 78px;
    }

    &__quotes {
      left: -52px;
      top: 28px;
    }

    &__cards {
      width: calc(64% + 40px);
      margin: 0 -20px -40px;
    }

    &__cards-col {
      padding: 0 20px;
      margin-bottom: 40px;
    }
  }
}
</style>
