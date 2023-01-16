<template>
  <div class="article-video">
    <div class="article-video__box">
      <video
        v-if="activeVideo"
        :src="$_basepath + info.video"
        autoplay
        controls
        controlsList="nodownload"
      ></video>
      <video
        v-else
        :src="$_basepath + info.video_preview"
        autoplay
        loop
        muted
        playsinline
      ></video>
      <button
        v-if="!activeVideo"
        type="button"
        class="article-video__play"
        @click="playVideo"
      >
        <AppIcon name="play" />
        <span>Кулинарный тест-драйв</span>
      </button>
    </div>
    <div class="article-video__side">
      <div class="container">
        <span class="article-video__tag">{{info.category_rus}}</span>
        <p class="article-video__title">{{info.name}}</p>
        <p
          class="article-video__desc"
          v-html="info.previews_text"
        ></p>
        <ArticleProduct
          :info="info.kitchen"
          class="article-video__product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleProduct from './ArticleProduct.vue'
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'ArticleVideo',
  components: {
    AppIcon,
    ArticleProduct
  },
  props: {
    info: Object
  },
  data() {
    return {
      activeVideo: false
    }
  },
  methods: {
    playVideo() {
      this.activeVideo = true
    },
  }
}
</script>

<style lang="scss">
.article-video {
  &__box {
    position: relative;

    &::before {
      content: "";
      display: block;
      padding-top: 75%;
    }

    video {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__play {
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 280px;
    max-width: calc(100% - 20px);
    height: 60px;
    padding-right: 20px;
    border-radius: 100px;
    font-weight: bold;
    font-size: 14px;
    color: #000;
    background-color: $color-yellow;
    transform: translateX(-50%) translateZ(0);
    overflow: hidden;

    &:hover {
      svg {
        transform: scale(1.1);
      }
    }

    svg {
      flex-shrink: 0;
      width: 60px;
      height: 60px;
      transition: transform 0.3s ease;
    }

    span {
      margin: 0 auto;
    }
  }

  &__side {
    padding: 17px 0;
  }

  &__tag {
    padding: 6px 18px;
    font-size: 12px;
    color: #fff;
    background-color: $color-lightviolet;
  }

  &__title {
    margin-top: 18px;
    font-weight: bold;
    font-size: 26px;
    line-height: calc(34/26);
    color: #000;
  }

  &__desc {
    margin-top: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: calc(24/16);
  }

  &__product {
    margin-top: 33px;
  }

  @include media(xs) {
    &__play {
      width: 356px;
      height: 84px;
      padding-right: 30px;
      font-size: 16px;

      svg {
        width: 84px;
        height: 84px;
      }
    }
  }

  @include media(md) {
    &__box {
      margin: 0 auto;
      max-width: $container-max-width-md;

      &::before {
        padding-top: 56%;
      }
    }

    &__play {
      top: 50%;
      bottom: auto;
      transform: translate(-50%, -50%);
    }
  }

  @include media(lg) {
    display: flex;
    align-items: flex-start;

    &__box {
      flex: 1;
      max-width: none;
      height: 600px;

      &::before {
        display: none;
      }
    }

    &__side {
      width: 450px;
      padding: 40px 0;

      .container {
        padding: 0 55px;
      }
    }
  }

  @include media(xl) {
    &__box {
      height: 800px;
    }
  }
}
</style>
