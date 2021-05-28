<template>
  <div class="article-set">
    <div class="article-set__header">
      <div class="container">
        <h2 class="article-set__heading">Подборки статей</h2>
      </div>
    </div>
    <div class="article-set__cards">
      <div class="container">
        <Swiper
          :slides-per-view="$_media.sm ? 'auto' : 3"
          :space-between="$_media.sm ? 10 : $_media.md ? 20 : $_media.lg ? 30 : 40"
          watch-slides-visibility
          :navigation="!$_media.sm"
          class="article-set__slider"
        >
          <SwiperSlide
            v-for="(card, index) in cards"
            :key="index"
            class="article-set__slide"
          >
            <div class="article-set__card">
              <img
                :src="require(`@/assets/img/${card.image}`)"
                alt=""
                class="article-set__image"
              >
              <p class="article-set__title">{{card.title}}</p>
              <p class="article-set__desc">{{card.desc}}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

SwiperCore.use([Navigation])

export default {
  name: 'ArticleSet',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      cards: [
        { image: 'blog-selection-01.jpg', title: 'Лайфхаки', desc: '10 статей' },
        { image: 'blog-selection-01.jpg', title: 'От эксперта', desc: '23 статьи' },
        { image: 'blog-selection-01.jpg', title: 'Планировки', desc: '15 статей' },
        { image: 'blog-selection-01.jpg', title: 'Лайфхаки', desc: '10 статей' },
        { image: 'blog-selection-01.jpg', title: 'От эксперта', desc: '23 статьи' },
        { image: 'blog-selection-01.jpg', title: 'Планировки', desc: '15 статей' }
      ]
    }
  }
}
</script>

<style lang="scss">
.article-set {
  $b: &;

  padding: 50px 0 60px;

  &__heading {
    margin: 0 (-$container-padding);
    padding: 0 $container-padding 16px;
    border-bottom: 3px solid $color-lightgray;
  }

  &__cards {
    margin-top: 20px;
  }

  &__slider {
    overflow: visible;
  }

  &__slide {
    width: 160px;
    transition: opacity 0.3s ease;

    &:not(.swiper-slide-visible) {
      opacity: 0.2;

      #{$b} {
        &__title,
        &__desc {
          opacity: 0;
        }
      }
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    border-radius: 12px;
    min-height: 130px;
    padding: 14px 18px;
    color: $color-lightgray;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0deg, rgba(#12131e, 0.5), transparent);
      z-index: -1;
    }
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }

  &__title {
    font-weight: bold;
    font-size: 15px;
    transition: opacity 0.3s ease;
  }

  &__desc {
    margin-top: 2px;
    font-size: 13px;
    transition: opacity 0.3s ease;
  }

  @include media(md) {
    padding: 25px 0 55px;

    &__heading {
      margin: 0;
      padding: 0 0 24px;
    }

    &__cards {
      margin-top: 32px;

      .container {
        margin-right: 0;
        padding-right: 0;
        max-width: calc(50% + #{$container-max-width-md / 2});
      }
    }

    &__slider {
      padding-right: 170px;

      .swiper-button-prev {
        display: none;
      }

      .swiper-button-next {
        position: absolute;
        top: 50%;
        right: 56px;
        transform: translateY(-50%);
        z-index: 2;
      }
    }

    &__card {
      min-height: 250px;
      padding: 34px 38px;
    }

    &__title {
      font-size: 20px;
    }

    &__desc {
      margin-top: 6px;
      font-size: 14px;
    }
  }

  @include media(lg) {
    padding: 30px 0 90px;

    &__heading {
      font-size: 24px;
    }

    &__cards {
      margin-top: 36px;

      .container {
        max-width: calc(50% + #{$container-max-width-lg / 2});
      }
    }

    &__card {
      min-height: 300px;
    }
  }

  @include media(xl) {
    padding: 10px 0 120px;

    &__cards {
      margin-top: 46px;

      .container {
        max-width: calc(50% + #{$container-max-width-xl / 2});
      }
    }

    &__slider {
      padding-right: 160px;

      .swiper-button-next {
        right: 30px;
      }
    }

    &__card {
      padding: 44px 58px;
    }
  }
}
</style>
