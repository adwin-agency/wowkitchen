<template>
  <label :class="['quiz-option', {'quiz-option_small': small}]">
    <input
      :type="checkbox ? 'checkbox' : 'radio'"
      :name="name"
      :value="value"
      class="quiz-option__input"
      @change="$emit('change', $event)"
    >
    <div
      class="quiz-option__box"
      :class="{'quiz-option__box_check': checkbox}"
    >
      <img
        :src="require(`@/assets/img/${image.name}`)"
        :alt="image.alt"
        class="quiz-option__img"
      >
      <span class="quiz-option__title">
        <span
          v-if="checkbox"
          class="quiz-option__check"
        >
          <AppIcon
            name="done"
            class="quiz-option__check-icon"
          />
        </span>
        {{title}}
      </span>
    </div>
  </label>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'QuizOption',
  components: {
    AppIcon
  },
  props: {
    checkbox: Boolean,
    small: Boolean,
    shadow: Boolean,
    image: Object,
    name: String,
    value: String,
    title: String
  },
  emits: ['change']
}
</script>

<style lang="scss">
.quiz-option {
  $b: &;

  display: block;
  cursor: pointer;

  &_shadow {
    #{$b}__box {
      box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.08);
    }
  }

  &__input {
    display: none;

    &:checked + #{$b}__box {
      border-color: $color-green;

      &_check {
        border-color: $color-lightgray;
      }

      #{$b}__check-icon {
        opacity: 1;
      }
    }
  }

  &__box {
    display: flex;
    border: 2px solid $color-lightgray;
    border-radius: 4px;
    min-height: 124px;
    transition: border-color 0.3s ease;
    overflow: hidden;
  }

  &__img {
    width: 46%;
    object-fit: cover;
  }

  &__title {
    display: flex;
    align-items: center;
    margin: auto 0;
    padding: 18px;
    font-weight: 600;
    font-size: 13px;
    line-height: (16/13);
  }

  &__check {
    display: flex;
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    margin-right: 8px;
    border: 2px solid $color-green;
    border-radius: 2px;

    &-icon {
      margin: auto;
      width: 10px;
      height: 8px;
      fill: $color-green;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  @include media(md) {
    &__box {
      min-height: 155px;
    }

    &__img {
      width: 50%;
    }

    &__title {
      padding: 20px;
    }
  }

  @include media(lg) {
    &_small {
      #{$b} {
        &__img {
          height: 170px;
        }

        &__title {
          padding: 18px 28px;
        }
      }
    }

    &__box {
      display: block;
      min-height: none;
    }

    &__img {
      width: 100%;
      height: 200px;
    }

    &__title {
      align-items: flex-start;
      padding: 22px 32px;
    }

    &__check {
      margin-top: -5px;
      margin-left: -14px;
      margin-bottom: -5px;
    }
  }

  @include media(xl) {
    &_small {
      #{$b} {
        &__img {
          height: 200px;
        }

        &__title {
          padding: 22px 30px;
        }
      }
    }
  }
}
</style>
