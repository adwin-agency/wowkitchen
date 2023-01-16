<template>
  <form
    class="pay-form"
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
    <input
      type="hidden"
      name="shop_id"
      :value="shopId"
    >
    <div class="pay-form__header">
      <!-- <AppControl
        :label="$_media.sm ? 'Тип оплаты' : ''"
        :sideLabel="!$_media.sm ? 'Тип оплаты' : ''"
        size="lg"
        color="gray"
        type="radio"
        name="payment"
        :items="[{label: 'Полная оплата', value: 'Оплата'}, 'Доплата']"
        class="pay-form__control"
      /> -->
      <AppSelect
        v-if="cityOptions"
        initial="spb"
        :sideLabel="!$_media.sm ? 'Город' : ''"
        name="city"
        :options="cityOptions"
        class="pay-form__select"
        @change="handleCityChange"
      />
    </div>
    <div
      v-if="shopId"
      class="pay-form__fields"
    >
      <AppTextField
        label="Имя и фамилия"
        placeholder="Как к вам обращаться?"
        type="text"
        name="name"
        required
        color="white"
        bordered
        class="pay-form__field"
      />
      <!-- <AppTextField
        label="Номер договора"
        :placeholder="['буквы', 'цифры']"
        type="text"
        :name="['contract-l', 'contract-n']"
        required
        color="white"
        bordered
        double
        class="pay-form__field pay-form__field_contract"
      /> -->
      <AppTextField
        label="Номер договора"
        type="text"
        name="contract-n"
        required
        color="white"
        bordered
        class="pay-form__field pay-form__field_contract"
      />
      <AppTextField
        label="Контактный телефон"
        placeholder="+7(999)999-99-99"
        type="tel"
        name="phone"
        required
        color="white"
        bordered
        class="pay-form__field pay-form__field_phone"
      />
      <AppTextField
        label="Дополнительный номер"
        type="text"
        name="additional_number"
        required
        color="white"
        bordered
        class="pay-form__field"
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
        class="pay-form__field"
      />
      <AppTextField
        textarea
        label="Адрес (как в договоре)"
        name="address"
        required
        color="white"
        bordered
        class="pay-form__field"
      />
      <AppTextField
        label="Сумма, ₽"
        type="text"
        name="sum"
        required
        sideNote="Важно: минимальная сумма предоплаты 1000 ₽"
        color="white"
        bordered
        class="pay-form__field"
      />
      <AppTextField
        textarea
        label="Комментарий (необязательно)"
        name="comment"
        color="white"
        bordered
        class="pay-form__field"
      />
      <AppSelect
        :label="$_media.sm ? 'Способ оплаты' : ''"
        :sideLabel="!$_media.sm ? 'Способ оплаты' : ''"
        name="payment_method"
        :options="[{title: 'Система Быстрых Платежей', value: 'sbp'}, {title: 'Прочие способы оплаты', value: 'cart'}]"
        class="pay-form__field pay-form__field_select"
      />
      <div class="pay-form__fields-footer">
        <AppButton
          :title="sending ? 'Отправляем...' : 'Оплатить'"
          type="submit"
          class="pay-form__btn"
        />
        <p
          v-if="error && $_media.sm"
          class="pay-form__error"
        >
          Ошибка отправки. Попробуйте еще раз
        </p>
        <p class="pay-form__policy">Нажимая кнопку «Оплатить», вы соглашаетесь с
          <a
            href="/policy.pdf"
            target="_blank"
          >Политикой конфиденциальности</a>
        </p>
      </div>
      <p
        v-if="error && !$_media.sm"
        class="pay-form__error"
      >
        Ошибка отправки. Попробуйте еще раз
      </p>
    </div>
    <div
      v-else-if="phone"
      class="pay-form__info"
    >
      <AppIcon
        name="info-circle"
        class="pay-form__info-icon"
      />
      <p class="pay-form__info-text">Для оплаты из этого региона, пожалуйста, ознакомьтесь с инструкцией в вашем договоре.</p>
      <p class="pay-form__info-text">В случае возникновения вопросов, свяжитесь с нами по телефону {{phone}} (ежедневно с 9 до 22)</p>
    </div>
  </form>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
// import AppControl from './base/AppControl.vue'
import AppSelect from './base/AppSelect.vue'
import AppTextField from './base/AppTextField.vue'
import useForms from '../composition/forms'

export default {
  name: 'PaymentForm',
  components: {
    // AppControl,
    AppSelect,
    AppButton,
    AppIcon,
    AppTextField
  },
  emits: ['update'],
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
      selectedCityCode: 'spb'
    }
  },
  computed: {
    cities() {
      return this.$store.state.cities
    },
    cityOptions() {
      return (
        Object.values(this.cities).length &&
        Object.values(this.cities).map(i => ({ title: i.name, value: i.code }))
      )
    },
    shopId() {
      return this.cities[this.selectedCityCode]?.shop_id
    },
    phone() {
      return this.cities[this.selectedCityCode]?.phone
    }
  },
  methods: {
    handleCityChange(e) {
      this.selectedCityCode = e
    }
  },
  updated() {
    this.$emit('update')
  }
}
</script>

<style lang="scss">
.pay-form {
  &__select {
    margin-top: 38px;
  }

  &__fields {
    margin-top: 36px;
    border-top: 1px solid #dcdcdc;
    padding-top: 46px;
  }

  &__field {
    margin-bottom: 20px;

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
    text-align: center;
    font-size: 12px;
    line-height: calc(16/13);
    color: $color-lightviolet;

    a {
      text-decoration: underline;
    }
  }

  &__info {
    position: relative;
    margin-top: 20px;
    max-width: 624px;
    padding: 30px $container-padding;
    border-bottom-right-radius: 80px;
    background-color: $color-lightgray;

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

  @include media(md) {
    &__select {
      width: 325px;
    }

    &__fields {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &-footer {
        display: flex;
        align-items: center;
      }
    }

    &__field {
      width: 100%;

      &_contract {
        width: calc(50% - 30px);
      }

      &_phone {
        width: 50%;
      }

      &_select {
        max-width: 400px;
      }
    }

    &__btn {
      width: auto;
      min-width: 196px;
    }

    &__policy {
      flex: 1;
      order: -1;
      margin-top: 0;
      margin-right: 40px;
      text-align: left;
      font-size: 13px;
    }

    &__error {
      margin-left: auto;
    }

    &__info {
      margin-top: 56px;
      padding: 50px 60px;

      &-icon {
        left: 60px;
        top: 50px;
      }

      &-text {
        padding-left: 60px;
      }
    }
  }

  @include media(lg) {
    &__fields {
      padding-right: 50px;
    }

    &__field {
      &_contract {
        width: calc(50% - 70px);
      }
    }
  }
}
</style>
