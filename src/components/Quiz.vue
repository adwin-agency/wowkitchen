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
        value="quiz"
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
            <div class="quiz__step">
              <div class="container">
                <div class="quiz__step-header">
                  <p class="quiz__order">Вопрос 1 из 3</p>
                </div>
                <h2 class="quiz__title">Выберите планировку кухни</h2>
                <div class="quiz__plan">
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
            </div>
            <div class="quiz__step">
              <div class="container">
                <div class="quiz__step-header">
                  <p class="quiz__order">Вопрос 2 из 3</p>
                  <button
                    class="quiz__back"
                    type="button"
                    @click="goToPrevStep"
                  >
                    <AppIcon
                      name="angle-down"
                      class="quiz__back-icon"
                    />
                    Назад
                  </button>
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
            <div class="quiz__step">
              <div class="container">
                <div class="quiz__step-header">
                  <p class="quiz__order">Вопрос 3 из 3</p>
                  <button
                    class="quiz__back"
                    type="button"
                    @click="goToPrevStep"
                  >
                    <AppIcon
                      name="angle-down"
                      class="quiz__back-icon"
                    />
                    Назад
                  </button>
                </div>
                <h2 class="quiz__title">Давайте выберем стиль</h2>
                <div class="quiz__style">
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
            <div class="quiz__step">
              <div class="container">
                <h2 class="quiz__title">Расчёт стоимости</h2>
                <div class="quiz__calc">
                  <div
                    v-if="$_media.sm"
                    class="quiz__summary"
                  >
                    <p class="quiz__summary-title">Параметры вашей будущей кухни:</p>
                    <ol class="quiz__progress">
                      <li class="quiz__progress-item is-active">Тип кухни: {{values.plan}}</li>
                      <li class="quiz__progress-item is-active">Размеры: {{values.sizes.join('x')}} см {{values.construct.join(' ')}}</li>
                      <li class="quiz__progress-item is-active">Стиль: {{values.style}}</li>
                      <!-- <li
                        v-if="values.elements.length"
                        class="quiz__progress-item is-active"
                      >
                        Дополнительно: {{values.elements.join(', ')}}
                      </li> -->
                    </ol>
                  </div>
                  <QuizResult
                    :price="price"
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
              до бесплатного расчёта проекта онлайн и дополнительной скидки 5%
            </p>
          </div>
          <ol class="quiz__progress">
            <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 1}"
            >
              {{activeStep > 1 ? `Тип кухни: ${values.plan}` : ''}}
            </li>
            <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 2}"
            >
              {{activeStep > 2 ? `Размеры: ${values.sizes.join('x')} см ${values.construct.join(' ')}` : ''}}
            </li>
            <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 3}"
            >
              {{activeStep > 3 ? `Стиль: ${values.style}`: ''}}
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
      activeStep: this.$route.params.start ? 1 : 0,
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
      const minCoef = 17
      const maxCoef = 22
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
    }
  },
  created() {
    if (this.$route.params.start) {
      window.fbq && window.fbq('track', 'Lead', { content_name: 'micro' })
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

    goToPrevStep() {
      this.activeStep--
    },

    goToNextStep() {
      this.activeStep++
    },

    resetQuiz() {
      this.$refs.quizform.reset()
      this.activeStep = 1
      this.values = {
        plan: '',
        sizes: [],
        construct: [],
        style: '',
        elements: [],
        email: ''
      }
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

  &__next {
    margin-top: 36px;
    width: 100%;
  }

  &__area {
    margin: 0 (-$container-padding);

    img {
      width: 100%;
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
      padding-top: 5px;
      font-weight: 600;
      font-size: 14px;
      line-height: (22/14);

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        content: counter(li);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-top: -5px;
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

      &.is-active {
        &::before {
          color: $color-primary;
          background-color: $color-yellow;
        }
      }
    }
  }

  &__result {
    position: relative;
    margin-top: 25px;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      width: 100vw;
      height: 100%;
      background-color: $color-lightgray;
      transform: translateX(-50%);
      z-index: -1;
    }
  }

  &__reset {
    display: flex;
    align-items: center;
    margin: 22px auto 0;
    padding: 6px 0;
    font-weight: bold;
    font-size: 13px;

    &-icon {
      width: 18px;
      height: 18px;
      margin-right: 10px;
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
      line-height: (32/16);
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
      min-height: 720px;
      padding: 55px 0 95px;

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

        & + #{$b}__next {
          margin-top: 40px;
          margin-left: 0;
        }
      }
    }

    &__result {
      margin-top: 0;
      margin-right: 20px;

      &::before {
        display: none;
      }
    }

    &__next {
      display: flex;
      margin-left: auto;
      margin-top: 30px;
      width: auto;
      min-width: 220px;
    }

    &__side {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 320px;
      min-height: 650px;
      padding: 50px 50px 50px 20px;
      background-image: url('~@/assets/img/quiz-side.jpg');
      background-size: cover;
      background-position: center;
    }

    &__note {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
      margin-top: 50px;
      margin-left: 18px;

      &-item {
        margin-bottom: 22px;
      }
    }
  }

  @include media(lg) {
    &__image {
      width: 65%;
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
        padding: 185px 0 230px;
      }

      &-inner {
        width: 35%;
      }
    }

    &__desc {
      margin-top: 14px;
    }

    &__start {
      margin-top: 65px;
    }

    &__steps {
      width: calc(100% - 400px);
    }

    &__step {
      min-height: 850px;
      padding: 75px 0 145px;

      .container {
        padding-right: 90px;
        max-width: calc(50% + 480px);
      }
    }

    &__title {
      margin-top: 12px;
      margin-bottom: 48px;
    }

    &__plan {
      max-width: 880px;
    }

    &__options {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 45px;

      &_wide {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;

        & + #{$b}__next {
          margin-top: 24px;
        }
      }
    }

    &__size {
      margin-right: 20px;
    }

    &__area {
      width: 61%;
    }

    &__fields {
      margin-left: 56px;

      &-title {
        margin-bottom: 30px;
      }
    }

    &__field {
      margin-top: 20px;
    }

    &__next {
      margin-top: 72px;
    }

    &__result {
      max-width: 750px;
    }

    &__side {
      width: 400px;
      min-height: 724px;
      padding: 50px 40px 50px 35px;
    }

    &__note {
      padding: 48px 50px;

      &-desc {
        margin-top: 12px;
        margin-right: 20px;
        font-size: 14px;
        line-height: (20/14);
      }
    }

    &__progress {
      margin-top: 40px;
      margin-left: 38px;
    }

    &__reset {
      margin-top: 82px;
      margin-left: 50px;
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

    &__step {
      padding: 95px 0 120px;

      .container {
        padding-right: 125px;
        max-width: calc(50% + 560px);
      }
    }

    &__options {
      &_wide {
        grid-gap: 30px;

        & + #{$b}__next {
          margin-top: 64px;
        }
      }
    }

    &__area {
      width: 57.5%;
    }

    &__fields {
      margin-left: 98px;
    }

    &__fields-title {
      margin-bottom: 25px;
    }

    &__note {
      padding: 40px 50px;
    }

    &__note-desc {
      margin-top: 15px;
      margin-right: -20px;
    }
  }
}
</style>
