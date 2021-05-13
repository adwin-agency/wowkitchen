<template>
  <div class="inner-articles">
    <div class="container">
      <h2 class="inner-articles__heading">Популярные статьи месяца</h2>
      <Swiper
        v-if="$_mobile"
        slides-per-view="auto"
        :spaceBetween="10"
        class="inner-articles__slider"
      >
        <SwiperSlide
          v-for="(card, index) in cards"
          :key="index"
          class="inner-articles__slide"
        >
          <BlogCard :cardData="card" />
        </SwiperSlide>
      </Swiper>
      <div
        v-else
        class="inner-articles__cards"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="inner-articles__cards-col"
        >
          <BlogCard :cardData="card" />
        </div>
      </div>
      <div class="inner-articles__footer">
        <AppButton
          bordered
          title="Все статьи"
          class="inner-articles__btn"
        />
      </div>
    </div> 
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppButton from './base/AppButton.vue'
import BlogCard from './BlogCard.vue'

export default {
  name: 'InnerArticles',
  components: {
    AppButton,
    BlogCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      cards: [
        { image: 'article-01.jpg', tag: 'От эксперта', title: 'Что, где и как: идеи хранения на кухне', date: '20 сентября', views: '2071', video: true },
        { image: 'article-02.jpg', tag: 'От эксперта', title: 'Какой цвет выбрать для кухни в квартире на северной стороне', date: '26 сентября', views: '1843' },
        { image: 'article-03.jpg', tag: 'От эксперта', title: 'Что, где и как: идеи хранения на кухне', date: '15 ноября', views: '1843' }
      ]
    }
  }
}
</script>

<style lang="scss">
.inner-articles {
  &__slider {
    margin-top: 18px;
    overflow: visible;

    &::before {
      content: "";
      display: block;
      margin-right: 12px;
      margin-bottom: 20px;
      height: 3px;
      background-color: $color-lightgray;
    }
  }

  &__slide {
    width: 160px;
  }

  &__footer {
    margin-top: 32px;
    text-align: center;
  }

  &__btn {
    width: 100%;
  }

  @include media(md) {
    &__cards {
      display: flex;
      margin: 32px -10px 0;
    }

    &__cards-col {
      width: 33.333%;
      padding: 0 10px;
    }

    &__btn {
      width: auto;
      min-width: 220px;
    }
  }

  @include media(lg) {
    &__cards {
      margin: 35px -30px 0;
    }

    &__cards-col {
      padding: 0 30px;
    }

    &__footer {
      margin-top: 36px;
    }
  }

  @include media(xl) {
    &__cards {
      margin: 60px -35px 0;
    }

    &__cards-col {
      padding: 0 35px;
    }

    &__footer {
      margin-top: 48px;
    }
  }
}
</style>
