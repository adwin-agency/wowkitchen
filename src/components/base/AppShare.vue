<template>
  <div
    class="share"
    @click="toggleShare"
  >
    <div
      class="share__box"
      :class="{'is-active': isActive}"
    >
      <button
        class="share__btn"
        type="button"
      >
        <AppIcon
          name="share"
          class="share__icon"
        />
      </button>
      <div
        class="share__list"
        :style="`filter: url(#shadowed-goo${id})`"
      >
        <a
          href="#"
          class="share__item"
        >
          <AppIcon
            name="facebook"
            class="share__icon"
          />
        </a>
        <a
          href="#"
          class="share__item"
        >
          <AppIcon
            name="vk"
            class="share__icon"
          />
        </a>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class="share__filter"
      >
        <defs>
          <filter :id="`shadowed-goo${id}`">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feGaussianBlur
              in="goo"
              stdDeviation="3"
              result="shadow"
            />
            <feColorMatrix
              in="shadow"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
              result="shadow"
            />
            <feOffset
              in="shadow"
              dx="1"
              dy="1"
              result="shadow"
            />
            <feBlend
              in2="shadow"
              in="goo"
              result="goo"
            />
            <feBlend
              in2="goo"
              in="SourceGraphic"
              result="mix"
            />
          </filter>
          <filter :id="`goo${id}`">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend
              in2="goo"
              in="SourceGraphic"
              result="mix"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <span
      v-if="titled"
      class="share__title"
    >Поделиться</span>
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'AppShare',
  components: {
    AppIcon
  },
  props: {
    titled: Boolean
  },
  data() {
    return {
      id: null,
      isActive: false
    }
  },
  created() {
    this.id = Date.now()
  },
  methods: {
    toggleShare() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
.share {
  $b: &;
  $pi: 3.14;
  $menu-items: 2;
  $open-distance: 50px;
  $opening-angle: $pi - 2.3;

  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    #{$b}__btn {
      transform: scale(1.1);
    }
  }

  &__box {
    position: relative;

    &.is-active {
      #{$b}__btn {
        transition-timing-function: linear;
        transition-duration: 200ms;
        transform: scale(0.9);
      }

      #{$b}__item {
        @for $i from 1 through $menu-items {
          $angle: (($pi - $opening-angle)/2)+ (($opening-angle/($menu-items - 1)) * ($i - 1));

          &:nth-child(#{$i}) {
            transition-duration: 80ms+ (80ms * $i);
            transform: translate3d(cos($angle) * $open-distance, sin($angle) * $open-distance, 0);
          }
        }
      }
    }
  }

  &__btn,
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $color-green;
  }

  &__btn {
    position: relative;
    width: 36px;
    height: 36px;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 400ms;
    transform: scale(1.01);
    z-index: 1;
  }

  &__icon {
    width: 18px;
    height: 18px;
    fill: #fff;
  }

  &__list {
    position: absolute;
    left: 50%;
    top: 0;
    width: 110px;
    height: 90px;
    transform: translateX(-50%);
    pointer-events: none;
  }

  &__item {
    position: absolute;
    left: 37px;
    width: 36px;
    height: 36px;
    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    pointer-events: all;

    &:hover {
      background-color: $color-lightgreen;
    }

    @for $i from 1 through $menu-items {
      &:nth-child(#{$i}) {
        transition-duration: 10ms+ (60ms * ($i));
      }
    }
  }

  &__filter {
    display: none;
  }

  &__title {
    margin-left: 10px;
    font-size: 10px;
    color: #8b8b8b;
  }
}
</style>
