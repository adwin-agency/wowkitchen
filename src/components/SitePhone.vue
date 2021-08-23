<template>
  <div class="site-phone">
    <transition name="fade">
      <button
        v-if="!isActive"
        class="site-phone__open"
        type="button"
        @click="openSitePhone"
      >
        <AppIcon
          name="phone2"
          class="site-phone__open-icon"
        />
      </button>
    </transition>
    <transition name="fade">
      <div
        v-if="isActive"
        class="site-phone__overlay"
        @click="closeSitePhone"
      >
        <form
          v-if="isActive"
          class="site-phone__form"
          @click.stop
          @submit="handleSubmit"
        >
          <input
            type="hidden"
            name="type"
            value="sitephone"
          >
          <input
            type="hidden"
            name="page"
            :value="page"
          >
          <div class="site-phone__shapes">
            <AppIcon
              name="shape-21"
              class="site-phone__shape site-phone__shape_1"
              viewBox="0 0 85 87"
            />
            <AppIcon
              name="shape-22"
              class="site-phone__shape site-phone__shape_2"
              viewBox="0 0 55 55"
            />
            <AppIcon
              name="shape-23"
              class="site-phone__shape site-phone__shape_3"
              viewBox="0 0 48 63"
            />
            <AppIcon
              name="shape-24"
              class="site-phone__shape site-phone__shape_4"
              viewBox="0 0 17 17"
            />
            <AppIcon
              name="shape-25"
              class="site-phone__shape site-phone__shape_5"
              viewBox="0 0 91 87"
            />
          </div>
          <p class="site-phone__title">Обратный звонок</p>
          <AppTextField
            label="Контактный телефон"
            placeholder="+7(999)999-99-99"
            size="sm"
            type="tel"
            name="phone"
            required
            class="site-phone__field"
          />
          <AppSelect
            label="Время звонка"
            labelSize="sm"
            size="sm"
            name="time"
            :options="[{title: 'Сейчас'}, {title: 'Конкретное время'}]"
            class="site-phone__field"
            @change="handleTimeChange"
          />
          <div
            v-if="exactTime"
            class="site-phone__field-group"
          >
            <AppSelect
              size="sm"
              name="day"
              :options="[{title: 'Сегодня'}, {title: 'Завтра'}]"
              class="site-phone__field"
            />
            <AppSelect
              size="sm"
              name="hours"
              scrollable
              :options="hours"
              class="site-phone__field"
            />
          </div>
          <AppButton
            :title="sending ? 'Отправляем...' : 'Жду звонка'"
            color="yellow"
            size="small"
            class="site-phone__btn"
            type="submit"
          />
          <p
            v-if="error"
            class="site-phone__error"
          >
            Ошибка отправки. Попробуйте еще раз
          </p>
          <button
            class="site-phone__close"
            type="button"
            @click="closeSitePhone"
          >
            <AppIcon
              name="close"
              class="site-phone__close-icon"
            />
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import useForms from '../composition/forms'
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppSelect from './base/AppSelect.vue'
import AppTextField from './base/AppTextField.vue'

export default {
  name: 'SitePhone',
  components: {
    AppIcon,
    AppTextField,
    AppSelect,
    AppButton
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
      exactTime: false
    }
  },
  computed: {
    isActive() {
      return this.$store.state.activeSitePhone
    },
    hours() {
      const arr = []

      for (let i = 9; i <= 21; i++) {
        arr.push({ title: i + ':00' })
        arr.push({ title: i + ':30' })
      }

      return arr
    }
  },
  watch: {
    success() {
      this.closeSitePhone()
    }
  },
  methods: {
    openSitePhone() {
      this.$store.commit('setActiveSitePhone', true)

      window.fbq && window.fbq('track', 'Lead', { content_name: 'micro' })
      window.VK && window.VK.Goal('initiate_checkout')
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'open_form' })
      window.dataLayer.push({ event: 'open_sitephone' })
    },

    closeSitePhone() {
      this.$store.commit('setActiveSitePhone', false)
    },

    handleTimeChange(value) {
      this.exactTime = value === 'Конкретное время'
    }
  }
}
</script>

<style lang="scss">
.site-phone {
  $b: &;

  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 100;

  &__open,
  &__overlay {
    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity 0.3s ease;
    }

    &.fade-enter-from,
    &.fade-leave-to {
      opacity: 0;
    }
  }

  @keyframes site-phone {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
      opacity: 0;
    }
  }

  &__open {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 80px;
    height: 80px;
    border-radius: 100% 0 0 0;
    background-color: $color-yellow;
    box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.15);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-top: 1px solid $color-yellow;
      border-left: 1px solid $color-yellow;
      border-radius: inherit;
      transform-origin: right bottom;
      animation: site-phone 1s infinite;
      pointer-events: none;
    }

    &-icon {
      position: absolute;
      left: 30px;
      top: 30px;
      width: 30px;
      height: 30px;
    }
  }

  &__overlay {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    overflow-y: auto;
  }

  &__form {
    position: relative;
    margin: auto;
    width: 340px;
    max-width: 100%;
    border-top: 4px solid $color-pink;
    padding: 60px 30px;
    background-color: #fff;
  }

  &__shape {
    position: absolute;

    &_1 {
      left: -46px;
      top: -28px;
      width: 83px;
    }

    &_2 {
      left: -64px;
      top: -38px;
      width: 53px;
    }

    &_3 {
      left: -30px;
      top: 22px;
      width: 50px;
    }

    &_4 {
      left: -27px;
      bottom: 43px;
      width: 17px;
    }

    &_5 {
      left: -40px;
      bottom: 24px;
      width: 70px;
    }
  }

  &__title {
    margin-bottom: 34px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }

  &__field-group {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    #{$b} {
      &__field {
        margin-top: 0;
        width: calc(50% - 8px);
      }
    }
  }

  &__field {
    margin-top: 26px;
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

  &__close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;

    &-icon {
      width: 12px;
      height: 12px;
      fill: $color-lightviolet;
    }
  }

  @include media(md) {
    &__open {
      width: 100px;
      height: 100px;

      &-icon {
        left: 40px;
        top: 40px;
        width: 36px;
        height: 36px;
      }
    }

    &__form {
      margin-right: 0;
      margin-bottom: 0;
      padding: 36px 40px 30px;
    }
  }
}
</style>