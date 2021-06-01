<template>
  <transition name="fade">
    <div
      v-if="modal"
      class="modal"
    >
      <div class="modal__overlay"></div>
      <div class="modal__window">
        <ModalDesigner v-if="modal === 'designer'" />
        <button
          type="button"
          class="modal__close"
          @click="closeModal"
        >
          <AppIcon
            name="close"
            class="modal__close-icon"
          />
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import AppIcon from './base/AppIcon.vue'
import ModalDesigner from './ModalDesigner.vue'

export default {
  name: 'Modal',
  components: {
    AppIcon,
    ModalDesigner
  },
  computed: {
    modal() {
      return this.$store.state.modal
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('setModal', null)
    }
  }
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 1000;

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity .3s ease;
  }

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
  }

  &__window {
    position: relative;
    min-height: 100%;
    background-color: #fff;
  }

  &__close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 16px;
    right: 20px;
    width: 36px;
    height: 36px;

    &-icon {
      width: 17px;
      height: 17px;
      fill: $color-lightviolet;
    }
  }
}
</style>
