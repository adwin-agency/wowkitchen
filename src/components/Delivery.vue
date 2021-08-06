<template>
  <div class="delivery">
    <div class="delivery__main">
      <div class="container">
        <h1 class="delivery__description-title">Доставка</h1>
        <p class="delivery__description-subtitle">В пределах СПб, ЛО, Москвы</p>
        <p class="delivery__description-text">
          Доставка осуществляется с Пн. по Сб. 10:00 до 21:00. Стоимость зависит от вашего местонахождения.
        </p>
        <p class="delivery__description-text">
          Подробнее узнать о стоимости можно у оператора по телефону:
          <a
            :href="`tel:${phone}`"
            class="delivery__description_accent"
          >{{phone}}</a>
        </p>
        <p class="delivery__description-subtitle">Подъём на этаж</p>
        <p class="delivery__description-text">
          Подъем в квартиру без лифта - 200 рублей этаж. Подъем в квартиру на лифте - бесплатно.
          <span class="delivery__description_accent"></span>
        </p>
      </div>
    </div>
    <div class="delivery__side">
      <div
        v-if="!$_media.sm"
        class="delivery__side-box"
      >
        <p class="delivery__side-message">Оперативная доставка <br>в удобное вам время</p>
        <img
          src="@/assets/img/cart.png"
          alt
          class="delivery__side-img"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  computed: {
    phone() {
      return this.$store.state.cities[this.$store.state.activeCity]?.phone
    }
  }
}
</script>

<style lang="scss">
.delivery {
  &__main {
    padding: 30px 0;
  }

  &__description {
    &-subtitle {
      font-weight: bold;
      font-size: 18px;
      padding-top: 30px;
    }

    &-text {
      padding-top: 5px;
      font-size: 14px;
      line-height: 26px;
    }

    &_accent {
      font-weight: bold;
      padding-left: 4px;
      white-space: nowrap;
    }
  }

  &__side {
    display: flex;
    align-items: flex-end;
    padding-top: 56%;
    background-color: #ccc;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('~@/assets/img/delivery-bg.jpg');
    background-size: cover;
    background-position: center;

    &-box {
      margin-left: -30px;
    }

    &-message {
      display: inline-block;
      margin-left: -15px;
      padding: 18px 55px 40px;
      font-weight: bold;
      font-size: 14px;
      line-height: (23/18);
      text-align: center;
      background-image: url('~@/assets/img/message-l.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  @include media(md) {
    display: flex;

    &__main {
      flex: 1;
      padding: 50px 0;

      .container {
        margin-right: 0;
        max-width: calc(50% + 330px);
        padding-right: 120px;
      }
    }

    &__description {
      &-text {
        padding-top: 20px;
      }
    }

    &__side {
      width: 300px;
      padding: 150px 0 50px;

      &-box {
        margin-left: -100px;
      }

      &-message {
        margin-left: 110px;
      }

      &-img {
        margin-top: -120px;
        margin-bottom: -50px;
        width: 290px;
      }
    }
  }

  @include media(lg) {
    &__main {
      .container {
        max-width: calc(50% + 410px);
        padding-right: 200px;
      }
    }

    &__description {
      &-title {
        font-size: 50px;
      }

      &-subtitle {
        padding-top: 40px;
      }
    }

    &__side {
      width: 460px;

      &-box {
        margin-left: -130px;
      }

      &-message {
        margin-left: 160px;
        padding: 30px 75px 60px;
        font-size: 18px;
      }

      &-img {
        margin-top: -160px;
        width: 353px;
      }
    }
  }

  @include media(xl) {
    &__main {
      .container {
        max-width: calc(50% + 530px);
      }
    }

    &__side {
      width: 540px;
      padding: 188px 0 50px;
    }
  }
}
</style>
