<template>
  <div class="nav-panel">
    <div class="container">
      <div class="nav-panel__row">
        <nav class="nav-panel__items">
          <template
            v-for="(item, index) in menu"
            :key="index"
          >
            <div
              v-if="item.submenu"
              class="nav-panel__item nav-panel__item_dd"
              :class="{'is-active': activeSubmenu}"
            >
              <span
                class="nav-panel__dd-expand"
                @click="toggleSubmenu"
              >
                {{item.title}}
                <AppIcon
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
                    v-for="(subitem, index) in item.submenu"
                    :key="index"
                    class="nav-panel__dropdown-item"
                    @click="handleSubmenuClick"
                  >
                    <router-link :to="{ name: subitem.route }">{{subitem.title}}</router-link>
                  </span>
                </div>
              </div>
            </div>
            <span
              v-else
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
          </template>
        </nav>
        <div class="nav-panel__contacts">
          <div class="nav-panel__social">
            <a
              href="#"
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
              href="#"
              class="nav-panel__social-item"
            >
              <AppIcon
                class="nav-panel__social-icon"
                width="19"
                height="19"
                name="insta"
              />
            </a>
          </div>
          <div class="nav-panel__city">
            <AppIcon
              class="nav-panel__city-icon"
              name="pin"
            />
            <a href="#">Санкт-Петербург</a>
          </div>
          <p class="nav-panel__time">Ежедневно с 10 до 22</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

const menu = [
  {
    title: 'О компании',
    submenu: [
      { route: 'main', title: 'Производство' },
      { route: 'materials', title: 'Материалы' },
      { route: 'team', title: 'Команда' },
      { route: 'payment', title: 'Оплата' },
      { route: 'guarantee', title: 'Гарантии' },
      { route: 'vacancy', title: 'Вакансии' }
    ]
  },
  { route: 'main', title: 'Замер' },
  { route: 'delivery', title: 'Доставка' },
  { route: 'main', title: 'Сборка' },
  { route: 'discount', title: 'Акции' },
  { route: 'contacts', title: 'Контакты' }
]

export default {
  name: 'NavPanel',
  components: {
    AppIcon
  },
  emits: [
    'close-menu'
  ],
  data() {
    return {
      menu: menu,
      activeSubmenu: false
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
    }
  }
}
</script>

<style lang="scss">
.nav-panel {
  $b: &;

  padding: 35px 0 28px;
  background-color: $color-lightgray;

  &__items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__item {
    margin-bottom: 17px;
    font-weight: 500;
    font-size: 11px;
    text-transform: uppercase;
    color: #7f7f7f;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    &_dd {
      width: 100%;
    }

    &.is-active {
      #{$b} {
        &__arrow {
          transform: rotate(180deg);
        }
      }
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

    &:last-child {
      margin-right: 0;
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

  &__time {
    border-left: 1px solid #7d7d7d;
    padding-left: 15px;
    font-size: 11px;
    color: #989898;
  }

  @include media(lg) {
    display: flex;
    height: $nav-panel-height-lg;
    padding: 0;

    &__row {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    &__items {
      flex-direction: row;
      align-items: stretch;
    }

    &__item {
      display: flex;
      align-items: center;
      position: relative;
      margin-right: 23px;
      margin-bottom: 0;
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

    &__time {
      margin-top: 0;
    }
  }

  @include media(xl) {
    height: $nav-panel-height-xl;

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
