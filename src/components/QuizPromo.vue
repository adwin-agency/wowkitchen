<template>
  <div
    class="quiz-promo"
    :class="{'quiz-promo_small': small}"
  >
    <p class="quiz-promo__title">Посудомоечная машина — в&nbsp;подарок!</p>
    <p class="quiz-promo__desc">До {{ promoDate }} мы дарим <b>ко всем гарнитурам</b> посудомоечную машину!</p>
    <span class="quiz-promo__type">Акция</span>
    <AppIcon
      name="shape-28"
      class="quiz-promo__shape quiz-promo__shape_line"
      viewBox="0 0 17.21 17.22"
    />
    <AppIcon
      name="shape-29"
      class="quiz-promo__shape quiz-promo__shape_triangle"
      viewBox="0 0 17.21 17.22"
    />
    <AppIcon
      name="shape-7"
      class="quiz-promo__shape quiz-promo__shape_circle"
      viewBox="0 0 17.21 17.22"
    />
    <img
      src="/assets/img/quiz-wash.png"
      alt=""
      class="quiz-promo__img"
    >
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'QuizPromo',
  components: {
    AppIcon
  },
  props: {
    small: Boolean
  },
  computed: {
    promoDate() {
      return this.$store.getters.mainPromoDate
    }
  }
}
</script>

<style lang="scss">
.quiz-promo {
  $b: &;

  position: relative;
  padding: 84px 130px 30px 20px;
  border-radius: 50px 0px;
  background-color: $color-yellow;
  box-shadow: 0px 24px 24px -10px rgba(0, 0, 0, 0.1);

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    text-transform: uppercase;
  }

  &__desc {
    margin-top: 18px;
    padding-right: 30px;
    font-size: 14px;
    line-height: 160%;
  }

  &__type {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 50px;
    border-radius: 50px 0px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #ffffff;
    background-color: $color-pink;
  }

  &__shape {
    position: absolute;

    &_line {
      top: 30px;
      right: 60px;
      width: 65px;
      height: 75px;
    }

    &_triangle {
      top: -15px;
      right: 6px;
      width: 50px;
      height: 40px;
    }

    &_circle {
      right: -6px;
      bottom: -36px;
      width: 64px;
      height: 64px;
    }
  }

  &__img {
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 180px;
  }

  @include media(xxs) {
    padding: 84px 160px 30px 20px;

    &__shape {
      &_line {
        top: 20px;
        right: 100px;
      }
    }

    &__img {
      top: 70px;
      right: -16px;
      bottom: auto;
      width: 210px;
    }
  }

  @include media(xs) {
    padding: 100px 240px 46px 32px;
    border-radius: 70px 0;
    min-height: 300px;

    &__title {
      font-size: 20px;
    }

    &__desc {
      padding-right: 50px;
      font-size: 15px;
    }

    &__type {
      width: 226px;
      height: 70px;
      border-radius: 70px 0;
      font-size: 20px;
    }

    &__shape {
      &_line {
        right: 150px;
      }
    }

    &__img {
      top: 25px;
      right: -26px;
      width: 316px;
    }
  }

  @include media(md) {
    padding: 100px 32px 90px;

    &__desc {
      margin-top: 30px;
      padding-right: 150px;
    }

    &__img {
      top: auto;
      right: -10px;
      bottom: 5px;
      width: 230px;
    }

    &_small {
      padding: 100px 32px 200px;

      #{$b} {
        &__type {
          width: 180px;
        }

        &__desc {
          margin-top: 14px;
          padding-right: 0;
        }

        &__img {
          top: auto;
          right: 12px;
          bottom: -44px;
          width: 244px;
        }

        &__shape {
          &_line {
            top: auto;
            right: 170px;
            bottom: 65px;
          }

          &_triangle {
            right: -20px;
          }

          &_circle {
            right: 0;
            bottom: -16px;
          }
        }
      }
    }
  }

  @include media(lg) {
    padding: 100px 290px 88px 70px;

    &__desc {
      padding-right: 0;
    }

    &__shape {
      &_line {
        top: 30px;
        right: 195px;
      }

      &_triangle {
        right: -20px;
      }

      &_circle {
        right: 10px;
        bottom: -20px;
      }
    }

    &__img {
      top: 17px;
      right: -13px;
      bottom: auto;
      width: 345px;
    }

    &_small {
      padding: 114px 35px 210px;
    }
  }
}
</style>