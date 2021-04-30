<template>
  <div class="text-field">
    <p
      class="text-field__label"
      :class="[
        'text-field__label',
        {[`text-field__label_${labelColor}`]: labelColor},
        {[`text-field__label_${labelSize}`]: labelSize}
      ]"
    >
      {{label}}
    </p>
    <!-- <span class="text-field__error">Заполните это поле</span> -->
    <textarea
      v-if="textarea"
      :placeholder="placeholder"
      :class="['text-field__input', 'text-field__input_ta', {[`text-field__input_${color}`]: color}]"
    ></textarea>
    <input
      v-else
      :type="type"
      :placeholder="placeholder"
      :class="['text-field__input', {[`text-field__input_${color}`]: color}]"
    >
    <span
      v-if="note"
      class="text-field__note"
    >
      {{note}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    textarea: Boolean,
    type: String,
    label: String,
    placeholder: String,
    color: String,
    labelColor: String,
    labelSize: String,
    note: String
  }
}
</script>

<style lang="scss">
.text-field {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

  &_note {
    padding-bottom: 30px;
  }

  &__label {
    font-weight: 500;
    font-size: 12px;

    &_gray {
      color: #949494;
    }

    &_big {
      font-size: 13px;
    }
  }

  &__error {
    font-size: 12px;
    color: #f16969;
  }

  &__input {
    margin-top: 4px;
    width: 100%;
    height: 56px;
    padding: 0 24px;
    border-radius: 4px;
    font-size: 14px;
    background-color: $color-lightgray;

    &::placeholder {
      font-size: 13px;
      color: #d5d5d5;
    }

    &_white {
      background-color: #fff;
    }

    &_ta {
      height: 110px;
      padding: 18px 24px;
    }
  }

  &__note {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    margin-top: 5px;
    font-weight: 500;
    font-size: 10px;
    line-height: (12/10);
    color: $color-lightviolet;
  }

  @include media(lg) {
    &__note {
      padding-right: 65px;
    }
  }
}
</style>
