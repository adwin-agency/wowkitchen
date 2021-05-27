<template>
  <aside class="article-aside">
    <div
      ref="search"
      class="article-aside__search"
      :class="{'is-active': activeSearch}"
    >
      <form class="article-aside__form">
        <input
          class="article-aside__form-input"
          type="text"
          required
          @focus="openSearch"
        >
        <button
          class="article-aside__form-button"
          type="submit"
        >
          <AppIcon
            name="search"
            class="article-aside__form-icon"
          />
        </button>
      </form>
    </div>
    <div
      class="article-aside__spacer"
      :class="{'is-active': activeSearch}"
    ></div>
    <h2 class="article-aside__title">Популярные статьи</h2>
    <a class="article-aside__video-container">
      <img
        class="article-aside__video-preview"
        src="@/assets/img/articles/sidebar/1-video.png"
        alt="preview-image"
      >
      <h4 class="article-aside__video-title">Что, где и как: <br> идеи хранения на кухне</h4>
      <button class="article-aside__video-bt-play">
        <img
          class="article-aside__video-icon-play"
          src="@/assets/img/articles/icons/play.png"
          alt="play-icon"
        >
      </button>
    </a>
    <a class="article-aside__video-container">
      <img
        class="article-aside__video-preview"
        src="@/assets/img/articles/sidebar/2-video.png"
        alt="preview-image"
      >
      <h4 class="article-aside__video-title">Какой цвет выбрать для кухни в квартире на северной стороне</h4>
      <button class="article-aside__video-bt-play">
        <img
          class="article-aside__video-icon-play"
          src="@/assets/img/articles/icons/play.png"
          alt="play-icon"
        >
      </button>
    </a>
    <a class="article-aside__video-container">
      <img
        class="article-aside__video-preview"
        src="@/assets/img/articles/sidebar/3-video.png"
        alt="preview-image"
      >
      <h4 class="article-aside__video-title">Что, где и как: <br> идеи хранения на кухне</h4>
      <button class="article-aside__video-bt-play">
        <img
          class="article-aside__video-icon-play"
          src="@/assets/img/articles/icons/play.png"
          alt="play-icon"
        >
      </button>
    </a>
    <a class="article-aside__video-container">
      <img
        class="article-aside__video-preview"
        src="@/assets/img/articles/sidebar/4-video.png"
        alt="preview-image"
      >
      <h4 class="article-aside__video-title">Какой цвет выбрать для кухни в квартире на северной стороне</h4>
      <button class="article-aside__video-bt-play">
        <img
          class="article-aside__video-icon-play"
          src="@/assets/img/articles/icons/play.png"
          alt="play-icon"
        >
      </button>
    </a>
    <div class="article-aside__share">
      <p class="article-aside__share-text">Поделиться</p>
      <a
        class="article-aside__share-link"
        href="#"
      >
        <img
          class="article-aside__share-icon"
          src="@/assets/img/articles/icons/vk.svg"
          alt="vk"
        >
      </a>
      <a
        class="article-aside__share-link"
        href="#"
      >
        <img
          class="article-aside__share-icon"
          src="@/assets/img/articles/icons/facebook.svg"
          alt="facebook"
        >
      </a>
      <a
        class="article-aside__share-link"
        href="#"
      >
        <img
          class="article-aside__share-icon"
          src="@/assets/img/articles/icons/link_round.svg"
          alt="another"
        >
      </a>
    </div>
  </aside>
</template>

<script>
import AppIcon from './base/AppIcon.vue'
export default {
  name: 'ArticleAside',
  components: {
    AppIcon
  },
  data() {
    return {
      activeSearch: false
    }
  },
  methods: {
    openSearch() {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + 'px'
      const search = this.$refs.search

      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = scrollbarWidth

      search.style.left = `${search.offsetLeft}px`
      search.style.top = `${search.offsetTop}px`
      search.style.width = `${search.offsetWidth}px`
      search.style.height = `${search.offsetHeight}px`

      setTimeout(() => {
        this.activeSearch = true
        search.style.cssText = null
      })
    }
  }
}
</script>

<style lang="scss">
.article-aside {
  $b: &;

  &__title {
    position: relative;
    font-size: 20px;
    font-weight: bold;
    padding-top: 40px;
    padding-bottom: 30px;
    margin-bottom: 30px;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background-color: $color-lightgray;
    }

    @include media(lg) {
      padding-top: 70px;
    }
  }

  &__search {
    background-color: $color-lightgray;
    transition-property: left, top, width, height;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);

    &.is-active {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
    }
  }

  &__spacer {
    &.is-active {
      height: 50px;
    }
  }

  &__form {
    position: relative;
    width: 100%;
    background-color: $color-lightgray;
    height: 50px;
    padding: 10px;

    &-button {
      position: absolute;
      right: 0;
      top: 0;
      top: 50%;
      padding: 10px 20px;
      transform: translateY(-50%);
    }

    &-input {
      font-size: 14px;
      width: calc(100% - 40px);
      height: 100%;
    }

    &-icon {
      width: 20px;
      height: 20px;
      fill: $color-lightviolet;
    }
  }

  &__video {
    &-preview {
      width: 100%;
      cursor: pointer;
    }

    &-container {
      display: block;
      position: relative;
      border-radius: 10px;
      margin-bottom: 20px;
      transition: 0.1s;

      &:hover #{$b}__video-icon-play {
        opacity: 1;
        visibility: visible;
      }
    }

    &-title {
      color: #fff;
      position: absolute;
      bottom: 14%;
      left: 10%;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.375;
      max-width: 280px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      @include media(lg) {
        font-size: 16px;
        max-width: 290px;
      }
    }

    &-icon-play {
      position: absolute;
      top: 13%;
      left: 10%;
      opacity: 0;
      visibility: hidden;
      transition: 0.5s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &__share {
    display: flex;
    align-items: center;
    margin-top: 65px;
    padding-left: 40px;

    &-text {
      padding-right: 10px;
      font-size: 13px;
      color: $color-lightviolet;
      font-weight: bold;
      align-self: start;
    }

    &-link {
      padding-left: 20px;
    }
  }
}
</style>
