<template>
  <div class="constructor">
    <div class="container">
      <div class="constructor__inner">
        <div class="constructor__header">
          <h2 class="constructor__heading">О<span>свой</span>те кухню</h2>
          <p class="constructor__desc">Разные стили и планировки кухни. Все кухни делаем на заказ по индивидуальным размерам учитывая ваши пожелания</p>
        </div>
        <div class="constructor__settings">
          <form
            ref="form"
            class="constructor__form"
          >
            <div
              v-for="(setting, name) in settings"
              :key="name"
              class="constructor__setting"
              :class="`constructor__setting_${name}`"
            >
              <p
                v-if="!$_media.sm"
                class="constructor__setting-title"
              >
                {{setting.title}}
              </p>

              <AppSelect
                v-if="$_media.sm && setting.select"
                color="green"
                :options="setting.options"
                :name="name"
                class="constructor__select"
                @change="handleSelectChange(name, $event)"
              />

              <div
                v-else
                class="constructor__options"
              >
                <label
                  v-for="(option, index) in setting.options"
                  :key="$_media.sm ? index + 'sm' : index"
                  class="constructor__option"
                >
                  <input
                    type="radio"
                    :name="name"
                    :value="option.title"
                    :checked="index === 0"
                    @change="handleSettingChange(name, $event)"
                  >
                  <span>{{option.title}}</span>
                </label>
              </div>

              <div
                v-if="setting.additions"
                ref="additions"
                class="constructor__additions"
              >
                <label
                  v-for="(addition, index) in setting.additions"
                  :key="$_media.sm ? index + 'sm' : index"
                  class="constructor__addition"
                >
                  <input
                    type="checkbox"
                    name="addition"
                    :value="addition.title"
                    @change="handleAdditionChange(addition.code, $event)"
                  >
                  <span>{{addition.title}}</span>
                </label>
              </div>

            </div>
          </form>
          <AppButton
            v-if="$_desktop"
            color="yellow"
            icon="edit"
            figure
            title="Рассчитать этот проект"
            modalName="calc"
            class="constructor__btn"
            @click="handleBtnClick"
          />
        </div>
        <div class="constructor__area">
          <img
            :src="require(`@/assets/img/${style}-${category + (addition || '')}-${colors}.jpg`)"
            alt=""
            class="constructor__img"
          >
          <AppButton
            v-if="$_media.md"
            color="yellow"
            icon="edit"
            figure
            title="Рассчитать этот проект"
            modalName="calc"
            class="constructor__btn"
            @click="handleBtnClick"
          />
          <div
            v-for="(item, index) in activePoints"
            :key="index"
            class="constructor__point"
            :style="!$_media.sm && `left: ${item.coords[0]}%; top: ${item.coords[1]}%`"
          >
            <span
              class="constructor__circle"
              :style="$_media.sm && `left: ${item.coords[0]}%; top: ${item.coords[1]}%`"
              @click="$_media.sm && openTooltip(index)"
            ></span>
            <div
              class="constructor__tooltip"
              :class="[{'constructor__tooltip_r': item.coords[0] > 50}, {'is-active': activeTooltip === index}]"
            >
              <p class="constructor__tooltip-title">{{item.title}}</p>
              <!-- <p class="constructor__tooltip-desc">{{item.desc}}</p> -->
              <button
                v-if="$_media.sm"
                type="button"
                class="constructor__tooltip-close"
                @click="closeTooltip"
              ></button>
            </div>
          </div>
        </div>
        <AppButton
          v-if="$_media.sm"
          color="yellow"
          icon="edit"
          figure
          title="Рассчитать этот проект"
          modalName="calc"
          class="constructor__btn"
          @click="handleBtnClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppSelect from './base/AppSelect.vue'

const settings = {
  style: {
    select: true,
    title: 'Стиль',
    options: [
      { title: 'Минимализм', code: 'minimal' },
      { title: 'Скандинавский', code: 'scandy' },
      { title: 'Лофт', code: 'loft' },
      { title: 'Неоклассика', code: 'neoclassic' }
    ]
  },
  category: {
    select: true,
    title: 'Компоновка',
    options: [
      { title: 'Прямая', code: 'straight' },
      { title: 'Угловая', code: 'corner' },
      { title: 'П-образная', code: 'shaped' }
    ],
    additions: [
      { title: 'Барная стойка', code: 'bar' },
      { title: 'Остров', code: 'island' }
    ]
  },
  colors: {
    title: 'Цвет',
    options: [
      { title: 'Светлые тона', code: 'light' },
      { title: 'Тёмные тона', code: 'dark' }
    ]
  }
}

const points = {
  minimal: {
    straight: [
      { title: 'Качественное ЛДСП, которому не страшны перепад темеператур', coords: [49, 63] },
      { title: 'Встроенная в шкаф-пенал духовка', coords: [77, 53] }
    ],
    straightbar: [
      { title: 'Встроенная в шкаф-пенал духовка', coords: [77, 53] },
      { title: 'Качественное ЛДСП, которому не страшны перепад темеператур', coords: [49, 63] },
      { title: 'Удобная барная стойка', coords: [28, 68] }
    ],
    straightisland: [
      { title: 'Остров, как полноценная обеденная зона и дополнительное место для готовки', coords: [43, 80] },
      { title: 'Качественное ЛДСП, которому не страшны перепад темеператур', coords: [52, 62] },
      { title: 'Встроенная в шкаф-пенал духовка', coords: [77, 53] }
    ],
    corner: [
      { title: 'Глубокая мойка', coords: [38, 62] },
      { title: 'Влаго- и жаропрочный утолщенный ЛДСП', coords: [73, 54] }
    ],
    cornerbar: [
      { title: 'Глубокая мойка', coords: [19, 64] },
      { title: 'Глубокие шкафы для хранения', coords: [71, 35] },
      { title: 'Функциональная барная стойка', coords: [37, 71] }
    ],
    cornerisland: [
      { title: 'Вместительные шкафы для хранения', coords: [40, 35] },
      { title: 'Глубокая мойка', coords: [38, 62] },
      { title: 'Остров, как полноценная обеденная зона и дополнительное место для готовки', coords: [73, 76] }
    ],
    shaped: [
      { title: 'Качественная подсветка рабочей зоны', coords: [31, 47] },
      { title: 'Столешница из утолщенного ЛДСП', coords: [50, 63] }
    ],
    shapedbar: [
      { title: 'Качественная подсветка рабочей зоны', coords: [58, 46] },
      { title: 'Столешница из утолщенного ЛДСП', coords: [41, 63] },
      { title: 'Функциональная барная стойка', coords: [20, 67] }
    ],
    shapedisland: [
      { title: 'Качественная подсветка рабочей зоны', coords: [31, 47] },
      { title: 'Столешница из утолщенного ЛДСП', coords: [69, 63] },
      { title: 'Остров как полноценное обеденное место', coords: [50, 73] }
    ]
  },
  scandy: {
    straight: [
      { title: 'Стеклянные фасады', coords: [35, 36] },
      { title: 'Функциональная рейлинговая система', coords: [45, 51] }
    ],
    straightbar: [
      { title: 'Стеклянные фасады', coords: [41, 36] },
      { title: 'Функциональная рейлинговая система', coords: [58, 51] },
      { title: 'Открытая барная стойка', coords: [26, 70] }
    ],
    straightisland: [
      { title: 'Стеклянные фасады', coords: [37, 29] },
      { title: 'Функциональная рейлинговая система', coords: [57, 51] },
      { title: 'Остров, как полноценная обеденная зона и дополнительное место для готовки', coords: [50, 74] }
    ],
    corner: [
      { title: 'Керамическая раковина', coords: [30, 62] },
      { title: 'Просторная рабочая зона', coords: [72, 56] }
    ],
    cornerbar: [
      { title: 'Керамическая раковина', coords: [47, 62] },
      { title: 'Просторная рабочая зона', coords: [72, 56] },
      { title: 'Открытая барная стойка', coords: [26, 70] }
    ],
    cornerisland: [
      { title: 'Керамическая раковина', coords: [30, 62] },
      { title: 'Просторная рабочая зона', coords: [57, 51] },
      { title: 'Остров, как полноценная обеденная зона и дополнительное место для готовки', coords: [50, 80] }
    ],
    shaped: [
      { title: 'Фрезерованные фасады', coords: [33, 73] },
      { title: 'Открытая стена, разгружающая пространство', coords: [68, 38] }
    ],
    shapedbar: [
      { title: 'Фрезерованные фасады', coords: [50, 68] },
      { title: 'Открытая стена, разгружающая пространство', coords: [68, 38] },
      { title: 'Открытая барная стойка', coords: [34, 68] }
    ],
    shapedisland: [
      { title: 'Фрезерованные фасады', coords: [23, 72] },
      { title: 'Открытая стена, разгружающая пространство', coords: [68, 38] },
      { title: 'Остров, как полноценная обеденная зона и дополнительное место для готовки', coords: [51, 82] }
    ]
  },
  loft: {
    straight: [
      { title: 'Открытая полка для декора', coords: [57, 43] },
      { title: 'Встроенный духовой шкаф на комфортном уровне', coords: [76, 59] }
    ],
    straightbar: [
      { title: 'Открытая полка для декора', coords: [57, 43] },
      { title: 'Встроенный духовой шкаф на комфортном уровне', coords: [76, 59] },
      { title: 'Барная стойка, расширяющая рабочую зону', coords: [29, 64] }
    ],
    straightisland: [
      { title: 'Открытая полка для декора', coords: [57, 43] },
      { title: 'Встроенный духовой шкаф на комфортном уровне', coords: [76, 59] },
      { title: 'Функциональный остров с местом для хранения', coords: [35, 71] }
    ],
    corner: [
      { title: 'Качественная подсветка рабочей зоны', coords: [39, 48] },
      { title: 'Просторные верхние модули-антресоли под потолок', coords: [67, 29] }
    ],
    cornerbar: [
      { title: 'Качественная подсветка рабочей зоны', coords: [39, 48] },
      { title: 'Просторные верхние модули-антресоли под потолок', coords: [67, 29] },
      { title: 'Барная стойка, расширяющая рабочую зону', coords: [28, 67] }
    ],
    cornerisland: [
      { title: 'Качественная подсветка рабочей зоны', coords: [39, 48] },
      { title: 'Просторные верхние модули-антресоли под потолок', coords: [67, 29] },
      { title: 'Функциональный остров с местом для хранения', coords: [47, 78] }
    ],
    shaped: [
      { title: 'Стильные матовые фасады от компании Egger', coords: [33, 28] },
      { title: 'Столешница из утолщённого износостойкого ЛДСП', coords: [60, 62] }
    ],
    shapedbar: [
      { title: 'Стильные матовые фасады от компании Egger', coords: [39, 30] },
      { title: 'Столешница из утолщённого износостойкого ЛДСП', coords: [60, 62] },
      { title: 'Барная стойка, расширяющая рабочую зону', coords: [26, 67] }
    ],
    shapedisland: [
      { title: 'Стильные матовые фасады от компании Egger', coords: [33, 28] },
      { title: 'Столешница из утолщённого износостойкого ЛДСП', coords: [72, 63] },
      { title: 'Функциональный остров с местом для хранения', coords: [39, 81] }
    ]
  },
  neoclassic: {
    straight: [
      { title: 'Шкафы-антресоли под потолком', coords: [38, 24] },
      { title: 'Стильные хромированные ручки', coords: [52, 65] }
    ],
    straightbar: [
      { title: 'Шкафы-антресоли под потолком', coords: [38, 24] },
      { title: 'Стильные хромированные ручки', coords: [52, 65] },
      { title: 'Минималистичная открытая барная стойка', coords: [29, 64] }
    ],
    straightisland: [
      { title: 'Шкафы-антресоли под потолком', coords: [38, 24] },
      { title: 'Стильные хромированные ручки', coords: [57, 43] },
      { title: 'Функциональный остров с местом для хранения', coords: [72, 77] }
    ],
    corner: [
      { title: 'Встроенная в шкаф-пенал техника', coords: [80, 51] },
      { title: 'Фрезерованная матовые фасады', coords: [43, 71] }
    ],
    cornerbar: [
      { title: 'Встроенная в шкаф-пенал техника', coords: [80, 51] },
      { title: 'Фрезерованные матовые фасады', coords: [40, 38] },
      { title: 'Минималистичная открытая барная стойка', coords: [35, 68] }
    ],
    cornerisland: [
      { title: 'Встроенная в шкаф-пенал техника', coords: [80, 51] },
      { title: 'Фрезерованные матовые фасады', coords: [40, 38] },
      { title: 'Функциональный остров с местом для хранения', coords: [68, 76] }
    ],
    shaped: [
      { title: 'Встроенный в пенал духовой шкаф на комфортном уровне', coords: [75, 50] },
      { title: 'Вместительные шкафы-антресоли под потолком', coords: [39, 24] }
    ],
    shapedbar: [
      { title: 'Встроенный в пенал духовой шкаф на комфортном уровне', coords: [75, 50] },
      { title: 'Вместительные шкафы-антресоли под потолком', coords: [39, 24] },
      { title: 'Минималистичная открытая барная стойка', coords: [37, 70] }
    ],
    shapedisland: [
      { title: 'Встроенный в пенал духовой шкаф на комфортном уровне', coords: [75, 50] },
      { title: 'Вместительные шкафы-антресоли под потолком', coords: [39, 24] },
      { title: 'Функциональный остров с местом для хранения', coords: [65, 81] }
    ]
  }
}

export default {
  name: 'Constructor',
  components: {
    AppSelect,
    AppButton
  },
  data() {
    return {
      activeSelects: this.$_media.sm,
      settings: settings,
      style: 'minimal',
      category: 'straight',
      addition: null,
      colors: 'light',
      points: points,
      activeTooltip: null
    }
  },
  computed: {
    activePoints() {
      return this.points[this.style][this.category + (this.addition || '')]
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    resetSettings() {
      this.style = 'minimal'
      this.composition = 'straight'
      this.addition = null
      this.colors = 'light'
    },

    handleResize() {
      if (!this.$_media.sm && this.activeTooltip !== null) {
        this.closeTooltip()
      }

      if (this.$_media.sm && !this.activeSelects) {
        this.activeSelects = true
        this.resetSettings()
      }

      if (!this.$_media.sm && this.activeSelects) {
        this.activeSelects = false
        this.resetSettings()
      }
    },

    openTooltip(id) {
      this.activeTooltip = id
    },
    closeTooltip() {
      this.activeTooltip = null
    },

    handleSelectChange(id, value) {
      this[id] = this.settings[id].options.find((i) => i.title === value).code
      this.closeTooltip()
    },
    handleSettingChange(id, event) {
      this[id] = this.settings[id].options.find((i) => i.title === event.target.value).code
      this.closeTooltip()
    },
    handleAdditionChange(code, event) {
      const target = event.target
      const inputs = this.$refs.additions.querySelectorAll('input')

      for (let input of inputs) {
        if (input !== target) {
          input.checked = false
        }
      }

      this.addition = target.checked ? code : null
      this.closeTooltip()
    },

    handleBtnClick() {
      const obj = {}
      const formData = new FormData(this.$refs.form)

      formData.forEach((value, key) => (obj[key] = value))
      this.$store.commit('setConstructor', obj)
    }
  }
}
</script>

<style lang="scss">
.constructor {
  $b: &;

  padding: 35px 0;
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

  &__options {
    display: flex;
    margin-right: -15px;
  }

  &__option {
    flex: 1;
    margin-right: 15px;
    cursor: pointer;

    input {
      display: none;

      &:checked + span {
        color: $color-lightgray;
        background-color: $color-green;
      }
    }

    span {
      display: block;
      border-radius: 100px;
      text-align: center;
      padding: 17px 20px;
      white-space: nowrap;
      font-weight: bold;
      font-size: 13px;
      background-color: #ecedf4;
      transition: color 0.3s ease, background-color 0.3s ease;
    }
  }

  &__addition {
    margin-right: 15px;
    cursor: pointer;

    input {
      display: none;

      &:checked + span {
        color: $color-lightgray;
        background-color: $color-green;
      }
    }

    span {
      display: inline-block;
      border-radius: 20px;
      padding: 8px 20px;
      font-weight: bold;
      font-size: 11px;
      background-color: #ecedf4;
      transition: color 0.3s ease, background-color 0.3s ease;
    }
  }

  &__additions {
    display: flex;
    margin-top: 3px;
  }

  &__addition {
    span {
      &::before {
        content: '+';
        margin-right: 12px;
      }
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
      content: '';
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
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;

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
        content: '';
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

  &__btn {
    margin-top: 30px;
    width: 100%;
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
      margin-top: 50px;
    }

    &__form {
      display: flex;
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
      margin-right: 0;
    }

    &__option {
      flex: 0;

      span {
        padding: 8px 25px;
        font-size: 11px;
      }
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
        z-index: 2;

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
      background-color: rgba(#fff, 0.8);
      box-shadow: 0px 13px 24px 0px rgba(0, 0, 0, 0.168);
      z-index: auto;

      &_r {
        left: auto;
        right: 0;
      }
    }

    &__btn {
      position: absolute;
      right: 30px;
      bottom: 26px;
      margin-top: 0;
      width: auto;
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
      order: 1;
      margin-top: 75px;
      width: 345px;
    }

    &__form {
      display: block;
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
