<template>
  <div
    ref="intro"
    class="intro"
  >
    <div class="intro__main">
      <div class="container">
        <div class="intro__row">
          <div class="intro__content">
            <p class="intro__top">Новая кухня: с нами - легко!</p>
            <h1 class="intro__heading">Кухни и{{'\xa0'}}мебель на заказ</h1>
            <div class="intro__tags">
              <router-link
                v-for="(tag, index) in tags"
                :key="index"
                :to="tag.route"
                :class="`intro__tag intro__tag_${tag.color}`"
              >
                {{tag.title}}
              </router-link>
            </div>
            <AppVideoButton
              v-if="$_media.sm"
              title="Смотреть видео"
              video="/assets/video/intro.mp4"
              class="intro__video-btn"
            />
          </div>
          <div class="intro__video">
            <AppIcon
              class="intro__shape intro__shape_1"
              viewBox="0 0 194.19 194.22"
              name="shape-1"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <!-- <AppIcon
              class="intro__shape intro__shape_ny-star-4"
              name="ny-star-4"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            /> -->
            <video
              ref="video"
              src="/assets/video/intro.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
            <AppIcon
              class="intro__shape intro__shape_2"
              viewBox="0 0 22.47 22.85"
              name="shape-2"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_3"
              viewBox="0 0 59 54.5"
              name="shape-3"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_4"
              viewBox="0 0 56.22 56.22"
              name="shape-4"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_5"
              viewBox="0 0 71.32 71.31"
              name="shape-5"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_6"
              viewBox="0 0 17.21 17.22"
              name="shape-6"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_7"
              viewBox="0 0 57 57.04"
              name="shape-7"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_8"
              viewBox="0 0 40.46 70"
              name="shape-8"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_9"
              viewBox="0 0 19.62 19.62"
              name="shape-9"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_10"
              viewBox="0 0 59.031 57.75"
              name="shape-10"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_11"
              viewBox="0 0 20 20"
              name="shape-11"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_12"
              viewBox="0 0 81.875 81.87"
              name="shape-12"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_13"
              viewBox="0 0 29.688 29.68"
              name="shape-13"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <!-- <AppIcon
              class="intro__shape intro__shape_ny-star-1"
              name="ny-star-1"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-star-2"
              name="ny-star-2"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-toy-1"
              name="ny-toy-1"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-star-3"
              name="ny-star-3"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-dot-1"
              name="ny-dot-1"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-dot-2"
              name="ny-dot-2"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-star-5"
              name="ny-star-5"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-circle-1"
              name="ny-circle-1"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-circle-2"
              name="ny-circle-2"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-circle-3"
              name="ny-circle-3"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-circle-4"
              name="ny-circle-4"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-snowman-head"
              name="ny-snowman-head"
              :style="`transform:translateY(${shapeFrontTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-snowman-body"
              name="ny-snowman-body"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-snowman-lhand"
              name="ny-snowman-lhand"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            />
            <AppIcon
              class="intro__shape intro__shape_ny-snowman-rhand"
              name="ny-snowman-rhand"
              :style="`transform:translateY(${shapeBackTranslate}px)`"
            /> -->
            <div class="intro__video-btn">
              <AppVideoButton
                v-if="!$_media.sm"
                title="Смотреть видео"
                video="/assets/video/intro.mp4"
                @click="handleVideoClick"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <IntroFeatures class="intro__features" />
  </div>
</template>

<script>
import IntroFeatures from './IntroFeatures.vue'
import AppIcon from './base/AppIcon.vue'
import AppVideoButton from './base/AppVideoButton.vue'

const tags = [
  { route: 'kitchens?category=pryamye', title: 'Прямые кухни', color: 'gray' },
  { route: 'kitchens?category=uglovye', title: 'Угловые кухни', color: 'gray' },
  { route: 'kitchens?style=loft', title: 'Кухни лофт', color: 'green' },
  { route: 'wardrobes', title: 'Шкафы-купе', color: 'red' },
  {
    route: 'kitchens?style=scandinaviya',
    title: 'Скандинавский стиль',
    color: 'green'
  },
  {
    route: 'kitchens?category=s-barnoy-stoykoy',
    title: 'С барной стойкой',
    color: 'gray'
  },
  {
    route: 'kitchens?style=minimalizm',
    title: 'Стиль минимализм',
    color: 'green'
  }
  // { route: 'kitchens?style=sovremenniy', title: 'Современная классика', color: 'green' }
]

export default {
  name: 'Intro',
  components: {
    AppIcon,
    IntroFeatures,
    AppVideoButton
  },
  data() {
    return {
      tags: tags,
      shapeBackTranslate: 0,
      shapeFrontTranslate: 0
    }
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
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const intro = this.$refs.intro
      const introOffset = intro.offsetTop
      const introY = intro.getBoundingClientRect().top

      this.shapeBackTranslate = (introY - introOffset) / 2.75
      this.shapeFrontTranslate = (introY - introOffset) / 3
    },

    handleVideoClick() {
      this.$refs.video.pause()
    }
  }
}
</script>

<style lang="scss">
.intro {
  &__main {
    position: relative;
    min-height: calc(100vh - #{$header-bar-height});
    padding: 92px 0 40px;
  }

  &__content {
    position: relative;
    z-index: 1;
  }

  &__top {
    font-weight: 500;
    font-size: 16px;
    color: $color-lightgray;
  }

  &__heading {
    margin-top: 12px;
    padding-right: 30px;
    font-size: 32px;
    line-height: calc(36/32);
    color: $color-lightgray;
  }

  &__video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(#0d0d0d, 0.47);
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__video-btn {
    margin-top: 84px;
    margin-left: 18px;
  }

  &__play-icon {
    position: relative;
    width: 40px;
    height: 40px;
    margin-right: 7px;
    z-index: 1;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 36px;
    margin-right: -5px;
  }

  &__tag {
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 100px;
    padding: 10px 16px;
    font-weight: 600;
    font-size: 10px;
    color: #949494;
    transition: opacity 0.3s ease;

    &_gray {
      background-color: $color-lightgray;
    }

    &_green {
      background-color: #e9f9f6;
    }

    &_red {
      background-color: #f8eceb;
    }

    &:hover {
      opacity: 0.75;
    }
  }

  &__features {
    margin-top: 45px;
  }

  &__shape {
    display: none;
  }

  @include media(md) {
    &__main {
      min-height: auto;
      padding: 0;
    }

    &__row {
      display: flex;
    }

    &__content {
      flex: 1;
      margin-top: 35px;
      margin-right: 30px;
    }

    &__top {
      color: $color-green;
    }

    &__heading {
      padding-right: 0;
      font-size: 36px;
      line-height: calc(42/36);
      color: inherit;
    }

    &__tags {
      margin-top: 28px;
      margin-right: -12px;
    }

    &__tag {
      margin-right: 12px;
      margin-bottom: 10px;
    }

    &__video {
      position: relative;
      width: 62%;
      height: 360px;
      border-bottom-right-radius: 100px;
      box-shadow: 0px 16px 38px 0px rgba(0, 0, 0, 0.25);

      &::before {
        display: none;
      }

      video {
        position: relative;
        border-bottom-right-radius: 100px;
      }
    }

    &__video-btn {
      position: absolute;
      margin: 0;
      left: 52px;
      bottom: 38px;
    }

    &__features {
      margin-top: 88px;
    }

    &__shape {
      display: block;
      position: absolute;

      &_1 {
        top: -45px;
        right: -120px;
        width: 194px;
        fill: $color-lightgray;
      }

      &_2 {
        top: 3px;
        right: -6px;
        width: 22px;
      }

      &_3 {
        top: 7px;
        right: -2px;
        width: 59px;
      }

      &_4 {
        right: -50px;
        bottom: -30px;
        width: 56px;
      }

      &_5 {
        right: -70px;
        bottom: -30px;
        width: 71px;
      }

      &_6 {
        top: 45px;
        right: -57px;
        width: 17px;
      }

      &_7 {
        top: 95px;
        right: -65px;
        width: 57px;
      }

      &_8 {
        right: 76px;
        bottom: -30px;
        width: 40px;
      }

      &_9 {
        right: 65px;
        bottom: 18px;
        width: 19px;
      }

      &_10,
      &_11,
      &_12,
      &_13 {
        display: none;
      }

      &_ny-star-1 {
        top: -34px;
        left: -63px;
        width: 70px;
        height: 70px;
      }

      &_ny-toy-1 {
        top: 19px;
        left: -70px;
        width: 99px;
        height: 107px;
      }

      &_ny-star-2 {
        top: 85px;
        left: -26px;
        width: 57px;
        height: 57px;
      }

      &_ny-star-3 {
        left: -22px;
        bottom: 122px;
        width: 70px;
        height: 70px;
      }

      &_ny-dot-1 {
        left: -28px;
        bottom: 112px;
        width: 9px;
        height: 10px;
      }

      &_ny-dot-2 {
        left: -60px;
        bottom: 76px;
        width: 10px;
        height: 9px;
      }

      &_ny-star-4 {
        top: -86px;
        right: -146px;
        width: 264px;
        height: 264px;
      }

      &_ny-star-5 {
        top: 52px;
        right: -63px;
        width: 100px;
        height: 100px;
      }

      &_ny-circle-1,
      &_ny-circle-2,
      &_ny-circle-3,
      &_ny-circle-4,
      &_ny-snowman-head,
      &_ny-snowman-body,
      &_ny-snowman-lhand,
      &_ny-snowman-rhand {
        display: none;
      }
    }
  }

  @include media(lg) {
    &__content {
      margin-top: 0;
      margin-right: 70px;
    }

    &__heading {
      font-size: 60px;
      line-height: 1;
    }

    &__tags {
      margin-top: 35px;
    }

    &__tag {
      margin-bottom: 14px;
      padding: 10px 27px;
      font-size: 11px;
    }

    &__video {
      margin-top: 6px;
      margin-right: 50px;
      width: 59.5%;
      height: 470px;
    }

    &__video-btn {
      bottom: 48px;
    }

    &__shape {
      &_1 {
        top: -75px;
        right: -130px;
        width: 250px;
      }

      &_2 {
        top: -12px;
        right: -22px;
        width: 30px;
      }

      &_3 {
        top: -3px;
        right: -15px;
        width: 72px;
      }

      &_4 {
        right: -80px;
        bottom: -20px;
        width: 73px;
      }

      &_5 {
        right: -103px;
        bottom: -8px;
        width: 88px;
      }

      &_6 {
        top: 43px;
        right: -87px;
        width: 23px;
      }

      &_7 {
        top: 105px;
        right: -96px;
        width: 72px;
      }

      &_8 {
        right: 38px;
        bottom: 16px;
        width: 50px;
      }

      &_9 {
        right: 28px;
        bottom: 64px;
        width: 24px;
      }

      &_10,
      &_11,
      &_12,
      &_13 {
        display: block;
      }

      &_10 {
        left: -46px;
        bottom: 64px;
        width: 60px;
      }

      &_11 {
        left: -26px;
        bottom: 112px;
        width: 20px;
      }

      &_12 {
        top: 34px;
        left: -63px;
        width: 82px;
      }

      &_13 {
        top: 46px;
        left: -10px;
        width: 28px;
      }

      &_ny-circle-1,
      &_ny-circle-2,
      &_ny-circle-3,
      &_ny-circle-4,
      &_ny-snowman-head,
      &_ny-snowman-body,
      &_ny-snowman-lhand,
      &_ny-snowman-rhand {
        display: block;
      }

      &_ny-circle-1 {
        right: -134px;
        bottom: 202px;
        width: 18px;
        height: 18px;
      }

      &_ny-circle-2 {
        right: 15px;
        bottom: 220px;
        width: 36px;
        height: 36px;
      }

      &_ny-circle-3 {
        right: 67px;
        bottom: 43px;
        width: 42px;
        height: 40px;
      }

      &_ny-circle-4 {
        right: -132px;
        bottom: 124px;
        width: 30px;
        height: 30px;
      }

      &_ny-snowman-head {
        right: -86px;
        bottom: 102px;
        width: 120px;
        height: 90px;
      }

      &_ny-snowman-body {
        right: -104px;
        bottom: -39px;
        width: 156px;
        height: 137px;
      }

      &_ny-snowman-lhand {
        right: 17px;
        bottom: 72px;
        width: 50px;
        height: 46px;
      }

      &_ny-snowman-rhand {
        right: -143px;
        bottom: 50px;
        width: 65px;
        height: 64px;
      }
    }

    &__features {
      margin-top: 194px;
    }
  }

  @include media(xl) {
    &__content {
      margin-top: 54px;
      margin-right: 100px;
    }

    &__tags {
      margin-top: 95px;
    }

    &__video {
      margin-top: 0;
      margin-right: 120px;
      width: 50.5%;
      height: 500px;
    }

    &__video-btn {
      left: 60px;
    }

    &__shape {
      &_1 {
        top: -38px;
        right: -182px;
        width: 300px;
      }

      &_2 {
        top: 35px;
        right: -50px;
        width: 36px;
      }

      &_3 {
        top: 45px;
        right: -38px;
        width: 86px;
      }

      &_4 {
        right: -50px;
        bottom: -77px;
      }

      &_5 {
        right: -73px;
        bottom: -68px;
      }

      &_6 {
        top: 100px;
        right: -127px;
        width: 25px;
      }

      &_7 {
        top: 180px;
        right: -136px;
        width: 80px;
      }

      &_8 {
        right: 88px;
        bottom: -24px;
      }

      &_9 {
        right: 79px;
        bottom: 25px;
      }

      &_10 {
        left: -48px;
        bottom: 94px;
      }

      &_11 {
        left: -30px;
        bottom: 144px;
      }

      &_12 {
        top: 54px;
        left: -56px;
      }

      &_13 {
        top: 65px;
        left: -3px;
      }
    }

    &__features {
      margin-top: 164px;
    }
  }
}
</style>
