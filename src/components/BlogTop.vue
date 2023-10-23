<template>
  <div class="blog-top">
    <div class="blog-top__header">
      <div class="container">
        <h1 class="blog-top__heading">Блог</h1>
      </div>
    </div>
    <div class="blog-top__bar">
      <div class="container">
        <AppTabs
          :tabs="categories"
          search
          class="blog-top__tabs"
        />
      </div>
    </div>
    <div class="blog-top__main">
      <div class="container">
        <div class="blog-top__row">
          <ArticleCard
            v-if="mainCard"
            :cardData="mainCard"
            mod="large"
            class="blog-top__card"
          />
          <div class="blog-top__side">
            <p class="blog-top__title">{{ topTitle }}</p>
            <Swiper
              v-if="$_media?.sm"
              slides-per-view="auto"
              :space-between="10"
              class="blog-top__slider"
            >
              <SwiperSlide
                v-for="(card, index) in sideCards"
                :key="index"
                class="blog-top__slide"
              >
                <ArticleCard
                  :cardData="card"
                  mod="small"
                  class="blog-top__side-card"
                />
              </SwiperSlide>
              <SwiperSlide class="blog-top__slide">
                <router-link
                  :to="{name: 'blog', query: {category: showBtnCategory}}"
                  custom
                  v-slot="{href, navigate}"
                >
                  <AppButton
                    :href="href"
                    :title="showBtnTitle"
                    icon="plus"
                    color="gray"
                    show
                    class="blog-top__show"
                    @click="navigate"
                  />
                </router-link>
              </SwiperSlide>
            </Swiper>
            <div
              v-else
              class="blog-top__side-cards"
            >
              <ArticleCard
                v-for="(card, index) in sideCards"
                :key="index"
                :cardData="card"
                mod="small"
                class="blog-top__side-card"
              />
              <router-link
                :to="{name: 'blog', query: {category: showBtnCategory}}"
                custom
                v-slot="{href, navigate}"
              >
                <AppButton
                  :href="href"
                  :title="showBtnTitle"
                  icon="plus"
                  color="gray"
                  show
                  class="blog-top__show"
                  @click="navigate"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppButton from './base/AppButton.vue'
import AppTabs from './base/AppTabs.vue'
import ArticleCard from './ArticleCard.vue'

export default {
  name: 'BlogTop',
  components: {
    Swiper,
    SwiperSlide,
    AppTabs,
    ArticleCard,
    AppButton
  },
  props: {
    categories: Array,
    mainCard: Object,
    videoCards: Array,
    popularCards: Array
  },
  computed: {
    isVideoCat() {
      return this.$route.query.category === 'videos'
    },
    sideCards() {
      return this.isVideoCat ? this.popularCards : this.videoCards
    },
    topTitle() {
      return this.isVideoCat ? 'Популярные статьи' : 'Новые видео'
    },
    showBtnTitle() {
      return this.isVideoCat ? 'Все популярные' : 'Все видео'
    },
    showBtnCategory() {
      return this.isVideoCat ? 'populyarnoe' : 'videos'
    }
  }
}
</script>

<style lang="scss">
.blog-top {
  &__bar {
    margin-top: 34px;

    .container {
      padding: 0;
      max-width: 100%;
    }
  }

  &__main {
    margin-top: 22px;
  }

  &__card {
    margin: 0 (-$container-padding);

    &_half {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__side {
    margin-top: 54px;
  }

  &__title {
    margin: 0 (-$container-padding);
    padding: 0 $container-padding 12px;
    border-bottom: 3px solid $color-lightgray;
    font-weight: bold;
    font-size: 16px;
  }

  &__slider {
    margin-top: 18px;
    overflow: visible;
  }

  &__slide {
    width: calc(100% - 60px);
  }

  &__show {
    width: 100%;
    height: 330px;
    border-radius: 12px;
  }

  @include media(md) {
    &__bar {
      margin-top: 12px;

      .container {
        padding: 0 $container-padding;
        max-width: $container-max-width-md;
      }
    }

    &__tabs {
      margin: 0 -6px;
    }

    &__main {
      margin-top: 10px;
    }

    &__row {
      display: flex;
    }

    &__card {
      margin: 6px 0 0;
      width: 51%;

      &_half {
        margin-right: 20px;
        width: calc(50% - 10px);

        &:last-child {
          margin-right: 0;
        }
      }
    }

    &__side {
      margin-top: 0;
      margin-left: 40px;
      flex: 1;
    }

    &__title {
      margin: 0;
      padding: 0 0 12px;
      font-size: 20px;
    }

    &__side-cards {
      margin-top: 25px;
    }

    &__side-card {
      margin-bottom: 32px;
    }

    &__show {
      border-radius: 100px;
      height: auto;
    }
  }

  @include media(lg) {
    &__bar {
      margin-top: 0;

      .container {
        max-width: $container-max-width-lg;
      }
    }

    &__tabs {
      margin: 0 -10px;
    }

    &__main {
      margin-top: 30px;
    }

    &__card {
      margin-top: 4px;
      width: 57%;

      &_half {
        margin-right: 60px;
        width: calc(50% - 30px);
      }
    }

    &__side-cards {
      margin-top: 30px;
    }

    &__side-card {
      margin-bottom: 26px;
    }
  }

  @include media(xl) {
    &__bar {
      margin-top: 8px;

      .container {
        max-width: $container-max-width-xl;
      }
    }

    &__tabs {
      margin: 0;
    }

    &__title {
      padding-bottom: 26px;
      font-size: 24px;
    }

    &__main {
      margin-top: 38px;
    }

    &__card {
      margin-top: 0;
      width: 61%;

      &_half {
        margin-right: 70px;
        width: calc(50% - 35px);
      }
    }

    &__side {
      margin-left: 55px;
    }

    &__side-cards {
      margin-top: 36px;
    }
  }
}
</style>
