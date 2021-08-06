<template>
  <div class="control">
    <p
      v-if="label || sideLabel"
      class="control__label"
      :class="{'control__label_side': sideLabel}"
    >
      {{label || sideLabel}}
    </p>
    <div class="control__items">
      <label
        v-for="(item, index) in items"
        :key="index"
        class="control__item"
      >
        <input
          :type="type"
          :name="name"
          :value="item"
          class="control__input"
          :checked="type === 'radio' && index === 0"
          @change="$emit('change', $event)"
        >
        <span
          :class="[
            'control__btn',
            {[`control__btn_${color}`]: color},
            {[`control__btn_${size}`]: size}
          ]"
        >{{item}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppControl',
  props: {
    label: String,
    sideLabel: String,
    size: String,
    type: String,
    name: String,
    color: String,
    items: Array
  },
  emits: ['change']
}
</script>

<style lang="scss">
.control {
  $b: &;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &__label {
    width: 100%;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 13px;

    &_side {
      width: auto;
      margin-right: 40px;
      margin-bottom: 0;
    }
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin-right: -18px;
    margin-bottom: -12px;
  }

  &__item {
    margin-right: 18px;
    margin-bottom: 12px;
  }

  &__input {
    display: none;

    &:checked + #{$b}__btn {
      color: #fff;
      background-color: $color-green;
    }
  }

  &__btn {
    display: block;
    border-radius: 100px;
    padding: 12px 20px;
    font-weight: bold;
    font-size: 13px;
    color: $color-lightviolet;
    background-color: #fff;
    transition: color 0.3s ease, background-color 0.3s ease;
    cursor: pointer;

    &_lg {
      padding: 17px 30px;
    }

    &_gray {
      background-color: $color-lightgray;
    }
  }
}
</style>
