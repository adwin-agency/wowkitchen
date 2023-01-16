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
          loop
          :looped-slides="4"
          navigation
          class="article-set__slider"
        >
          <SwiperSlide
            v-for="(card, index) in cards"
            :key="index"
            class="article-set__slide"
          >
            <router-link
              :to="{ name: 'blog', query: { category: card.id } }"
              class="article-set__card"
            >
              <img
                src="@/assets/img/blog-selection-01.jpg"
                alt=""
                class="article-set__image"
              >
              <div class="article-set__inner">
                <p class="article-set__title">{{card.title}}</p>
                <p class="article-set__desc">10 статей</p>
              </div>
            </router-link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

const cards = [
  { id: 'layfxaki', title: 'Лайфхаки' },
  // { id: 'spornye-voprosy', title: 'Спорные вопросы' },
  { id: 'ot-eksperta', title: 'От эксперта' },
  // { id: 'planirovki', title: 'Планировки' },
  { id: 'idei-dlya-kukhni', title: 'Идеи для кухни' },
  { id: 'videos', title: 'Видео' },
  { id: 'populyarnoe', title: 'Популярное' }
]

SwiperCore.use([Navigation])

export default {
  name: 'ArticleSet',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      cards: cards
    }
  }
}
</script>

<style lang="scss">
.article-set {
  $b: &;

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

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  &__slide {
    width: calc(100% - 60px);
  }

  &__card {
    display: flex;
    position: relative;
    border-radius: 12px;
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
      z-index: 1;
    }

    &::after {
      content: '';
      padding-top: 81%;
    }
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    padding: 14px 18px;
    z-index: 2;
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
    &__heading {
      margin: 0;
      padding: 0 0 24px;
    }

    &__cards {
      margin-top: 32px;

      .container {
        margin-right: 0;
        padding-right: 0;
        max-width: calc(50% + #{calc($container-max-width-md / 2)});
      }
    }

    &__slider {
      padding-right: 170px;

      .swiper-button-prev,
      .swiper-button-next {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
      }

      .swiper-button-prev {
        left: 30px;
      }

      .swiper-button-next {
        right: 56px;
      }
    }

    &__slide {
      transition: opacity 0.3s ease;

      &:not(.swiper-slide-visible) {
        opacity: 0.2;
        pointer-events: none;

        #{$b} {
          &__title,
          &__desc {
            opacity: 0;
          }
        }
      }
    }

    &__card {
      height: 250px;

      &::after {
        display: none;
      }
    }

    &__inner {
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
    &__heading {
      font-size: 24px;
    }

    &__cards {
      margin-top: 36px;

      .container {
        max-width: calc(50% + #{calc($container-max-width-lg / 2)});
      }
    }

    &__card {
      height: 300px;
    }
  }

  @include media(xl) {
    &__cards {
      margin-top: 46px;

      .container {
        max-width: calc(50% + #{calc($container-max-width-xl / 2)});
      }
    }

    &__slider {
      padding-right: 160px;

      .swiper-button-next {
        right: 30px;
      }
    }

    &__inner {
      padding: 44px 58px;
    }
  }
}
</style>
