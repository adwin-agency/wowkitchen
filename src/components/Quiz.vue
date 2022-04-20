<template>
  <div class="quiz">
    <div
      v-if="activeStep === 0"
      class="quiz__main"
    >
      <div class="quiz__image">
        <img
          src="@/assets/img/quiz.jpg"
          alt=""
        >
        <AppIcon
          name="shape-6"
          class="quiz__shape quiz__shape_rectangle-1"
          viewBox="0 0 17.21 17.22"
        />
        <AppIcon
          name="shape-7"
          class="quiz__shape quiz__shape_circle-1"
          viewBox="0 0 57 57.04"
        />
        <AppIcon
          name="shape-10"
          class="quiz__shape quiz__shape_zigzag-1"
          viewBox="0 0 59.031 57.75"
        />
        <AppIcon
          name="shape-4"
          class="quiz__shape quiz__shape_rectangle-2"
          viewBox="0 0 56.22 56.22"
        />
        <AppIcon
          v-if="!$_media.sm"
          name="shape-3"
          class="quiz__shape quiz__shape_triangle-1"
          viewBox="0 0 59 54.5"
        />
        <AppIcon
          v-if="!$_media.sm"
          name="shape-1"
          class="quiz__shape quiz__shape_circle-2"
          viewBox="0 0 194.19 194.22"
        />
      </div>
      <div class="quiz__main-content">
        <div class="container">
          <div class="quiz__main-inner">
            <h1 class="quiz__heading">Расчет онлайн</h1>
            <p class="quiz__desc">Пройдите простой тест из 3 вопросов и получите <b>бесплатный онлайн-расчёт</b> проекта, а так же закрепите за собой <b>самые выгодные условия</b> на гарнитур!</p>
            <AppButton
              title="Рассчитать"
              class="quiz__start"
              @click="startQuiz"
            />
          </div>
        </div>
      </div>
    </div>
    <form
      v-else
      ref="quizform"
      class="quiz__form"
      @submit="handleSubmit"
    >
      <input
        type="hidden"
        name="type"
        :value="$route.params.open ? 'quiz' : 'quiz-initial'"
      >
      <input
        type="hidden"
        name="page"
        :value="page"
      >
      <input
        type="hidden"
        name="price"
        :value="price"
      >
      <div class="quiz__screen">
        <div class="quiz__steps">
          <div
            class="quiz__steps-wrapper"
            :style="`transform: translateX(${(activeStep - 1) * -100}%)`"
          >
            <div class="quiz__step" :class="{'active': activeStep === 1}">
              <div class="container">
                <div class="quiz__step-header">
                  <p class="quiz__order">Вопрос 1 из 3</p>
                </div>
                <h2 class="quiz__title">Выберите планировку кухни</h2>
                <div class="quiz__options">
                  <QuizOption
                    v-for="(option, index) in planOptions"
                    :key="index"
                    shadow
                    name="plan"
                    :image="option.image"
                    :value="option.title"
                    :title="option.title"
                    class="quiz__option"
                    @change="handleRadioChange('plan', $event)"
                    @click="handleRadioClick('plan', option.title, $event)"
                  />
                </div>
              </div>
            </div>
            <div class="quiz__step" :class="{'active': activeStep === 2}">
              <div class="container">
                <div class="quiz__step-header">
                  <p class="quiz__order">Вопрос 2 из 3</p>
                  <!-- <button
                    class="quiz__back"
                    type="button"
                    @click="goToPrevStep"
                  >
                    <AppIcon
                      name="angle-down"
                      class="quiz__back-icon"
                    />
                    Назад
                  </button> -->
                </div>
                <h2 class="quiz__title">Введите ориентировочные размеры</h2>
                <div class="quiz__size">
                  <div class="quiz__area">
                    <img
                      v-if="sizeImage"
                      :src="require(`@/assets/img/${sizeImage}`)"
                      alt
                    >
                  </div>
                  <div class="quiz__fields">
                    <div class="quiz__fields-group">
                      <p class="quiz__fields-title">Габариты</p>
                      <AppTextField
                        v-for="(size, index) in values.sizes"
                        :key="index"
                        type="text"
                        name="size[]"
                        :label="`Сторона ${['A', 'B', 'C'][index]}, см`"
                        placeholder="Размер в см"
                        inputmode="numeric"
                        autocomplete="off"
                        class="quiz__field"
                        @input="handleSizeInput(index, $event)"
                      />
                    </div>
                    <div
                      ref="construct"
                      class="quiz__fields-group"
                    >
                      <p class="quiz__fields-title">Дополнительный конструктив</p>
                      <AppControl
                        type="checkbox"
                        name="addition"
                        color="gray"
                        :items="['+ Барная стойка', '+ Остров']"
                        class="quiz__control"
                        @change="handleCheckRadioChange('construct', $event)"
                      />
                    </div>
                    <div class="quiz__actions quiz__actions_l">
                      <AppButton
                          icon="arrow"
                          color="gray2"
                          size="small"
                          class="quiz__prev"
                          @click="goToPrevStep"
                      />
                      <AppButton
                        title="Далее"
                        size="small"
                        class="quiz__next"
                        :disabled="!completedSizes"
                        @click="goToNextStep"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="quiz__step" :class="{'active': activeStep === 3}">
              <div class="container">
                <div class="quiz__step-header">
                  <p class="quiz__order">Вопрос 3 из 3</p>
                  <!-- <button
                    class="quiz__back"
                    type="button"
                    @click="goToPrevStep"
                  >
                    <AppIcon
                      name="angle-down"
                      class="quiz__back-icon"
                    />
                    Назад
                  </button> -->
                </div>
                <h2 class="quiz__title">Давайте выберем стиль</h2>
                <div class="quiz__options quiz__options_wide">
                  <QuizOption
                    v-for="(option, index) in styleOptions"
                    :key="index"
                    small
                    name="style"
                    :image="option.image"
                    :value="option.title"
                    :title="option.title"
                    class="quiz__option"
                    @change="handleRadioChange('style', $event)"
                  />
                </div>
                <div class="quiz__actions">
                  <AppButton
                      icon="arrow"
                      color="gray2"
                      size="small"
                      class="quiz__prev"
                      @click="goToPrevStep"
                  />
                  <AppButton
                    title="Далее"
                    size="small"
                    class="quiz__next"
                    :disabled="!values.style"
                    @click="goToNextStep"
                  />
                </div>
              </div>
            </div>
            <!-- <div class="quiz__step">
            <div class="container">
              <p class="quiz__order">Вопрос 4 из 4</p>
              <h2 class="quiz__title">Выберите дополнительные элементы:</h2>
              <div class="quiz__elements">
                <div class="quiz__options quiz__options_wide">
                  <QuizOption
                    v-for="(option, index) in addOptions"
                    :key="index"
                    checkbox
                    small
                    name="elements"
                    :image="option.image"
                    :value="option.title"
                    :title="option.title"
                    class="quiz__option"
                    @change="handleCheckboxChange('elements', $event)"
                  />
                </div>
                <AppButton
                  title="Далее"
                  size="small"
                  class="quiz__next"
                  :disabled="!isCompletedStep"
                  @click="goToNextStep"
                />
              </div>
            </div>
          </div> -->
            <div class="quiz__step" :class="{'active': activeStep === 4}">
              <div class="container">
                <h2 class="quiz__title">Расчёт стоимости</h2>
                <div class="quiz__calc">
                  <div
                    v-if="$_media.sm"
                    class="quiz__summary"
                  >
                    <p class="quiz__summary-title">Параметры вашей будущей кухни:</p>
                    <ol class="quiz__progress">
                      <li class="quiz__progress-item is-active">
                        <span class="quiz__progress-num">1</span>
                        <span class="quiz__progress-title">Тип кухни: {{values.plan}}</span>
                      </li>
                      <li class="quiz__progress-item is-active">
                        <span class="quiz__progress-num">2</span>
                        <span class="quiz__progress-title">Размеры: {{values.sizes.join('x')}} см {{values.construct.join(' ')}}</span>
                      </li>
                      <li class="quiz__progress-item is-active">
                        <span class="quiz__progress-num">3</span>
                        <span class="quiz__progress-title">Стиль: {{values.style}}</span>
                      </li>
                      <!-- <li
                        v-if="values.elements.length"
                        class="quiz__progress-item is-active"
                      >
                        Дополнительно: {{values.elements.join(', ')}}
                      </li> -->
                    </ol>
                  </div>
                  <QuizResult
                    :resultprice="price"
                    :sending="sending"
                    :error="error"
                    class="quiz__result"
                  />
                  <button
                    v-if="$_media.sm"
                    type="button"
                    class="quiz__reset"
                    @click="resetQuiz"
                  >
                    <AppIcon
                      name="refresh"
                      class="quiz__reset-icon"
                    />
                    Посчитать еще раз
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="!$_media.sm"
          class="quiz__side"
        >
          <div class="quiz__note">
            <p class="quiz__note-title">{{notes[activeStep - 1]}}</p>
            <p
              v-if="activeStep < 4"
              class="quiz__note-desc"
            >
              до бесплатного расчёта проекта онлайн и закрепления за вами самых выгодных условий покупки
            </p>
          </div>
          <ol class="quiz__progress">
            <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 1}"
            >
              <span class="quiz__progress-num">1</span>
              <span class="quiz__progress-title">{{activeStep > 1 ? `Тип кухни: ${values.plan}` : ''}}</span>
            </li>
            <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 2}"
            >
              <span class="quiz__progress-num">2</span>
              <span class="quiz__progress-title">{{activeStep > 2 ? `Размеры: ${values.sizes.join('x')} см ${values.construct.join(' ')}` : ''}}</span>
            </li>
            <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 3}"
            >
              <span class="quiz__progress-num">3</span>
              <span class="quiz__progress-title">{{activeStep > 3 ? `Стиль: ${values.style}`: ''}}</span>
            </li>
            <!-- <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 4}"
            >
              {{activeStep > 4 ? `Дополнительно: ${values.elements.join(', ')}`: ''}}
            </li> -->
          </ol>
          <button
            v-if="activeStep === 4"
            type="button"
            class="quiz__reset"
            @click="resetQuiz"
          >
            <AppIcon
              name="refresh"
              class="quiz__reset-icon"
            />
            Посчитать еще раз
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppControl from './base/AppControl.vue'
import AppTextField from './base/AppTextField.vue'
import QuizOption from './QuizOption.vue'
import QuizResult from './QuizResult.vue'
import useForms from '../composition/forms'

const notes = [
  // '4 простых шага',
  '3 простых шага',
  'Ещё 2 простых шага',
  'Остался всего 1 шаг',
  'Параметры вашей будущей кухни:'
]

const planOptions = [
  { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Прямая планировка' },
  { image: { name: 'quiz-corner.jpg', alt: 'Угловая' }, title: 'Угловая планировка' },
  { image: { name: 'quiz-shaped.jpg', alt: 'П-образная' }, title: 'П-образная планировка' }
]

const styleOptions = [
  { image: { name: 'minimal.jpg', alt: 'Минимализм' }, title: 'Минимализм' },
  { image: { name: 'neoclassic.jpg', alt: 'Неоклассика' }, title: 'Неоклассика' },
  { image: { name: 'loft.jpg', alt: 'Лофт' }, title: 'Лофт' },
  { image: { name: 'scandy.jpg', alt: 'Скандинавский' }, title: 'Скандинавский' }
]

// const addOptions = [
//   { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Стеновая панель МДФ' },
//   { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Встроенная подсветка' },
//   { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Техника' },
//   { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Мойка' }
// ]

export default {
  name: 'Quiz',
  components: {
    AppButton,
    AppTextField,
    AppControl,
    QuizOption,
    AppIcon,
    QuizResult
  },
  setup() {
    const { sending, error, page, handleSubmit } = useForms()
    return {
      sending,
      error,
      page,
      handleSubmit
    }
  },
  data() {
    return {
      notes: notes,
      planOptions: planOptions,
      styleOptions: styleOptions,
      // addOptions: addOptions,
      activeStep: this.$route.params.open ? 1 : 0,
      completedStep: 0,
      sizeImage: 'size-I.png',
      values: {
        plan: '',
        sizes: [],
        construct: [],
        style: '',
        // elements: [],
        email: ''
      }
    }
  },
  computed: {
    completedSizes() {
      for (let size of this.values.sizes) {
        if (size === '') {
          return false
        }
      }

      return true
    },

    price() {
      const minCoef = 15
      const maxCoef = 20
      const additionPrice = 10000

      const sizeSum = this.values.sizes.reduce((sum, current) => sum + +current, 0)
      const min = sizeSum * 10 * minCoef + this.values.construct.length * additionPrice
      const max = sizeSum * 10 * maxCoef + this.values.construct.length * additionPrice

      return min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽ - ' + max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'
    }
  },
  watch: {
    success() {
      this.activeStep = 0
      this.completedStep = 0
    }
  },
  created() {
    if (this.$route.params.open) {
      window.VK && window.VK.Goal('initiate_checkout')
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'open_form' })
      window.dataLayer.push({ event: 'open_quiz' })
    }
  },
  methods: {
    startQuiz() {
      window.scrollTo(0, 0)
      this.activeStep = 1
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'start_quiz' })
    },

    handleRadioChange(name, event) {
      if (name === 'plan') {
        const sizeData = {
          'Прямая планировка': { arr: [''], img: 'size-I.png' },
          'Угловая планировка': { arr: ['', ''], img: 'size-L.png' },
          'П-образная планировка': { arr: ['', '', ''], img: 'size-U.png' }
        }

        this.values.sizes = sizeData[event.target.value].arr
        this.sizeImage = sizeData[event.target.value].img
      }

      this.values[name] = event.target.value
      this.goToNextStep()
    },

    handleRadioClick(name, value, event) {
      if (this.values[name] === value && event.target.tagName === 'INPUT') {
        this.goToNextStep()
      }
    },

    handleCheckRadioChange(name, event) {
      if (event.target.checked) {
        this.$refs[name].querySelectorAll('input').forEach((input) => {
          if (input !== event.target) {
            input.checked = false
          }
        })

        this.values[name] = [event.target.value]
      } else {
        this.values[name] = []
      }
    },

    handleCheckboxChange(name, event) {
      if (event.target.checked) {
        this.values[name].push(event.target.value)
      } else {
        this.values[name] = this.values[name].filter((item) => item !== event.target.value)
      }
    },

    handleSizeInput(index, event) {
      event.preventDefault()
      const value = event.target.value

      if (/^\d*$/.test(value)) {
        this.values.sizes[index] = value
      } else {
        event.target.value = this.values.sizes[index]
      }
    },

    scrollToTop() {
      if (this.$_media.sm) {
        setTimeout(() => window.scrollTo(0, 0), 250)
      }
    },

    goToPrevStep() {
      this.activeStep--
      this.scrollToTop()
    },

    goToNextStep() {
      this.scrollToTop()

      if (this.completedStep < this.activeStep) {
        this.completedStep++
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: (this.$route.params.open ? 'quiz_step_' : 'quiz-initial_step_') + this.completedStep })
      }

      this.activeStep++
    },

    resetQuiz() {
      this.$refs.quizform.reset()
      this.activeStep = 1
      this.completedStep = 0
      this.values = {
        plan: '',
        sizes: [],
        construct: [],
        style: '',
        elements: [],
        email: ''
      }
      this.scrollToTop()
    }
  }
}
</script>

<style lang="scss">
.quiz {
  $b: &;

  &__image {
    position: relative;
    margin: 0 auto;
    max-width: 380px;

    img {
      width: 100%;
    }
  }

  &__shape {
    position: absolute;

    &_rectangle-1 {
      left: 58px;
      top: 90px;
      width: 26px;
    }

    &_circle-1 {
      left: 8px;
      top: 28px;
      width: 86px;
    }

    &_zigzag-1 {
      right: 20px;
      bottom: 30px;
      width: 60px;
    }

    &_rectangle-2 {
      right: 4px;
      bottom: 30px;
      width: 45px;
    }
  }

  &__main-content {
    padding: 30px 0 45px;
  }

  &__desc {
    margin-top: 4px;
    font-size: 14px;
    line-height: (30/14);
  }

  &__start {
    margin-top: 20px;
    width: 100%;
  }

  &__steps {
    overflow: hidden;
  }

  &__steps-wrapper {
    display: flex;
    transition: transform 0.5s ease;
  }

  &__step {
    flex-shrink: 0;
    width: 100%;
    padding: 20px 0 35px;
    opacity: 0;
    pointer-events: none;
    transition: opacity .25s ease;

    &.active {
      opacity: 1;
      pointer-events: all;
      transition-delay: .25s;
    }
  }

  &__step-header {
    display: flex;
    justify-content: space-between;
  }

  &__order {
    font-weight: 500;
    font-size: 14px;
    color: $color-green;
  }

  &__back {
    display: flex;
    align-items: center;
    font-size: 14px;

    &-icon {
      margin-right: 5px;
      width: 9px;
      height: 9px;
      fill: currentColor;
      transform: rotate(90deg);
    }
  }

  &__title {
    margin-top: 15px;
    margin-bottom: 25px;
  }

  &__option {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__area {
    margin: 0 (-$container-padding);

    img {
      width: 100%;
    }

    &_bordered {
      img {
        border: 1px solid #DCDCDC;
      }
    }
  }

  &__fields {
    margin-top: 20px;

    &-group {
      & + & {
        margin-top: 24px;
      }
    }

    &-title {
      font-weight: 600;
      font-size: 13px;
    }
  }

  &__field {
    margin-top: 14px;
  }

  &__control {
    margin-top: 10px;
  }

  &__actions {
    display: flex;
    margin-top: 36px;
  }

  &__prev {
    margin-right: 10px;
    width: 56px;
    height: 56px;
    padding: 20px;
    transform: rotate(180deg);
  }

  &__next {
    flex: 1;
  }

  &__summary {
    margin-top: 30px;

    &-title {
      font-weight: bold;
      font-size: 14px;
    }
  }

  &__progress {
    margin-top: 14px;
    counter-reset: li;

    &-item {
      counter-increment: li;
      display: flex;
      margin-bottom: 12px;
      font-weight: 600;
      font-size: 14px;
      line-height: (22/14);

      &:last-child {
        margin-bottom: 0;
      }

      &.is-active {
        #{$b}__progress-num {
          color: $color-primary;
          background-color: $color-yellow;
        }
      }
    }

    &-num {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      flex-shrink: 0;
      width: 34px;
      height: 34px;
      border-radius: 100px;
      font-weight: bold;
      font-size: 14px;
      color: $color-lightgray;
      background-color: $color-lightviolet;
    }

    &-title {
      padding-top: 5px;
    }

    &-icon {
      width: 16px;
      height: 16px;
    }
  }

  &__result {
    position: relative;
    margin: 25px (-$container-padding) 0;
  }

  &__reset {
    display: flex;
    align-items: center;
    margin: 22px auto 0;
    padding: 6px 0;
    font-weight: bold;
    font-size: 12px;

    &-icon {
      width: 24px;
      height: 24px;
      margin-right: 18px;
    }
  }

  @include media(md) {
    &__main {
      position: relative;

      &-content {
        display: flex;
        align-items: center;
        position: relative;
        padding: 102px 0 110px;
      }

      &-inner {
        width: 48%;
      }
    }

    &__image {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 50%;
      max-width: none;

      img {
        height: 100%;
        object-fit: cover;
      }
    }

    &__desc {
      font-size: 16px;
      line-height: 1.7;
    }

    &__start {
      margin-top: 35px;
      width: auto;
      min-width: 210px;
    }

    &__shape {
      &_rectangle-1 {
        left: 8px;
        top: auto;
        bottom: 32px;
      }

      &_circle-1 {
        left: -72px;
        top: auto;
        bottom: 40px;
      }

      &_zigzag-1 {
        top: 118px;
        right: 100px;
        bottom: auto;
      }

      &_rectangle-2 {
        top: 90px;
        right: 54px;
        bottom: auto;
        width: 70px;
      }

      &_triangle-1 {
        left: 40px;
        top: 28px;
        width: 90px;
        transform: rotate(180deg);
      }

      &_circle-2 {
        left: 32px;
        top: 70px;
        width: 22px;
        fill: $color-lightviolet;
      }
    }

    &__screen {
      display: flex;
    }

    &__steps {
      width: calc(100% - 320px);
    }

    &__step {
      padding: 55px 0;
      opacity: 1;
      pointer-events: all;

      .container {
        margin-right: 0;
        padding: 0 50px;
        max-width: calc(50% + 360px);
      }
    }

    &__title {
      margin-top: 0;
      margin-bottom: 40px;
    }

    &__options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }

    &__option {
      margin-bottom: 0;
    }

    &__size {
      display: flex;
    }

    &__area {
      margin: 0;
      width: 58%;
    }

    &__fields {
      flex: 1;
      margin-top: 0;
      margin-left: 30px;

      &-group {
        & + & {
          margin-top: 38px;
        }

        & + #{$b}__actions {
          margin-top: 20px;
        }
      }
    }

    &__result {
      margin: 0;
    }

    &__actions {
      justify-content: flex-end;
      margin-top: 30px;

      &_l {
        justify-content: flex-start;
      }
    }

    &__next {
      flex: none;
      width: 162px;
    }

    &__side {
      display: flex;
      flex-direction: column;
      width: 320px;
      padding: 46px 0 30px;
      background-image: url('~@/assets/img/quiz-side.jpg');
      background-size: cover;
      background-position: center;
    }

    &__note {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 40px;
      min-height: 120px;
      padding: 25px 30px;
      border-bottom-right-radius: 40px;
      background-color: $color-yellow;

      &-title {
        font-weight: bold;
        font-size: 16px;
        line-height: (26/16);
      }

      &-desc {
        margin-top: 4px;
        font-weight: 500;
        font-size: 12px;
        line-height: (16/12);
      }
    }

    &__progress {
      margin: 22px 40px 0;

      &-item {
        align-items: flex-start;
        margin-bottom: 12px;
        font-size: 12px;

        &.is-active {
          #{$b}__progress-title {
            background: none;
          }
        }
      }
        
      &-num {
        margin-top: 0;
        width: 30px;
        height: 30px;
      }

      &-title {
        flex: 1;
        margin-top: 3px;
        min-height: 24px;
        padding-top: 3px;
        background: rgba(172, 168, 195, 0.3);
        border-radius: 2px;
      }
    }

    &__reset {
      margin-top: 50px;
      margin-left: 50px;
    }
  }

  @include media(lg) {
    &__image {
      width: 54%;
    }

    &__shape {
      &_rectangle-1 {
        left: 206px;
        bottom: 62px;
      }

      &_circle-1 {
        left: 128px;
        bottom: 70px;
      }

      &_zigzag-1 {
        top: 27%;
        right: 11.5%;
      }

      &_rectangle-2 {
        top: 23.5%;
        right: 8%;
      }

      &_triangle-1 {
        left: 17%;
        top: 10%;
      }

      &_circle-2 {
        left: 16.5%;
        top: 16%;
      }
    }

    &__main {
      &-content {
        padding: 112px 0 130px;
      }

      &-inner {
        width: 40%;
      }
    }

    &__desc {
      margin-top: 14px;
    }

    &__start {
      margin-top: 42px;
    }

    &__steps {
      width: calc(100% - 424px);
    }

    &__step {
      padding: 54px 0;

      .container {
        max-width: calc(50% + 470px);
      }
    }

    &__order {
      font-size: 13px;
    }

    &__title {
      margin-top: 3px;
      margin-bottom: 32px;
      font-size: 24px;
    }

    &__plan {
      max-width: 880px;
    }

    &__options {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
      margin-right: 62px;

      &_wide {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        margin-right: 0;

        & + #{$b}__next {
          margin-top: 24px;
        }
      }
    }

    &__area {
      width: 53.5%;
    }

    &__fields {
      margin-left: 52px;

      &-title {
        margin-bottom: 18px;
      }
    }

    &__field {
      margin-top: 14px;
    }

    &__actions {
      margin-top: 34px;
    }

    &__result {
      max-width: 1016px;
    }

    &__side {
      justify-content: flex-start;
      width: 424px;
    }

    &__note {
      padding: 40px 50px;
      border-bottom-right-radius: 70px;

      &-desc {
        margin-top: 12px;
        margin-right: 20px;
        font-size: 14px;
        line-height: (20/14);
      }
    }

    &__progress {
      margin: 22px 90px 0;
    }
  }

  @include media(xl) {
    &__image {
      width: 58%;
    }

    &__shape {
      &_rectangle-1 {
        left: 11%;
        bottom: 11%;
      }

      &_circle-1 {
        left: 3.5%;
        bottom: 12%;
      }

      &_zigzag-1 {
        top: 25%;
        right: 12%;
        z-index: 1;
      }

      &_rectangle-2 {
        top: 21.5%;
        right: 8%;
      }

      &_triangle-1 {
        left: 9%;
        top: 8%;
      }

      &_circle-2 {
        left: 8%;
        top: 14%;
      }
    }

    &__main-content {
      padding: 170px 0 245px;
    }

    &__main-inner {
      margin-left: 80px;
      width: 28%;
    }

    &__desc {
      line-height: 2;
    }

    &__start {
      margin-top: 65px;
    }

    &__steps {
      width: calc(100% - 465px);
    }

    &__step {
      padding: 96px 0 110px;

      .container {
        padding-right: 215px;
        max-width: calc(50% + 560px);
      }
    }

    &__order {
      font-size: 14px;
    }

    &__title {
      margin-top: 12px;
      margin-bottom: 48px;
      font-size: 30px;
    }

    &__options {
      margin-right: 108px;
      grid-gap: 40px;

      &_wide {
        margin-right: 0;
        grid-gap: 30px;

        & + #{$b}__next {
          margin-top: 64px;
        }
      }
    }

    &__area {
      width: 50%;
    }

    &__fields {
      margin-left: 68px;

      &-title {
        margin-bottom: 28px;
      }

      &-group + #{$b}__actions {
        margin-top: 40px;
      }
    }

    &__field {
      margin-top: 28px;
    }

    &__actions {
      margin-top: 68px;
    }

    &__next {
      width: 230px;
    }

    &__side {
      width: 465px;
      padding: 124px 0;
    }

    &__note {
      padding: 60px;
    }

    &__note-desc {
      margin-top: 15px;
      margin-right: -20px;
    }

    &__progress {
      margin: 34px 92px 0;

      &-item {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
