<template>
  <button
    type="button"
    :class="[
      'video-btn',
      {'video-btn_expand': expand}
    ]"
    @click="openModal"
  >
    <span class="video-btn__box">
      <AppIcon
        name="play"
        class="video-btn__icon"
      />
      {{title}}
    </span>
  </button>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'AppVideoButton',
  components: {
    AppIcon
  },
  props: {
    expand: Boolean,
    title: String,
    video: String
  },
  methods: {
    openModal() {
      this.$store.commit('setModal', 'video')
      this.$store.commit('setModalData', { video: this.video })
    }
  }
}
</script>

<style lang="scss">
.video-btn {
  $b: &;

  position: relative;
  border-radius: 100px;
  font-weight: bold;
  font-size: 11px;
  background-color: $color-yellow;
  box-shadow: 0px 5px 5px 0px rgba(53, 53, 53, 0.36);
  z-index: 1;

  &:hover {
    #{$b}__icon {
      transform: scale(1.1);
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 21px;
    top: 50%;
    width: 74px;
    height: 74px;
    border: 1px solid $color-yellow;
    border-radius: 50%;
    opacity: 0.3;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: -1;
  }

  &_expand {
    &::before {
      display: none;
    }

    #{$b} {
      &__box {
        max-width: 42px;
        transition: max-width .3s ease;
        overflow: hidden;
      }
    }
  }

  &__box {
    display: flex;
    align-items: center;
    padding-right: 22px;
  }

  &__icon {
    width: 42px;
    height: 42px;
    margin-right: 7px;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  @include media(md) {
    &_expand {
      &::before {
        display: block;
      }
    }
  }

  @include media(lg) {
    &_expand {
      &.is-active {
        #{$b} {
          &__box {
            max-width: 145px;
          }
        }
      }
    }
  }
}
</style>
