<template>
  <form
    class="payment-form"
    @submit="handleSubmit"
  >
    <input
      type="hidden"
      name="type"
      value="payment"
    >
    <input
      type="hidden"
      name="page"
      :value="page"
    >
    <div class="payment-form__header">
      <p class="payment-form__title">Оплатите будущую кухню прямо с сайта</p>
      <p class="payment-form__desc">После заполнения формы ниже вы автоматически перейдёте на сайт банка с протоколом безопасности для оплаты.</p>
    </div>
    <div class="payment-form__main">
      <div class="payment-form__fields">
        <AppControl
          label="Тип оплаты"
          type="radio"
          name="payment"
          :items="['Предоплата', 'Доплата']"
          class="payment-form__field"
        />
        <AppSelect
          :sideLabel="!$_media.sm && 'Город'"
          :options="cityOptions"
          color="white"
          class="payment-form__field payment-form__field_select"
          @change="handleCityChange"
        />
        <template v-if="activePayment">
          <AppTextField
            label="Имя и фамилия"
            placeholder="Как к вам обращаться?"
            type="text"
            name="name"
            required
            color="white"
            bordered
            class="payment-form__field"
          />
          <AppTextField
            label="Номер договора"
            :placeholder="['буквы', 'цифры']"
            type="text"
            :name="['contract-l', 'contract-n']"
            required
            color="white"
            bordered
            double
            class="payment-form__field payment-form__field_small"
          />
          <AppTextField
            label="Контактный телефон"
            placeholder="+7(999)999-99-99"
            type="tel"
            name="phone"
            required
            color="white"
            bordered
            class="payment-form__field payment-form__field_small"
          />
          <AppTextField
            label="Mail"
            placeholder="sample@sample.ru"
            type="email"
            name="email"
            required
            :note="$_media.sm ? 'На него будет выслана квитанция после прохождения оплаты' : ''"
            :sideNote="!$_media.sm ? 'На него будет выслана квитанция после прохождения оплаты' : ''"
            color="white"
            bordered
            class="payment-form__field"
          />
          <AppTextField
            label="Адрес (как в договоре)"
            type="text"
            name="address"
            required
            color="white"
            bordered
            class="payment-form__field"
          />
          <AppTextField
            label="Сумма, ₽"
            type="text"
            name="sum"
            required
            sideNote="Важно: минимальная сумма предоплаты 1000 ₽"
            color="white"
            bordered
            class="payment-form__field"
          />
          <AppTextField
            textarea
            label="Комментарий (необязательно)"
            name="comment"
            size="small"
            color="white"
            bordered
            class="payment-form__field"
          />
          <div class="payment-form__fields-footer">
            <AppButton
              title="Оплатить"
              type="submit"
              class="payment-form__btn"
            />
            <p
              v-if="error && $_media.sm"
              class="payment-form__error"
            >
              Ошибка отправки. Попробуйте еще раз
            </p>
            <p class="payment-form__policy">Нажимая кнопку «Оплатить», вы соглашаетесь с 
              <a :href="policy" target="_blank">Политикой конфиденциальности</a>
            </p>
          </div>
          <p
            v-if="error && !$_media.sm"
            class="payment-form__error"
          >
            Ошибка отправки. Попробуйте еще раз
          </p>
        </template>
      </div>
    </div>
    <div
      v-if="!activePayment"
      class="payment-form__info"
    >
      <AppIcon
        name="info-circle"
        class="payment-form__info-icon"
      />
      <p class="payment-form__info-text">Для оплаты из этого региона, пожалуйста, ознакомьтесь с инструкцией в вашем договоре.</p>
      <p class="payment-form__info-text">В случае возникновения вопросов, свяжитесь с нами по телефону {{phone}} (ежедневно с 9 до 22)</p>
    </div>
    <div class="payment-form__systems">
      <p class="payment-form__systems-title">Мы принимаем к оплате</p>
      <div class="payment-form__systems-list">
        <AppIcon
          name="mastercard-color"
          class="payment-form__system payment-form__system_mastercard"
          viewBox="0 0 256 199"
        />
        <AppIcon
          name="maestro-color"
          class="payment-form__system payment-form__system_maestro"
          viewBox="0 0 256 199"
        />
        <img
          src="@/assets/img/mir-color.svg"
          alt=""
          class="payment-form__system payment-form__system_mir"
        >
        <AppIcon
          name="visa-color"
          class="payment-form__system payment-form__system_visa"
          viewBox="0 0 282 92.637756"
        />
      </div>
    </div>
  </form>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppControl from './base/AppControl.vue'
import AppSelect from './base/AppSelect.vue'
import AppTextField from './base/AppTextField.vue'
import useForms from '../composition/forms'

export default {
  name: 'PaymentForm',
  components: {
    AppControl,
    AppSelect,
    AppButton,
    AppIcon,
    AppTextField
  },
  setup() {
    const { sending, error, page, handleSubmit } = useForms()
    return {
      sending,
      error,
      page,
      handleSubmit
    }
  },
  data() {
    return {
      selectedCity: null
    }
  },
  computed: {
    cities() {
      return this.$store.state.cities
    },
    cityOptions() {
      return Object.values(this.cities).length ? Object.values(this.cities).map((i) => ({ title: i.name, value: i.code })) : [{title: ''}]
    },
    activeCity() {
      return this.selectedCity || (Object.values(this.cities).length && Object.values(this.cities)[0].code)
    },
    activePayment() {
      return !!this.$store.state.cities[this.activeCity]?.shop_id
    },
    phone() {
      return this.$store.state.cities[this.activeCity]?.phone
    },
    policy(){
      return this.$store.state.cities[this.$store.state?.activeCity]?.policy
    },
  },
  methods: {
    handleCityChange(e) {
      this.selectedCity = e
    }
  }
}
</script>

<style lang="scss">
.payment-form {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 100vw;
    height: 100%;
    background-color: $color-lightgray;
    transform: translateX(-50%);
    z-index: -1;
  }

  &__header {
    position: relative;
    padding: 20px 0 35px;
    color: $color-lightgray;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      width: 100vw;
      height: 100%;
      background-color: $color-green;
      transform: translateX(-50%);
      z-index: -1;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 16px;
    line-height: calc(20/16);
  }

  &__desc {
    margin-top: 12px;
    font-size: 14px;
    line-height: calc(18/14);
  }

  &__main {
    padding: 20px 0 10px;
  }

  &__field {
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__btn {
    width: 100%;
  }

  &__error {
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
    color: #ff0000;
  }

  &__policy {
    margin-top: 10px;
    font-size: 11px;
    line-height: calc(16/11);
    color: $color-lightviolet;

    a {
      text-decoration: underline;
    }
  }

  &__info {
    position: relative;
    margin: 20px (-$container-padding) 0;
    padding: 30px $container-padding;
    background-color: rgba(#fff, .5);

    &-icon {
      position: absolute;
      left: $container-padding;
      top: 30px;
      width: 40px;
      height: 40px;
    }

    &-text {
      padding-left: 55px;
      font-weight: bold;
      font-size: 14px;
      line-height: calc(22/14);

      & + & {
        margin-top: 10px;
      }
    }
  }

  &__systems {
    margin: 0 (-$container-padding);
    border-top: 1px solid $color-lightviolet;
    padding: 20px $container-padding 35px;

    &-title {
      font-weight: 500;
      font-size: 14px;
      color: #000;
    }

    &-list {
      display: flex;
      margin-top: 10px;
    }
  }

  &__system {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }

    &_visa {
      width: 50px;
      height: 24px;
    }

    &_maestro,
    &_mastercard {
      margin-bottom: -4px;
      width: 36px;
      height: 28px;
    }

    &_mir {
      width: 60px;
    }
  }

  @include media(md) {
    border-bottom-right-radius: 50px;
    background-color: $color-lightgray;

    &::before {
      display: none;
    }

    &__header {
      padding: 38px 80px;
      border-bottom-right-radius: 50px;
      background-color: $color-green;

      &::before {
        display: none;
      }
    }

    &__title {
      font-size: 18px;
    }

    &__desc {
      max-width: 470px;
      line-height: calc(26/14);
    }

    &__main {
      padding: 36px 80px;
    }

    &__fields {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 480px;

      &-footer {
        display: flex;
        align-items: center;
      }
    }

    &__field {
      width: 100%;
      margin-bottom: 20px;

      &_small {
        width: calc(50% - 20px);
      }

      &_select {
        margin-top: 12px;
        margin-bottom: 32px;
        width: 73%;
      }
    }

    &__btn {
      width: auto;
      min-width: 196px;
    }

    &__policy {
      flex: 1;
      margin-top: 0;
      margin-left: 22px;
      margin-right: -10px;
    }

    &__info {
      margin: 0;
      padding: 40px 80px;

      &-icon {
        left: 80px;
        top: 40px;
      }
      
      &-text {
        padding-left: 70px;
      }
    }

    &__systems {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 40px 70px 50px;

      &-list {
        margin-top: 0;
        margin-left: 50px;
      }
    }
  }

  @include media(lg) {
    &__header {
      padding: 50px 80px 30px;
    }
  }
}
</style>
