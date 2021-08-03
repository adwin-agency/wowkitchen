<template>
  <form
    class="design-form"
    @submit="handleSubmit"
  >
    <input
      type="hidden"
      name="type"
      value="designer"
    >
    <input
      type="hidden"
      name="page"
      :value="page"
    >
    <p class="design-form__title">Оставить заявку</p>
    <div class="design-form__fields">
      <AppTextField
        class="design-form__field"
        label="Имя"
        placeholder="Как к вам обращаться?"
        type="text"
        name="name"
        required
        color="white"
      />
      <AppTextField
        class="design-form__field"
        label="Контактный телефон"
        placeholder="+7(999)999-99-99"
        type="tel"
        name="phone"
        required
        color="white"
      />
    </div>
    <AppButton
      class="design-form__btn"
      type="submit"
      title="Пригласить дизайнера"
      color="pink"
    />
    <p
      v-if="error"
      class="design-form__error"
    >
      Ошибка отправки. Попробуйте еще раз
    </p>
    <p class="design-form__note">Нажимая на кнопку "Пригласить дизайнера", вы{{'\xa0'}}соглашаетесь с <a target="_blank">Политикой конфиденциальности</a></p>
  </form>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppTextField from './base/AppTextField.vue'
import useForms from '../composition/forms'

export default {
  name: 'DesignForm',
  components: {
    AppTextField,
    AppButton
  },
  setup(props) {
    const { sending, error, page, handleSubmit } = useForms(props)
    return {
      sending,
      error,
      page,
      handleSubmit
    }
  }
}
</script>

<style lang="scss">
.design-form {
  padding: 40px 40px 30px;
  border-radius: 50px 0 50px 0;
  background-color: $color-lightgray;

  &__title {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }

  &__fields {
    margin-top: 25px;
  }

  &__field {
    margin-bottom: 26px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__btn {
    margin-top: 26px;
    width: 100%;
  }

  &__error {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    color: #ff0000;
  }

  &__note {
    margin-top: 12px;
    text-align: center;
    font-size: 10px;
    line-height: (13/10);
    color: #aca8c3;

    a {
      text-decoration: underline;
    }
  }

  @include media(lg) {
    padding: 40px 50px 35px;
  }

  @include media(xl) {
    padding: 55px 50px 50px;
  }
}
</style>
