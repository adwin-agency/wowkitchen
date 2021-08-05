<template>
  <div class="reviews-top">
    <div class="reviews-top__header">
      <div class="container">
        <h1 class="reviews-top__heading">Отзывы</h1>
      </div>
    </div>
    <!-- <div class="reviews-top__bar">
      <div class="container">
        <AppTabs
          :tabs="categories"
          search
          class="reviews-top__tabs"
        />
      </div>
    </div> -->
    <div class="reviews-top__main">
      <div class="container">
        <div class="reviews-top__top-cards">
          <ReviewCard
            v-for="(review, index) in reviews.slice(0, 3)"
            :key="index"
            :cardData="review"
            :mod="index === 0 ? 'big' : 'small'"
            class="reviews-top__card"
            :class="[
              { 'reviews-top__card_big': index === 0 },
              { 'reviews-top__card_small': index !== 0 }
            ]"
          />
        </div>
        <div class="reviews-top__bottom-cards">
          <ReviewCard
            v-for="(review, index) in reviews.slice(3)"
            :key="index"
            :cardData="review"
            class="reviews-top__card"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AppTabs from './base/AppTabs.vue'
import ReviewCard from './ReviewCard.vue'

export default {
  name: 'ReviewsTop',
  components: {
    ReviewCard,
    // AppTabs
  },
  props: {
    categories: Array,
    reviews: Array
  },
  data() {
    return {
      tabs: ['Все отзывы', 'Кухни', 'Шкафы']
    }
  }
}
</script>

<style lang="scss">
.reviews-top {
  &__bar {
    margin-top: 12px;

    .container {
      padding: 0;
      max-width: 100%;
    }
  }

  &__top-cards {
    margin-top: 30px;
  }

  &__card {
    margin-bottom: 10px;
  }

  @include media(md) {
    &__bar {
      margin-top: 6px;

      .container {
        padding: 0 $container-padding;
        max-width: $container-max-width-md;
      }
    }

    &__top-cards {
      display: grid;
      grid-template-columns: 1fr 40.5%;
      grid-gap: 10px 20px;
      margin-top: 34px;
    }

    &__card {
      margin-bottom: 0;

      &_big {
        grid-row: 1 / 3;
      }
    }

    &__bottom-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      margin-top: 20px;
    }
  }

  @include media(lg) {
    &__bar {
      margin-top: 24px;

      .container {
        max-width: $container-max-width-lg;
      }
    }

    &__top-cards {
      grid-template-columns: 1fr 38%;
      grid-gap: 20px 30px;
      margin-top: 25px;
    }

    &__bottom-cards {
      grid-gap: 60px;
      margin-top: 50px;
    }
  }

  @include media(xl) {
    &__bar {
      .container {
        max-width: $container-max-width-xl;
      }
    }
    
    &__top-cards {
      grid-template-columns: 1fr 40.5%;
      grid-gap: 30px 80px;
      margin-top: 45px;
    }

    &__bottom-cards {
      grid-gap: 100px;
      margin-top: 80px;
    }
  }
}
</style>
