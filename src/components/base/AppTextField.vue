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
      :class="[
        'text-field__input',
        'text-field__input_ta',
        {[`text-field__input_${color}`]: color},
        {[`text-field__input_${size}`]: size}
      ]"
      @input="$emit('input', $event)"
    ></textarea>
    <input
      v-else
      :type="type"
      :placeholder="placeholder"
      :class="[
        'text-field__input',
        {[`text-field__input_${color}`]: color},
        {[`text-field__input_side`]: sideNote}
      ]"
      @input="$emit('input', $event)"
    >
    <span
      v-if="note || sideNote"
      :class="[
        'text-field__note',
        {[`text-field__note_side`]: sideNote}
      ]"
    >
      {{note || sideNote}}
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
    size: String,
    labelColor: String,
    labelSize: String,
    note: String,
    sideNote: String
  },
  emits: ['input']
}
</script>

<style lang="scss">
.text-field {
  $b: &;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;

  &__label {
    width: 100%;
    font-weight: 500;
    font-size: 13px;

    &_gray {
      color: #949494;
    }

    &_small {
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

      &#{$b}__input_small {
        height: 56px;
      }
    }

    &_side {
      width: 53%;
    }
  }

  &__note {
    max-width: 260px;
    margin-top: 5px;
    font-weight: 500;
    font-size: 11px;
    line-height: (13/11);
    color: $color-lightviolet;

    &_side {
      flex: 1;
      margin-left: 18px;
    }
  }

  @include media(md) {
    &__input {
      &_side {
        width: 45%;
      }
    }

    &__note {
      font-size: 12px;

      &_side {
        margin-top: 0;
        margin-left: 24px;
      }
    }
  }

  @include media(xl) {
    &__input_ta {
      &#{$b}__input_big {
        height: 140px;
      }
    }
  }
}
</style>
