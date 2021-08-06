<template>
  <div class="pay">
    <div class="pay__main">
      <div class="container">
        <div class="pay__header">
          <h1 class="pay__heading">Оплата онлайн</h1>
          <p class="pay__desc">После заполнения формы ниже вы автоматически перейдёте на сайт банка с протоколом безопасности для оплаты.</p>
          <div class="pay__systems">
            <p class="pay__systems-title">Мы принимаем</p>
            <div class="pay__systems-list">
              <AppIcon
                name="visa-color"
                class="pay__system pay__system_visa"
                viewBox="0 0 282 92.637756"
              />
              <AppIcon
                name="maestro-color"
                class="pay__system pay__system_maestro"
                viewBox="0 0 256 199"
              />
              <AppIcon
                name="mastercard-color"
                class="pay__system pay__system_mastercard"
                viewBox="0 0 256 199"
              />
              <img
                src="@/assets/img/mir-color.svg"
                alt=""
                class="pay__system pay__system_mir"
              >
            </div>
          </div>
        </div>
        <PayForm class="pay__form" />
      </div>
    </div>
    <div class="pay__side">
      <div v-if="!$_media.sm" class="pay__side-box">
        <p class="pay__side-message">Оплатите будущую кухню <br>прямо с сайта</p>
        <img
          src="@/assets/img/notebook.png"
          alt
          class="pay__side-img"
        >
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'
import PayForm from './PayForm.vue'

export default {
  name: 'Pay',
  components: {
    AppIcon,
    PayForm
  }
}
</script>

<style lang="scss">
.pay {
  &__main {
    padding: 30px 0;
  }
  
  &__header {
    max-width: 1050px;
  }

  &__desc {
    margin-top: 4px;
    max-width: 560px;
    font-size: 14px;
    line-height: (26/14);
  }

  &__systems {
    margin-top: 30px;

    &-title {
      font-weight: 600;
      font-size: 13px;
      color: $color-lightviolet;
    }

    &-list {
      display: flex;
      margin-top: 20px;
    }
  }

  &__system {
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }

    &_visa {
      width: 65px;
    }

    &_maestro,
    &_mastercard {
      margin-bottom: -4px;
      width: 50px;
    }

    &_mir {
      width: 75px;
    }
  }

  &__form {
    margin-top: 45px;
  }

  &__side {
    display: flex;
    align-items: flex-end;
    padding-top: 56%;
    background-color: #ccc;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('~@/assets/img/payment-bg.jpg');
    background-size: cover;
    background-position: center;

    &-box {
      margin-left: -30px;
      width: 320px;
    }

    &-message {
      display: inline-block;
      margin-left: -15px;
      padding: 18px 55px 40px;
      font-weight: bold;
      font-size: 14px;
      line-height: (23/18);
      text-align: center;
      background-image: url('~@/assets/img/message.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    &-img {
      width: 100%;
    }
  }

  @include media(md) {
    display: flex;

    &__main {
      flex: 1;
      padding: 58px 0 80px;

      .container {
        margin-right: 0;
        max-width: calc(50% + 330px);
        padding-right: 60px;
      }
    }

    &__form {
      max-width: 690px;
    }

    &__side {
      width: 300px;
      padding: 50px 0;
    }
  }

  @include media(lg) {
    &__main {
      .container {
        max-width: calc(50% + 410px);
        padding-right: 120px;
      }
    }

    &__header {
      display: grid;
      grid-template-columns: auto 370px;
    }

    &__systems {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      margin-top: 54px;
      margin-left: 50px;
    }

    &__side {
      width: 460px;

      &-box {
        margin-left: -120px;
        width: 550px;
      }

      &-message {
        margin-left: 30px;
        padding: 30px 55px 60px;
        font-size: 18px;
      }
    }
  }

  @include media(xl) {
    &__main {
      .container {
        max-width: calc(50% + 530px);
        padding-right: 200px;
      }
    }

    &__side {
      width: 540px;

      &-box {
        margin-left: -200px;
        width: 626px;
      }

      &-message {
        margin-bottom: -18px;
      }
    }
  }
}
</style>
