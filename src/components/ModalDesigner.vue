<template>
  <form class="modal-designer">
    <AppIcon
      name="group"
      class="modal-designer__icon"
    />
    <p class="modal-designer__title">Пригласить дизайнера</p>
    <p class="modal-designer__desc">Замеры производятся БЕСПЛАТНО <br>ежедневно с 9.00 до 21.00.</p>
    <div class="modal-designer__fields">
      <AppTextField
        type="text"
        label="Ваше имя"
        placeholder="Как к вам обращаться?"
        class="modal-designer__field"
      />
      <AppTextField
        type="tel"
        label="Контактный телефон"
        placeholder="Как к вам обращаться?"
        class="modal-designer__field"
      />
      <AppTextField
        type="text"
        label="Адрес"
        placeholder="Как к вам обращаться?"
        class="modal-designer__field"
      />
      <AppTextField
        type="text"
        label="Предпочитаемое время"
        placeholder="Как к вам обращаться?"
        class="modal-designer__field"
      />
    </div>
    <AppButton
      title="Отправить"
      class="modal-designer__btn"
    />
    <p class="modal-designer__policy">Нажимая кнопку "Отправить», вы соглашаетесь с <a href="">Полиикой конфиденциальности</a></p>
  </form>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppTextField from './base/AppTextField.vue'
export default {
  name: 'ModalDesigner',
  components: {
    AppIcon,
    AppTextField,
    AppButton
  }
}
</script>

<style lang="scss">
.modal-designer {
  padding: 30px 40px;
  text-align: center;

  &__icon {
    margin: 0 auto;
    width: 93px;
    height: 93px;
    fill: $color-green;
  }

  &__title {
    margin: 25px -5px 0;
    font-weight: bold;
    font-size: 24px;
  }

  &__desc {
    margin-top: 10px;
    font-size: 12px;
    line-height: (16/12);
  }

  &__fields {
    margin-top: 36px;
    text-align: left;
  }

  &__field {
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__btn {
    margin-top: 26px;
    width: 100%;
  }

  &__policy {
    margin-top: 15px;
    font-size: 10px;
    line-height: (15/10);
    color: #ababab;
    
    a {
      text-decoration: underline;
    }
  }
}
</style>
