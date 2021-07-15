<template>
  <transition name="fade">
    <div
      v-if="modal"
      class="modal"
    >
      <div class="modal__area">
        <div
          class="modal__overlay"
          @click="closeModal"
        ></div>

        <form
          v-if="modal === 'designer'"
          class="modal__form"
          @submit="handleSubmit"
        >
          <input type="hidden" name="type" value="designer-m">
          <input type="hidden" name="page" :value="page">
          <input v-if="product" type="hidden" name="item" :value="product.name">
          <input v-if="product" type="hidden" name="item_id" :value="product.id">
          <input v-if="product" type="hidden" name="product_type" :value="product.type">
          <AppIcon
            name="group"
            class="modal__icon"
          />
          <p class="modal__title">Пригласить дизайнера</p>
          <p class="modal__desc">Замеры производятся БЕСПЛАТНО <br>ежедневно с 9.00 до 21.00.</p>
          <div class="modal__fields">
            <AppTextField
              type="text"
              name="name"
              required
              label="Ваше имя"
              placeholder="Как к вам обращаться?"
              class="modal__field"
            />
            <AppTextField
              type="tel"
              name="phone"
              required
              label="Контактный телефон"
              placeholder="+7(999)999-99-99"
              class="modal__field"
            />
            <AppTextField
              type="text"
              name="address"
              required
              label="Адрес"
              placeholder="Адрес"
              class="modal__field"
            />
            <AppTextField
              type="text"
              name="time"
              required
              label="Предпочитаемое время"
              placeholder="Время"
              class="modal__field"
            />
          </div>
          <AppButton
            title="Отправить"
            type="submit"
            class="modal__btn"
          />
          <p class="modal__policy">Нажимая кнопку "Отправить», вы соглашаетесь с <a href="">Полиикой конфиденциальности</a></p>
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
        </form>

        <form
          v-if="modal === 'calc'"
          class="modal__form"
          @submit="handleSubmit"
        >
          <input type="hidden" name="type" value="calc">
          <input type="hidden" name="page" :value="page">
          <input v-if="product" type="hidden" name="item" :value="product.name">
          <input v-if="product" type="hidden" name="item_id" :value="product.id">
          <input v-if="product" type="hidden" name="product_type" :value="product.type">
          <AppIcon
            name="live-chat"
            class="modal__icon"
          />
          <p class="modal__title">Рассчитать мой проект</p>
          <p class="modal__desc">Наш менеджер свяжется с вами в ближайшее время, уточнит детали и проконсультирует по всем вопросам</p>
          <div class="modal__fields">
            <AppTextField
              type="text"
              name="name"
              required
              label="Ваше имя"
              placeholder="Как к вам обращаться?"
              class="modal__field"
            />
            <AppTextField
              type="tel"
              name="phone"
              required
              label="Контактный телефон"
              placeholder="+7(999)999-99-99"
              class="modal__field"
            />
          </div>
          <AppButton
            title="Отправить"
            type="submit"
            class="modal__btn"
          />
          <p class="modal__policy">Нажимая кнопку "Отправить», вы соглашаетесь с <a href="">Полиикой конфиденциальности</a></p>
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
        </form>

        <div
          v-if="modal === 'video'"
          class="modal__media"
        >
          <video
            ref="video"
            :src="`http://wowkitchen.beget.tech${modalData.video}`"
            autoplay
            controls
            controlsList="nodownload"
          ></video>
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

        <div
          v-if="modal === 'image'"
          class="modal__media"
        >
          <img
            :src="`http://wowkitchen.beget.tech${modalData.image}`"
            alt
          >
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

        <div
          v-if="modal === 'success'"
          class="modal__success"
        >
          <AppIcon
            name="like"
            class="modal__icon"
          />
          <p class="modal__title modal__title_small">Ваша заявка принята</p>
          <p class="modal__desc">Спасибо за обращение в нашу компанию.<br>наши менеджеры свяжутся с вами в<br>ближайшее время.</p>
          <AppButton
            title="Ок, понятно"
            class="modal__btn"
            @click="closeModal"
          />
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
import useForms from '../composition/forms'

export default {
  name: 'Modal',
  components: {
    AppIcon,
    AppTextField,
    AppButton
  },
  setup() {
    const { sending, page, product, handleSubmit } = useForms()
    return {
      sending,
      page,
      product,
      handleSubmit
    }
  },
  computed: {
    modal() {
      return this.$store.state.modal
    },
    modalData() {
      return this.$store.state.modalData
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('setModal', null)
      this.$store.commit('setModalData', null)
      this.$store.commit('setProductData', null)
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
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 100%;
  }

  &__overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.3);
  }

  &__form {
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

    &_small {
      font-size: 18px;
    }
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

  &__media {
    position: relative;
    width: calc(100vw - 40px);
    overflow: hidden;

    video, img {
      width: 100.1%;
      object-fit: cover;
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

  &__success {
    position: relative;
    width: 100%;
    max-width: 500px;
    padding: 30px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 19px 26px 0px rgba(0, 0, 0, 0.1);
  }

  @include media(md) {
    &__area {
      justify-content: center;
      align-items: center;
      padding: 50px;
    }

    &__form {
      width: 500px;
      min-height: auto;
      border-radius: 8px;
      box-shadow: 0px 19px 26px 0px rgba(0, 0, 0, 0.1);
    }

    &__media {
      width: 1280px;
    }

    &__success {
      border-radius: 8px;
      padding: 67px 100px 78px;
    }
  }
}
</style>
