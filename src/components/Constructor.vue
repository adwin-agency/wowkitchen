<template>
  <div class="constructor">
    <div class="container">
      <div class="constructor__inner">
        <div class="constructor__header">
          <h2 class="constructor__heading">О<span>свой</span>те кухню</h2>
          <p class="constructor__desc">Понравилась модель, но хочется что-то заменить? Мы разработали простой конструктор, помогающий понять, как полюбившаяся модель будет выглядеть "с перламутровыми пуговицами".</p>
        </div>
        <div class="constructor__settings">        
          <div
            v-for="(setting, index) in settings"
            :key="index"
            class="constructor__setting"
            :class="`constructor__setting_${setting.id}`"
          >
            <AppSelect
              v-if="$_mobile"
              color="green"
              :options="setting.options"
              class="constructor__select"
            />
            <template v-else>
              <p class="constructor__setting-title">{{setting.title}}</p>
              <div class="constructor__options">
                <button
                  v-for="(option, index) in setting.options"
                  :key="index"
                  type="button"
                  class="constructor__option"
                  :class="{'is-active': activeSettings[setting.id].value === option}"
                  @click="setOption(setting.id, option)"
                >
                  {{option}}
                </button>
              </div>
            </template>
            <div
              v-if="setting.additions"
              class="constructor__additions"
            >
              <button
                v-for="(addition, index) in setting.additions"
                :key="index"
                type="button"
                class="constructor__addition"
                :class="{'is-active': activeSettings[setting.id].addition === addition}"
                @click="setAddition(setting.id, addition)"
              >
                {{addition}}
              </button>
            </div>
          </div>
          <AppButton
            v-if="$_desktop"
            color="yellow"
            icon="edit"
            figure
            title="Рассчитать этот проект"
            class="constructor__btn"
          />
        </div>
        <div class="constructor__area">
          <img
            src="@/assets/img/constructor.jpg"
            alt=""
            class="constructor__img"
          >
          <AppButton
            v-if="$_tablet"
            color="yellow"
            icon="edit"
            figure
            title="Рассчитать этот проект"
            class="constructor__btn"
          />
          <div
            v-for="(item, index) in points"
            :key="index"
            class="constructor__point"
            :style="!$_mobile && `left: ${item.coords[0]}%; top: ${item.coords[1]}%`"
          >
            <span
              class="constructor__circle"
              :style="$_mobile && `left: ${item.coords[0]}%; top: ${item.coords[1]}%`"
              @click="$_mobile && openTooltip(item.id)"
            ></span>
            <div
              class="constructor__tooltip"
              :class="[{'constructor__tooltip_r': item.coords[0] > 50}, {'is-active': activeTooltip === item.id}]"
            >
              <p class="constructor__tooltip-title">{{item.title}}</p>
              <p class="constructor__tooltip-desc">{{item.desc}}</p>
              <button
                v-if="$_mobile"
                type="button"
                class="constructor__tooltip-close"
                @click="closeTooltip"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppSelect from './base/AppSelect.vue'

export default {
  name: 'Constructor',
  components: {
    AppSelect,
    AppButton
  },
  data() {
    return {
      settings: [
        { id: 'styles', title: 'Стиль', options: ['Минимализм', 'Неоклассика', 'Хай-тек', 'Скандинавский'] },
        { id: 'composition', title: 'Компоновка', options: ['Прямая', 'Угловая', 'П-образная'], additions: ['Барная стойка', 'Остров'] },
        { id: 'colors', title: 'Цвет', options: ['Светлые тона', 'Тёмные тона'] },
      ],
      points: [
        { id: 'p1', coords: [16, 63], title: 'Столешница из утолщенного ЛДСП', desc: 'придаёт конструкции дополнительную жёсткость и не деформируется со временем.' },
        { id: 'p2', coords: [66, 17], title: 'Столешница из утолщенного ЛДСП 2', desc: 'придаёт конструкции дополнительную жёсткость и не деформируется со временем. 2' }
      ],

      activeSettings: {
        styles: { value: null },
        composition: { value: null, addition: null },
        colors: { value: null }
      },
      activeTooltip: null
    }
  },
  created() {
    this.activeSettings.styles.value = this.settings.find(item => item.id === 'styles').options[0]
    this.activeSettings.composition.value = this.settings.find(item => item.id === 'composition').options[0]
    this.activeSettings.colors.value = this.settings.find(item => item.id === 'colors').options[0]

    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (!this.$_mobile && this.activeTooltip) {
        this.activeTooltip = null
      }
    },

    setOption(setting, value) {
      this.activeSettings[setting].value = value
    },
    setAddition(setting, value) {
      this.activeSettings[setting].addition = this.activeSettings[setting].addition === value ? null : value
    },
    openTooltip(id) {
      this.activeTooltip = id
    },
    closeTooltip() {
      this.activeTooltip = null
    }
  }
}
</script>

<style lang="scss">
.constructor {
  $b: &;
  
  padding: 35px 0 130px;
  background-color: $color-lightgray;

  &__desc {
    margin-top: 10px;
    font-size: 14px;
    line-height: (26/14);
    color: #000;
  }

  &__settings {
    margin-top: 24px;
  }

  &__setting {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__option,
  &__addition {
    margin-right: 15px;
    border-radius: 20px;
    padding: 8px 25px;
    font-weight: bold;
    font-size: 11px;
    background-color: #ecedf4;
    transition: color .3s ease, background-color .3s ease;

    &.is-active {
      color: $color-lightgray;
      background-color: $color-green;
    }
  }

  &__additions {
    display: flex;
    margin-top: 3px;
  }

  &__addition {
    &::before {
      content: "+";
      margin-right: 12px;
    }    
  }

  &__area {
    position: relative;
    margin-top: 20px;
  }

  &__img {
    width: 100%;
  }

  &__circle {
    display: flex;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-yellow;
    box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.46);
    z-index: 1;

    &::after {
      content: "";
      margin: auto;
      width: 13px;
      height: 13px;
      border-radius: 50%;      
      background-color: #fff;
      box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.46);
    }
  }

  &__tooltip {
    position: absolute;
    top: 100%;
    left: 10px;
    right: 10px;
    margin-top: -45px;
    border-radius: 12px;
    padding: 40px 45px;
    background-color: $color-lightgray;
    box-shadow: 0px 17px 24px 0px rgba(0, 0, 0, 0.16);
    opacity: 0;
    transition: opacity .3s ease;
    pointer-events: none;

    &.is-active {
      opacity: 1;
      pointer-events: all;
    }

    &-title {
      font-weight: bold;
      font-size: 13px;
    }

    &-desc {
      margin-top: 8px;
      font-weight: 300;
      font-size: 11px;
      line-height: (20/11);
    }

    &-close {
      position: absolute;
      top: 14px;
      right: 20px;
      width: 36px;
      height: 36px;

      &::before,
      &::after {
        content: "";
        position: absolute;
        margin: auto;
        width: 22px;
        height: 1px;
        background-color: $color-lightviolet;
      }

      &::before {
        transform: rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
      }
    }
  }

  @include media(md) {
    padding: 72px 0;

    &__header {
      display: flex;
    }

    &__heading {
      flex-shrink: 0;
      margin-right: 40px;
    }

    &__desc {
      margin-top: 4px;
    }

    &__settings {
      display: flex;
      margin-top: 50px;
    }

    &__setting {
      padding-right: 20px;
      margin-bottom: 0;

      &:last-child {
        padding-right: 0;
      }

      &_styles {
        width: 34%;
      }

      &_composition {
        width: 43%;
      }

      &_colors {
        width: 23%;
      }

      &-title {
        font-weight: bold;
        font-size: 14px;
        color: #000;
      }
    }

    &__options {
      display: flex;
      flex-wrap: wrap;
      margin-top: 18px;
    }

    &__option,
    &__addition {
      margin-bottom: 8px;
    }

    &__area {
      margin: 35px 60px 0;
    }

    &__point {
      position: absolute;

      &:hover {
        #{$b}__tooltip {
          opacity: 1;
          pointer-events: all;
        }
      }
    }

    &__circle {
      left: 0;
      top: 0;
    }

    &__tooltip {
      top: 0;
      left: 0;
      right: auto;
      margin: 0;
      width: 360px;
      border-radius: 0;
      padding: 35px 50px;
      background-color: rgba(#fff, .8);
      box-shadow: 0px 13px 24px 0px rgba(0, 0, 0, 0.168);

      &_r {
        left: auto;
        right: 0;
      }
    }

    &__btn {
      position: absolute;
      right: 30px;
      bottom: 26px;
      min-width: 270px;
      font-size: 13px;
    }
  }

  @include media(lg) {
    padding: 90px 0 200px;

    &__inner {
      display: flex;
      flex-wrap: wrap;
    }

    &__header {
      width: 100%;
    }

    &__heading {
      margin-right: 135px;
    }

    &__desc {
      margin-top: 0;
      max-width: 760px;
    }

    &__area {
      flex: 1;
      margin-top: 50px;
      margin-left: -10px;
      margin-right: 55px;
    }

    &__settings {
      display: block;
      order: 1;
      margin-top: 75px;
      width: 345px;
    }

    &__setting {
      width: 100%;
      padding-right: 0;
      margin-bottom: 50px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &__options {
      margin-right: -15px;
    }

    &__btn {
      position: static;
      margin-top: 40px;
    }
  }

  @include media(xl) {
    padding: 108px 0 225px;

    &__header {
      margin: 0 160px;
    }

    &__area {
      margin-top: 58px;
      margin-left: 0;
      margin-right: 80px;
    }

    &__settings {
      margin-top: 115px;
      margin-right: 80px;
      width: 460px;
    }
  }
}
</style>
