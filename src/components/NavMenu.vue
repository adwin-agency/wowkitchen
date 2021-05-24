<template>
  <div class="nav-menu">
    <span
      class="nav-menu__back"
      @click="$emit('close-submenu')"
    >
      <AppIcon
        class="nav-menu__arrow"
        name="angle-down"
      />
      {{title}}
    </span>
    <div class="nav-menu__row">
      <div class="nav-menu__main">
        <div class="nav-menu__main-col">
          <p class="nav-menu__title">Планировки</p>
          <div class="nav-menu__list">
            <router-link
              v-for="(item, index) in plans"
              :key="index"
              :to="{name: 'kitchens'}"
              class="nav-menu__item"
              @click="$emit('close-menu')"
            >
              {{item}}
            </router-link>
          </div>
        </div>
        <div class="nav-menu__main-col">
          <p class="nav-menu__title">Стили</p>
          <div class="nav-menu__list">
            <router-link
              v-for="(item, index) in styles"
              :key="index"
              :to="{name: 'kitchens'}"
              class="nav-menu__item"
              @click="$emit('close-menu')"
            >
              {{item}}
            </router-link>
          </div>
        </div>
      </div>
      <div class="nav-menu__side">
        <div class="nav-menu__side-col">
          <p class="nav-menu__title">Акции</p>
          <div class="nav-menu__card"></div>
        </div>
        <div class="nav-menu__side-col">
          <p class="nav-menu__title">Советы и идеи</p>
          <div class="nav-menu__card"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'NavMenu',
  components: {
    AppIcon
  },
  props: {
    title: String
  },
  data() {
    return {
      plans: ['Прямые кухни', 'Угловые кухни', 'П-образные кухни', 'Кухни с барной стойкой', 'Кухни с островом'],
      styles: ['Скандинавский', 'Лофт', 'Неоклассика', 'Минимализм']
    }
  }
}
</script>

<style lang="scss">
.nav-menu {
  &__back {
    display: flex;
    align-items: center;
    margin-bottom: 34px;
    padding: 18px 0;
    border-bottom: 1px solid $color-lightgray;
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
    cursor: pointer;
  }

  &__arrow {
    width: 9px;
    height: 9px;
    margin-right: 30px;
    transform: rotate(90deg);
    fill: currentColor;
  }

  &__row {
    margin-top: 34px;
  }

  &__side {
    display: none;
  }

  &__main-col {
    margin-top: 35px;
    padding-left: 40px;

    &:first-child {
      margin-top: 0;
    }
  }

  &__title {
    display: none;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__item {
    margin-bottom: 14px;
    font-weight: 500;
    font-size: 14px;
    transition: color 0.3s ease;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      color: #aca8c3;
    }
  }

  @include media(md) {
    padding: 45px 0 60px;

    &__back {
      display: none;
    }

    &__row {
      display: flex;
      justify-content: space-between;
      margin-top: 0;
    }

    &__main {
      display: flex;
    }

    &__main-col {
      margin-top: 0;
      margin-right: 120px;
      padding-left: 0;

      &:last-child {
        margin-right: 0;
      }
    }

    &__title {
      display: block;
      font-weight: bold;
      font-size: 14px;
    }

    &__list {
      margin-top: 36px;
    }

    &__item {
      margin-bottom: 22px;
    }
  }
}
</style>
