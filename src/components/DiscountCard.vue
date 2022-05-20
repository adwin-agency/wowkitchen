<template>
  <div
    v-if="id === '290'"
    class="discount-card discount-card_type1"
  >
    <p class="discount-card__title">Бесплатные замер <br>и 3D-проект у вас дома</p>
    <ul class="discount-card__list">
      <li>✔ точно</li>
      <li>✔ быстро</li>
      <li>✔ безопасно</li>
    </ul>
    <p class="discount-card__date">Постоянная акция</p>
  </div>
  <div
    v-else-if="id === '291'"
    class="discount-card discount-card_type2"
  >
    <p class="discount-card__title">Кухня + шкаф</p>
    <p class="discount-card__desc">скидка на второе <br>изделие до</p>
    <p class="discount-card__num">-35<sup>%</sup></p>
    <p class="discount-card__date">Постоянная акция</p>
  </div>
  <div
    v-else-if="id === '292'"
    class="discount-card discount-card_type3"
  >
    <p class="discount-card__title">Подарки</p>
    <p class="discount-card__desc">всем при заказе шкафа</p>
    <ul class="discount-card__list">
      <li>от <span>40 000 ₽</span> в подарок ящик или корзина</li>
      <li>от <span>55 000 ₽</span> в подарок пантограф</li>
    </ul>
    <p class="discount-card__date">Постоянная акция</p>
  </div>
  <div
    v-else-if="id === '293'"
    class="discount-card discount-card_type4"
  >
    <p class="discount-card__title">при покупке кухни <br>фурнитура <br><span>в подарок</span></p>
    <p class="discount-card__date">Постоянная акция</p>
  </div>
  <div
    v-else-if="id === '294'"
    class="discount-card discount-card_type5"
  >
    <p class="discount-card__title">Посудомоечная <br>машина <br><span>в подарок</span></p>
    <p class="discount-card__desc">к каждой кухне до {{ date }}</p>
    <p class="discount-card__note">количество подарков ограничено</p>
    <p class="discount-card__date">до {{ date }}</p>
  </div>
  <div
    v-else-if="id === '295'"
    class="discount-card discount-card_type6"
  >
    <p class="discount-card__title">Дополнительная <br>скидка</p>
    <p class="discount-card__desc">на комплект <br>бытовой техники <br>от 3 единиц</p>
    <p class="discount-card__date">{{ dynamicDate }}</p>
  </div>
  <div
    v-else-if="id === '296'"
    class="discount-card discount-card_type7"
  >
    <img
      src="@/assets/img/discount/discount-num.svg"
      alt="0%"
      class="discount-card__num"
    >
    <p class="discount-card__title">Рассрочка</p>
    <ul class="discount-card__list">
      <li><span>0 ₽</span><span>без первого взноса</span></li>
      <li><span>0 %</span><span>без переплат</span></li>
      <li><span>8 мес</span><span>срок рассрочки</span></li>
    </ul>
    <p class="discount-card__date">Постоянная акция</p>
  </div>
  <div
    v-else
    class="discount-card discount-card_main"
  >
    <p class="discount-card__num">50%</p>
    <p class="discount-card__title">На кухни и шкафы <br><span>до конца месяца</span></p>
  </div>
</template>

<script>
export default {
  name: 'DiscountCard',
  props: {
    id: String,
    date: String
  },
  computed: {
    dynamicDate() {
      const today = new Date()
      const date = new Date(today.getFullYear(), today.getMonth() + 1, 0)
      return (
        'до ' +
        ('0' + date.getDate()).slice(-2) +
        '.' +
        ('0' + (date.getMonth() + 1)).slice(-2)
      )
    }
  }
}
</script>

<style lang="scss">
.discount-card {
  $b: &;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 150px;
  padding: 12px 18px;

  &__date {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 5px 20px 4px 30px;
    border-top-left-radius: 40px;
    font-weight: 700;
    font-size: 11px;
    line-height: 2.727;
    background-color: $color-yellow;
  }

  &_main {
    align-items: center;
    padding: 40px 18px;
    background-color: #f6f6f6;

    #{$b} {
      &__num {
        padding: 15px 40px;
        border-radius: 40px 0;
        font-weight: bold;
        font-size: 40px;
        line-height: 1;
        color: #fff;
        background-color: $color-pink;
      }

      &__title {
        margin-top: 20px;
        font-weight: bold;
        font-size: 16px;
        line-height: 1.2;
        text-align: center;
        text-transform: uppercase;

        span {
          display: inline-block;
          margin-top: 10px;
          padding: 15px 30px;
          background-color: $color-yellow;
        }
      }
    }
  }

  &_type1 {
    background-image: url('~@/assets/img/discount/discount-man.png'),
      url('~@/assets/img/discount/discount-bg.jpg');
    background-position: right 10px bottom, left;
    background-repeat: no-repeat;
    background-size: 86px auto, cover;

    #{$b} {
      &__title {
        margin-top: 14px;
        font-weight: bold;
        font-size: 14px;
        line-height: 1.286;
      }

      &__list {
        display: flex;
        margin-top: 6px;
        margin-bottom: auto;

        li {
          margin-right: 4px;
          padding: 4px 15px 3px;
          border-radius: 50px;
          font-weight: 500;
          font-size: 7px;
          line-height: 1.8;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          background-color: $color-green;
        }
      }
    }
  }

  &_type2 {
    background-color: #ffefee;
    background-image: url('~@/assets/img/discount/baloons-bg_1920.png');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;

    #{$b} {
      &__title {
        font-weight: 700;
        font-size: 22px;
        line-height: 90%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      &__desc {
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
      }

      &__num {
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

  &_type3 {
    background-image: url('~@/assets/img/discount/discount-wardrobe.jpg');
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: cover;

    #{$b} {
      &__title {
        font-weight: bold;
        font-size: 28px;
        text-transform: uppercase;
        color: $color-green;
      }

      &__desc {
        font-weight: bold;
        font-size: 14px;
        line-height: 1.286;
      }

      &__list {
        margin-top: 5px;
        margin-bottom: auto;
        padding-right: 90px;

        li {
          font-size: 12px;

          span {
            font-weight: bold;
          }
        }
      }
    }
  }

  &_type4 {
    background-image: url('~@/assets/img/discount/discount-kitchen.jpg');
    background-position: right top;
    background-repeat: no-repeat;
    background-size: cover;

    #{$b} {
      &__title {
        margin-top: auto;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 14px;
        line-height: 1.286;

        span {
          font-size: 16px;
          text-transform: uppercase;
          color: $color-pink;
        }
      }
    }
  }

  &_type5 {
    background-color: $color-violet;
    background-image: url('~@/assets/img/discount/discount-wash.png');
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 160px auto;

    #{$b} {
      &__title {
        font-weight: 700;
        font-size: 20px;
        line-height: 90%;
        letter-spacing: 0.02em;
        text-transform: uppercase;

        span {
          display: inline-block;
          margin-top: 6px;
          font-size: 24px;
          color: $color-pink;
        }
      }

      &__desc {
        margin-top: 6px;
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
      }

      &__note {
        position: absolute;
        left: 18px;
        bottom: 5px;
        max-width: calc(100% - 90px);
        font-weight: 500;
        font-size: 12px;
      }
    }
  }

  &_type6 {
    background-color: $color-lightgray;
    background-image: url('~@/assets/img/discount/discount-complect.png');
    background-position: top right;
    background-repeat: no-repeat;
    background-size: auto 100%;

    #{$b} {
      &__title {
        margin: 0;
        font-weight: 700;
        font-size: 20px;
        line-height: 90%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      &__desc {
        margin-top: 6px;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: $color-green;
      }
    }
  }

  &_type7 {
    background-color: $color-pink;

    #{$b} {
      &__num {
        position: absolute;
        top: 45%;
        right: 15px;
        width: 95px;
        transform: translateY(-50%);
      }

      &__title {
        position: relative;
        font-weight: 700;
        font-size: 28px;
        line-height: 98%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #ffffff;
      }

      &__list {
        position: relative;
        margin-top: 4px;
        margin-bottom: auto;

        li {
          display: flex;
          align-items: center;
          margin-bottom: 4px;
          font-weight: 700;
          line-height: 110%;

          &:last-child {
            margin-bottom: 0;
          }
        }

        span:first-child {
          width: 52px;
          margin-right: 14px;
          font-size: 16px;
          letter-spacing: -0.04em;
          color: $color-yellow;
        }

        span:last-child {
          padding: 0px 16px;
          border-radius: 100px;
          font-size: 10px;
          background-color: $color-yellow;
        }
      }
    }
  }

  @include media(lg) {
    min-height: 195px;
    padding: 26px;

    &_main {
      #{$b} {
        &__num {
          padding: 15px 50px;
          font-size: 69px;
        }
      }
    }

    &_type1 {
      background-position: right 30px bottom, left;
      background-size: 110px auto, cover;

      #{$b} {
        &__title {
          margin-top: 0;
          font-size: 16px;
        }

        &__list {
          display: block;
          margin-bottom: 0;

          li {
            margin-right: 0;
            margin-bottom: 4px;
            width: 130px;
            font-size: 10px;
          }
        }
      }
    }

    &_type2 {
      #{$b} {
        &__title {
          font-size: 24px;
        }

        &__desc {
          font-size: 15px;
        }

        &__num {
          font-size: 60px;

          sup {
            font-size: 32px;
          }
        }
      }
    }

    &_type3 {
      #{$b} {
        &__title {
          font-size: 38px;
        }

        &__desc {
          font-size: 16px;
        }

        &__list {
          padding-right: 140px;
          margin-bottom: 0;

          li {
            font-size: 14px;
          }
        }
      }
    }

    &_type4 {
      #{$b} {
        &__title {
          margin-bottom: 0;
          font-size: 16px;

          span {
            font-size: 30px;
          }
        }
      }
    }

    &_type5 {
      background-size: 210px auto;

      #{$b} {
        &__title {
          font-size: 22px;

          span {
            font-size: 28px;
          }
        }

        &__desc {
          margin-top: 15px;
          font-size: 16px;
        }

        &__note {
          left: 26px;
          bottom: 10px;
        }
      }
    }

    &_type6 {
      #{$b} {
        &__title {
          font-size: 22px;
        }

        &__desc {
          margin-top: 8px;
          font-size: 16px;
        }
      }
    }

    &_type7 {
      #{$b} {
        &__num {
          width: 150px;
        }

        &__title {
          font-size: 40px;
        }

        &__list {
          margin-top: 8px;

          span:first-child {
            width: 62px;
            margin-right: 20px;
            font-size: 22px;
          }

          span:last-child {
            padding: 3px 20px;
            font-size: 14px;
          }
        }
      }
    }
  }

  @include media(xl) {
    min-height: 225px;
    padding: 30px;

    &_type1 {
      background-position: right 60px bottom, left;
      background-size: 130px auto, cover;

      #{$b} {
        &__title {
          font-size: 18px;
        }
      }
    }

    &_type2 {
      background-position: top 0 left 50%;

      #{$b} {
        &__title {
          font-size: 27px;
        }

        &__desc {
          margin-top: 5px;
          font-size: 17px;
        }

        &__num {
          font-size: 95px;

          sup {
            font-size: 48px;
          }
        }
      }
    }

    &_type3 {
      #{$b} {
        &__title {
          font-size: 45px;
        }

        &__desc {
          margin-top: 10px;
          font-size: 18px;
        }

        &__list {
          margin-top: 10px;
        }
      }
    }

    &_type4 {
      #{$b} {
        &__title {
          font-size: 18px;

          span {
            font-size: 35px;
          }
        }
      }
    }

    &_type5 {
      background-size: 250px auto;

      #{$b} {
        &__title {
          font-size: 25px;

          span {
            margin-top: 10px;
            font-size: 35px;
          }
        }

        &__desc {
          margin-top: 20px;
          font-size: 18px;
        }
      }
    }

    &_type6 {
      #{$b} {
        &__title {
          font-size: 25px;
        }

        &__desc {
          margin-top: 12px;
          font-size: 18px;
        }
      }
    }

    &_type7 {
      #{$b} {
        &__num {
          width: 185px;
        }

        &__title {
          font-size: 54px;
        }

        &__list {
          margin-top: 16px;

          span:first-child {
            width: 68px;
            margin-right: 24px;
            font-size: 24px;
          }

          span:last-child {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>