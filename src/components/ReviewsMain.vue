<template>
  <div class="reviews-main">
    <div class="container">
      <div class="reviews-main__top-cards">
        <ReviewForm class="reviews-main__form" />
        <ReviewCard
          v-for="(card, index) in cards.slice(0, 2)"
          :key="index"
          :cardData="card"
          mod="small"
          class="reviews-main__card reviews-main__card_small"
        />
      </div>
      <div class="reviews-main__bottom-cards">
        <ReviewCard
          v-for="(card, index) in cards.slice(2)"
          :key="index"
          :cardData="card"
          class="reviews-main__card"
        />
      </div>
      <AppButton
        v-if="showBtn"
        icon="plus"
        size="large"
        color="white"
        title="Показать больше"
        class="reviews-main__show-btn"
        @click="$emit('show-more')"
      />
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import ReviewCard from './ReviewCard.vue'
import ReviewForm from './ReviewForm.vue'

export default {
  name: 'ReviewsMain',
  components: {
    ReviewForm,
    ReviewCard,
    AppButton
  },
  props: {
    showBtn: Boolean
  },
  emits: [
    'show-more'
  ],
  data() {
    return {
      cards: [
        { image: 'review-card-01.jpg', title: 'ХайдиКлум1' },
        { image: 'review-card-02.jpg', title: 'ТайраБэнкс2' },
        { image: 'review-card-03.jpg', title: 'ЖизельБундхен3' },
        { image: 'review-card-04.jpg', title: 'АдрианаЛима4' },
        { image: 'review-card-01.jpg', title: 'ХайдиКлум5' },
      ]
    }
  }
}
</script>

<style lang="scss">
.reviews-main {
  padding: 25px 0 30px;
  background-color: $color-lightgray;

  &__form {
    margin-bottom: 36px;
  }

  &__card {
    margin-bottom: 10px;
  }

  &__show-btn {
    margin-top: 20px;
    width: 100%;
  }

  @include media(md) {
    padding: 75px 0 60px;

    &__top-cards {
      display: grid;
      grid-template-columns: 1fr 40.5%;
      grid-gap: 20px;
    }

    &__form {
      grid-row: 1 / 4;
      margin-bottom: 0;
    }

    &__card {
      margin-bottom: 0;
    }

    &__bottom-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      margin-top: 50px;
    }

    &__show-btn {
      margin-top: 50px;
    }
  }

  @include media(lg) {
      &__top-cards {
        grid-template-columns: 1fr 38%;
        grid-gap: 20px 60px;
      }

      &__bottom-cards {
        grid-gap: 60px;
        margin-top: 70px;
      }
    }

    @include media(xl) {
      padding: 105px 0 55px;

      &__top-cards {
        grid-template-columns: 1fr 40.5%;
        grid-gap: 30px 80px;
      }

      &__form {
        grid-row: 1 / 3;
      }

      &__bottom-cards {
        grid-gap: 100px;
        margin-top: 80px;
      }

      &__show-btn {
        margin-top: 90px;
      }
    }
}
</style>
