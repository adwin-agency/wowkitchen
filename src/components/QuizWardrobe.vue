<template>
  <div class="quiz">
    <div
      v-if="activeStep === 0"
      class="quiz__main"
    >
      <div class="quiz__image">
        <img
          src="@/assets/img/quiz-wardrobe.jpg"
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
            <p class="quiz__desc">Пройдите простой тест из 3 вопросов и получите <b>бесплатный онлайн-расчёт</b> проекта, подарок, а так же закрепите за собой <b>самые выгодные условия</b> на гарнитур!</p>
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
        value="quiz-wardrobe"
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
                <h2 class="quiz__title">Выберите тип шкафа</h2>
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
            <div class="quiz__step">
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
                  <div class="quiz__area quiz__area_bordered">
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
                        :key="values.plan + index"
                        type="text"
                        name="size[]"
                        :label="`${['Ширина', 'Глубина', 'Высота'][index]}, см`"
                        inputmode="numeric"
                        :tip="index === 0 && 'Если шкаф предполагается угловой или другой сложной формы, то укажите длину сторон последовательно. Напрмер: “200+150”'"
                        autocomplete="off"
                        class="quiz__field"
                        @input="handleSizeInput(index, index === 0, $event)"
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
                        :disabled="!completedSizes"
                        @click="goToNextStep"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="quiz__step">
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
                <h2 class="quiz__title">Выберите материал фасадов</h2>
                <div class="quiz__options">
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
                    @click="handleRadioClick('style', option.title, $event)"
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
            <div class="quiz__step">
              <div class="container">
                <div class="quiz__step-header">
                  <p class="quiz__order"></p>
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
                <h2 class="quiz__title">Выберите подарок</h2>
                <div class="quiz__options">
                  <QuizOption
                    v-for="(option, index) in giftOptions"
                    :key="index"
                    small
                    name="gift"
                    :image="option.image"
                    :value="option.title"
                    :title="option.title"
                    class="quiz__option"
                    @change="handleRadioChange('gift', $event)"
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
                    :disabled="!values.gift"
                    @click="goToNextStep"
                  />
                </div>
              </div>
            </div>
            <div class="quiz__step">
              <div class="container">
                <h2 class="quiz__title">Расчёт проекта</h2>
                <div class="quiz__calc">
                  <div
                    v-if="$_media.sm"
                    class="quiz__summary"
                  >
                    <p class="quiz__summary-title">Параметры вашего будущего шкафа:</p>
                    <ol class="quiz__progress">
                      <li class="quiz__progress-item is-active">
                        <span class="quiz__progress-num">1</span>
                        <span class="quiz__progress-title">Тип шкафа: {{values.plan}}</span>
                      </li>
                      <li class="quiz__progress-item is-active">
                        <span class="quiz__progress-num">2</span>
                        <span class="quiz__progress-title">Размеры: {{values.sizes.join('x')}} см {{values.construct.join(' ')}}</span>
                      </li>
                      <li class="quiz__progress-item is-active">
                        <span class="quiz__progress-num">3</span>
                        <span class="quiz__progress-title">Фасад: {{values.style}}</span>
                      </li>
                      <li class="quiz__progress-item is-active">
                        <span class="quiz__progress-num">
                          <AppIcon name="gift" class="quiz__progress-icon" />
                        </span>
                        <span class="quiz__progress-title">Подарок: {{values.gift}}</span>
                      </li>
                    </ol>
                  </div>
                  <QuizResult
                    :resultprice="price"
                    :sending="sending"
                    :error="error"
                    :gift="values.gift.toLowerCase()"
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
                    Пересчитать проект
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="!$_media.sm"
          class="quiz__side"
          :style="{ backgroundImage: !$_media.sm && 'url(/assets/img/quiz-side-w.jpg)'}"
        >
          <div class="quiz__note">
            <p class="quiz__note-title">{{notes[activeStep - 1]}}</p>
            <p
              v-if="activeStep <= stepsLength - 1"
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
              <span class="quiz__progress-title">{{activeStep > 1 ? `Тип шкафа: ${values.plan}` : ''}}</span>
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
              <span class="quiz__progress-title">{{activeStep > 3 ? `Фасад: ${values.style}`: ''}}</span>
            </li>
            <li
              v-if="activeStep > 4"
              class="quiz__progress-item"
              :class="{'is-active': activeStep > 4}"
            >
              <span class="quiz__progress-num">
                <AppIcon name="gift" class="quiz__progress-icon" />
              </span>
              <span class="quiz__progress-title">{{activeStep > 4 ? `Подарок: ${values.gift}`: ''}}</span>
            </li>
          </ol>
          <button
            v-if="activeStep === stepsLength"
            type="button"
            class="quiz__reset"
            @click="resetQuiz"
          >
            <AppIcon
              name="refresh"
              class="quiz__reset-icon"
            />
            Пересчитать проект
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppTextField from './base/AppTextField.vue'
import QuizOption from './QuizOption.vue'
import QuizResult from './QuizResult.vue'
import useForms from '../composition/forms'

const notes = [
  '3 простых шага',
  '2 простых шага',
  'Всего один шаг',
  'Ещё чуть-чуть',
  'Параметры вашего будущего шкафа:'
]

const planOptions = [
  { image: { name: 'quiz-w-o.jpg', alt: 'Отдельностоящий' }, title: 'Отдельностоящий' },
  { image: { name: 'quiz-w-v.jpg', alt: 'Встроенный' }, title: 'Встроенный' },
  { image: { name: 'quiz-w-g.jpg', alt: 'Гардеробная' }, title: 'Гардеробная' }
]

const styleOptions = [
  { image: { name: 'quiz-w-mdf.jpg', alt: 'МДФ' }, title: 'МДФ' },
  { image: { name: 'quiz-w-ldsp.jpg', alt: 'ЛДСП' }, title: 'ЛДСП' },
  // { image: { name: 'quiz-w-emal.jpg', alt: 'Эмаль' }, title: 'Эмаль' },
  // { image: { name: 'quiz-w-zerkalo.jpg', alt: 'Зеркало' }, title: 'Зеркало' }
]

const giftOptions = [
  { image: { name: 'quiz-w-mirror.jpg', alt: 'Зеркало в дверь-купе' }, title: 'Зеркало в дверь-купе' },
  { image: { name: 'quiz-w-set.jpg', alt: 'Комплект ящиков' }, title: 'Комплект ящиков' }
]

const initValues = {
  plan: '',
  sizes: [],
  construct: [],
  style: '',
  gift: ''
}

export default {
  name: 'Quiz',
  components: {
    AppButton,
    AppTextField,
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
      giftOptions: giftOptions,
      activeStep: 0,
      completedStep: 0,
      stepsLength: 5,
      sizeImage: null,
      values: {...initValues}
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
      const coefs = {
        'МДФ': 32,
        'ЛДСП': 18,
        'Эмаль': 39
      }
      const minCoef = coefs[this.values.style] ?? 0
      const maxCoef = minCoef + 5
      const sizeSum = this.values.sizes[0]?.split('+').reduce((sum, current) => sum + +current, 0) || 0
      const min = sizeSum * 10 * minCoef
      const max = sizeSum * 10 * maxCoef

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
          'Отдельностоящий': { arr: ['', '', ''], img: 'quiz-size-w-o.png' },
          'Встроенный': { arr: ['', '', ''], img: 'quiz-size-w-v.png' },
          'Гардеробная': { arr: ['', '', ''], img: 'quiz-size-w-g.png' }
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

    handleSizeInput(index, multiple, event) {
      event.preventDefault()
      const regexp = multiple ? /[^0-9+]|^\+/ : /\D/
      const value = event.target.value.replace(regexp, '').replace(/\+\+/, '+')
      this.values.sizes[index] = value.replace(/\+$/, '')
      event.target.value = value
    },

    goToPrevStep() {
      this.activeStep--
    },

    goToNextStep() {
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
      this.values = {...initValues}
    }
  }
}
</script>
