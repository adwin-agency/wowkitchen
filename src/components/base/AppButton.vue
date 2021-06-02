<template>
  <component
    :is="tag"
    :href="href"
    :type="href ? undefined : 'button'"
    :class="[
      'btn',
      {[`btn_${size}`]: size},
      {[`btn_${color}`]: color},
      {'btn_bordered': bordered},
      {'btn_figure': figure},
      {'btn_shadow': shadow},
      {'btn_show': show}
    ]"
    @click="handleClick"
  >
    <AppIcon
      v-if="icon"
      :name="icon"
      class="btn__icon"
    />
    {{title}}
  </component>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'AppButton',
  components: {
    AppIcon
  },
  props: {
    href: String,
    title: String,
    icon: String,
    size: String,
    color: String,
    bordered: Boolean,
    figure: Boolean,
    shadow: Boolean,
    show: Boolean,
    modal: String
  },
  computed: {
    tag() {
      return this.href ? 'a' : 'button'
    }
  },
  methods: {
    handleClick(e) {
      if (this.modal) {
        e.preventDefault()
        this.$store.commit('setModal', this.modal)
      }
    }
  }
}
</script>

<style lang="scss">
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  min-height: 60px;
  padding: 12px 24px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background-color: $color-green;
  transition: color .3s ease, background-color .3s ease, box-shadow .3s ease, opacity .3s ease;

  &:hover {
    background-color: $color-lightgreen;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: auto;
  }

  &_small {
    min-height: 56px;
    font-size: 12px;
  }

  &_gray {
    color: $color-primary;
    background-color: $color-lightgray;

    &:hover {
      background-color: $color-gray;
    }
  }

  &_yellow {
    color: $color-primary;
    background-color: $color-yellow;

    &:hover {
      background-color: $color-lightyellow;
    }
  }

  &_pink {
    background-color: $color-pink;

    &:hover {
      background-color: $color-lightpink;
    }
  }

  &_white {
    color: $color-primary;
    background-color: #fff;

    &:hover {
      background-color: #fff;
    }
  }

  &_bordered {    
    color: $color-green;
    background-color: transparent;
    box-shadow: inset 0 0 0 2px $color-green;

    &:hover {
      color: #fff;
      background-color: $color-lightgreen;
      box-shadow: inset 0 0 0 2px $color-lightgreen;
    }
  }

  &_figure {
    border-radius: 30px 0 30px 0;    
  }

  &_shadow {
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: -5px;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      opacity: 0.5;
      filter: blur(5px);
      z-index: -1;
    }
  }

  &_show {
    min-height: 70px;
    font-size: 12px;
  }

  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 15px;
    fill: currentColor;
  }
}
</style>
