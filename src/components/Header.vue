<template>
  <header class="header">
    <div
      v-if="$_mobile"
      class="header__mobile-menu"
      :class="{'is-active': activeMobileMenu}"
    >
      <div
        v-if="$_windowWidth < $_breakpoints.md"
        class="header__nav-wrapper"
      >
        <div class="header__nav-main">
          <div class="container">
            <nav class="header__nav-items">
              <span
                class="header__nav-item"
                @click="openNavMenu('kitchens')"
              >
                Кухни
                <AppIcon
                  class="header__nav-arrow"
                  name="angle-down"
                />
              </span>
              <span
                class="header__nav-item"
                @click="openNavMenu('technics')"
              >
                Техника
                <AppIcon
                  class="header__nav-arrow"
                  name="angle-down"
                />
              </span>
              <router-link
                to="/"
                class="header__nav-item"
              >Шкафы-купе</router-link>
              <router-link
                to="/"
                class="header__nav-item is-active"
              >Подбор кухни</router-link>
              <router-link
                to="/"
                class="header__nav-item"
              >Советы и идеи</router-link>
            </nav>
            <button
              type="button"
              class="header__call-btn"
            >
              <AppIcon
                class="header__call-icon"
                name="phone"
              />
              Консультация дизайнера
            </button>
          </div>
        </div>
        <div
          class="header__nav-side"
          :class="{'is-active': activeNavMenu === 'kitchens'}"
        >
          <div class="container">
            <NavMenu
              class="header__nav-menu"
              title="Кухни"
              @close-menu="toggleMobileMenu"
              @close-submenu="toggleNavMenu"
            />
          </div>
        </div>
        <div
          class="header__nav-side"
          :class="{'is-active': activeNavMenu === 'technics'}"
        >
          <div class="container">
            <NavMenu
              class="header__nav-menu"
              title="Техника"
              @close="closeNavMenu"
            />
          </div>
        </div>
      </div>

      <div
        v-if="$_windowWidth >= $_breakpoints.md && $_windowWidth < $_breakpoints.lg"
        class="header__mobile-menu-inner"
      >
        <div class="container">
          <button
            type="button"
            class="header__call-btn"
          >
            <AppIcon
              class="header__call-icon"
              name="phone"
            />
            Консультация дизайнера
          </button>
        </div>
      </div>
      <NavPanel class="header__panel" />
    </div>

    <Favorite class="header__favorite" />

    <NavPanel
      v-if="$_windowWidth >= $_breakpoints.lg"
      class="header__panel"
    />
    <div class="header__bar">
      <div class="container">
        <div class="header__row">
          <button
            type="button"
            class="header__menu-btn"
            :class="{'is-active': activeMobileMenu}"
            @click="toggleMobileMenu"
          >
            <span></span>
          </button>
          <router-link
            to="/"
            class="header__logo"
          >
            <picture>
              <source
                srcset="../assets/img/wow-logo-med.svg"
                :media="`(min-width: ${$_breakpoints.lg}px)`"
              >
              <img
                src="../assets/img/wow-logo-mob.svg"
                alt="WowKitchen"
              >
            </picture>
          </router-link>
          <nav
            v-if="$_windowWidth >= $_breakpoints.md"
            class="header__nav"
          >
            <span
              class="header__nav-item"
              :class="{'is-menu-active': activeNavMenu === 'kitchens'}"
              @click="toggleNavMenu('kitchens')"
            >
              Кухни
              <AppIcon
                class="header__nav-arrow"
                name="angle-down"
              />
            </span>
            <span
              class="header__nav-item"
              :class="{'is-menu-active': activeNavMenu === 'technics'}"
              @click="toggleNavMenu('technics')"
            >
              Техника
              <AppIcon
                class="header__nav-arrow"
                name="angle-down"
              />
            </span>
            <router-link
              to="/"
              class="header__nav-item"
            >Шкафы-купе</router-link>
            <router-link
              to="/"
              class="header__nav-item is-active"
            >Подбор кухни</router-link>
            <router-link
              to="/"
              class="header__nav-item"
            >Советы и идеи</router-link>
          </nav>
          <div class="header__side">
            <button
              v-if="$_windowWidth >= $_breakpoints.lg"
              type="button"
              class="header__call-btn"
            >
              <AppIcon
                class="header__call-icon"
                name="phone"
              />
              Консультация дизайнера
            </button>
            <a
              href="tel:+79999999999"
              class="header__phone"
            >
              <AppIcon
                class="header__phone-icon"
                name="phone"
              />
              <span class="header__phone-num">+7 (999) 999 99 99</span>
            </a>
            <button
              class="header__favorites"
              type="button"
            >
              <AppIcon
                class="header__favorites-icon"
                name="bookmark"
              />
              <span class="header__favorites-count">2</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="header__line">
      <div class="container">
        <div class="header__breadcrumbs">
          <div class="header__breadcrumb">
            <router-link to="/">Главная</router-link>
          </div>
          <div class="header__breadcrumb">
            <router-link to="/">Название категории</router-link>
          </div>
          <div class="header__breadcrumb">
            <router-link to="/">Название подкатегории</router-link>
          </div>
        </div>
      </div>
    </div>

    <template v-if="$_windowWidth >= $_breakpoints.md">
      <div
        class="header__nav-dropdown"
        :class="{'is-active': activeNavMenu === 'kitchens'}"
      >
        <div class="container">
          <NavMenu
            class="header__nav-menu"
            title="Кухни"
          />
        </div>
      </div>
      <div
        class="header__nav-dropdown"
        :class="{'is-active': activeNavMenu === 'technics'}"
      >
        <div class="container">
          <NavMenu
            class="header__nav-menu"
            title="Техника"
          />
        </div>
      </div>
    </template>

  </header>
</template>

<script>
import AppIcon from './base/AppIcon.vue'
import Favorite from './Favorite.vue'
import NavMenu from './NavMenu.vue'
import NavPanel from './NavPanel.vue'

export default {
  name: 'AppHeader',
  components: {
    AppIcon,
    NavMenu,
    NavPanel,
    Favorite
  },
  data() {
    return {
      activeMobileMenu: false,
      activeNavMenu: null
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (this.$_desktop && this.activeMobileMenu) {
        this.toggleMobileMenu()
      }
    },

    toggleMobileMenu() {
      this.activeMobileMenu = !this.activeMobileMenu
      document.body.style.overflow = this.activeMobileMenu ? 'hidden' : ''
    },

    openNavMenu(menu) {
      this.activeNavMenu = menu
    },

    closeNavMenu() {
      this.activeNavMenu = null
    },

    toggleNavMenu(menu) {
      this.activeNavMenu === menu ? this.closeNavMenu() : this.openNavMenu(menu)
    }
  }
}
</script>

<style lang="scss">
.header {
  $b: &;

  position: relative;

  &__mobile-menu {
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: $color-lightgray;
    transition: transform 0.3s ease;
    overflow-y: auto;
    z-index: 1;

    &.is-active {
      transform: translateX(100%);
    }
  }

  &__nav-wrapper {
    display: grid;
    padding-top: 68px;
    padding-bottom: 15px;
    background-color: #fff;
    overflow: hidden;
  }

  &__nav-main,
  &__nav-side {
    grid-area: 1 / 1;
  }

  &__nav-main {
    padding-top: 14px;
    padding-bottom: 20px;
  }

  &__nav-side {
    position: relative;
    left: 100%;
    background-color: #fff;
    transition: transform 0.3s ease;
    z-index: 1;

    &.is-active {
      transform: translate(-100%);
      transition: transform 0.3s ease;
    }
  }

  &__nav-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
    border-bottom: 1px solid $color-lightgray;
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
    cursor: pointer;

    &.is-active {
      color: $color-green;
    }
  }

  &__nav-arrow {
    width: 9px;
    height: 9px;
    margin-right: 18px;
    transform: rotate(-90deg);
    fill: currentColor;
  }

  &__call-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 35px;
    width: 100%;
    max-width: 300px;
    padding: 20px;
    border-radius: 30px 0 30px 0;
    font-weight: bold;
    font-size: 11px;
    color: #fff;
    background-color: $color-green;
    box-shadow: 0 0 0 0 $color-green;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: 9px;
      right: 8px;
      bottom: -5px;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      opacity: 0.5;
      filter: blur(5px);
      z-index: -1;
    }
  }

  &__call-icon {
    width: 15px;
    height: 15px;
    margin-right: 20px;
    fill: currentColor;
  }

  &__row {
    display: flex;
    align-items: center;
  }

  &__menu-btn {
    position: relative;
    width: 30px;
    height: 30px;
    margin-right: 18px;

    span {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 100%;
      height: 3px;
      border-radius: 3px;
      background-color: currentColor;
      transition: transform 0.3s ease;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
      }

      &::before {
        top: -9px;
        transition: top 0.3s ease 0.3s, transform 0.3s ease;
      }

      &::after {
        bottom: -9px;
        transition: bottom 0.3s ease 0.3s, transform 0.3s ease;
      }
    }

    &.is-active {
      span {
        transform: rotate(225deg);
        transition: transform 0.3s ease 0.3s;

        &::before {
          top: 0;
          transition: top 0.3s ease, transform 0.3s ease 0.3s;
        }

        &::after {
          bottom: 0;
          transform: rotate(90deg);
          transition: bottom 0.3s ease, transform 0.3s ease 0.3s;
        }
      }
    }
  }

  &__logo {
    width: 120px;
    margin-right: auto;
  }

  &__bar {
    display: flex;
    align-items: center;
    position: relative;
    height: $header-bar-height;
    border-bottom: 1px solid $color-lightgray;
    background-color: #fff;
    z-index: 1;
  }

  &__side {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  &__phone {
    margin-right: 30px;
  }

  &__phone-icon {
    width: 23px;
    height: 23px;
    fill: #aca8c3;
  }

  &__phone-num {
    display: none;
  }

  &__favorites {
    position: relative;
    margin-right: 10px;
  }

  &__favorites-icon {
    width: 14px;
    height: 20px;
    fill: #aca8c3;
  }

  &__favorites-count {
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 2px;
    border: 2px solid #fff;
    border-radius: 13px;
    font-weight: bold;
    font-size: 9px;
    line-height: 1;
    background-color: $color-yellow;
  }

  &__line {
    display: none;
  }

  &__favorite {
    // Стили тут
    position: absolute;
    right: 50%;
    transform: translate(50%);
    max-width: 320px;
    width: 100%;
    height: 100vh;
    top: 100%;
    @include media(md) {
      right: 0;
      transform: translate(0);
      max-width: 650px;
    }
  }

  @include media(md) {
    &__mobile-menu-inner {
      padding-top: 102px;
      padding-bottom: 30px;
      background-color: #fff;
    }

    &__call-btn {
      margin-top: 0;
    }

    &__bar {
      height: $header-bar-height-md;
    }

    &__nav {
      display: flex;
    }

    &__nav-item {
      align-items: flex-end;
      margin-right: 28px;
      padding: 0;
      border-bottom: none;
      font-size: 12px;
      transition: color 0.3s ease;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: #aca8c3;
      }

      &.is-menu-active {
        color: #aca8c3;

        #{$b}__nav-arrow {
          transform: rotate(180deg);
        }
      }

      &.is-active {
        color: $color-green;
      }
    }

    &__nav-arrow {
      margin-left: 5px;
      margin-right: 0;
      transform: none;
      transition: transform 0.3s ease;
    }

    &__line {
      display: block;
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      padding: 7px 0;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.50196), rgba(255, 255, 255, 0));
      }
    }

    &__breadcrumbs {
      display: flex;
      position: relative;
    }

    &__breadcrumb {
      margin-right: 10px;
      font-size: 11px;

      a {
        text-decoration: underline;
      }

      &::after {
        content: '·';
        margin-left: 10px;
      }

      &:last-child {
        margin-right: 0;
        pointer-events: none;

        a {
          text-decoration: none;
        }

        &::after {
          display: none;
        }
      }
    }

    &__nav-dropdown {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid $color-lightgray;
      background-color: #fff;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &.is-active {
        box-shadow: 0px 9px 30px 0px rgba(0, 0, 0, 0.06);
        transform: translateY(100%);
      }
    }
  }

  @include media(lg) {
    &__panel {
      position: relative;
      z-index: 2;
    }

    &__bar {
      height: $header-bar-height-lg;
    }

    &__menu-btn {
      display: none;
    }

    &__logo {
      width: 145px;
    }

    &__nav-item {
      margin-right: 25px;
      font-size: 14px;
    }

    &__call-btn {
      margin-right: 22px;
      margin-bottom: 10px;
      width: auto;
    }

    &__phone {
      flex-shrink: 0;
      margin-right: 22px;
    }

    &__phone-icon {
      display: none;
    }

    &__phone-num {
      display: inline;
      font-weight: bold;
      font-size: 15px;
    }
  }

  @include media(xl) {
    &__bar {
      height: $header-bar-height-xl;
    }

    &__logo {
      width: 165px;
    }

    &__nav-item {
      margin-right: 44px;
      font-size: 16px;
    }

    &__call-btn {
      margin-right: 20px;
      margin-bottom: 6px;
      padding: 22px 28px;
    }

    &__phone-num {
      font-size: 17px;
    }
  }
}
</style>
