<template>
  <div class="side-fixed">
    <div
      class="side-fixed__img"
      :style="`background-image: url(${require(`@/assets/img/${pageData.img}`)})`"
    ></div>
    <div
      v-if="!$_media.sm"
      class="side-fixed__menu"
      :class="{'is-active': isActiveMenu}"
    >
      <nav class="side-fixed__menu-list">
        <router-link
          v-for="(item, index) in menu"
          :key="index"
          :to="{name: item.route}"
          class="side-fixed__menu-item"
        >
          {{item.title}}
        </router-link>
      </nav>
    </div>
    <div
      ref="content"
      class="side-fixed__content"
      :class="{'is-active': isActiveContent}"
    >
      <div
        v-if="$_media.sm"
        class="side-fixed__menu"
      >
        <nav class="side-fixed__menu-list">
          <router-link
            v-for="(item, index) in menu"
            :key="index"
            :to="{name: item.route}"
            class="side-fixed__menu-item"
          >
            {{item.title}}
          </router-link>
        </nav>
      </div>
      <div class="side-fixed__header">
        <div class="container container_side-fixed">
          <p
            v-if="!$_media.sm"
            class="side-fixed__category"
          >
            О компании
          </p>
          <h1 class="side-fixed__heading">{{pageData.heading}}</h1>
          <p
            v-for="(item, index) in pageData.desc"
            :key="index"
            class="side-fixed__desc"
          >
            {{item}}
          </p>
        </div>
      </div>
      <div class="side-fixed__wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
const menu = [
  { title: 'Производство', route: 'main' },
  { title: 'Материалы', route: 'materials' },
  { title: 'Команда', route: 'team' },
  { title: 'Оплата', route: 'payment' },
  { title: 'Гарантия', route: 'guarantee' },
  { title: 'Вакансии', route: 'vacancy' }
]

export default {
  name: 'SideFixed',
  props: {
    pageData: Object
  },
  data() {
    return {
      menu: menu,
      isActiveMenu: true,
      isActiveContent: false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const content = this.$refs.content

      this.isActiveMenu = window.innerHeight < content.getBoundingClientRect().top + content.offsetHeight
      this.isActiveContent = window.scrollY > 0
    }
  }
}
</script>

<style lang="scss">
.side-fixed {
  $b: &;

  &__img {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    pointer-events: none;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.4;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0, #12131e, transparent 61%);
      opacity: 0.54;
    }
  }

  &__content {
    position: relative;
    padding-top: (calc(100vh - #{$header-bar-height + 170px}));
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: 100%;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      transition: transform 0.5s ease 0.5s;
      z-index: -1;
    }

    &.is-active {
      &::before {
        transform: translateX(-100%);
        transition: transform 0.5s ease;
      }

      #{$b} {
        &__heading {
          color: $color-primary;
          transition: color 0.5s ease;
        }

        &__desc,
        &__wrapper {
          opacity: 1;
          transform: none;
          pointer-events: all;
        }

        &__desc {
          transition: opacity 0.5s ease 0.5s, color 0.5s ease 0.5s;
        }

        &__wrapper {
          transition: opacity 0.5s ease 0.5s;
        }
      }
    }
  }

  &__menu {
    margin-bottom: 8px;
    padding-top: 50px;
    overflow: hidden;
  }

  &__menu-list {
    display: flex;
    padding-bottom: 20px;
    margin-bottom: -20px;
    overflow-x: scroll;

    &::before,
    &::after {
      content: '';
      flex-shrink: 0;
      width: calc(50% - 150px);
    }

    &::before {
      order: -1;
    }
  }

  &__menu-item {
    padding: 8px 14px;
    border-radius: 100px;
    font-weight: 500;
    font-size: 12px;
    color: #d8d8d8;

    &.is-active {
      order: -1;
      color: $color-lightgray;
      background-color: $color-lightviolet;
    }
  }

  &__heading {
    color: #fff;
    transition: color 0.5s ease 0.5s;
  }

  &__desc {
    margin-top: 28px;
    font-weight: 500;
    font-size: 14px;
    line-height: (30/14);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;

    & + & {
      margin-top: 12px;
    }
  }

  &__wrapper {
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  @include media(md) {
    &__menu {
      position: fixed;
      top: calc(50% + #{$header-bar-height-md / 2});
      padding-top: 0;
      margin-bottom: 0;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-50%);
      transition: opacity 0.3s ease;

      &.is-active {
        opacity: 1;
        pointer-events: all;
      }

      &-list {
        flex-direction: column;
        padding-bottom: 0;
        margin-bottom: 0;
        overflow-x: visible;

        &::before,
        &::after {
          display: none;
        }
      }

      &-item {
        padding: 14px 44px 14px 30px;
        border-radius: 0 0 30px 0;
        font-size: 14px;

        &.is-active {
          order: 0;
          color: $color-lightgray;
          background-color: rgba($color-lightgray, 0.5);
        }
      }
    }

    &__content {
      margin-left: auto;
      width: 76.5%;
      padding-top: calc(100vh - #{$header-bar-height-md + 325px});

      &.is-active {
        #{$b} {
          &__desc {
            color: $color-primary;
            transition: color 0.5s ease;
          }
        }
      }
    }

    &__header {
      padding-top: 50px;
    }

    &__category {
      font-weight: bold;
      font-size: 14px;
      color: $color-green;
      text-transform: uppercase;
    }

    &__heading {
      margin-top: 4px;
    }

    &__desc {
      margin-top: 18px;
      max-width: 620px;
      font-size: 16px;
      line-height: (32/16);
      color: #fff;
      opacity: 1;
      transition: color 0.5s ease 0.5s;
      pointer-events: all;
    }
  }

  @include media(lg) {
    &__menu {
      top: calc(50% + #{($header-bar-height-lg + $nav-panel-height-lg) / 2});
    }

    &__content {
      width: 75%;
      padding-top: calc(100vh - #{$header-bar-height-lg + $nav-panel-height-lg + 325px});
    }

    &__desc {
      max-width: 790px;
    }
  }

  @include media(xl) {
    &__menu {
      top: calc(50% + #{($header-bar-height-xl + $nav-panel-height-xl) / 2});
    }

    &__menu-item {
      padding: 20px 50px 20px 40px;

      font-size: 16px;
    }

    &__content {
      width: 73.7%;
      padding-top: calc(100vh - #{$header-bar-height-xl + $nav-panel-height-xl + 445px});
    }

    &__desc {
      max-width: 920px;
    }
  }
}
</style>
