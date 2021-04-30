<template>
  <div :class="['select', {[`select_${color}`]: color}, {'is-active': isActive}]">
    <select class="select__el">
      <option
        v-for="(option, index) in options"
        :key="index"
      >
        {{option}}
      </option>
    </select>
    <div
      class="select__box"
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
          :key="index"
          class="select__item"
          :class="{'is-active': selectedOption === option}"
          @click="selectOption(option)"
        >
          {{option}}
        </li>
      </ul>
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
    color: String,
    options: Array
  },
  data() {
    return {
      isActive: false,
      isArrowActive: false,
      selectedOption: this.options[0]
    }
  },
  methods: {
    toggleSelect() {
      const dropdown = this.$refs.dropdown
      
      if (this.isActive) {
        dropdown.style.height = ''
      } else {
        dropdown.style.height = dropdown.scrollHeight + 'px'
      }

      this.isActive = !this.isActive
    },

    selectOption(option) {
      if (this.selectedOption !== option) {
        this.selectedOption = option
      }
      
      this.toggleSelect()
    }
  }
}
</script>

<style lang="scss">
.select  {
  $b: &;

  position: relative;
  transition: z-index 0.3s step-end;
  z-index: 1;

  &_green {
    #{$b} {
      &__box {
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

  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 25px;
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
    transition: transform .3s ease;
  }

  &__dropdown {
    position: absolute;
    left: 0;
    top: 25px;
    width: 100%;
    height: 0;
    border-radius: 0 0 25px 25px;
    transition: height .3s ease;
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
    transition: background-color .3s ease, box-shadow .3s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba($color-lightgray, 0.2);
    }
  }
}
</style>
