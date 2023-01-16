<template>
  <div class="production">
    <div class="container">
      <div class="production__content">
        <p class="production__title">Качественные материалы{{'\xa0'}}- залог успеха</p>
        <div class="production__image">
          <svg class="production__shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297 123">
            <clipPath id="production-shape" clipPathUnits="objectBoundingBox">
              <path d="M90,44l34.5-33.9c13-12.8,34-12.8,47,0L206,44l34.8-34.8c12.8-12.8,33.6-12.9,46.4-0.1l0,0   c13,12.9,13,33.9,0,46.8l-55.9,56.5c-13.8,13.9-36.4,13.9-50.1-0.2l-32.5-33.4L116,112c-13.8,14.1-36.6,14-50.3-0.3L10,53.8   C-1.9,41.5-1.8,21.9,10.1,9.7l0,0C22.4-2.9,42.6-3,55.1,9.4L90,44z" transform="scale(0.00337, 0.00813)"/>
            </clipPath>
          </svg>
        </div>      
        <AppButton
          href="/"
          class="production__btn"
          title="Подробнее о производстве"
        />
      </div>      
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'

export default {
  name: 'Production',
  components: {
    AppButton
  }
}
</script>

<style lang="scss">
.production {
  text-align: center;

  &__title {
    padding: 0 10px;
    font-weight: 300;
    font-size: 20px;
    line-height: calc(38/20);
  }

  &__image {
    position: relative;
    margin: 28px auto 0;
    max-width: 300px;
    background-image: url('~@/assets/img/production.jpg');
    background-size: cover;
    clip-path: url('#production-shape');
  }

  &__shape {
    display: block;
    width: 100%;
    opacity: 0;
  }

  &__btn {
    margin-top: 30px;
    width: 100%;
    max-width: 300px;
  }

  @include media(md) {
    position: relative;
    text-align: left;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: $color-lightgray;
    }

    &__content {
      position: relative;
      border-radius: 0 1000px 1000px 0;
      width: 78%;
      padding: 100px 260px 90px 60px;
      background-color: $color-lightgray;
    }

    &__title {
      padding: 0;
      font-size: 32px;
      line-height: calc(42/32);
    }

    &__image {
      position: absolute;
      top: 50%;
      right: -140px;
      margin: 0;
      margin-top: 15px;
      width: 400px;
      max-width: none;
      transform: translateY(-50%);
    }

    &__btn {
      margin-top: 24px;
    }
  }

  @include media(lg) {
    &__content {
      padding: 135px 350px 100px 60px;
    }

    &__title {
      font-size: 52px;
      line-height: calc(62/52);
    }

    &__image {
      right: -265px;
      margin-top: 15px;
      width: 575px;
    }

    &__btn {
      margin-top: 48px;
    }
  }

  @include media(xl) {
    &__content {
      width: 73%;
      padding: 135px 350px 100px 220px;
    }
  }
}
</style>
