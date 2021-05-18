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
        <a
          v-for="(item, index) in menu"
          :key="index"
          href="#"
          class="side-fixed__menu-item"
          :class="{'is-active': pageData.id === item.id}"
        >
          {{item.title}}
        </a>
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
          <a
            v-for="(item, index) in menu"
            :key="index"
            href="#"
            class="side-fixed__menu-item"
            :class="{'is-active': pageData.id === item.id}"
          >
            {{item.title}}
          </a>
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
export default {
  name: 'SideFixed',
  props: {
    pageData: Object
  },
  data() {
    return {
      menu: [
        { id: 'guarantee', title: 'Гарантия' },
        { id: 'vacancy', title: 'Вакансии' },
        { id: 'production', title: 'Производство' },
        { id: 'materials', title: 'Материалы' },
        { id: 'team', title: 'Команда' },
        { id: 'payment', title: 'Оплата' }
      ],

      isActiveMenu: false,
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
      this.isActiveContent = window.pageYOffset > 100
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
    // padding-top: (calc(100vh - 120px));
    padding-top: 545px;
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
  }

  &__menu-item {
    padding: 8px 14px;
    border-radius: 100px;
    font-weight: 500;
    font-size: 12px;
    color: #d8d8d8;

    &.is-active {
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

    & + & {
      margin-top: 12px;
    }
  }

  &__wrapper {
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  @include media(md) {
    &__menu {
      position: fixed;
      top: 50%;
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
    }
  }

  @include media(lg) {
    &__content {
      width: 75%;
    }

    &__desc {
      max-width: 790px;
    }
  }

  @include media(xl) {
    &__menu-item {
      padding: 20px 50px 20px 40px;

      font-size: 16px;
    }

    &__content {
      width: 73.7%;
    }

    &__desc {
      max-width: 920px;
    }
  }
}
</style>
