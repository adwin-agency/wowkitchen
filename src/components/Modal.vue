<template>
  <transition name="fade">
    <div
      v-if="modal"
      class="modal"
    >
      <div
        class="modal__area"
        @click="closeModal"
      >
        <div
          class="modal__window"
          @click.stop
        >

          <form
            v-if="modal === 'designer'"
            class="modal__form"
          >
            <AppIcon
              name="group"
              class="modal__icon"
            />
            <p class="modal__title">Пригласить дизайнера</p>
            <p class="modal__desc">Замеры производятся БЕСПЛАТНО <br>ежедневно с 9.00 до 21.00.</p>
            <div class="modal__fields">
              <AppTextField
                type="text"
                label="Ваше имя"
                placeholder="Как к вам обращаться?"
                class="modal__field"
              />
              <AppTextField
                type="tel"
                label="Контактный телефон"
                placeholder="Как к вам обращаться?"
                class="modal__field"
              />
              <AppTextField
                type="text"
                label="Адрес"
                placeholder="Как к вам обращаться?"
                class="modal__field"
              />
              <AppTextField
                type="text"
                label="Предпочитаемое время"
                placeholder="Как к вам обращаться?"
                class="modal__field"
              />
            </div>
            <AppButton
              title="Отправить"
              class="modal__btn"
            />
            <p class="modal__policy">Нажимая кнопку "Отправить», вы соглашаетесь с <a href="">Полиикой конфиденциальности</a></p>
          </form>

          <form
            v-if="modal === 'calc'"
            class="modal__form"
          >
            <AppIcon
              name="live-chat"
              class="modal__icon"
            />
            <p class="modal__title">Рассчитать мой проект</p>
            <p class="modal__desc">Наш менеджер свяжется с вами в ближайшее время, уточнит детали и проконсультирует по всем вопросам</p>
            <div class="modal__fields">
              <AppTextField
                type="text"
                label="Ваше имя"
                placeholder="Как к вам обращаться?"
                class="modal__field"
              />
              <AppTextField
                type="tel"
                label="Контактный телефон"
                placeholder="Как к вам обращаться?"
                class="modal__field"
              />
            </div>
            <AppButton
              title="Отправить"
              class="modal__btn"
            />
            <p class="modal__policy">Нажимая кнопку "Отправить», вы соглашаетесь с <a href="">Полиикой конфиденциальности</a></p>
          </form>

          <button
            type="button"
            class="modal__close"
            @click="closeModal"
          >
            <AppIcon
              name="close"
              class="modal__close-icon"
            />
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppTextField from './base/AppTextField.vue'

export default {
  name: 'Modal',
  components: {
    AppIcon,
    AppTextField,
    AppButton
  },
  computed: {
    modal() {
      return this.$store.state.modal
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('setModal', null)
    }
  }
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 0.3);
  overflow-y: auto;
  z-index: 1000;

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.3s ease;
  }

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
  }

  &__area {
    display: flex;
    min-height: 100%;
  }

  &__window {
    position: relative;
    width: 100%;
    min-height: 100%;
    padding: 30px 40px;
    text-align: center;
    background-color: #fff;
  }

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

  &__close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 16px;
    right: 20px;
    width: 36px;
    height: 36px;

    &-icon {
      width: 17px;
      height: 17px;
      fill: $color-lightviolet;
    }
  }

  @include media(md) {
    &__area {
      justify-content: center;
      align-items: center;
      padding: 50px;
    }

    &__window {
      width: 500px;
      min-height: auto;
      border-radius: 8px;
      padding: 30px 100px;
      box-shadow: 0px 19px 26px 0px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
