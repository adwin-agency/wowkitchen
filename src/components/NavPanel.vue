<template>
  <div class="nav-panel">
    <div class="container">
      <div class="nav-panel__row">
        <nav class="nav-panel__items">
          <div class="nav-panel__items-group">
            <div
              class="nav-panel__item nav-panel__item_dd"
              :class="{'is-open': activeSubmenu}"
            >
              <span
                class="nav-panel__dd-expand"
                @click="toggleSubmenu"
              >
                {{menu[0].title}}
                <AppIcon
                  v-if="!$_media.md"
                  class="nav-panel__arrow"
                  name="angle-down"
                />
              </span>
              <div
                class="nav-panel__dropdown"
                ref="dropdown"
              >
                <div class="nav-panel__dropdown-inner">
                  <span
                    v-for="(subitem, index) in menu[0].submenu"
                    :key="index"
                    class="nav-panel__dropdown-item"
                    @click="handleSubmenuClick"
                  >
                    <router-link :to="{ name: subitem.route }">{{subitem.title}}</router-link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-panel__items-group">
            <span
              v-for="(item, index) in menu.slice(1)"
              :key="index"
              class="nav-panel__item"
              @click="$emit('close-menu')"
            >
              <router-link
                :to="{ name: item.route }"
                class="nav-panel__item"
              >
                {{item.title}}
              </router-link>
            </span>
          </div>
        </nav>
        <div class="nav-panel__contacts">
          <div class="nav-panel__social">            
            <a
              href="https://www.instagram.com/wowkitchen.ru/"
              target="_blank"
              class="nav-panel__social-item"
            >
              <AppIcon
                class="nav-panel__social-icon"
                width="19"
                height="19"
                name="insta"
              />
            </a>
            <a
              href="https://vk.com/wowkitchen_ru"
              target="_blank"
              class="nav-panel__social-item"
            >
              <AppIcon
                class="nav-panel__social-icon"
                width="23"
                height="23"
                name="vk"
              />
            </a>
            <a
              href="https://www.facebook.com/WoW-Kitchen-%D0%9A%D1%83%D1%85%D0%BD%D0%B8-%D0%B8-%D1%88%D0%BA%D0%B0%D1%84%D1%8B-%D0%BA%D1%83%D0%BF%D0%B5-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7-108783591454436"
              target="_blank"
              class="nav-panel__social-item"
            >
              <AppIcon
                class="nav-panel__social-icon"
                width="23"
                height="23"
                name="facebook"
              />
            </a>
          </div>
          <div class="nav-panel__city">
            <button
              type="button"
              class="nav-panel__city-btn"
              @click="toggleCityBox"
            >
              <AppIcon
                class="nav-panel__city-icon"
                name="pin"
              />
              {{cityName}}
            </button>
            <AppCity
              arrow
              class="nav-panel__city-box"
              :class="{'is-active': cityDetection || activeCityBox}"
              @apply="applyCity"
            />
          </div>
          <p class="nav-panel__time">Ежедневно с 10 до 22</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCity from './base/AppCity.vue'
import AppIcon from './base/AppIcon.vue'

const menu = [
  {
    title: 'О компании',
    submenu: [
      { route: 'about', title: 'О нас' },
      { route: 'materials', title: 'Материалы' },
      { route: 'team', title: 'Команда' },
      { route: 'payment', title: 'Оплата' },
      { route: 'guarantee', title: 'Гарантии' },
      { route: 'vacancy', title: 'Вакансии' }
    ]
  },
  { route: 'sizing', title: 'Замер' },
  { route: 'delivery', title: 'Доставка' },
  { route: 'installing', title: 'Сборка' },
  { route: 'discount', title: 'Акции' },
  { route: 'reviews', title: 'Отзывы' },
  { route: 'contacts', title: 'Контакты' }
]

export default {
  name: 'NavPanel',
  components: {
    AppIcon,
    AppCity
  },
  emits: ['close-menu'],
  data() {
    return {
      menu: menu,
      activeSubmenu: false,
      activeCityBox: false
    }
  },
  computed: {
    cityDetection() {
      return this.$store.state.cityDetection
    },
    cityName() {
      return this.$store.state.cities[this.$store.state.activeCity]?.name
    }
  },
  methods: {
    toggleSubmenu() {
      if (this.$_desktop) {
        return
      }

      this.activeSubmenu = !this.activeSubmenu

      const dropdown = this.$refs.dropdown
      dropdown.style.height = this.activeSubmenu ? dropdown.scrollHeight + 'px' : ''
    },
    handleSubmenuClick() {
      this.toggleSubmenu()
      this.$emit('close-menu')
    },

    toggleCityBox() {
      this.activeCityBox = !this.activeCityBox
    },

    applyCity() {
      this.activeCityBox = false
    }
  }
}
</script>

<style lang="scss">
.nav-panel {
  $b: &;

  padding: 35px 0 130px;
  background-color: $color-lightgray;

  &__items-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 17px;
  }

  &__item {
    margin-bottom: 17px;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    color: #7f7f7f;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    &_dd {
      width: 100%;
    }

    &.is-open {
      #{$b} {
        &__arrow {
          transform: rotate(180deg);
        }
      }
    }

    &.is-active {
      color: $color-green;
    }
  }

  &__dd-expand {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__arrow {
    width: 9px;
    height: 9px;
    margin-right: 18px;
    fill: $color-primary;
    transition: transform 0.3s ease;
  }

  &__dropdown {
    width: 100%;
    height: 0;
    transition: height 0.3s ease;
    overflow: hidden;
    cursor: auto;
  }

  &__dropdown-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 30px;
  }

  &__dropdown-item {
    margin-bottom: 17px;
    text-transform: none;
    color: #aca8c3;

    &:last-child {
      margin-bottom: 0;
    }

    a.is-active {
      color: $color-green;
    }
  }

  &__contacts {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 38px;
  }

  &__social {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__social-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23px;
    height: 23px;
    margin-right: 18px;
    transition: opacity 0.3s ease;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      opacity: 0.9;
    }
  }

  &__social-icon {
    fill: #aca8c3;
  }

  &__city,
  &__time {
    margin-top: 10px;
  }

  &__city {
    position: relative;
  }

  &__city-btn {
    display: flex;
    align-items: center;
    margin-right: 28px;
    font-size: 11px;
    color: #989898;
    text-decoration: underline;
  }

  &__city-icon {
    width: 11px;
    height: 15px;
    margin-right: 8px;
    fill: currentColor;
    fill-rule: evenodd;
  }

  &__city-box {
    position: absolute;
    left: 0;
    bottom: 100%;
    margin-bottom: 10px;
    width: 290px;
    opacity: 0;
    pointer-events: none;

    &.is-active {
      opacity: 1;
      pointer-events: all;
    }
  }

  &__time {
    border-left: 1px solid #7d7d7d;
    padding-left: 15px;
    font-size: 11px;
    color: #989898;
  }

  @include media(md) {
    display: flex;
    padding: 65px 0 130px;

    .container {
      margin-left: 0;
      max-width: 570px;
    }

    &__row {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0 55px;
    }

    &__items {
      display: flex;
      margin-bottom: auto;
    }

    &__items-group {
      margin-right: 160px;
      margin-bottom: 0;

      &:last-child {
        margin-right: 0;
      }
    }

    &__item {
      margin-bottom: 36px;
    }

    &__dropdown {
      height: auto;

      &-inner {
        padding: 32px 0 0;
      }

      &-item {
        margin-bottom: 20px;
      }
    }

    &__social {
      width: auto;
      margin-right: 50px;
    }

    &__city,
    &__time {
      margin-top: 0;
    }
  }

  @include media(lg) {
    display: flex;
    padding: 0;

    .container {
      margin-left: auto;
      max-width: $container-max-width-lg;
    }

    &__row {
      flex-direction: row;
      justify-content: space-between;
      height: 100%;
      padding: 0;
    }

    &__items {
      margin-bottom: 0;
    }

    &__items-group {
      flex-direction: row;
      align-items: stretch;
      margin-right: 23px;
    }

    &__item {
      display: flex;
      align-items: center;
      position: relative;
      margin-right: 23px;
      margin-bottom: 0;
      font-size: 11px;
      transition: color 0.3s ease;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: #aca8c3;

        #{$b}__arrow {
          transform: rotate(180deg);
        }

        #{$b}__dropdown {
          opacity: 1;
          pointer-events: all;
        }
      }
    }

    &__arrow {
      margin-left: 3px;
      margin-right: 0;
      fill: #7f7f7f;
    }

    &__dropdown {
      position: absolute;
      left: 0;
      top: 100%;
      width: auto;
      min-width: 240px;
      height: auto;
      background-color: #fff;
      box-shadow: 0px 9px 30px 0px rgba(0, 0, 0, 0.06);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    &__dropdown-inner {
      padding: 45px 55px;
    }

    &__dropdown-item {
      font-size: 12px;
      color: $color-primary;
      transition: color 0.3s ease;

      &:hover {
        color: #aca8c3;
      }
    }

    &__contacts {
      flex-wrap: nowrap;
      margin-top: 0;
    }

    &__social {
      width: auto;
      margin-right: 52px;
    }

    &__city {
      margin-top: 0;
    }

    &__city-box {
      left: -100px;
      top: 100%;
      bottom: auto;
      margin-top: 10px;
      width: 380px;
      margin-bottom: 0;
    }

    &__time {
      margin-top: 0;
    }
  }

  @include media(xl) {
    .container {
      margin-left: auto;
      max-width: $container-max-width-xl;
    }

    &__item {
      margin-right: 36px;
      padding: 16px 0;
    }

    &__contacts {
      padding: 10px 0;
    }
  }
}
</style>
