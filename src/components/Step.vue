<template>
  <component
    :is="tag"
    :href="href"
    :class="['step', {'step_accented': accented}]"
  >
    <div
      v-if="bg"
      class="step__bg"
      :style="`background-image: url(${require(`@/assets/img/${bg}`)})`"
    ></div>
    <p class="step__order">{{order}}</p>
    <p class="step__title">
      {{title}}
      <AppIcon
        name="long-arrow"
        class="step__title-arrow"
      />
    </p>
    <p
      v-if="!accented"
      class="step__details"
    >
      Узнать больше
      <AppIcon
        name="long-arrow"
        class="step__details-arrow"
      />
    </p>
    <p
      v-if="desc"
      class="step__desc"
    >
      {{desc}}
    </p>
    <div
      v-if="view"
      class="step__view"
    >
      <AppIcon
        name="camera"
        class="step__view-icon"
      />
    </div>
  </component>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'Step',
  components: {
    AppIcon
  },
  props: {
    order: String,
    title: String,
    desc: String,
    view: Boolean,
    bg: String,
    accented: Boolean,
    href: String,
    route: String
  },
  computed: {
    tag() {
      return this.href ? 'a' : 'div'
    }
  }
}
</script>

<style lang="scss">
.step {
  $b: &;

  &:hover {
    #{$b} {
      &__title-arrow,
      &__details-arrow {
        transform: translateX(10px);
      }
    }
  }

  display: block;
  border: 1px solid $color-gray;
  border-radius: 4px;
  padding: 26px 34px 26px 38px;
  cursor: pointer;

  &_accented {
    padding: 18px 34px 18px 28px;
    border: none;
    background-color: #fff;
    box-shadow: 0px 20px 38px 0px rgba(53, 53, 53, 0.11);

    #{$b} {
      &__title {
        color: $color-green;
      }
    }
  }

  &__order {
    font-size: 12px;
    text-transform: uppercase;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
    font-weight: bold;
    font-size: 16px;
    line-height: calc(18/14);
  }

  &__title-arrow {
    flex-shrink: 0;
    margin-left: 12px;
    width: 43px;
    height: 11px;
    fill: $color-green;
  }

  &__desc {
    margin-top: 16px;
    white-space: pre-line;
    font-size: 11px;
    line-height: calc(18/11);
    color: #949494;
  }

  &__view {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: $color-pink;
  }

  &__view-icon {
    width: 18px;
    height: 13px;
    fill: #fff;
  }

  &__details {
    display: none;
  }

  &__title-arrow,
  &__details-arrow {
    transition: transform 0.3s ease;
  }

  &__bg {
    display: none;
  }

  @include media(md) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: none;
    padding: 0;

    &_accented {
      justify-content: initial;
      padding: 30px 70px 28px 64px;

      #{$b} {
        &__title-arrow {
          display: inline;
        }
      }
    }

    &__title {
      margin-top: 8px;
      font-size: 16px;
    }

    &__title-arrow {
      display: none;
    }

    &__desc {
      margin-top: 20px;
      line-height: calc(22/11);
    }

    &__view {
      order: -1;
      margin-top: 0;
      margin-bottom: 20px;
    }

    &__details {
      display: flex;
      align-items: center;
      margin-top: 30px;
      font-weight: bold;
      font-size: 13px;
      color: $color-green;
    }

    &__details-arrow {
      flex-shrink: 0;
      margin-left: 12px;
      width: 43px;
      height: 11px;
      fill: $color-green;
    }
  }

  @include media(lg) {
    position: relative;
    border-radius: 0;
    padding: 30px 45px 50px 45px;
    transition: box-shadow 0.3s ease;

    &:hover {
      #{$b} {
        &__bg {
          opacity: 0.2;
        }
      }
    }

    &:not(&_accented):hover {
      box-shadow: 0px 20px 38px 0px rgba(0, 0, 0, 0.25);
    }

    &_accented {
      padding: 50px 40px 45px 40px;
    }

    &__desc {
      margin-top: 28px;
    }

    &__details {
      margin-top: 40px;
    }

    &__bg {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }
  }

  @include media(xl) {
    padding: 30px 60px 50px 60px;

    &_accented {
      padding: 60px 56px 45px 58px;
    }

    &__desc {
      margin-top: 38px;
    }
  }
}
</style>
