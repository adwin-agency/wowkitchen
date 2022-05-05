<template>
  <div class="catalog-side-promo">
    <AppIcon
      name="shape-26"
      class="catalog-side-promo__shape catalog-side-promo__shape_circle"
    />
    <AppIcon
      name="shape-27"
      class="catalog-side-promo__shape catalog-side-promo__shape_triangle"
    />
    <img
      src="/assets/img/catalog-wash.png"
      alt=""
      class="catalog-side-promo__img"
    >
    <div class="catalog-side-promo__content">
      <p class="catalog-side-promo__title">Посудомоечная <br>машина <br><span>в подарок</span></p>
      <p class="catalog-side-promo__desc">
        <span>к каждой кухне</span><br>
        <span>до 20.05</span>
      </p>
      <p class="catalog-side-promo__note">предложение ограничено</p>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'CatalogSidePromo',
  components: {
    AppIcon
  }
}
</script>

<style lang="scss">
.catalog-side-promo {
  position: relative;
  background: linear-gradient(132.19deg, #ffe706 22.82%, #f6e43e 84.02%);
  overflow: hidden;

  &__shape {
    position: absolute;

    &_circle {
      left: 0;
      bottom: 0;
      width: 90px;
      height: 90px;
      transform: translate(-20%, 10%);
    }

    &_triangle {
      top: 0;
      right: 0;
      width: 104px;
      height: 116px;
      transform: translate(15%, -25%);
    }
  }

  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 200px;
  }

  &__content {
    position: relative;
    padding: 16px 12px 10px;
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 90%;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    span {
      display: inline-block;
      margin-top: 4px;
      font-size: 30px;
      color: $color-pink;
    }
  }

  &__desc {
    margin-top: 20px;

    span {
      display: inline-block;
      margin: -4px 0;
      padding: 6px 16px;
      font-weight: 700;
      font-size: 12px;
      line-height: 106%;
      color: #ffffff;
      background-color: $color-green;
    }
  }

  &__note {
    margin-top: 18px;
    font-weight: 500;
    font-size: 8px;
    line-height: 121%;
  }

  @include media(xs) {
    &__shape {
      position: absolute;

      &_circle {
        width: 135px;
        height: 135px;
      }

      &_triangle {
        width: 156px;
        height: 174px;
      }
    }

    &__img {
      width: 300px;
    }

    &__content {
      padding: 32px 24px 20px;
    }

    &__title {
      font-size: 30px;

      span {
        margin-top: 10px;
        font-size: 40px;
      }
    }

    &__desc {
      margin-top: 30px;

      span {
        font-size: 18px;
      }
    }

    &__note {
      margin-top: 26px;
      font-size: 12px;
    }
  }

  @include media(md) {
    &__img {
      width: 380px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 40px 24px 20px;
    }

    &__title {
      margin-bottom: auto;
    }

    &__note {
      margin-top: 35px;
    }
  }

  @include media(lg) {
    &__shape {
      position: absolute;

      &_circle {
        width: 204px;
        height: 204px;
      }

      &_triangle {
        width: 245px;
        height: 273px;
      }
    }

    &__img {
      width: 450px;
    }

    &__content {
      padding: 48px 38px 26px;
    }

    &__title {
      font-size: 32px;

      span {
        font-size: 48px;
      }
    }

    &__desc {
      margin-top: 82px;

      span {
        font-size: 22px;
      }
    }

    &__note {
      margin-top: 40px;
      font-size: 14px;
    }
  }

  @include media(xl) {
    &__title {
      font-size: 36px;

      span {
        font-size: 54px;
      }
    }
  }
}
</style>