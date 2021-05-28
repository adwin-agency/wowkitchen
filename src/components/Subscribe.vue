<template>
  <form class="subscribe">
    <div class="subscribe__bg">
      <img
        src="@/assets/img/env-back.png"
        alt=""
        class="subscribe__env-back"
      >
      <img
        src="@/assets/img/env-front.png"
        alt=""
        class="subscribe__env-front"
      >
    </div>
    <p class="subscribe__title">Подпишитесь на нашу ежемесячную рассылку</p>
    <p class="subscribe__desc">Полезные советы, новинки мира интерьера и никакого спама!</p>
    <div class="subscribe__field">
      <input
        type="text"
        placeholder="sample@sample.ru"
        class="subscribe__input"
      >
      <button
        type="submit"
        class="subscribe__btn"
      >
        <AppIcon
          name="long-arrow"
          class="subscribe__btn-icon"
        />
      </button>
    </div>
  </form>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'Subscribe',
  components: {
    AppIcon
  }
}
</script>

<style lang="scss">
.subscribe {
  position: relative;
  padding: 120px 30px 30px;

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 12px;
      right: 0;
      bottom: 0;
      border-radius: 50px 0 30px 0;
      background-image: linear-gradient($color-yellow 50%, #fff 50%);
      box-shadow: 0px 20px 38px 0px rgba(0, 0, 0, 0.08);
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 65px;
      right: 0;
      bottom: 0;
      border-bottom-right-radius: 30px;
      background-color: #fff;
      clip-path: polygon(0% 36px, 101% 0, 101% 100%, 0% 100%);
    }
  }

  &__env-back {
    position: absolute;
    top: -6px;
    left: calc(50% - 132px);
    width: 300px;
  }

  &__env-front {
    position: absolute;
    top: 2px;
    left: calc(50% - 88px);
    width: 250px;
    z-index: 1;
  }

  &__title {
    font-weight: bold;
    font-size: 14px;
    line-height: (18/14);
  }

  &__desc {
    margin-top: 5px;
    font-size: 13px;
    line-height: (16/13);
  }

  &__field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    padding: 7px 17px;
  }

  &__input {
    width: calc(100% - 68px);

    &::placeholder {
      color: #d5d5d5;
    }
  }

  &__btn {
    flex-shrink: 0;
    margin-right: 8px;
    width: 44px;
    height: 44px;
  }

  &__btn-icon {
    width: 44px;
    height: 12px;
    fill: $color-primary;
  }

  @include media(lg) {
    padding: 130px 40px 25px;

    &__bg {
      &::after {
        clip-path: polygon(0% 45px, 101% 0, 101% 100%, 0% 100%);
      }
    }

    &__env-back {
      top: -18px;
      left: calc(50% - 138px);
      width: 355px;
    }

    &__env-front {
      top: -6px;
      left: calc(50% - 84px);
      width: 290px;
    }

    &__title {
      font-size: 16px;
      line-height: (20/16);
    }

    &__desc {
      margin-top: 14px;
      font-size: 14px;
      line-height: (20/14);
    }
  }

  @include media(xl) {
    padding: 162px 52px 50px 75px;

    &__bg {
      &::after {
        clip-path: polygon(0% 60px, 101% 0, 101% 100%, 0% 100%);
      }
    }

    &__env-back {
      top: -30px;
      left: calc(50% - 198px);
      width: 450px;
    }

    &__env-front {
      top: -12px;
      left: calc(50% - 124px);
      width: 360px;
    }

    &__title {
      font-size: 18px;
      line-height: (22/18);
    }

    &__field {
      margin-top: 24px;
    }

    &__btn {
      margin-right: 22px;
    }
  }
}
</style>
