<template>
  <div class="nav-menu">
    <div
      v-if="$_mobile"
      class="nav-menu__header"
    >
      <span
        class="nav-menu__back"
        @click="$emit('close-submenu')"
      >
        <AppIcon
          class="nav-menu__arrow"
          name="angle-down"
        />
      </span>
      <router-link
        :to="{ name: menu.main.path }"
        class="nav-menu__header-link"
      >
        {{menu.main.title}}
      </router-link>
    </div>
    <div class="nav-menu__row">
      <div class="nav-menu__main">
        <div
          v-for="(group, index) in menu.groups"
          :key="index"
          class="nav-menu__main-col"
        >
          <p
            v-if="group.title"
            class="nav-menu__title"
          >
            <AppIcon
              v-if="group.icon"
              :name="group.icon"
              class="nav-menu__title-icon"
            />
            {{group.title}}
          </p>
          <div class="nav-menu__list">
            <span
              v-for="(item, index) in group.items"
              :key="index"
              class="nav-menu__item"
              @click="$emit('close-menu')"
            >
              <router-link
                :to="{name: item.path, query: item.query}"
                :active-class="JSON.stringify($route.query) === JSON.stringify(item.query) ? 'is-active' : ''"
              >{{item.title}}</router-link>
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="$_desktop"
        class="nav-menu__side"
      >
        <div class="nav-menu__side-col">
          <p class="nav-menu__title">Акции</p>
          <router-link
            to="/discount"
            class="nav-menu__card"
          >
            <div class="nav-menu__discount">
              <span class="nav-menu__discount-num">50%</span>
              <span class="nav-menu__discount-title">на кухни и шкафы</span>
              <span class="nav-menu__discount-note">{{promo}}</span>
            </div>
          </router-link>
        </div>
        <div class="nav-menu__side-col">
          <p class="nav-menu__title">Блог</p>
          <ArticleCard
            v-if="article"
            :cardData="article"
            mod="nav"
            class="nav-menu__card"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'NavMenu',
  components: {
    AppIcon,
    ArticleCard
  },
  props: {
    menu: Object,
    article: Object
  },
  emits: ['close-menu', 'close-submenu'],
  computed: {
    promo() {
      return this.$store.state.promo
    }
  }
}
</script>

<style lang="scss">
.nav-menu {
  &__header {
    display: flex;
    align-items: center;

    &-link {
      padding: 18px 0;
      font-weight: 600;
      font-size: 18px;
      line-height: 1;
    }
  }

  &__back {
    display: flex;
    align-items: center;
    padding: 18px 0;
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
    border-top: 1px solid $color-lightgray;
    padding-top: 34px;
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

    a.is-active {
      color: $color-green;
    }
  }

  @include media(lg) {
    padding: 45px 0 60px;

    &__row {
      display: flex;
      justify-content: space-between;
      margin-top: 0;
      border-top: none;
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
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 14px;

      &-icon {
        width: 18px;
        height: 16px;
        margin-right: 10px;
      }
    }

    &__list {
      margin-top: 36px;
    }

    &__item {
      margin-bottom: 22px;
    }

    &__side {
      display: flex;
      align-self: flex-start;
    }

    &__side-col {
      display: flex;
      flex-direction: column;
      margin-right: 40px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__card {
      display: block;
      position: relative;
      margin-top: 20px;
      width: 300px;
      height: 100%;
      border-radius: 4px;
    }

    &__discount {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: #f6f6f6;

      &-num {
        padding: 15px 30px;
        border-radius: 30px 0 30px 0;
        font-size: 30px;
        font-weight: bold;
        color: #fff;
        background-color: $color-pink;
      }

      &-title {
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.2;
        margin-top: 10px;
      }

      &-note {
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.875;
        margin-top: 10px;
        padding: 10px;
        background-color: #f6e43e;
      }
    }
  }

  @include media(xl) {
    &__side {
      margin-right: 130px;
    }
  }
}
</style>
