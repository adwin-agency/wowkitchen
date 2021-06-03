<template>
  <div class="reviews-top">
    <div class="container">
      <h1 class="reviews-top__heading">Отзывы</h1>
      <div class="reviews-top__tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          type="button"
          class="reviews-top__tab"
          :class="{ 'is-active': index === 0 }"
        >
          {{ tab }}
        </button>
      </div>
      <div class="reviews-top__top-cards">
        <ReviewCard
          v-for="(card, index) in cards.slice(0, 3)"
          :key="index"
          :cardData="card"
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
          v-for="(card, index) in cards.slice(3)"
          :key="index"
          :cardData="card"
          class="reviews-top__card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard.vue'

export default {
  name: 'ReviewsTop',
  components: {
    ReviewCard
  },
  data() {
    return {
      tabs: ['Все отзывы', 'Кухни', 'Шкафы'],
      cards: [
        { image: 'review-card-01.jpg', title: 'ХайдиКлум' },
        { image: 'review-card-02.jpg', title: 'ТайраБэнкс' },
        { image: 'review-card-03.jpg', title: 'ЖизельБундхен' },
        { image: 'review-card-04.jpg', title: 'АдрианаЛима' },
        { image: 'review-card-01.jpg', title: 'ХайдиКлум' },
        { image: 'review-card-02.jpg', title: 'ТайраБэнкс' }
      ]
    }
  }
}
</script>

<style lang="scss">
.reviews-top {
  &__tabs {
    display: flex;
    margin: 12px (-$container-padding) 0;
    padding: 0 $container-padding;
    border-bottom: 3px solid $color-lightgray;
  }

  &__tab {
    margin-right: 20px;
    padding: 0 12px 12px;
    border-bottom: 4px solid transparent;
    margin-bottom: -3px;
    font-size: 14px;

    &:last-child {
      margin-right: 0;
    }

    &.is-active {
      font-weight: 500;
      border-color: $color-lightviolet;
    }
  }

  &__top-cards {
    margin-top: 30px;
  }

  &__card {
    margin-bottom: 10px;
  }

  @include media(md) {
    &__tabs {
      margin: 6px 0 0;
      padding: 0;
    }

    &__tab {
      margin-right: 28px;
      padding: 0 14px 12px;
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
    &__tabs {
      margin-top: 24px;
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
