<template>
  <div class="design-call">
    <div class="container">
      <div class="design-call__content">
        <AppIcon
          name="shape-20"
          class="design-call__shape design-call__shape_circle-1"
          viewBox="0 0 146.59 146.59"
        />
        <AppIcon
          name="shape-19"
          class="design-call__shape design-call__shape_zigzag-1"
          viewBox="0 0 128 120"
        />
        <AppIcon
          name="shape-16"
          class="design-call__shape design-call__shape_circle-2"
          viewBox="0 0 47 47"
        />
        <div
          v-if="!$_media.sm"
          class="design-call__img"
        >
          <img
            src="@/assets/img/form-pic.png"
            alt=""
          >
        </div>
        <AppIcon
          name="shape-15"
          class="design-call__shape design-call__shape_triangle-1"
          viewBox="0 0 69 60"
        />
        <AppIcon
          v-if="!$_media.sm"
          name="shape-18"
          class="design-call__shape design-call__shape_triangle-2"
          viewBox="0 0 58 55"
        />
        <h2 class="design-call__heading">Получите бесплатную консультацию дизайнера</h2>
        <p
          v-if="$_media.sm"
          class="design-call__desc"
        >
          Доверьтесь профессионалам: наши сотрудники проконсультируют вас по всем вопросам
        </p>
        <AppButton
          v-if="$_media.sm"
          :title="sending ? 'Отправляем...' : 'Отправить заявку'"
          color="yellow"
          modalName="designer"
          class="design-call__btn"
        />
        <form
          v-if="!$_media.sm"
          class="design-call__form"
          @submit="handleSubmit"
        >
          <input
            type="hidden"
            name="type"
            value="designer-inner"
          >
          <input
            type="hidden"
            name="page"
            :value="page"
          >
          <div class="design-call__fields">
            <AppTextField
              label="Имя"
              labelSize="big"
              placeholder="Как к вам обращаться?"
              type="text"
              name="name"
              class="design-call__field"
            />
            <AppTextField
              label="Контактный телефон"
              labelSize="big"
              placeholder="+7(999)999-99-99"
              type="tel"
              name="phone"
              required
              class="design-call__field"
            />
            <AppButton
              v-if="$_desktop"
              :title="sending ? 'Отправляем...' : 'Отправить заявку'"
              color="yellow"
              type="submit"
              class="design-call__btn"
            />
            <p
              v-if="error && $_desktop"
              class="design-call__error"
            >
              Ошибка отправки. Попробуйте еще раз
            </p>
          </div>
          <div class="design-call__footer">
            <p class="design-call__policy">Нажимая на кнопку «Отправить заявку», вы соглашаетесь с <a :href="policy" target="_blank">Политикой конфиденциальности</a></p>
            <AppButton
              v-if="$_media.md"
              :title="sending ? 'Отправляем...' : 'Отправить заявку'"
              color="yellow"
              type="submit"
              class="design-call__btn"
            />
            <p
              v-if="error && $_media.md"
              class="design-call__error"
            >
              Ошибка отправки. Попробуйте еще раз
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppTextField from './base/AppTextField.vue'
import useForms from '../composition/forms'

export default {
  name: 'DesignCall',
  components: {
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
  computed:{
    policy(){
      return this.$store.state.cities[this.$store.state?.activeCity]?.policy
    },
  }
}
</script>

<style lang="scss">
.design-call {
  padding: 38px 0;
  background-color: $color-green;

  &__content {
    position: relative;
  }

  &__shape {
    position: absolute;
    pointer-events: none;

    &_circle-1 {
      top: -26px;
      right: -78px;
      width: 130px;
    }

    &_triangle-1 {
      top: 54px;
      right: 4px;
      width: 40px;
    }

    &_zigzag-1 {
      left: -45px;
      bottom: 70px;
      width: 65px;
      transform: rotate(190deg);
      fill: #fff;
    }

    &_circle-2 {
      left: -26px;
      bottom: 105px;
      width: 20px;
    }
  }

  &__heading {
    position: relative;
    padding: 0 10px;
    font-size: 24px;
    line-height: calc(32/24);
    color: #fff;
  }

  &__desc {
    position: relative;
    margin-top: 30px;
    padding: 0 10px;
    font-size: 16px;
    line-height: calc(24/16);
    color: #fff;
  }

  &__btn {
    margin-top: 40px;
    width: 100%;
  }

  @include media(md) {
    padding: 0;
    background-color: transparent;

    &__content {
      padding: 35px 80px 30px 290px;
      border-radius: 50px 0 80px 0;
      background-color: $color-green;
      box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.19);
    }

    &__shape {
      &_circle-1 {
        left: 92px;
        top: 52px;
        right: auto;
        width: 100px;
      }

      &_triangle-1 {
        left: 8px;
        top: 25px;
        right: auto;
      }

      &_zigzag-1 {
        left: auto;
        top: 32px;
        right: 12px;
        width: 75px;
      }

      &_circle-2 {
        left: auto;
        top: 15px;
        right: 18px;
      }

      &_triangle-2 {
        left: 5px;
        bottom: 25px;
        width: 60px;
        fill: #fff;
      }
    }

    &__img {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 330px;
      overflow: hidden;
      pointer-events: none;

      img {
        margin-left: -70px;
        width: 100%;
      }
    }

    &__heading {
      padding: 0;
      font-size: 18px;
    }

    &__form {
      margin-top: 18px;
    }

    &__fields {
      display: flex;
      justify-content: space-between;
    }

    &__field {
      width: calc(50% - 25px);
    }

    &__footer {
      display: flex;
      align-items: center;
      position: relative;
      margin-top: 18px;
    }

    &__policy {
      flex: 1;
      margin-right: 20px;
      font-weight: 500;
      font-size: 10px;
      line-height: calc(15/10);
      color: $color-lightgray;

      a {
        text-decoration: underline;
      }
    }

    &__btn {
      margin-top: 0;
      width: auto;
      min-width: 260px;
    }

    &__error {
      position: absolute;
      top: 100%;
      right: 0;
      margin-top: 5px;
      font-size: 14px;
      color: #ff0000;
    }
  }

  @include media(lg) {
    &__content {
      padding: 35px 80px 25px 340px;
    }

    &__shape {
      &_circle-1 {
        left: 175px;
      }

      &_triangle-1 {
        left: 28px;
        top: 40px;
      }

      &_triangle-2 {
        left: 110px;
        bottom: 5px;
      }
    }

    &__img {
      width: 405px;

      img {
        margin-left: -85px;
      }
    }

    &__heading {
      font-size: 22px;
    }

    &__fields {
      position: relative;
      align-items: flex-end;
    }

    &__field {
      flex: 1;
      width: auto;
      margin-right: 20px;
    }

    &__btn {
      margin-left: 20px;
    }

    &__error {
      margin-top: 10px;
    }

    &__footer {
      margin-top: 40px;
    }

    &__policy {
      font-size: 11px;
    }
  }

  @include media(xl) {
    &__content {
      margin: 0 auto;
      max-width: 1420px;
      padding: 35px 110px 18px 420px;
    }

    &__shape {
      &_circle-1 {
        left: 184px;
        top: 55px;
      }

      &_zigzag-1 {
        top: 30px;
        right: 26px;
      }

      &_circle-2 {
        top: 10px;
        right: 20px;
      }

      &_triangle-1 {
        left: 34px;
        top: 8px;
      }

      &__triangle-2 {
        left: 190px;
      }
    }

    &__form {
      margin-top: 32px;
    }

    &__field {
      margin-right: 22px;
    }

    &__btn {
      margin-left: 6px;
      min-width: 280px;
    }

    &__footer {
      margin-top: 36px;
    }
  }
}
</style>
