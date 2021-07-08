<template>
  <div class="quiz">
    <div
      v-if="activeStep === null"
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
            <h1 class="quiz__heading">Подбор кухни</h1>
            <p class="quiz__desc">Пройдите тест из {{steps.length - 1}} вопросов и получите <b>бесплатный онлайн-расчёт</b> проекта, а так же закрепите за собой дополнительную <b>скидку 5%</b></p>
            <AppButton
              title="Начать тест"
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
      <input type="hidden" name="type" value="quiz">
      <input type="hidden" name="page" :value="page">
      <div class="quiz__screen">
        <div class="quiz__step">
          <div class="container">
            <p
              v-if="activeStep < steps.length - 1"
              class="quiz__order"
            >Вопрос {{activeStep + 1}} из {{steps.length - 1}}</p>
            <h2 class="quiz__title">{{steps[activeStep].title}}</h2>
            <div
              v-show="activeStep === 0"
              class="quiz__plan"
            >
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
            <div
              v-show="activeStep === 1"
              class="quiz__size"
            >
              <div class="quiz__area"></div>
              <div class="quiz__fields">
                <div class="quiz__fields-group">
                  <p class="quiz__fields-title">Габариты</p>
                  <AppTextField
                    type="text"
                    label="Сторона А, см"
                    placeholder="Размер в см"
                    class="quiz__field"
                    @input="handleSizeInput('sizeA', $event)"
                  />
                  <AppTextField
                    type="text"
                    label="Сторона В, см"
                    placeholder="Размер в см"
                    class="quiz__field"
                    @input="handleSizeInput('sizeB', $event)"
                  />
                </div>
                <div class="quiz__fields-group">
                  <p class="quiz__fields-title">Дополнительный конструктив</p>
                  <AppControl
                    type="checkbox"
                    name="construct"
                    color="gray"
                    :items="['+ Барная стойка', '+ Остров']"
                    class="quiz__control"
                    @change="handleCheckboxChange('construct', $event)"
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
            <div
              v-show="activeStep === 2"
              class="quiz__style"
            >
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
              <AppButton
                title="Далее"
                size="small"
                class="quiz__next"
                :disabled="!isCompletedStep"
                @click="goToNextStep"
              />
            </div>
            <div
              v-show="activeStep === 3"
              class="quiz__elements"
            >
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
            <div
              v-if="activeStep === steps.length - 1"
              class="quiz__calc"
            >
              <div
                v-if="$_media.sm"
                class="quiz__summary"
              >
                <p class="quiz__summary-title">Параметры вашей будущей кухни:</p>
                <ol class="quiz__progress">
                  <li class="quiz__progress-item is-active">Тип кухни: {{values.plan}}</li>
                  <li class="quiz__progress-item is-active">Размеры: {{values.sizeA}}х{{values.sizeB}} см {{values.construct.join(' ')}}</li>
                  <li class="quiz__progress-item is-active">Стиль: {{values.style}}</li>
                  <li
                    v-if="values.elements.length"
                    class="quiz__progress-item is-active"
                  >
                    Дополнительно: {{values.elements.join(', ')}}
                  </li>
                </ol>
              </div>
              <QuizResult class="quiz__result" />
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
        <div
          v-if="!$_media.sm"
          class="quiz__side"
        >
          <div class="quiz__note">
            <p class="quiz__note-title">{{steps[activeStep].noteTitle}}</p>
            <p
              v-if="activeStep < steps.length - 1"
              class="quiz__note-desc"
            >
              до бесплатного расчёта проекта онлайн и дополнительной скидки 5%
            </p>
          </div>
          <ol class="quiz__progress">
            <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 0}"
            >
              {{activeStep > 0 ? `Тип кухни: ${values.plan}` : ''}}
            </li>
            <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 1}"
            >
              {{activeStep > 1 ? `Размеры: ${values.sizeA}х${values.sizeB} см ${values.construct.join(' ')}` : ''}}
            </li>
            <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 2}"
            >
              {{activeStep > 2 ? `Стиль: ${values.style}`: ''}}
            </li>
            <li
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 3}"
            >
              {{activeStep > 3 ? `Дополнительно: ${values.elements.join(', ')}`: ''}}
            </li>
          </ol>
          <button
            v-if="activeStep === steps.length - 1"
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
    const { sending, page, handleSubmit } = useForms()
    return {
      sending,
      page,
      handleSubmit
    }
  },
  data() {
    return {
      steps: [
        { required: true, title: 'Выберите планировку кухни', noteTitle: '4 простых шага' },
        { required: true, title: 'Введите ориентировочные размеры', noteTitle: 'Ещё 3 простых шага' },
        { required: true, title: 'Давайте выберем стиль', noteTitle: 'Ещё 2 простых шага' },
        { title: 'Выберите дополнительные элементы:', noteTitle: 'Остался всего 1 шаг' },
        { title: 'Расчёт стоимости', noteTitle: 'Параметры вашей будущей кухни:' }
      ],
      planOptions: [
        { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Прямая планировка' },
        { image: { name: 'quiz-corner.jpg', alt: 'Угловая' }, title: 'Угловая планировка' },
        { image: { name: 'quiz-shaped.jpg', alt: 'П-образная' }, title: 'П-образная планировка' }
      ],
      styleOptions: [
        { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Минимализм' },
        { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Неоклассика' },
        { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Лофт' },
        { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Скандинавский' }
      ],
      addOptions: [
        { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Стеновая панель МДФ' },
        { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Встроенная подсветка' },
        { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Техника' },
        { image: { name: 'quiz-straight.jpg', alt: 'Прямая' }, title: 'Мойка' }
      ],

      activeStep: null,
      isCompletedStep: false,
      values: {
        plan: '',
        sizeA: '',
        sizeB: '',
        construct: [],
        style: '',
        elements: [],
        email: ''
      }
    }
  },
  methods: {
    startQuiz() {
      window.scrollTo(0, 0)
      this.activeStep = 0
    },

    handleRadioChange(name, event) {
      this.values[name] = event.target.value
      this.isCompletedStep = true
    },

    handleCheckboxChange(name, event) {
      if (event.target.checked) {
        this.values[name].push(event.target.value)
      } else {
        this.values[name] = this.values[name].filter((item) => item !== event.target.value)
      }
    },

    handleSizeInput(input, event) {
      event.preventDefault()
      const value = event.target.value

      if (/^\d*$/.test(value)) {
        this.values[input] = value
      } else {
        event.target.value = this.values[input]
      }

      this.isCompletedStep = this.values.sizeA && this.values.sizeB
    },

    goToNextStep() {
      window.scrollTo(0, 0)
      this.activeStep++

      if (this.steps[this.activeStep].required) {
        this.isCompletedStep = false
      }
    },

    resetQuiz() {
      window.scrollTo(0, 0)
      this.$refs.quizform.reset()
      this.activeStep = 0
      this.isCompletedStep = false
      this.values = {
        plan: '',
        sizeA: '',
        sizeB: '',
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

  &__step {
    padding: 20px 0 35px;
  }

  &__order {
    font-weight: 500;
    font-size: 14px;
    color: $color-green;
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
    height: 208px;
    border-radius: 4px;
    background-color: #ccc;
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

    &__step {
      flex: 1;
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
      height: 280px;
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

    &__step {
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
      height: 365px;
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
      height: 420px;
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
