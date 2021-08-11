<template>
  <div class="pay">
    <div
      class="pay__main"
      :class="{'pay__main_result': success || error}"
    >
      <div class="container">
        <template v-if="success">
          <div class="pay__header">
            <h1 class="pay__heading">Оплата прошла успешно</h1>
            <p class="pay__desc pay__desc_result">Наши специалисты уже начали работу над вашим проектом и менеджер свяжется с вами по готовности изделия.<br><br>А пока вам может быть интересно:</p>
          </div>
          <div class="pay__menu">
            <router-link
              to="/delivery"
              class="pay__link"
            >Доставка
              <AppIcon
                name="arrow"
                class="pay__link-icon"
              />
            </router-link>
            <router-link
              to="/installing"
              class="pay__link"
            >Сборка
              <AppIcon
                name="arrow"
                class="pay__link-icon"
              />
            </router-link>
          </div>
        </template>
        <template v-else-if="error">
          <div class="pay__header">
            <h1 class="pay__heading">Оплата не прошла!</h1>
            <p class="pay__desc pay__desc_result">Нет повода для беспокойства, просто попробуйте еще раз или свяжитесь с нами по телефону <a :href="`tel:${phone}`">{{phone}}</a></p>
          </div>
          <div class="pay__menu">
            <router-link
              to="/pay"
              class="pay__link"
            >Попробовать ещё раз
              <AppIcon
                name="arrow"
                class="pay__link-icon"
              />
            </router-link>
          </div>
        </template>
        <template v-else>
          <div class="pay__header pay__header_systems">
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
        </template>
      </div>
    </div>
    <div
      class="pay__side"
      :class="{'pay__side_result': success || error}"
    >
      <div
        v-if="!$_media.sm"
        class="pay__side-box"
      >
        <p
          v-if="success"
          class="pay__side-message pay__side-message_green"
        >
          Отлично! Оплата прошла <br>и проект отправляется <br>в работу
        </p>
        <p
          v-else-if="error"
          class="pay__side-message pay__side-message_pink"
        >
          Что-то пошло не так...
        </p>
        <p
          v-else
          class="pay__side-message"
        >
          Оплатите будущую кухню <br>прямо с сайта
        </p>
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
  },
  props: {
    success: Boolean,
    error: Boolean
  },
  computed: {
    phone() {
      return this.$store.state.cities[this.$store.state.activeCity]?.phone
    }
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

  &__heading {
    max-width: 560px;
    line-height: (57/50);
  }

  &__desc {
    margin-top: 30px;
    max-width: 560px;
    font-size: 14px;
    line-height: (26/14);

    &_result {
      max-width: 440px;
      font-weight: 500;
      font-size: 16px;
      line-height: (26/18);
    }

    a {
      font-weight: bold;
      white-space: nowrap;
      color: $color-green;
    }
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

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 40px;
  }

  &__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    min-width: 185px;
    font-weight: bold;
    font-size: 18px;
    color: $color-green;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover &-icon {
      transform: translateX(15px);
    }

    &-icon {
      margin-left: 30px;
      width: 14px;
      height: 12px;
      fill: currentColor;
      transition: transform 0.3s ease;
    }
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
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-left: -15px;
      width: 245px;
      height: 95px;
      padding-bottom: 20px;
      font-weight: bold;
      font-size: 14px;
      line-height: (23/18);
      text-align: center;
      background-image: url('~@/assets/img/message.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      &_green {
        color: #fff;
        background-image: url('~@/assets/img/message-green.svg');
      }

      &_pink {
        color: #fff;
        background-image: url('~@/assets/img/message-pink.svg');
      }
    }

    &-img {
      width: 100%;
    }
  }

  @include media(md) {
    display: flex;

    &__main {
      flex: 1;
      padding: 80px 0;

      .container {
        margin-right: 0;
        max-width: calc(50% + 330px);
        padding-right: 60px;
      }

      &_result {
        .container {
          max-width: 480px;
        }
      }
    }

    &__desc {
      &_result {
        font-size: 18px;
      }
    }

    &__form {
      max-width: 690px;
    }

    &__side {
      width: 300px;
      padding: 50px 0;

      &_result {
        width: 50%;
        min-height: 600px;
      }
    }
  }

  @include media(lg) {
    &__main {
      .container {
        max-width: calc(50% + 410px);
        padding-right: 120px;
      }

      &_result {
        .container {
          max-width: 640px;
        }
      }
    }

    &__header_systems {
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

      &_result {
        width: 50%;
        min-height: 700px;
      }

      &-box {
        margin-left: -120px;
        width: 550px;
      }

      &-message {
        margin-left: 30px;
        width: 365px;
        height: 140px;
        padding-bottom: 30px;
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

      &_result {
        .container {
          max-width: 800px;
        }
      }
    }

    &__side {
      width: 540px;

      &_result {
        width: 50%;
        min-height: 800px;
      }

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
