<template>
  <div class="text-field">
    <p
      class="text-field__label"
      :class="[
        'text-field__label',
        {'text-field__label_tip': tip},
        {[`text-field__label_${labelColor}`]: labelColor},
        {[`text-field__label_${labelSize}`]: labelSize}
      ]"
    >
      {{label}}
      <template v-if="tip">
        <span class="text-field__tip-icon">
          <AppIcon name="tip" />
        </span>
        <span class="text-field__tip-box">
          <span class="text-field__tip-text">{{ tip }}</span>
        </span>        
      </template>
    </p>
    <!-- <span class="text-field__error">Заполните это поле</span> -->
    <textarea
      v-if="textarea"
      :placeholder="placeholder"
      :name="name"
      :required="required"
      :class="[
        'text-field__input',
        'text-field__input_ta',
        {[`text-field__input_${color}`]: color},
        {[`text-field__input_${size}`]: size},
        {[`text-field__input_bordered`]: bordered},
      ]"
      @input="$emit('input', $event)"
    ></textarea>
    <input
      v-else
      :type="type"
      :placeholder="Array.isArray(placeholder) ? placeholder[0] : placeholder"
      :name="Array.isArray(name) ? name[0] : name"
      :required="required"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :class="[
        'text-field__input',
        {[`text-field__input_${color}`]: color},
        {[`text-field__input_${size}`]: size},
        {[`text-field__input_bordered`]: bordered},
        {[`text-field__input_side`]: sideNote},
        {[`text-field__input_double-sm`]: double}
      ]"
      @input="handleInput"
    >
    <input
      v-if="double"
      :type="type"
      :placeholder="Array.isArray(placeholder) ? placeholder[1] : placeholder"
      :name="Array.isArray(name) ? name[1] : name"
      :required="required"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :class="[
        'text-field__input',
        {[`text-field__input_${color}`]: color},
        {[`text-field__input_${size}`]: size},
        {[`text-field__input_bordered`]: bordered},
        {[`text-field__input_side`]: sideNote},
        {[`text-field__input_double-lg`]: double}
      ]"
      @input="handleInput"
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
import AppIcon from './AppIcon.vue';

export default {
  name: 'TextField',
  components: {
    AppIcon
  },
  props: {
    textarea: Boolean,
    type: String,
    label: String,
    placeholder: { type: [ String, Array ] },
    required: Boolean,
    name: { type: [ String, Array ] },
    color: String,
    bordered: Boolean,
    size: String,
    labelColor: String,
    labelSize: String,
    note: String,
    sideNote: String,
    double: Boolean,
    inputmode: String,
    tip: { type: [String, Boolean] },
    autocomplete: String
  },
  emits: [
    'input'
  ],
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    handleInput(e) {
      e.target.classList.remove('is-error')

      // телефон
      if (this.type === 'tel') {
        let val = e.target.value.replace(/\D/g, '')

        if (val) {
          if (val[0] === '7' || val[0] === '8') {
            val = val.slice(1)
          }

          val = val.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
          val = '+7' + (val[2] ? '(' + val[1]  + ')' + val[2] : (val[1] ? val[1] : '')) + (val[3] ? '-' + val[3] : '') + (val[4] ? '-' + val[4] : '')
        }

        e.target.value = val

      // договор буквы
      } else if (e.target.name === 'contract-l') {
        let val = e.target.value.replace(/[^А-ЯЁ]/gi, '')
        val = val.toUpperCase()
        e.target.value = val

      // договор цифры
      // } else if (e.target.name === 'contract-n') {
      //   let val = e.target.value.replace(/[^0-9-]/g, '')

      //   if (val && val[0] === '-') {
      //     val = val.slice(1)
      //   }

      //   e.target.value = val

      // сумма
      } else if (e.target.name === 'sum') {
        let val = e.target.value.replace(/[^0-9-]/g, '')
        e.target.value = val

      // доп номер
      } else if (e.target.name === 'additional_number') {
        let val = e.target.value.replace(/[^0-9-]/g, '').slice(0, 8)
        e.target.value = val

      } else {
        this.$emit('input', e)
      }
    }
  }
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
    font-size: 12px;

    &_gray {
      color: #949494;
    }

    &_lg {
      font-size: 13px;
    }

    &_tip {
      display: flex;
      align-items: center;
    }
  }

  &__tip {
    &-icon {
      display: flex;
      margin-top: -2px;
      margin-left: 6px;
      width: 20px;
      height: 20px;

      &:hover {
        & ~ #{$b}__tip-box {
          opacity: 1;
          pointer-events: all;
        }
      }
    }

    &-box {
      position: relative;
      flex: 1;
      height: 20px;
      opacity: 0;
      pointer-events: none;
      transition: opacity .3s ease;
    }

    &-text {
      position: absolute;
      left: -50px;
      bottom: calc(100% + 6px);
      width: 310px;
      min-width: 210px;
      max-width: 100%;
      padding: 20px;
      font-size: 12px;
      line-height: 1.5;
      color: #ACA8C3;
      background: #FFFFFF;
      border: 1px solid #F3F4F9;
      box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
      
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
    transition: box-shadow .3s ease;

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

    &_bordered {
      border: 1px solid #e8e9f0;
    }

    &_double-sm {
      width: 110px;
    }

    &_double-lg {
      margin-left: auto;
      width: calc(100% - 120px);
    }

    &_sm {
      height: 50px;
      font-size: 12px;
    }

    &.is-error {
      box-shadow: inset 0 0 0 1px #f16969;
    }
  }

  &__note {
    max-width: 260px;
    margin-top: 5px;
    font-weight: 500;
    font-size: 11px;
    line-height: calc(13/11);
    color: $color-lightviolet;

    &_side {
      flex: 1;
      margin-left: 18px;
    }
  }

  @include media(md) {
    &__input {
      &_side {
        width: 49%;
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

  @include media(lg) {
    &__tip {
      &-text {
        left: 0;
        bottom: 100%;
      }
    }
  }

  @include media(xl) {
    &__input_ta {
      &#{$b}__input_big {
        height: 140px;
      }
    }

    &__tip {
      &-text {
        padding: 20px 30px;
        width: 330px;
        max-width: none;
      }
    }
  }
}
</style>
