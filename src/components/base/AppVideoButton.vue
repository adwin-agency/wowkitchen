<template>
  <button
    type="button"
    class="video-btn"
  >
    <AppIcon
      name="play"
      class="video-btn__icon"
    />
    Смотреть видео
  </button>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'AppVideoButton',
  components: {
    AppIcon
  }
}
</script>

<style lang="scss">
.video-btn {
  $b: &;

  display: flex;
  align-items: center;
  position: relative;
  margin-top: 36px;
  margin-left: 18px;
  padding-right: 22px;
  border-radius: 100px;
  font-weight: bold;
  font-size: 11px;
  background-color: $color-yellow;
  box-shadow: 0px 5px 5px 0px rgba(53, 53, 53, 0.36);
  z-index: 1;

  &:hover {
    #{$b}__icon {
      transform: scale(1.2);
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 20px;
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

  &__icon {
    width: 40px;
    height: 40px;
    margin-right: 7px;
    transition: transform .3s ease;
  }
}
</style>
