<template>
  <footer class="footer">
    <div class="footer__main">
      <div class="container">
        <div class="footer__main-inner">
          <nav class="footer__menu">
            <div
              v-for="(item, index) in menu"
              :key="index"
              class="footer__menu-item"
              :class="[{'footer__menu-item_link': !item.submenu}, {'footer__menu-item_lg': item.submenu && item.submenu.length > 6}]"
            >
              <template v-if="item.submenu">
                <span
                  class="footer__menu-title"
                  @click="toggleSubmenu(item.id)"
                >
                  {{item.title}}
                  <AppIcon
                    class="footer__menu-arrow"
                    :class="{'is-active': activeSubmenu === item.id}"
                    name="angle-down"
                  />
                </span>
                <div
                  :ref="item.id"
                  class="footer__submenu"
                >
                  <router-link
                    v-for="(submenuItem, index) in item.submenu"
                    :key="index"
                    :to="{name: submenuItem.route}"
                    class="footer__submenu-item"
                    :class="{'footer__submenu-item_accented': submenuItem.accented}"
                  >
                    {{submenuItem.title}}
                  </router-link>
                </div>
              </template>
              <router-link
                v-else
                :to="{name: item.route}"
                class="footer__menu-title"
              >
                {{item.title}}
              </router-link>
            </div>
          </nav>
          <div class="footer__main-footer">
            <a
              href="#"
              class="footer__policy"
              target="_blank"
            >
              Политика конфиденциальности
            </a>
            <div class="footer__payment">
              <AppIcon
                name="visa"
                class="footer__payment-icon"
              />
              <AppIcon
                name="mastercard"
                class="footer__payment-icon"
              />
              <AppIcon
                name="visa"
                class="footer__payment-icon"
              />
              <AppIcon
                name="mastercard"
                class="footer__payment-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__side">
      <div class="container">
        <div class="footer__side-inner">
          <div class="footer__city">
            <button
              type="button"
              class="footer__city-btn"
              @click="toggleCityBox"
            >
              <AppIcon
                name="pin"
                class="footer__city-icon"
              />
              {{cityName}}
            </button>
            <AppCity
              class="footer__city-box"
              :class="{'is-active': activeCityBox}"
              @apply="applyCity"
            />
          </div>          
          <a
            :href="`tel:${cityPhone}`"
            class="footer__phone"
          >
            {{cityPhone}}
          </a>
          <p class="footer__time">Ежедневно с 10 до 22</p>
          <AppButton
            title="Консультация дизайнера"
            figure
            shadow
            modalName="designer"
            class="footer__btn"
          />
          <div class="footer__social">
            <p class="footer__social-title">Мы в соцсетях</p>
            <a
              href="#"
              class="footer__social-link"
            >
              <AppIcon
                name="insta"
                class="footer__social-icon"
              />
            </a>
            <a
              href="#"
              class="footer__social-link"
            >
              <AppIcon
                name="vk"
                class="footer__social-icon"
              />
            </a>
          </div>
          <div class="footer__requisites">
            <p
              class="footer__requisites-title"
              @click="openRequisites"
            >
              Реквизиты
            </p>
            <p
              ref="requisites"
              class="footer__requisites-desc"
            >
              ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ЯНДЕКС"<br>
              Адрес г. Москва, ул. Льва Толстого, д. 16<br>
              ИНН 7736207543<br>
              ОГРН 1027700229193<br>
              КПП 770401001<br>
              ОКАТО 45286590000<br>
              ОКПО 55187675<br>
              ОКТМО 45383000000
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AppIcon from './base/AppIcon.vue'
import AppButton from './base/AppButton.vue'
import AppCity from './base/AppCity.vue'

const menu = [
  {
    id: 'kitchens',
    title: 'Кухни',
    submenu: [
      { title: 'Прямые', route: 'kitchens' },
      { title: 'Угловые', route: 'kitchens' },
      { title: 'П-образные', route: 'kitchens' },
      { title: 'С барной стойкой', route: 'kitchens' },
      { title: 'С островом', route: 'kitchens' }
    ]
  },
  {
    id: 'closets',
    title: 'Шкафы-купе',
    route: 'wardrobes'
  },
  {
    id: 'technics',
    title: 'Техника',
    submenu: [
      { title: 'Плиты', route: 'technics' },
      { title: 'Варочные панели', route: 'technics' },
      { title: 'Вытяжки', route: 'technics' },
      { title: 'Посудомоечные машины', route: 'technics' },
      { title: 'Мойки', route: 'technics' },
      { title: 'Смесители', route: 'technics' }
    ]
  },
  {
    id: 'company',
    title: 'Компания',
    submenu: [
      { title: 'Блог', route: 'blog' },
      { title: 'О производстве', route: 'main' },
      { title: 'Вакансии', route: 'vacancy' },
      { title: 'Доставка', route: 'delivery' },
      { title: 'Сборка', route: 'main' },
      { title: 'Гарантия', route: 'guarantee' },
      { title: 'Материалы', route: 'materials' },
      { title: 'Подбор кухни', route: 'quiz', accented: true },
      { title: 'Контакты', route: 'contacts' }
    ]
  }
]

export default {
  name: 'Footer',
  components: {
    AppButton,
    AppIcon,
    AppCity
  },
  data() {
    return {
      menu: menu,
      activeSubmenu: null,
      activeRequisites: false,
      activeCityBox: false
    }
  },
  computed: {
    cityName() {
      return this.$store.state.cities[this.$store.state.activeCity]?.name
    },
    cityPhone() {
      return this.$store.state.cities[this.$store.state.activeCity]?.phone
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    toggleSubmenu(id) {
      if (this.$_windowWidth >= this.$_breakpoints.lg) {
        return
      }

      if (this.activeSubmenu === id) {
        const closing = this.$refs[id]
        closing.style.height = ''

        this.activeSubmenu = null
      } else {
        if (this.activeSubmenu) {
          const closing = this.$refs[this.activeSubmenu]
          closing.style.height = ''
        }

        const opening = this.$refs[id]
        opening.style.height = opening.scrollHeight + 'px'

        this.activeSubmenu = id
      }
    },

    openRequisites() {
      if (this.$_windowWidth >= this.$_breakpoints.md || this.activeRequisites) {
        return
      }

      const requisites = this.$refs.requisites
      requisites.style.height = requisites.scrollHeight + 'px'
      this.activeRequisites = true
    },

    handleResize() {
      if (this.$_windowWidth >= this.$_breakpoints.md && this.activeRequisites) {
        this.$refs.requisites.style.height = ''
        this.activeRequisites = false
      }

      if (this.$_windowWidth >= this.$_breakpoints.lg && this.activeSubmenu) {
        this.$refs[this.activeSubmenu].style.height = ''
        this.activeSubmenu = null
      }
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
.footer {
  position: relative;
  background-color: #636363;
  z-index: 1;

  &__main {
    padding: 22px 0 16px;
    text-align: center;
    background-color: #4d4d4d;
  }

  &__menu {
    margin: 0 -10px;
    text-align: left;
  }

  &__menu-item {
    padding: 10px 0;
    border-bottom: 1px solid #636363;

    &:last-child {
      border-bottom: none;
    }
  }

  &__menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    color: #f3f4f9;
  }

  &__menu-arrow {
    width: 10px;
    height: 7px;
    margin-right: 2px;
    fill: currentColor;
    transition: transform 0.3s ease;

    &.is-active {
      transform: rotate(180deg);
    }
  }

  &__submenu {
    height: 0;
    padding: 0 10px;
    transition: height 0.3s ease;
    overflow: hidden;
  }

  &__submenu-item {
    display: inline-block;
    margin-right: 30px;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 13px;
    color: #dedede;
    white-space: nowrap;
    transition: color .3s ease;

    &:hover {
      color: $color-lightviolet;
    }

    &_accented {
      font-weight: bold;
    }
  }

  &__policy {
    display: inline-block;
    margin-top: 6px;
    font-size: 11px;
    color: #bcbcbc;
    text-decoration: underline;
  }

  &__payment {
    display: flex;
    justify-content: center;
    margin-top: 4px;
  }

  &__payment-icon {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    fill: #848484;
  }

  &__side {
    padding: 14px 0 20px;
  }

  &__side-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__city {
    position: relative;

    &-btn {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 11px;
      color: #aca8c3;
      text-decoration: underline;
    }

    &-box {
      text-align: left;
      position: absolute;
      left: 50%;
      bottom: 100%;
      margin-bottom: 10px;
      width: 290px;
      transform: translateX(-50%);
      opacity: 0;
      pointer-events: none;

      &.is-active {
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  &__city-icon {
    width: 12px;
    height: 16px;
    margin-right: 10px;
    fill: currentColor;
    fill-rule: evenodd;
  }

  &__phone {
    margin-top: 10px;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
  }

  &__time {
    font-weight: 300;
    font-size: 12px;
    color: #e2e2e2;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
    min-width: 255px;
  }

  &__social {
    display: flex;
    align-items: center;
    margin-top: 22px;
  }

  &__social-title {
    margin-right: 36px;
    font-weight: bold;
    font-size: 12px;
    color: #bcbcbc;
  }

  &__social-link {
    margin-right: 17px;
    transition: opacity .3s ease;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      opacity: 0.9;
    }
  }

  &__social-icon {
    width: 33px;
    height: 33px;
    fill: #aca8c3;
  }

  &__requisites {
    margin-top: 20px;
    text-align: center;
  }

  &__requisites-title {
    font-weight: bold;
    font-size: 12px;
    color: #bcbcbc;
  }

  &__requisites-desc {
    margin-top: 8px;
    height: 0;
    font-size: 11px;
    line-height: (16/11);
    color: #bcbcbc;
    transition: height 0.3s ease;
    overflow: hidden;
  }

  @include media(md) {
    display: flex;

    &__main {
      padding: 30px 0;
      width: calc(50% + 150px);
      border-bottom-right-radius: 100px;

      .container {
        margin-right: 0;
        max-width: #{$container-max-width-md * 0.5 + 150px};
      }
    }

    &__main-inner {
      padding-right: 110px;
    }

    &__menu {
      padding-right: 45px;
    }

    &__menu-title {
      padding: 15px 10px;
    }

    &__main-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;
    }

    &__policy {
      margin-top: 16px;
      margin-right: 20px;
    }

    &__payment {
      margin-top: 0;
    }

    &__side {
      padding: 56px 0 36px;
      width: calc(50% - 150px);

      .container {
        margin-left: 0;
        max-width: #{$container-max-width-md * 0.5 - 150px};
      }
    }

    &__side-inner {
      align-items: flex-end;
      text-align: right;
    }

    &__social {
      flex-wrap: wrap;
      justify-content: flex-end;
      margin-top: 30px;
    }

    &__social-title {
      width: 100%;
      margin: 0;
    }

    &__social-link {
      margin-top: 8px;
      margin-right: 20px;
    }

    &__requisites {
      max-width: 250px;
      text-align: right;
    }

    &__requisites-desc {
      height: auto;
    }

    &__btn {
      width: auto;
    }

    &__city-box {
      left: auto;
      right: 0;
      transform: none;
    }
  }

  @include media(lg) {
    &__main {
      width: calc(50% + 330px);
      padding: 70px 0 40px;

      .container {
        max-width: #{$container-max-width-lg * 0.5 + 330px};
      }
    }

    &__main-inner {
      padding-right: 185px;
    }

    &__menu {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding-right: 0;
    }

    &__menu-item {
      width: 31.5%;
      max-height: 100%;
      padding: 0;
      border: none;

      &_link {
        margin-top: 8px;
        order: 1;
      }

      &_lg {
        width: 37%;
      }
    }

    &__menu-title {
      display: inline-block;
      padding: 0;
    }

    &__menu-arrow {
      display: none;
    }

    &__submenu {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: flex-start;
      align-content: space-between;
      margin-top: 44px;
      height: auto;
      max-height: 200px;
      padding: 0;
    }

    &__submenu-item {
      margin-right: 6px;
      margin-bottom: 18px;
      font-size: 12px;
    }

    &__main-footer {
      margin-top: 60px;
      padding-right: 35px;
    }

    &__side {
      width: calc(50% - 330px);

      .container {
        max-width: #{$container-max-width-lg * 0.5 - 330px};
      }
    }

    &__city-box {
      width: 380px;
    }
  }

  @include media(xl) {
    &__main {
      padding: 108px 0 40px;

      .container {
        max-width: #{$container-max-width-xl * 0.5 + 330px};
      }
    }

    &__main-inner {
      padding-right: 150px;
    }

    &__menu {
      padding-right: 165px;
    }

    &__main-footer {
      margin-top: 90px;
      padding-right: 0;
    }

    &__side {
      padding: 92px 0 40px;

      .container {
        max-width: #{$container-max-width-xl * 0.5 - 330px};
      }
    }

    &__social {
      margin-top: 40px;
    }

    &__requisites {
      margin-top: 32px;
    }

    &__requisites-desc {
      margin-top: 12px;
    }
  }
}
</style>
