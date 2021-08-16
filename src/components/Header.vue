<template>
  <header
    class="header"
    :class="{'is-short': isShort}"
    v-outside-click="closeNavMenu"
  >

    <transition name="fade">
      <div
        v-if="activeFavorite"
        class="header__overlay"
        @click="toggleFavorite"
      ></div>
    </transition>

    <div
      v-if="$_mobile"
      class="header__mobile-menu"
      :class="{'is-active': activeMobileMenu}"
    >

      <div
        v-if="$_mobile"
        class="header__nav-wrapper"
      >
        <div class="header__nav-main">
          <div class="container">
            <nav class="header__nav-items">
              <span
                class="header__nav-item"
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
                @click="toggleNavMenu('technics')"
              >
                Техника
                <AppIcon
                  class="header__nav-arrow"
                  name="angle-down"
                />
              </span>
              <span class="header__nav-item">
                <router-link :to="{name: 'wardrobes'}">Шкафы-купе</router-link>
              </span>
              <span class="header__nav-item">
                <router-link :to="{name: 'quiz'}">Расчет онлайн</router-link>
              </span>
              <span class="header__nav-item">
                <router-link :to="{name: 'blog'}">Советы и идеи</router-link>
              </span>
            </nav>
            <AppButton
              v-if="$_media.sm"
              title="Консультация дизайнера"
              icon="phone"
              figure
              shadow
              modalName="designer"
              class="header__call-btn"
            />
          </div>
        </div>
        <div
          class="header__nav-side"
          :class="{'is-active': activeNavMenu === 'kitchens'}"
        >
          <div class="container">
            <NavMenu
              class="header__nav-menu"
              :menu="kitchensMenu"
              @close-menu="closeMobileMenu"
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
              :menu="technicsMenu"
              @close-menu="closeMobileMenu"
              @close-submenu="toggleNavMenu"
            />
          </div>
        </div>
      </div>

      <NavPanel
        class="header__panel"
        @close-menu="toggleMobileMenu"
      />
    </div>

    <Favorites
      class="header__favorite"
      :class="{'is-active': activeFavorite}"
      @close="toggleFavorite"
    />

    <NavPanel
      v-if="$_desktop"
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
            v-if="$_desktop"
            class="header__nav"
          >
            <span
              class="header__nav-item"
              :class="{'is-menu-active': activeNavMenu === 'kitchens'}"
              @touchend.prevent="toggleNavMenu('kitchens')"
              @mouseenter="openNavMenu('kitchens')"
              @mouseleave="checkNavHover"
              @click="navigate('kitchens')"
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
              @touchend.prevent="toggleNavMenu('technics')"
              @mouseenter="openNavMenu('technics')"
              @mouseleave="checkNavHover"
              @click="navigate('technics')"
            >
              Техника
              <AppIcon
                class="header__nav-arrow"
                name="angle-down"
              />
            </span>
            <router-link
              :to="{name: 'wardrobes'}"
              class="header__nav-item"
            >
              Шкафы-купе
            </router-link>
            <router-link
              :to="{name: 'quiz'}"
              class="header__nav-item"
            >
              Расчет онлайн
            </router-link>
            <router-link
              :to="{name: 'blog'}"
              class="header__nav-item"
            >
              Советы и идеи
            </router-link>
          </nav>

          <div class="header__side">

            <AppButton
              v-if="!$_media.sm"
              title="Консультация дизайнера"
              icon="phone"
              figure
              shadow
              modalName="designer"
              class="header__call-btn"
            />

            <a
              :href="`tel:${cityPhone}`"
              class="header__phone"
            >
              <AppIcon
                v-if="$_media.sm"
                class="header__phone-icon"
                :class="{'is-active': activePhone}"
                name="phone"
              />
              <span
                v-else
                class="header__phone-num"
              >{{cityPhone}}</span>
            </a>
            <button
              class="header__favorites"
              type="button"
              @click="toggleFavorite"
            >
              <AppIcon
                class="header__favorites-icon"
                name="bookmark"
              />
              <span
                v-if="favoritesLength"
                class="header__favorites-count"
              >{{favoritesLength}}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!$_media.sm && breadCrumbs"
      class="header__line"
    >
      <div class="container">
        <div class="header__breadcrumbs">
          <div class="header__breadcrumb">
            <router-link to="/">Главная</router-link>
          </div>
          <div
            v-for="(item, index) in breadCrumbs"
            :key="index"
            class="header__breadcrumb"
          >
            <router-link
              v-if="item.path"
              :to="item.path"
            >
              {{item.title}}
            </router-link>
            <span v-else>{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>

    <template v-if="$_desktop">
      <div
        class="header__nav-dropdown"
        :class="{'is-active': activeNavMenu === 'kitchens'}"
        @mouseleave="closeNavMenu"
      >
        <div class="container">
          <NavMenu
            class="header__nav-menu"
            :menu="kitchensMenu"
            :article="article"
            @close-menu="toggleNavMenu"
          />
        </div>
      </div>
      <div
        class="header__nav-dropdown"
        :class="{'is-active': activeNavMenu === 'technics'}"
        @mouseleave="closeNavMenu"
      >
        <div class="container">
          <NavMenu
            class="header__nav-menu"
            :menu="technicsMenu"
            :article="article"
            @close-menu="toggleNavMenu"
          />
        </div>
      </div>
    </template>

  </header>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import Favorites from './Favorites.vue'
import NavMenu from './NavMenu.vue'
import NavPanel from './NavPanel.vue'
import api from '../api'

const kitchensMenu = {
  main: { path: 'kitchens', title: 'Кухни' },
  groups: [
    {
      title: 'Планировки',
      items: [
        { path: 'kitchens', query: { }, title: 'Все кухни' },
        { path: 'kitchens', query: { category: 'pryamye' }, title: 'Прямые кухни' },
        { path: 'kitchens', query: { category: 'uglovye' }, title: 'Угловые кухни' },
        { path: 'kitchens', query: { category: 'p-obraznye' }, title: 'П-образные кухни' },
        { path: 'kitchens', query: { category: 's-barnoy-stoykoy' }, title: 'Кухни с барной стойкой' },
        { path: 'kitchens', query: { category: 's-ostrovom' }, title: 'Кухни с островом' }
      ]
    },
    // {
    //   title: 'Стили',
    //   items: [
    //     { path: 'kitchens', query: { style: 'scandinaviya' }, title: 'Скандинавский' },
    //     { path: 'kitchens', query: { style: 'loft' }, title: 'Лофт' },
    //     { path: 'kitchens', query: { style: 'neoklassika' }, title: 'Неоклассика' },
    //     { path: 'kitchens', query: { style: 'minimalizm' }, title: 'Минимализм' },
    //     { path: 'kitchens', query: { style: 'sovremenniy' }, title: 'Современный' },
    //   ]
    // }
    {
      icon: 'crown',
      title: 'Популярное',
      items: [
        { path: 'kitchens', query: { tag: 'malenkie-kukhni' }, title: 'Маленькие кухни' },
        { path: 'kitchens', query: { tag: 'praktichnye-kukhni' }, title: 'Практичные кухни' },
        { path: 'kitchens', query: { tag: 'top-5-kukhon-mesyatsa' }, title: 'ТОП-5 кухонь месяца' }        
      ]
    }
  ]
}

const technicsMenu = {
  main: { path: 'technics', title: 'Техника' },
  groups: [
    {
      items: [
        { path: 'technics', query: { category: 'varochnye-paneli' }, title: 'Варочые панели' },
        { path: 'technics', query: { category: 'dukhovye-shkafy' }, title: 'Духовые шкафы' },
        { path: 'technics', query: { category: 'kholodilniki' }, title: 'Холодильники' },
        { path: 'technics', query: { category: 'posudomoechnye-mashiny' }, title: 'Посудомоечные машины' },
        { path: 'technics', query: { category: 'vytyazhki' }, title: 'Вытяжки' }
      ]
    }
  ]
}

export default {
  name: 'AppHeader',
  components: {
    AppIcon,
    NavMenu,
    NavPanel,
    Favorites,
    AppButton
  },
  data() {
    return {
      kitchensMenu: kitchensMenu,
      technicsMenu: technicsMenu,
      activeMobileMenu: false,
      hoverNavItem: null,
      activeNavMenu: null,
      activeFavorite: false,
      scrollY: window.scrollY,
      isShort: false,
      article: null
    }
  },
  computed: {
    breadCrumbs() {
      return this.$route.name !== 'main' && this.$route.name !== 'not-found' && this.$store.state.breadCrumbs
    },
    favoritesLength() {
      return this.$store.state.favoriteItems.length
    },
    cityPhone() {
      return this.$store.state.cities[this.$store.state.activeCity]?.phone
    },
    activePhone() {
      const hours = new Date().getHours()
      return hours >= 10 && hours < 22
    }
  },
  watch: {
    $route() {
      if (this.activeMobileMenu) {
        this.closeMobileMenu()
      }

      if (this.activeNavMenu) {
        this.closeNavMenu()
      }

      if (this.activeFavorite) {
        this.toggleFavorite()
      }
    }
  },
  async created() {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)

    const response = await api.loadCards({ name: 'blog' })
    this.article = response.goods[0]
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleResize() {
      if (this.$_desktop && this.activeMobileMenu) {
        this.toggleMobileMenu()
      }
    },

    handleScroll() {
      this.isShort = window.scrollY > this.scrollY
      this.scrollY = window.scrollY
    },

    closeMobileMenu() {
      this.activeMobileMenu = false
      this.$store.commit('setMobileMenu', false)
    },

    toggleMobileMenu() {
      if (this.activeFavorite) {
        this.toggleFavorite()
      }

      this.activeMobileMenu = !this.activeMobileMenu
      this.$store.commit('setMobileMenu', this.activeMobileMenu)
    },

    navigate(item) {
      this.$router.push({ name: item })
      this.closeNavMenu()
    },

    openNavMenu(menu) {
      this.activeNavMenu = menu
    },

    closeNavMenu() {
      this.activeNavMenu = null
    },

    toggleNavMenu(menu) {
      this.activeNavMenu === menu ? this.closeNavMenu() : this.openNavMenu(menu)
    },

    checkNavHover(e) {
      const to = e.toElement
      
      if (!to.classList.contains('nav-menu')) {
        this.closeNavMenu()
      }
    },

    toggleFavorite() {
      if (this.activeMobileMenu) {
        this.toggleMobileMenu()
      }

      this.activeFavorite = !this.activeFavorite
      this.$store.commit('setActiveFavorites', this.activeFavorite)
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
    padding-top: $header-bar-height;
    background-color: $color-lightgray;
    transition: transform 0.3s ease;
    overflow-y: auto;

    &.is-active {
      transform: translateX(100%);
    }
  }

  &__nav-wrapper {
    display: grid;
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

    a.is-active {
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
    margin-top: 35px;
    width: 100%;
    font-size: 11px;
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
    box-shadow: inset 0 0 0 1px $color-lightgray;
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
    fill: $color-lightviolet;

    &.is-active {
      fill: $color-green;
    }
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

  &__overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(#000, 0.5);

    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity 0.3s ease;
    }

    &.fade-enter-from,
    &.fade-leave-to {
      opacity: 0;
    }
  }

  &__favorite {
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    height: 100vh;
    transition: transform 0.3s ease;
    overflow-y: auto;

    &.is-active {
      transform: translateX(-100%);
    }
  }

  @include media(md) {
    &.is-short {
      #{$b} {
        &__line {
          transform: translateY(-100%);
        }
      }
    }

    &__mobile-menu {
      display: flex;
      align-items: flex-start;
      padding-top: $header-bar-height-md;
    }

    &__nav-wrapper {
      width: calc(50% - 90px);
      min-height: 100%;
    }

    &__nav-main,
    &__nav-side {
      padding: 38px 0;

      .container {
        margin-right: 0;
        max-width: 390px;
      }
    }

    &__nav-items {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &__nav-item {
      padding: 19px 0;
      border-bottom: none;
    }

    &__nav-arrow {
      margin-left: 12px;
      margin-right: 0;
    }

    &__panel {
      flex: 1;
      height: 100%;
    }

    &__call-btn {
      margin-top: 0;
      margin-right: 30px;
      width: auto;
    }

    &__phone {
      flex-shrink: 0;
      margin-right: 22px;
    }

    &__phone-num {
      display: inline;
      font-weight: bold;
      font-size: 15px;
    }

    &__bar {
      height: $header-bar-height-md;
    }

    &__nav {
      display: flex;
    }

    &__line {
      display: block;
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      padding: 7px 0;
      transition: transform 0.3s ease;

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

    &__favorite {
      margin-right: -1px;
      width: 730px;
      box-shadow: 0px 9px 30px 0px rgba(0, 0, 0, 0.06);
    }
  }

  @include media(lg) {
    transition: transform 0.3s ease;

    &.is-short {
      transform: translateY(-$nav-panel-height-lg);

      #{$b} {
        &__overlay,
        &__favorite {
          top: $nav-panel-height-lg;
        }
      }
    }

    &__panel {
      position: relative;
      height: $nav-panel-height-lg;
      z-index: 2;
    }

    &__bar {
      height: $header-bar-height-lg;

      .container {
        height: 100%;
      }
    }

    &__row {
      height: 100%;
    }

    &__menu-btn {
      display: none;
    }

    &__logo {
      width: 145px;
    }

    &__nav {
      height: 100%;
    }

    &__nav-item {
      margin-right: 25px;
      padding: 0;
      border-bottom: none;
      font-size: 14px;
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

    &__call-btn {
      margin-right: 22px;
      margin-bottom: 10px;
      width: auto;
    }
  }

  @include media(xl) {
    &.is-short {
      transform: translateY(-$nav-panel-height-xl);

      #{$b} {
        &__overlay,
        &__favorite {
          top: $nav-panel-height-xl;
        }
      }
    }

    &__panel {
      height: $nav-panel-height-xl;
    }

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
    }

    &__phone-num {
      font-size: 17px;
    }
  }
}
</style>
