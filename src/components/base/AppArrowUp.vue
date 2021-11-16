<template>
  <div class="arrow-up">
    <button
      class="arrow-up__btn"
      @click="scrollToTop"
    >
      <AppIcon
        name="arrow-up"
        class="arrow-up__icon"
      />
      <span v-if="$_media.sm">Наверх страницы</span>
    </button>
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'AppArrowUp',
  components: {
    AppIcon
  },
  methods: {
    scrollToTop() {
      const scrollTo = 0
      const cosParameter = (window.scrollY - scrollTo) / 2
      let scrollCount = 0,
        oldTimestamp = null

      function step(newTimestamp) {
        if (oldTimestamp !== null) {
          scrollCount += (Math.PI * (newTimestamp - oldTimestamp)) / 500

          if (scrollCount >= Math.PI) {
            return
          }

          window.scrollTo(0, scrollTo + cosParameter + cosParameter * Math.cos(scrollCount))
        }

        oldTimestamp = newTimestamp
        window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
    }
  }
}
</script>

<style lang="scss">
.arrow-up {
  padding: 6px 16px;
  background-color: #F3F4F9;

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid #04B891;
    border-radius: 8px;
    padding: 7px 15px;
    font-weight: 600;
    font-size: 10px;
    color: $color-green;
  }

  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  @include media(md) {
    padding: 0;
    background-color: transparent;

    &__btn {
      width: 47px;
      height: 47px;
      border: none;
      border-radius: 50%;
      padding: 0;
      background-color: #F3F4F9;
      box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 83px;
        height: 83px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: translate(-50%, -50%);
      }
    }

    &__icon {
      width: 24px;
      height: 24px;
      margin-right: 0;
    }
  }
}
</style>
