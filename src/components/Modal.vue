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
          :data-product="productData?.product"
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
          <input
            v-if="productData"
            type="hidden"
            name="item"
            :value="productData.name"
          >
          <input
            v-if="productData"
            type="hidden"
            name="item_id"
            :value="productData.id"
          >
          <AppIcon
            name="group"
            class="modal__icon"
          />
          <p class="modal__title">Консультация дизайнера</p>
          <p class="modal__desc">Замеры производятся БЕСПЛАТНО <br>ежедневно с 9.00 до 21.00.</p>
          <div class="modal__fields">
            <AppTextField
              type="text"
              name="name"
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
              label="Адрес"
              placeholder="Адрес"
              class="modal__field"
            />
            <!-- <AppTextField
              type="text"
              name="time"
              required
              label="Предпочитаемое время"
              placeholder="Время"
              class="modal__field"
            /> -->
          </div>
          <AppButton
            :title="sending ? 'Отправляем...' : 'Отправить'"
            type="submit"
            class="modal__btn"
          />
          <p
            v-if="error"
            class="modal__error"
          >
            Ошибка отправки. Попробуйте еще раз
          </p>
          <p class="modal__policy">Нажимая кнопку "Отправить», вы соглашаетесь с <a
              href="/policy.pdf"
              target="_blank"
            >Политикой конфиденциальности</a></p>
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
          v-if="modal === 'calc' || modal === 'favorite'"
          class="modal__form"
          :data-product="productData?.product"
          @submit="handleSubmit"
        >
          <input
            type="hidden"
            name="type"
            :value="modal"
          >
          <input
            type="hidden"
            name="page"
            :value="page"
          >
          <input
            v-if="productData"
            type="hidden"
            name="item"
            :value="productData.name"
          >
          <input
            v-if="productData"
            type="hidden"
            name="item_id"
            :value="productData.id"
          >
          <template v-if="constructor">
            <input
              v-for="(value, name) in constructor"
              :key="name"
              type="hidden"
              :name="name"
              :value="value"
            >
          </template>
          <template v-if="modalFavorites">
            <input
              v-for="(value, name) in modalFavorites"
              :key="name"
              type="hidden"
              :name="name"
              :value="value"
            >
          </template>
          <AppIcon
            name="live-chat"
            class="modal__icon"
          />
          <p class="modal__title">Рассчитать мой проект</p>
          <p v-if="productData?.product === 'kitchen'" class="modal__desc">Наш менеджер свяжется с вами, уточнит детали и рассчитает стоимость кухни.<br><span>Дарим посудомоечную машину к каждой кухне до {{ promoDate }}!</span></p>
          <p v-else class="modal__desc">Наш менеджер свяжется с вами в ближайшее время, уточнит детали и проконсультирует по всем вопросам</p>
          <div class="modal__fields">
            <AppTextField
              textarea
              label="Пожелания"
              name="comment"
              placeholder="Укажите размеры и ваши пожелания"
              class="modal__field"
            />
            <AppTextField
              type="text"
              name="name"
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
            <label class="modal__file">
              <input
                ref="file"
                type="file"
                name="file"
                class="modal__file-input"
                @change="handleFile"
              >
              <AppIcon
                name="attachment"
                class="modal__file-icon"
              />
              <span class="modal__file-title">{{fileName || 'Прикрепить файлы'}}</span>
              <span class="modal__file-note">Фото, видео или .pdf (до 20 МБ)</span>
              <span
                v-if="fileError"
                class="modal__file-error"
              >{{fileError}}</span>
            </label>
          </div>
          <AppButton
            :title="sending ? 'Отправляем...' : 'Рассчитать со скидкой'"
            type="submit"
            class="modal__btn"
          />
          <p
            v-if="error"
            class="modal__error"
          >
            Ошибка отправки. Попробуйте еще раз
          </p>
          <p class="modal__policy">Нажимая кнопку "Отправить», вы соглашаетесь с <a
              href="/policy.pdf"
              target="_blank"
            >Политикой конфиденциальности</a></p>
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
            :src="$_basepath + modalData.video"
            autoplay
            controls
            controlsList="nodownload"
            class="modal__video"
          ></video>
          <button
            type="button"
            class="modal__close modal__close_outer"
            @click="closeModal"
          >
            <AppIcon
              name="close"
              class="modal__close-icon"
            />
          </button>
        </div>

        <div
          v-if="modal === 'images'"
          class="modal__media"
        >
          <Swiper
            :follow-finger="false"
            :speed="0"
            loop
            navigation
            :lazy="{ loadPrevNext: true }"
            class="modal__slider"
            @swiper="initSwiper($event, modalData.index)"
          >
            <SwiperSlide
              v-for="(image, index) in modalData.images"
              :key="index"
              class="modal__slide"
            >
              <img
                v-if="index === modalData.index"
                :src="$_basepath + ($_mobile ? image.medium.path : image.large.path)"
                alt
                class="modal__image"
              >
              <img
                v-else
                :data-src="$_basepath + ($_mobile ? image.medium.path : image.large.path)"
                alt
                class="modal__image swiper-lazy"
              >
            </SwiperSlide>
          </Swiper>
          <button
            type="button"
            class="modal__close modal__close_outer"
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

        <div
          v-if="modal === 'quiz'"
          class="modal__quiz"
        >
          <ModalQuiz @cancel="closeModal" />
          <button
            type="button"
            class="modal__close modal__close_quiz"
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
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppTextField from './base/AppTextField.vue'
import useForms from '../composition/forms'
import api from '../api'
import ModalQuiz from './ModalQuiz.vue'

SwiperCore.use([Navigation])

export default {
  name: 'Modal',
  components: {
    Swiper,
    SwiperSlide,
    AppIcon,
    AppTextField,
    AppButton,
    ModalQuiz
  },
  setup() {
    const { sending, success, error, page, handleSubmit } = useForms()
    return {
      sending,
      success,
      error,
      page,
      handleSubmit
    }
  },
  data() {
    return {
      fileName: '',
      fileError: '',
      ecommerce: null
    }
  },
  computed: {
    modal() {
      return this.$store.state.modal
    },
    modalData() {
      return this.$store.state.modalData
    },
    productData() {
      return this.$store.state.productData
    },
    constructor() {
      return this.$store.state.constructor
    },
    modalFavorites() {
      return this.$store.state.modalFavorites
    },
    promoDate() {
      return this.$store.getters.mainPromoDate
    }
  },
  watch: {
    modal(newModal) {
      if (newModal === 'designer' || newModal === 'calc' || newModal === 'favorite') {
        let product = '';

        if (this.productData?.product && this.productData.product !== 'kitchen') {
          product += '_' + this.productData.product
        }

        window.VK && window.VK.Goal('initiate_checkout')
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'open_form' })
        window.dataLayer.push({ event: 'open_' + newModal + product })
      }

      if (newModal) {
        this.sending = false
        this.success = false
        this.error = false
      }

      if (newModal === 'calc' && this.productData.product === 'kitchen') {
        const { id, name, category } = this.productData

        this.ecommerce = {
          id,
          name,
          category
        }

        api.ecommerce('detail', id, name, category)
        api.ecommerce('add', id, name, category)
      }

      if (newModal === 'success' && this.ecommerce) {
        const { id, name, category } = this.ecommerce

        api.ecommerce('purchase', id, name, category)
        this.ecommerce = null
      }
    },
    $route() {
      this.closeModal()
    },
    success() {
      this.fileName = ''
      this.fileError = ''
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('setModal', null)
      this.$store.commit('setModalData', null)
      this.$store.commit('setProductData', null)
      this.$store.commit('setConstructor', null)
      this.$store.commit('setModalFavorites', null)
    },

    handleFile(e) {
      const files = e.target.files

      this.fileName = ''
      this.fileError = ''

      if (files.length) {
        const file = files[0]
        const { name, type, size } = file

        if (!/image\/*|video\/*|application\/pdf/.test(type)) {
          this.$refs.file.value = ''
          this.fileError = 'Некорректный формат файла'
          return
        }

        if (size > 20 * 1024 * 1024) {
          this.$refs.file.value = ''
          this.fileError = 'Превышен размер файла'
          return
        }

        this.fileName = name
      }
    },

    initSwiper(swiper, index) {
      swiper.slideTo(index + 1)
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
    background-color: rgba(#000, 0.7);
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

    span {
      padding: 2px 10px;
      font-weight: 700;
      background-color: $color-yellow;
    }
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

  &__error {
    margin-top: 15px;
    font-size: 14px;
    color: #ff0000;
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
  }

  &__video {
    max-width: calc(100vw - 40px);
    max-height: calc(100vh - 80px);
  }

  &__slider {
    width: calc(100vw - 40px);
    max-width: 1280px;

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }

    .swiper-button-prev {
      left: 0;
    }

    .swiper-button-next {
      right: 0;
    }
  }

  &__slide {
    position: relative;
    padding-top: 56%;
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    fill: $color-lightviolet;
    z-index: 2;

    &_outer {
      top: -40px;
      right: 0;
      fill: $color-gray3;
    }

    &_quiz {
      top: 0;
      right: 0;
    }

    &-icon {
      width: 17px;
      height: 17px;
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

  &__file {
    display: inline-block;
    position: relative;
    padding-left: 40px;
    cursor: pointer;

    &-input {
      display: none;
    }

    &-icon {
      position: absolute;
      left: 6px;
      top: 4px;
      width: 20px;
      height: 20px;
      fill: $color-green;
    }

    &-title {
      display: block;
      font-weight: bold;
      font-size: 13px;
      color: $color-green;
    }

    &-note {
      display: block;
      margin-top: 2px;
      font-weight: 500;
      font-size: 11px;
      color: $color-lightviolet;
    }

    &-error {
      display: inline-block;
      margin-top: 5px;
      font-size: 11px;
      line-height: 1.2;
      color: #ff0000;
    }
  }

  &__quiz {
    position: relative;
    width: 100%;
    max-width: 320px;
    background-color: #fff;
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

    &__video {
      max-width: 1280px;
      max-height: calc(100vh - 100px);
    }

    &__slider {
      width: calc(100vw - 120px);

      .swiper-button-prev {
        left: 20px;
      }

      .swiper-button-next {
        right: 20px;
      }
    }

    &__success {
      border-radius: 8px;
      padding: 67px 100px 78px;
    }

    &__quiz {
      max-width: 640px;
      border-radius: 8px;
    }
  }

  @include media(lg) {
    &__close {
      &_outer {
        top: 0;
        right: -50px;
      }
    }
  }
}
</style>
