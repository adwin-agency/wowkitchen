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
      <AppVideoButton
        v-if="!$_media.sm && pageData.video"
        title="О производстве"
        :video="pageData.video"
        simple
        class="side-fixed__video"
      />
    </div>
    <div
      ref="content"
      class="side-fixed__content"
      :class="{'is-active': isActiveContent}"
    >
      <div
        v-if="$_media.sm"
        class="side-fixed__menu side-fixed__menu_video"
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
      <div class="side-fixed__header side-fixed__header_video">
        <div class="container container_side-fixed">
          <p
            v-if="!$_media.sm"
            class="side-fixed__category"
          >
            О компании
          </p>
          <h1 class="side-fixed__heading">{{pageData.heading}}</h1>
          <AppVideoButton
            v-if="$_media.sm && pageData.video"
            title="О производстве"
            :video="pageData.video"
            simple
            class="side-fixed__video"
          />
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
import AppVideoButton from './base/AppVideoButton.vue'

const menu = [
  { title: 'О нас', route: 'about' },
  { title: 'Материалы', route: 'materials' },
  { title: 'Команда', route: 'team' },
  { title: 'Оплата', route: 'payment' },
  { title: 'Гарантия', route: 'guarantee' },
  { title: 'Вакансии', route: 'vacancy' }
]

export default {
  name: 'SideFixed',
  components: {
    AppVideoButton
  },
  props: {
    pageData: Object
  },
  data() {
    return {
      menu: menu,
      isActiveMenu: true,
      isActiveContent: false,
      isAnim: false,
      touchY: null
    }
  },
  computed: {
    scrollLock() {
      return this.$store.getters.scrollLock
    }
  },
  mounted() {
    this.$store.commit('setIntroEffect', true)
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('wheel', this.handleWheel)
    window.addEventListener('touchstart', this.handleTouchstart)
    window.addEventListener('touchend', this.handleTouchend)
  },
  unmounted() {
    this.$store.commit('setIntroEffect', false)
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('wheel', this.handleWheel)
    window.removeEventListener('touchstart', this.handleTouchstart)
    window.removeEventListener('touchend', this.handleTouchend)
  },
  methods: {
    disableContent() {
      this.isAnim = true
      this.$store.commit('setIntroEffect', true)
      this.isActiveContent = false

      setTimeout(() => {
        this.isAnim = false
      }, 500)
    },

    enableContent() {
      this.isAnim = true
      this.isActiveContent = true

      setTimeout(() => {
        this.$store.commit('setIntroEffect', false)
      }, 200)

      setTimeout(() => {
        this.isAnim = false
      }, 500)
    },

    handleScroll() {
      const content = this.$refs.content

      this.isActiveMenu = window.innerHeight < content.getBoundingClientRect().top + content.offsetHeight
    },

    handleTouchstart(e) {
      this.touchY = e.touches[0].clientY
    },

    handleTouchend(e) {
      if (this.isAnim || e.target.closest('.side-fixed__menu') || this.scrollLock) {
        return
      }

      const deltaY = e.changedTouches[0].clientY - this.touchY

      if (deltaY < 0 && !this.isActiveContent) {
        this.enableContent()
      } else if (deltaY > 0 && window.scrollY < 50 && this.isActiveContent) {
        this.disableContent()
      }
    },

    handleWheel(e) {
      if (this.isAnim || this.scrollLock) {
        return
      }

      if (e.deltaY > 0 && !this.isActiveContent) {
        this.enableContent()
      } else if (e.deltaY < 0 && window.scrollY < 50 && this.isActiveContent) {
        this.disableContent()
      }
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
    right: 0;
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
        &__menu,
        &__header {
          transform: none;
          transition: transform 0.5s ease;
        }

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

  &__menu,
  &__header {
    transform: translateY(calc(100vh - #{$header-bar-height + 200px}));
    transition: transform 0.5s ease 0.5s;

    &_video {
      transform: translateY(calc(100vh - #{$header-bar-height + 280px}));
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
      width: calc(50vw - #{$container-max-width / 2 - $container-padding});
      min-width: $container-padding;
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

  &__video {
    margin-top: 20px;
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
      transform: translateY(calc(100vh - #{$header-bar-height-md + 325px}));
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

    &__video {
      margin-top: 50px;
      margin-left: 30px;
    }
  }

  @include media(lg) {
    &__menu {
      top: calc(50% + #{($header-bar-height-lg + $nav-panel-height-lg) / 2});
    }

    &__content {
      width: 75%;
    }

    &__header {
      transform: translateY(calc(100vh - #{$header-bar-height-lg + $nav-panel-height-lg + 325px}));
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
    }

    &__header {
      transform: translateY(calc(100vh - #{$header-bar-height-xl + $nav-panel-height-xl + 445px}));
    }

    &__desc {
      max-width: 920px;
    }
  }
}
</style>
