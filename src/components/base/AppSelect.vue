<template>
  <div
    :class="[
      'select',
      {[`select_${color}`]: color},
      {[`select_${size}`]: size},
      {'select_up': up},
      {'is-active': isActive},
      {'is-closing': isClosing}
    ]"
    v-outside-click="closeSelect"
  >
    <select
      ref="select"
      :name="name"
      class="select__el"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :disabled="option.disabled"
        :value="option.value || option.title"
        :selected="selectedOption === option.title"
      >
        {{option.title}}
      </option>
    </select>
    <p
      v-if="label || sideLabel"
      :class="[
        'select__label',
        {'select__label_side': sideLabel},
        {[`select__label_${labelSize}`]: labelSize}
      ]"
    >
      {{label || sideLabel}}
    </p>
    <div :class="[
        'select__box',
        {'select__box_side': sideLabel}
      ]">
      <div
        class="select__trigger"
        @click="toggleSelect"
      >
        <span>{{selectedOption}}</span>
        <AppIcon
          name="angle-down"
          class="select__arrow"
        />
      </div>
      <div
        ref="dropdown"
        class="select__dropdown"
      >
        <ul
          class="select__list"
          :class="{'select__list_scrollable': scrollable}"
        >
          <li
            v-for="(option, index) in options"
            v-show="!option.disabled"
            :key="index"
            class="select__item"
            :class="{'is-active': selectedOption === option.title}"
            @click="selectOption(option.title, option.value)"
          >
            {{option.title}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'AppSelect',
  components: {
    AppIcon
  },
  props: {
    initial: String,
    label: String,
    labelSize: String,
    sideLabel: String,
    color: String,
    size: String,
    up: Boolean,
    options: Array,
    name: String,
    scrollable: Boolean
  },
  emits: ['change'],
  data() {
    return {
      isActive: false,
      isArrowActive: false,
      selectedOption: this.options.find((i) => (i.value || i.title) === this.initial)?.title || this.options[0].title,
      isClosing: false
    }
  },
  methods: {
    openSelect() {
      const dropdown = this.$refs.dropdown
      dropdown.style.height = dropdown.scrollHeight + 'px'
      this.isActive = true
    },

    closeSelect() {
      if (!this.isActive) {
        return
      }

      const dropdown = this.$refs.dropdown
      dropdown.style.height = ''
      this.isActive = false
      this.isClosing = true

      setTimeout(() => {
        this.isClosing = false
      }, 300)
    },

    toggleSelect() {
      this.isActive ? this.closeSelect() : this.openSelect()
    },

    selectOption(title, value) {
      if (this.selectedOption !== title) {
        this.selectedOption = title
        this.$refs.select.value = value || title
        this.$emit('change', value || title)
      }

      this.closeSelect()
    }
  }
}
</script>

<style lang="scss">
.select {
  $b: &;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  transition: z-index 0.3s step-end;
  z-index: 1;

  &_green {
    #{$b} {
      &__trigger {
        background-color: $color-green;
        color: $color-lightgray;
      }

      &__list {
        background-color: #e5e5ee;
      }

      &__item {
        color: $color-green;

        &:hover,
        &.is-active {
          background-color: $color-lightgray;
        }
      }
    }
  }

  &_white {
    #{$b} {
      &__trigger {
        background-color: #fff;
        color: $color-green;
      }
    }
  }

  &_up {
    #{$b} {
      &__dropdown {
        top: auto;
        bottom: 50%;
        border-radius: 25px 25px 0 0;
      }

      &__list {
        padding: 15px 10px 35px;
      }
    }
  }

  &_sm {
    #{$b} {
      &__trigger,
      &__item {
        font-size: 12px;
      }
    }
  }

  &.is-active {
    transition: z-index 0.3s step-start;
    z-index: 10;

    #{$b}__arrow {
      transform: rotate(180deg);
    }
  }

  &.is-closing {
    transition: z-index 0.3s step-start;
    z-index: 5;
  }

  &__el {
    display: none;
  }

  &__label {
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 13px;

    &_side {
      min-width: 60px;
      margin-right: 10px;
    }

    &_sm {
      font-size: 12px;
    }
  }

  &__box {
    position: relative;
    width: 100%;

    &_side {
      width: auto;
      flex: 1;
    }
  }

  &__trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 25px;
    width: 100%;
    height: 50px;
    padding: 10px 30px;
    font-weight: bold;
    font-size: 13px;
    background-color: $color-lightgray;
    color: $color-green;
    cursor: pointer;
    z-index: 1;
  }

  &__arrow {
    width: 11px;
    height: 7px;
    margin-left: 8px;
    fill: currentColor;
    transition: transform 0.3s ease;
  }

  &__dropdown {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 0;
    border-radius: 0 0 25px 25px;
    transition: height 0.3s ease;
    overflow: hidden;
  }

  &__list {
    padding: 35px 10px 15px;
    background-color: $color-green;

    &_scrollable {
      max-height: 126px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        background-color: $color-gray;
      }

      &::-webkit-scrollbar-thumb {
        background-color:$color-lightviolet;
      }
    }
  }

  &__item {
    padding: 12px 20px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 13px;
    color: $color-lightgray;
    box-shadow: 0 0 0 5px transparent;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover,
    &.is-active {
      background-color: rgba($color-lightgray, 0.2);
    }
  }
}
</style>
