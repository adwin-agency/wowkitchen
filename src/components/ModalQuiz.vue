<template>
  <div class="modal-quiz">
    <div class="modal-quiz__box">
      <AppIcon
        class="modal-quiz__shape modal-quiz__shape_1"
        name="shape-30"
      />
      <AppIcon
        class="modal-quiz__shape modal-quiz__shape_2"
        name="shape-32"
      />
      <AppIcon
        class="modal-quiz__shape modal-quiz__shape_3"
        name="shape-33"
      />
      <AppIcon
        v-if="!$_mobile"
        class="modal-quiz__shape modal-quiz__shape_4"
        name="shape-31"
      />
      <AppIcon
        v-if="!$_mobile"
        class="modal-quiz__shape modal-quiz__shape_5"
        name="shape-34"
      />
    </div>
    <div class="modal-quiz__content">
      <p class="modal-quiz__title"><span>Бесплатный расчёт</span> стоимости кухни</p>
      <p class="modal-quiz__desc">Хотите сделать расчет стоимости кухни прямо сейчас?</p>
      <div class="modal-quiz__actions">
        <AppButton
          class="modal-quiz__btn"
          title="Да, хочу!"
        />
        <button class="modal-quiz__cancel">Нет, спасибо!</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'ModalQuiz',
  components: {
    AppIcon,
    AppButton
  }
}
</script>

<style lang="scss">
.modal-quiz {
  &__box {
    display: flex;
    position: relative;
    background-image: url('~@/assets/img/modal-quiz.png');
    background-position: top right;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    &::before {
      content: '';
      padding-top: 64%;
    }
  }

  &__shape {
    position: absolute;

    &_1 {
      width: 92px;
      height: 92px;
      left: 16px;
      top: -17px;
    }

    &_2 {
      width: 70px;
      height: 63px;
      left: -30px;
      top: 40px;
    }

    &_3 {
      width: 76px;
      height: 73px;
      left: 23px;
      bottom: 15px;
    }
  }

  &__content {
    padding: 24px 10px 48px;
  }

  &__title {
    font-weight: 700;
    font-size: 26px;
    line-height: 100%;

    span {
      color: $color-green;
    }
  }

  &__desc {
    margin-top: 14px;
    font-size: 14px;
    line-height: 120%;
  }

  &__actions {
    margin-top: 28px;
  }

  &__btn {
    width: 100%;
  }

  &__cancel {
    margin-top: 20px;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: $color-gray4;
  }
}
</style>
