<template>
  <div
    :class="[
      'select',
      {[`select_${color}`]: color},
      {'select_up': up},
      {'is-active': isActive}
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
      >
        {{option.title}}
      </option>
    </select>
    <p
      v-if="label || sideLabel"
      :class="[
        'select__label',
        {'select__label_side': sideLabel}
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
        <ul class="select__list">
          <li
            v-for="(option, index) in options"
            v-show="!option.disabled"
            :key="index"
            class="select__item"
            :class="{'is-active': selectedOption === option.title}"
            @click="selectOption(option.title)"
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
    label: String,
    sideLabel: String,
    color: String,
    up: Boolean,
    options: Array,
    name: String
  },
  data() {
    return {
      isActive: false,
      isArrowActive: false,
      selectedOption: this.options[0].title
    }
  },
  methods: {
    openSelect() {
      const dropdown = this.$refs.dropdown
      dropdown.style.height = dropdown.scrollHeight + 'px'
      this.isActive = true
    },

    closeSelect() {
      const dropdown = this.$refs.dropdown
      dropdown.style.height = ''
      this.isActive = false
    },

    toggleSelect() {
      this.isActive ? this.closeSelect() : this.openSelect()
    },

    selectOption(option) {
      if (this.selectedOption !== option) {
        this.selectedOption = option
        this.$refs.select.value = option
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

  &.is-active {
    transition: z-index 0.3s step-start;
    z-index: 10;

    #{$b}__arrow {
      transform: rotate(180deg);
    }
  }

  &__el {
    display: none;
  }

  &__label {
    font-weight: 500;
    font-size: 13px;

    &_side {
      min-width: 60px;
      margin-right: 10px;
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

    &:hover {
      background-color: rgba($color-lightgray, 0.2);
    }
  }
}
</style>
