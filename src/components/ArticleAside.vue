<template>
  <aside class="article-aside">
    <!-- <div
      ref="search"
      class="article-aside__search"
      :class="{'is-active': activeSearch}"
    >
      <form class="article-aside__form">
        <input
          class="article-aside__form-input"
          type="text"
          required
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
    </div> -->
    <!-- <div
      class="article-aside__spacer"
      :class="{'is-active': activeSearch}"
    ></div> -->
    <h2 class="article-aside__heading">Популярные статьи</h2>

    <a
      v-for="(card, index) in cards"
      :key="index"
      href="#"
      class="article-aside__card"
    >
      <img
        class="article-aside__img"
        :src="require(`@/assets/img/${card.image}`)"
        alt="preview-image"
      >
      <button
        v-if="card.video"
        class="article-aside__play"
      >
        <AppIcon name="play" class="article-aside__play-icon" />
      </button>
      <h4 class="article-aside__title">{{card.title}}</h4>
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
  props: {
    cards: Array
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

  &__heading {
    // margin-top: 34px;
    padding-bottom: 26px;
    border-bottom: 3px solid $color-lightgray;
    font-size: 20px;
    font-weight: bold;
  }

  &__card {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 26px;
    min-height: 210px;
    padding: 34px 34px 24px;

    & + & {
      margin-top: 20px;
    }
  }

  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
    z-index: -1;
  }

  &__play {
    width: 42px;
    height: 42px;
    margin-bottom: 20px;

    &-icon {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    margin-top: auto;
    font-weight: bold;
    font-size: 14px;
    line-height: (18/14);
    color: $color-lightgray;
  }

  &__share {
    display: flex;
    align-items: center;
    margin-top: 30px;

    &-text {
      margin-right: 40px;
      font-size: 13px;
      color: $color-lightviolet;
      font-weight: bold;
    }

    &-link {
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  // @include media(lg) {
  //   &__heading {
  //     margin-top: 68px;
  //   }
  // }

  @include media(xl) {
    &__heading {
      // margin-top: 60px;
      font-size: 24px;
    }

    &__card {
      min-height: 250px;
      padding: 34px 34px 30px;
    }

    &__title {
      font-size: 16px;
      line-height: (22/16);
    }

    &__share {
      margin-top: 76px;
      margin-left: 35px;
    }
  }
}
</style>
