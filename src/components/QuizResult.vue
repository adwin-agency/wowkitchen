<template>
  <div class="quiz-result">
    <p class="quiz-result__title">Примерная стоимость вашей кухни</p>
    <p class="quiz-result__price">100 500 ₽</p>
    <p class="quiz-result__desc">Мы дарим вам скидку <b>5%</b> на финальню стоимость: оставьте e-mail и мы пришлём на него код для получения скидки</p>
    <div class="quiz-result__footer">
      <AppTextField
        placeholder="sample@sample/com"
        color="white"
        class="quiz-result__field"
      />
      <AppButton
        type="submit"
        title="Далее"
        size="small"
        class="quiz-result__btn"
      />
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppTextField from './base/AppTextField.vue'

export default {
  name: 'QuizResult',
  components: {
    AppTextField,
    AppButton
  }
}
</script>

<style lang="scss">
.quiz-result {
  padding: 35px 0;

  &__title {
    font-weight: bold;
    font-size: 18px;
    line-height: (22/18);
  }

  &__price {
    font-weight: bold;
    font-size: 28px;
    color: $color-green;
  }

  &__desc {
    margin-top: 12px;
    font-size: 14px;
    line-height: (22/14);
  }

  &__field {
    margin-top: 10px;
  }

  &__btn {
    margin-top: 10px;
    width: 100%;
  }

  @include media(md) {
    padding: 50px 90px 50px 60px;
    border-bottom-right-radius: 70px;
    background-color: $color-lightgray;

    &__desc {
      margin-top: 5px;
      max-width: 490px;
    }

    &__footer {
      display: flex;
      margin-top: 25px;
    }

    &__field {
      flex: 1;
      margin-top: 0;
      margin-right: 30px;
    }

    &__btn {
      margin-top: 0;
      width: auto;
      min-width: 220px;
    }
  }

  @include media(lg) {
    padding: 48px 80px 56px;

    &__price {
      margin-top: 4px;
    }

    &__desc {
      margin-top: 20px;
      max-width: 560px;
      font-size: 16px;
      line-height: (32/16);
    }

    &__footer {
      margin-top: 20px;
    }

    &__btn {
      margin-right: 20px;
    }
  }
}
</style>
