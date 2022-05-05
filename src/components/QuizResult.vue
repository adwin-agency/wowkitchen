<template>
  <div class="quiz-result">
    <div class="quiz-result__content">
      <template v-if="type === 'wardrobe'">
        <p class="quiz-result__title">Примерная стоимость с учётом скидки&nbsp;50%</p>
        <p class="quiz-result__price">{{resultprice}}</p>
      </template>
      <p
        v-if="type === 'kitchen'"
        class="quiz-result__desc"
      >
        Закрепите за собой <span class="quiz-result__desc_pink">скидку 50%</span> и получите <span class="quiz-result__desc_pink">посудомоечную машину в подарок</span>! <br><br>Для этого <span class="quiz-result__desc_green">оставьте свои контактные данные</span> в&nbsp;форме рядом.
      </p>
      <p
        v-else
        class="quiz-result__desc"
      >
        оставьте свои контактные данные в форме рядом <span class="quiz-result__desc_green">для детального расчета и закрепления скидки</span>
      </p>
    </div>
    <div class="quiz-result__form">
      <div
        v-if="!$_media.sm"
        class="quiz-result__form-header"
      >
        <p class="quiz-result__form-feature">
          <AppIcon
            class="quiz-result__form-icon"
            name="check"
          />
          <span>Закрепить скидку 50%</span>
        </p>
        <p
          v-if="type === 'wardrobe'"
          class="quiz-result__form-feature"
        >
          <AppIcon
            class="quiz-result__form-icon"
            name="check"
          />
          <span>Получить подробный расчёт</span>
        </p>
        <p
          v-if="gift"
          class="quiz-result__form-feature"
        >
          <AppIcon
            class="quiz-result__form-icon"
            name="check"
          />
          <span>Получить {{ gift }} в подарок</span>
        </p>
      </div>
      <div class="quiz-result__form-main">
        <AppTextField
          label="Имя"
          type="text"
          name="name"
          required
          class="quiz-result__field"
        />
        <AppTextField
          label="Контактный Телефон"
          type="tel"
          name="phone"
          required
          class="quiz-result__field"
        />
        <AppButton
          type="submit"
          :title="sending ? 'Отправляем...' : 'Отправить'"
          size="small"
          class="quiz-result__btn"
        />
        <p
          v-if="error"
          class="quiz-result__error"
        >
          Ошибка отправки. Попробуйте еще раз
        </p>
        <p class="quiz-result__note">Нажимая кнопку "Отправить», вы соглашаетесь с 
          <a
            href="/policy.pdf"
            target="_blank"
          >
            Политикой конфиденциальности
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppTextField from './base/AppTextField.vue'

export default {
  name: 'QuizResult',
  components: {
    AppTextField,
    AppButton,
    AppIcon
  },
  props: {
    resultprice: String,
    sending: Boolean,
    error: Boolean,
    gift: String,
    type: String
  }
}
</script>

<style lang="scss">
.quiz-result {
  &__content {
    padding: 20px $container-padding;
    background-color: #f3f4f9;
  }

  &__title {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    text-transform: uppercase;
  }

  &__price {
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 26px;
    line-height: 1.23;
    color: #04b891;
  }

  &__desc {
    font-weight: bold;
    font-size: 15px;
    line-height: 1.44;

    &_pink {
      color: #e40175;
    }

    &_green {
      color: #04b891;
    }
  }

  &__form {
    &-header {
      padding: 20px $container-padding;
      background-color: #04b891;
    }

    &-feature {
      display: flex;
      margin-bottom: 12px;
      font-weight: 600;
      font-size: 13px;
      line-height: 1.5;
      color: #ffffff;

      &:last-child {
        margin-bottom: 0;
      }

      span {
        padding-top: 2px;
      }
    }

    &-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      margin-right: 14px;
    }

    &-main {
      padding: 15px $container-padding 20px;
    }
  }

  &__field {
    width: 100%;
    margin-bottom: 16px;
  }

  &__btn {
    margin-top: 2px;
    width: 100%;
  }

  &__error {
    margin-top: 15px;
    text-align: center;
    font-size: 13px;
    color: #ff0000;
  }

  &__note {
    margin-top: 12px;
    text-align: center;
    font-size: 10px;
    line-height: 1.2;
    color: #aca8c3;

    a {
      text-decoration: underline;
    }
  }

  @include media(md) {
    display: flex;
    align-items: flex-start;

    &__content {
      width: 100%;
      flex-shrink: 0;
      padding: 30px;
      padding-right: 320px;
    }

    &__form {
      width: 290px;
      flex-shrink: 0;
      margin-top: -80px;
      margin-left: -290px;
      border-bottom-right-radius: 50px;
      background-color: #fff;
      box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.1);

      &-header {
        padding: 20px;
      }

      &-main {
        padding: 15px 20px 20px;
      }
    }

    &__note {
      text-align: left;
    }
  }

  @include media(lg) {
    &__content {
      padding: 36px 50px;
      padding-right: 410px;
    }

    &__price {
      margin-bottom: 48px;
    }

    &__desc {
      font-size: 18px;
    }

    &__form {
      width: 370px;
      margin-left: -370px;
      border-bottom-right-radius: 70px;

      &-header {
        padding: 22px 40px;
      }

      &-feature {
        font-size: 14px;
      }

      &-main {
        padding: 18px 45px 30px;
      }
    }
  }

  @include media(xl) {
    &__content {
      padding: 56px 80px;
      padding-right: 510px;
    }
    &__form {
      margin-left: -450px;
    }
  }
}
</style>
