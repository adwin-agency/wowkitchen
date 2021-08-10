<template>
  <div class="service-top">
    <div class="service-top__box">
      <video
        ref="video"
        src="/assets/video/intro.mp4"
        autoplay
        loop
        muted
        class="service-top__video"
      ></video>
      <AppVideoButton
        round
        video="/assets/video/intro.mp4"
        class="service-top__play"
        @click="handleVideoClick"
      />
    </div>
    <div class="service-top__content">
      <div class="container">
        <h1 class="service-top__heading">{{heading}}</h1>
        <p class="service-top__desc">{{desc}}</p>
        <div class="service-top__info">
          <div
            v-for="(item, index) in info"
            :key="index"
            class="service-top__info-item"
          >
            <p class="service-top__info-title">{{item.title}}</p>
            <p class="service-top__info-desc">{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import AppVideoButton from './base/AppVideoButton.vue'

export default {
  name: 'ServiceTop',
  components: {
    AppVideoButton
  },
  props: {
    heading: String,
    desc: String,
    info: Array
  },
  computed: {
    isModal() {
      return !!this.$store.state.modal
    }
  },
  watch: {
    isModal(newStatus) {
      if (!newStatus) {
        this.$refs.video.play()
      }
    }
  },
  methods: {
    handleVideoClick() {
      this.$refs.video.pause()
    }
  }
}
</script>

<style lang="scss">
.service-top {
  &__box {
    position: relative;
    padding-top: 75%;
  }

  &__video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__content {
    padding: 40px 0;
    background-image: url('~@/assets/img/sizing-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__desc {
    margin-top: 20px;

    font-size: 14px;
    line-height: (32/16);
  }

  &__info {
    margin-top: 30px;

    &-item {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-title {
      font-weight: bold;
      font-size: 16px;
    }

    &-desc {
      margin-top: 12px;
      font-size: 13px;
      line-height: (22/13);
    }
  }

  @include media(sm) {
    &__box {
      padding-top: 56%;
    }

    &__info {
      display: flex;

      &-item {
        width: 50%;
        padding-right: 30px;
        margin-bottom: 0;
      }
    }
  }

  @include media(md) {
    display: grid;
    grid-template-columns: 50% 50%;

    &__box {
      grid-row: 1 / 3;
      padding-top: 0;
    }

    &__content {
      .container {
        padding: 0 30px;
      }
    }

    &__desc {
      max-width: 530px;
    }
  }

  @include media(lg) {
    &__content {
      padding: 50px 0;

      .container {
        padding: 0 50px;
      }
    }

    &__desc {
      font-size: 16px;
    }

    &__info {
      margin-top: 50px;
    }
  }

  @include media(xl) {
    &__content {
      padding: 80px 0 60px;

      .container {
        margin-left: 0;
        max-width: 890px;
        padding: 0 120px;
      }
    }

    &__info {
      margin-top: 95px;
    }
  }
}
</style>
