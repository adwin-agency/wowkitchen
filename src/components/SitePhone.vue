<template>
  <div class="site-phone">
    <div
      class="site-phone__menu"
      :class="{'active': isActiveMenu}"
    >
      <button
        class="site-phone__open"
        @click="toggleMenu"
      >
        <AppIcon
          name="talk"
          class="site-phone__open-icon"
          :class="{'active': !isActiveMenu}"
        />
        <AppIcon
          name="cross"
          class="site-phone__open-icon"
          :class="{'active': isActiveMenu}"
        />
      </button>
      <a
        href="https://t.me/wowkitchenru_bot"
        target="_blank"
        class="site-phone__menu-item site-phone__menu-item_tg"
      >
        <AppIcon
          name="telegram"
          class="site-phone__menu-icon"
        />
        <span class="site-phone__tooltip">Телеграм-бот</span>
      </a>
      <a
        href="https://vk.me/club25299040"
        target="_blank"
        class="site-phone__menu-item site-phone__menu-item_vk"
      >
        <AppIcon
          name="vk"
          class="site-phone__menu-icon"
        />
        <span class="site-phone__tooltip">Чат ВКонтакте</span>
      </a>
      <button
        class="site-phone__menu-item site-phone__menu-item_ph"
        @click="openSitePhone"
      >
        <AppIcon
          name="callback"
          class="site-phone__menu-icon"
          width="26"
          height="26"
        />
        <span class="site-phone__tooltip">Обратный звонок</span>
      </button>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      class="site-phone__filters"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            result="blur"
            stdDeviation="3"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 16 -7"
            result="goo"
          />
          <feComposite
            in2="goo"
            in="SourceGraphic"
            result="mix"
          />
        </filter>
      </defs>
    </svg>
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
      isActiveMenu: false,
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
    toggleMenu() {
      this.isActiveMenu = !this.isActiveMenu
    },

    openSitePhone() {
      this.$store.commit('setActiveSitePhone', true)

      window.VK && window.VK.Goal('initiate_checkout')
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'open_form' })
      window.dataLayer.push({ event: 'open_sitephone' })
    },

    closeSitePhone() {
      this.exactTime = false
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
  z-index: 200;

  &__menu {
    position: absolute;
    right: 20px;
    bottom: 20px;
    filter: url('#goo');

    &.active {
      #{$b} {
        &__open {
          transform: scale(0.8);

          &::before {
            transform: scale(0);
          }

          &-icon {
            transform: scale(0.7);
          }
        }

        &__menu-item {
          pointer-events: all;

          &:nth-child(2) {
            transform: translateY(-58px);
          }

          &:nth-child(3) {
            transform: translateY(-120px);
          }

          &:nth-child(4) {
            transform: translateY(-182px);
          }
        }
      }
    }
  }

  &__filters {
    display: none;
  }

  &__open {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: $color-green;
    transition: transform 0.3s ease;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -35px 0 0 -35px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: rgba($color-green, 0.3);
      box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.195);
      transition: transform 0.3s ease;
      z-index: -1;
    }

    &-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -12px 0 0 -12px;
      width: 24px;
      height: 24px;
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;

      &.active {
        opacity: 1;
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
    }
  }

  &__menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -28px 0 0 -28px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    fill: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    pointer-events: none;

    &_tg {
      background-color: #40b3e0;

      #{$b} {
        &__menu-icon {
          width: 22px;
          height: 22px;
        }
      }
    }

    &_vk {
      background-color: #2683ed;

      #{$b} {
        &__menu-icon {
          width: 24px;
          height: 24px;
        }
      }
    }

    &_ph {
      background-color: #04b991;

      #{$b} {
        &__menu-icon {
          width: 18px;
          height: 18px;
        }
      }
    }

    &:hover {
      box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);

      #{$b} {
        &__tooltip {
          opacity: 1;
        }
      }
    }
  }

  &__tooltip {
    position: absolute;
    top: 50%;
    right: 100%;
    margin-right: 8px;
    border-radius: 10px;
    padding: 12px 18px;
    font-weight: 500;
    font-size: 12px;
    background-color: rgba(217, 217, 217, 0.9);
    transform: translateY(-50%);
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

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
    &__form {
      margin-right: 0;
      margin-bottom: 0;
      padding: 36px 40px 30px;
    }
  }

  @include media(lg) {
    &__menu {
      right: 38px;
      bottom: 33px;

      &.active {
        #{$b} {
          &__open {
            transform: scale(0.62);

            &-icon {
              transform: scale(0.6);
            }
          }

          &__menu-item {
            &:nth-child(2) {
              transform: translateY(-82px);
            }

            &:nth-child(3) {
              transform: translateY(-168px);
            }

            &:nth-child(4) {
              transform: translateY(-254px);
            }
          }
        }
      }
    }

    &__open {
      width: 110px;
      height: 110px;

      &::before {
        margin: -65px 0 0 -65px;
        width: 130px;
        height: 130px;
      }

      &-icon {
        margin: -24px 0 0 -24px;
        width: 48px;
        height: 48px;
      }
    }

    &__menu-item {
      margin: -40px 0 0 -40px;
      width: 80px;
      height: 80px;

      &_tg {
        #{$b} {
          &__menu-icon {
            width: 38px;
            height: 38px;
          }
        }
      }

      &_vk {
        #{$b} {
          &__menu-icon {
            width: 38px;
            height: 38px;
          }
        }
      }

      &_ph {
        #{$b} {
          &__menu-icon {
            width: 26px;
            height: 26px;
          }
        }
      }
    }

    &__tooltip {
      padding: 15px 25px;
      font-size: 16px;
    }
  }
}
</style>