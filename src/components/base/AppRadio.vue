<template>
  <div class="radio">
    <p
      v-if="label"
      class="radio__label"
    >
      {{label}}
    </p>
    <div class="radio__items">
      <label
        v-for="(item, index) in items"
        :key="index"
        class="radio__item"
      >
        <input
          type="radio"
          :name="name"
          :checked="index === 0"
          class="radio__input"
        >
        <span class="radio__btn">{{item}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRadio',
  props: {
    label: String,
    name: String,
    items: Array
  }
}
</script>

<style lang="scss">
.radio {
  $b: &;

  &__label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 13px;
  }

  &__items {
    display: flex;
    margin-right: -10px;
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
    margin-right: 18px;
    border-radius: 100px;
    padding: 12px 22px;
    font-weight: bold;
    font-size: 13px;
    color: $color-lightviolet;
    background-color: #fff;
    transition: color .3s ease, background-color .3s ease;
  }
}
</style>
