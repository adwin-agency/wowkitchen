<template>
  <div class="discount">
    <div class="container">
      <h2 class="discount__title">Акции</h2>
      <div class="discount__container">

        <div class="discount__main-el discount__main-el_bg">
          <div class="discount__box">
            <span class="discount__percent discount__percent_accent">50<span class="discount__percent-icon">&#37;</span>
            </span>
            <h5 class="discount__main-title">На кухни и шкафы</h5>
            <h6 class="discount__main-ending discount__main-ending_accent">До конца месяца</h6>
          </div>
        </div>

        <div class="discount__mini-el discount__mini-el_bg-grey discount__mini-el_m discount__mini-el_type1">
          <div class="discount__box">
            <h6 class="discount__mini-title discount__mini-title_bold">Бесплатные замер <br> и 3D-проект у вас дома</h6>
            <div class="discount__mini-pills-container">
              <p class="discount__mini-pills">&#10004; Точно</p>
              <p class="discount__mini-pills">&#10004; Быстро</p>
              <p class="discount__mini-pills">&#10004; Безопасно</p>
            </div>
            <img
              src="@/assets/img/discount/discount-man.png"
              alt
              class="discount__mini-img"
            >

            <p class="discount__mini-ending">Постоянная акция</p>
          </div>
        </div>

        <div class="discount__mini-el discount__mini-el_bg-pink discount__mini-el_type2">
          <p class="discount__mini-title">кухня + шкаф</p>
          <p class="discount__mini-desc">скидка на второе <br>изделие до</p>
          <p class="discount__mini-num">-35<sup>%</sup></p>
          <p class="discount__mini-ending">Постоянная акция</p>
        </div>

        <div class="discount__mini-el discount__mini-el_bg-aqua">
          <div class="discount__box">
            <span class="discount__el-title discount__el-title_green">Подарки</span>
            <h6 class="discount__mini-title discount__mini-title_bold">всем при заказе шкафа</h6>
            <ul class="discount__list">
              <li class="discount__list-item">от <b>40 000 ₽</b> в подарок ящик или корзина</li>
              <li class="discount__list-item">от <b>55 000 ₽</b> в подарок пантограф</li>
            </ul>
            <p class="discount__mini-ending">Постоянная акция</p>
          </div>
        </div>

        <div class="discount__mini-el discount__mini-el_bg-light-yellow">
          <div class="discount__box">
            <h6 class="discount__mini-title discount__mini-title_bold">при покупке кухни <br>фурнитура</h6>
            <p class="discount__el-title discount__el-title_sm discount__el-title_pink">В подарок</p>
            <p class="discount__mini-ending">Постоянная акция</p>
          </div>
        </div>

        <div class="discount__mini-el discount__mini-el_type5">
          <p class="discount__mini-title">Вытяжка <br>в подарок</p>
          <p class="discount__mini-desc">при заказе кухни</p>
          <p class="discount__mini-ending">{{ promoDate }}</p>
        </div>

        <div class="discount__mini-el discount__mini-el_type6">
          <p class="discount__mini-title">Дополнительная <br>скидка</p>
          <p class="discount__mini-desc">на комплект <br>бытовой техники <br>от 3 единиц</p>
          <p class="discount__mini-ending">{{ promoDate }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Discount',
  computed: {
    promoDate() {
      const today = new Date()
      const date = new Date(today.getFullYear(), today.getMonth() + 1, 0)
      return 'до ' + ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2)
    }
  }
}
</script>

<style lang="scss">
.discount {
  $b: &;

  &__title {
    display: none;

    @include media(xl) {
      font-size: 50px;
      font-weight: bold;
      line-height: 1.44;
      display: block;
      margin-top: 65px;
    }
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: -4px;

    @include media(md) {
      display: grid;
      margin-right: 0;
      padding-top: 40px;
      padding-bottom: 50px;
      grid-template-columns: 300px repeat(2, 1fr);
      grid-row-gap: 20px;
      grid-column-gap: 30px;
    }

    @include media(lg) {
      grid-row-gap: 40px;
      padding-bottom: 100px;
      grid-template-columns: 400px repeat(2, 1fr);
    }

    @include media(xl) {
      grid-template-columns: 480px repeat(2, 1fr);
    }
  }
  &__box {
    padding: 0px 18px;
    margin: 0 auto;

    @include media(md) {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }

    @include media(lg) {
      padding: 0 30px;
    }
    @include media(xl) {
      padding: 0 36px;
    }
  }
  &__percent {
    display: block;
    font-size: 40px;
    font-weight: bold;
    line-height: 31px;
    color: #fff;

    &-icon {
      &_small {
        font-size: 20px;
        vertical-align: super;

        @include media(lg) {
          font-size: 42px;
        }
      }
    }
    &_large {
      font-size: 50px;
      margin-top: 10px;

      @include media(lg) {
        margin-top: 0px;
        margin-bottom: 15px;
      }
    }
    &_accent {
      display: inline-block;
      padding: 20px 40px;
      border-top-left-radius: 40px;
      background-color: #e40175;
      border-bottom-right-radius: 40px;
      margin-top: 40px;
      align-self: center;

      @include media(lg) {
        font-weight: bold;
        padding: 35px 50px;
        font-size: 69px;
      }
    }
    &_bg {
      &-pink {
        color: #e40175;

        @include media(lg) {
          font-size: 96px;
        }
      }
      &-green {
        color: #04b991;
      }
      &-black {
        color: #3c3c3c;
      }
    }
  }
  // MAIN element
  &__main {
    &-el {
      position: relative;
      width: 100%;
      margin-right: 4px;
      text-align: center;
      margin-bottom: 10px;
      background-color: #f6f6f6;

      @include media(md) {
        margin-right: 0;
        margin-bottom: 0;
        grid-column: 1;
        grid-row: 1 / 3;
      }
    }
    &-title {
      font-size: 16px;
      color: rgb(60, 60, 60);
      font-weight: bold;
      text-transform: uppercase;
      line-height: 1.2;
      margin: 20px auto 0;
      max-width: 300px;
    }
    &-ending {
      font-size: 16px;
      color: rgb(60, 60, 60);
      font-weight: bold;
      text-transform: uppercase;
      line-height: 1.875;
      margin: 10px auto 40px;
      max-width: 300px;
      &_accent {
        padding: 10px;
        background-color: #f6e43e;
      }
    }
  }
  // MINI element
  &__mini {
    &-el {
      flex: 1 0 300px;
      max-width: 380px;
      margin-right: 4px;
      margin-bottom: 4px;
      position: relative;
      min-height: 145px;
      padding-top: 20px;

      @include media(md) {
        max-width: none;
        margin-right: 0;
        margin-bottom: 0;
        padding-top: 0px;
        min-height: 145px;
      }
      @include media(lg) {
        min-height: 195px;
      }
      @include media(xl) {
        min-height: 225px;
      }
    }
    &-title {
      color: #000;
      line-height: 1.286;
      font-weight: 400;
      font-size: 12px;
      margin-top: 5px;
      z-index: 2;
      &_bold {
        font-size: 14px;
        margin-bottom: 12px;
        text-transform: unset;
        margin-top: 10px;
        font-weight: bold;
      }
      @include media(lg) {
        font-size: 16px;
      }
      @include media(xl) {
        font-size: 18px;
      }
    }
    &-pills {
      color: #fff;
      padding: 3px 15px;
      margin-right: 4px;
      margin-bottom: 4px;
      border-radius: 12px;
      background-color: #04b991;
      font-size: 7px;
      text-transform: uppercase;
      line-height: 1.818;
      letter-spacing: 1px;
      z-index: 2;

      &-container {
        display: flex;
        flex-wrap: wrap;

        @include media(lg) {
          flex-direction: column;
        }
      }

      @include media(lg) {
        font-size: 10px;
      }
    }
    &-ending {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: #f6e43e;
      font-size: 11px;
      color: rgb(60, 60, 60);
      font-weight: bold;
      line-height: 2.727;
      border-top-left-radius: 40px;
      padding: 5px 19px 4px 30px;

      @include media(md) {
        padding: 9px 19px 4px 30px;
      }
    }
    &-background {
      position: absolute;
      top: 0;
      left: 0;
    }
    &-img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 86px;

      @include media(lg) {
        width: 120px;
      }
      @include media(xl) {
        width: 138px;
      }
    }
  }

  // Colors
  &__mini-el {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  }

  &__mini-el_bg {
    &-grey {
      background-image: url('~@/assets/img/discount/background-man_320.png');
    }

    &-pink {
      background-image: url('~@/assets/img/discount/baloons-bg_1920.png');
    }

    &-aqua {
      padding-top: 6px;
      padding-bottom: 20px;
      background-image: url('~@/assets/img/discount/discount-wardrobe.jpg');

      @include media(md) {
        padding-top: 20px;
      }

      @include media(lg) {
        padding-bottom: 0;
      }

      #{$b}__mini-title {
        margin-top: 0;
        margin-bottom: 5px;

        @include media(lg) {
          margin-top: 10px;
          margin-bottom: 12px;
        }
      }
    }

    &-light-yellow {
      padding-top: 70px;
      background-image: url('~@/assets/img/discount/discount-kitchen.jpg');

      @include media(md) {
        padding-top: 60px;
      }

      @include media(lg) {
        padding-top: 80px;
      }

      #{$b}__mini-title {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }

  &__el-title {
    font-weight: bold;
    font-size: 28px;
    text-transform: uppercase;

    &_sm {
      font-size: 16px;
    }

    &_green {
      color: $color-green;
    }

    &_pink {
      color: $color-pink;
    }
  }

  &__list {
    padding-right: 100px;
  }

  &__list-item {
    font-size: 12px;
  }

  &__note {
    position: relative;
    font-weight: 600;
    font-size: 10px;
    line-height: 1.6;
    text-transform: uppercase;
    z-index: 1;

    span {
      font-weight: 700;
      background-color: $color-yellow;
      box-shadow: 0 0 0 3px $color-yellow;
    }
  }

  &__mini-el_m {
    #{$b} {
      &__mini-title {
        margin-top: 0;
        margin-bottom: 6px;
      }
      &__note {
        max-width: calc(100% - 54px);
      }
      &__mini-img {
        right: 10px;
      }
    }
  }

  &__mini-el {
    &_type1 {
      padding-top: 25px;
    }

    &_type2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 18px;

      #{$b} {
        &__mini-title {
          margin: 0;
          font-weight: 700;
          font-size: 22px;
          line-height: 90%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        &__mini-desc {
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
        }

        &__mini-num {
          font-weight: 700;
          font-size: 48px;
          line-height: 1;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: $color-pink;

          sup {
            font-size: 28px;
          }
        }
      }
    }

    &_type5 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 18px;
      background-color: $color-violet;
      background-image: url('~@/assets/img/discount/discount-hood.png');
      background-position: top right;
      background-repeat: no-repeat;
      background-size: 190px auto;

      #{$b} {
        &__mini-title {
          margin: 0;
          font-weight: 700;
          font-size: 24px;
          line-height: 90%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: $color-pink;
        }

        &__mini-desc {
          margin-top: 10px;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
        }
      }
    }

    &_type6 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 18px;
      background-color: $color-lightgray;
      background-image: url('~@/assets/img/discount/discount-complect.png');
      background-position: top right;
      background-repeat: no-repeat;
      background-size: auto 100%;

      #{$b} {
        &__mini-title {
          margin: 0;
          font-weight: 700;
          font-size: 20px;
          line-height: 90%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        &__mini-desc {
          margin-top: 6px;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          color: $color-green;
        }
      }
    }
  }

  @include media(sm) {
    &__mini-el_m {
      #{$b} {
        &__box {
          padding-right: 50px;
        }
      }
    }
  }

  @include media(md) {
    &__mini-el {
      &_type1 {
        padding-top: 0;
      }

      &_type5 {
        grid-column-start: 2;
      }
    }
  }

  @include media(lg) {
    &__el-title {
      font-size: 38px;

      &_sm {
        font-size: 30px;
      }
    }

    &__list-item {
      font-size: 14px;
    }

    &__mini-el {
      &_type1 {
        #{$b} {
          &__mini-img {
            right: 30px;
            width: 110px;
          }
        }
      }

      &_type2 {
        padding: 0 26px;

        #{$b} {
          &__mini-title {
            font-size: 24px;
          }

          &__mini-desc {
            font-size: 15px;
          }

          &__mini-num {
            font-size: 60px;

            sup {
              font-size: 32px;
            }
          }
        }
      }

      &_type5 {
        padding: 0 30px;
        background-size: 230px auto;

        #{$b} {
          &__mini-title {
            font-size: 28px;
          }

          &__mini-desc {
            margin-top: 15px;
            font-size: 16px;
          }
        }
      }

      &_type6 {
        padding: 0 30px;

        #{$b} {
          &__mini-title {
            font-size: 22px;
          }

          &__mini-desc {
            margin-top: 8px;
            font-size: 16px;
          }
        }
      }
    }
  }

  @include media(xl) {
    &__el-title {
      font-size: 45px;

      &_sm {
        font-size: 35px;
      }
    }

    &__mini-el_m {
      #{$b} {
        &__mini-img {
          width: 130px;
        }
      }
    }

    &__mini-el {
      &_type1 {
        #{$b} {
          &__mini-img {
            right: 60px;
          }
        }
      }

      &_type2 {
        padding: 0 36px;

        #{$b} {
          &__mini-title {
            font-size: 27px;
          }

          &__mini-desc {
            margin-top: 5px;
            font-size: 17px;
          }

          &__mini-num {
            font-size: 95px;

            sup {
              font-size: 48px;
            }
          }
        }
      }

      &_type5 {
        padding: 0 50px;
        background-size: 280px auto;

        #{$b} {
          &__mini-title {
            font-size: 35px;
          }

          &__mini-desc {
            margin-top: 20px;
            font-size: 18px;
          }
        }
      }

      &_type6 {
        padding: 0 50px;

        #{$b} {
          &__mini-title {
            font-size: 25px;
          }

          &__mini-desc {
            margin-top: 12px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
