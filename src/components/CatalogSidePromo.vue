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
    <!-- <img src="@/assets/img/ny-toys-03.png" alt="" class="catalog-side-promo__ny-img catalog-side-promo__ny-img_1">
    <img src="@/assets/img/ny-toys-03.png" alt="" class="catalog-side-promo__ny-img catalog-side-promo__ny-img_2">
    <AppIcon
      class="catalog-side-promo__shape catalog-side-promo__shape_ny-star-8"
      name="ny-star-8"
    />
    <AppIcon
      class="catalog-side-promo__shape catalog-side-promo__shape_ny-star-9"
      name="ny-star-9"
    /> -->
    <img
      src="/assets/img/catalog-wash.png"
      alt=""
      class="catalog-side-promo__img"
    >
    <div class="catalog-side-promo__content">
      <p class="catalog-side-promo__title">Посудомоечная <br>машина <br><span>в подарок</span></p>
      <p class="catalog-side-promo__desc">
        <span>к каждой кухне</span><br>
        <span>до {{ promoDate }}</span>
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
  },
  computed: {
    promoDate() {
      return this.$store.getters.mainPromoDate
    }
  }
}
</script>

<style lang="scss">
.catalog-side-promo {
  $b: &;

  position: relative;
  background: linear-gradient(132.19deg, #ffe706 22.82%, #f6e43e 84.02%);  
  overflow: hidden;

  &_ny {
    background: linear-gradient(113.41deg, #3AB5B0 6.3%, #3D99BE 34.07%, #56317A 95.89%);

    #{$b} {
      &__title {
        color: #fff;

        span {
          color: $color-yellow;
        }
      }
      
      &__shape {
        opacity: 0.3;
      }
    }
  }

  &__ny-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;

    &_2 {
      transform: rotate(15deg);
    }
  }

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

    &_ny-star-8 {
      left: 20%;
      bottom: 44px;
      width: 92px;
      height: 92px;
    }

    &_ny-star-9 {
      left: 26%;
      bottom: 17px;
      width: 102px;
      height: 102px;
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
      &_circle {
        width: 135px;
        height: 135px;
      }

      &_triangle {
        width: 156px;
        height: 174px;
      }

      &_ny-star-8 {
        bottom: 104px;
      }

      &_ny-star-9 {
        left: 35%;
        bottom: 27px;
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

    &__shape {
      &_ny-star-8 {
        left: 30px;
      }

      &_ny-star-9 {
        left: 88px;
      }
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