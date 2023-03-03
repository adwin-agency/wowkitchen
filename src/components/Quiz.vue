<template>
  <div class="quiz">
    <div
      v-if="activeStep === 0"
      class="quiz__main"
    >
      <noindex>
        <QuizPromo class="quiz__start-promo" />
      </noindex>
      <div class="quiz__main-content">
        <div class="container">
          <div class="quiz__main-inner">
            <h1 class="quiz__heading">Расчет онлайн</h1>
            <p class="quiz__desc">Получите онлайн-расчет проекта со скидкой 50% и закрепите за собой самые выгодные условия на гарнитур!</p>
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
      <input
        type="hidden"
        name="gift"
        value="Посудомоечная машина"
      >
      <div class="quiz__screen">
        <div class="quiz__side">

        </div>
        <div class="quiz__steps">
          <div
            class="quiz__steps-wrapper"
            :style="`transform: translateX(${(activeStep - 1) * -100}%)`"
          >
            <div
              class="quiz__step"
              :class="{'active': activeStep === 1}"
            >
              <div class="container">
                <div class="quiz__step-side">
                  <div class="quiz__small-promo">
                    <div class="quiz__small-promo-main">
                      <p class="quiz__small-promo-title">Посудомоечная машина — в&nbsp;подарок!</p>
                      <p class="quiz__small-promo-desc">к каждому гарнитуру до&nbsp;{{promoDate}}</p>
                    </div>
                    <img
                      src="/assets/img/quiz-wash-2.png"
                      alt=""
                      class="quiz__small-promo-img"
                    >
                  </div>
                </div>
                <div class="quiz__step-header">
                  <p class="quiz__order">1/3</p>
                </div>
                <h2 class="quiz__title">Выберите планировку</h2>
                <div class="quiz__options">
                  <input
                    type="hidden"
                    name="addition"
                    :value="values.addition"
                  >
                  <label
                    v-for="(option, index) in planOptions"
                    :key="index"
                    class="quiz__option"
                  >
                    <input
                      type="radio"
                      name="plan"
                      :value="option.title"
                      class="quiz__option-input"
                      @change="handleOptionChange($event, 'plan')"
                    >
                    <div class="quiz__option-el">
                      <div class="quiz__option-box">
                        <img
                          :src="`/assets/img/${option.image.name}`"
                          :alt="option.image.alt"
                          class="quiz__option-img"
                        >
                        <div class="quiz__option-details">
                          <span
                            v-for="(detail, index) in additionDetails"
                            :key="index"
                            class="quiz__option-detail"
                            :class="{active: values.addition === detail}"
                            @click="handleDetailClick('addition', detail)"
                          >
                            <AppIcon
                              class="quiz__option-detail-icon"
                              name="circle-plus"
                            />
                            <AppIcon
                              class="quiz__option-detail-icon quiz__option-detail-icon_checked"
                              name="circle-check"
                            />
                            {{detail}}
                          </span>
                        </div>
                      </div>
                      <span class="quiz__option-title">{{option.title}}</span>
                    </div>
                  </label>
                </div>
                <div class="quiz__actions">
                  <AppButton
                    title="Далее"
                    size="small"
                    class="quiz__next"
                    :disabled="!values.plan"
                    @click="goToNextStep"
                  />
                </div>
              </div>
            </div>

            <div
              class="quiz__step"
              :class="{'active': activeStep === 2}"
            >
              <div class="container">
                <div class="quiz__step-header">
                  <p class="quiz__order">2/3</p>
                </div>
                <h2 class="quiz__title">Укажите предполагаемые габариты</h2>
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

            <div
              class="quiz__step"
              :class="{'active': activeStep === 3}"
            >
              <div class="container">
                <div class="quiz__step-header">
                  <p class="quiz__order">Вопрос 3 из 3</p>
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
            <div
              class="quiz__step"
              :class="{'active': activeStep === 4}"
            >
              <div class="container">
                <QuizPromo
                  v-if="$_media.sm"
                  class="quiz__final-promo"
                />
                <h2 class="quiz__title">Контактные данные</h2>
                <div class="quiz__calc">
                  <QuizResult
                    type="kitchen"
                    :sending="sending"
                    :error="error"
                    gift="посудомоечную машину"
                    class="quiz__result"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppControl from './base/AppControl.vue'
import AppIcon from './base/AppIcon.vue'
import AppTextField from './base/AppTextField.vue'
import QuizOption from './QuizOption.vue'
import QuizPromo from './QuizPromo.vue'
import QuizResult from './QuizResult.vue'
import useForms from '../composition/forms'

const planOptions = [
  {
    image: { name: 'quiz-straight-2.png', alt: 'Прямая' },
    title: 'Прямая планировка'
  },
  {
    image: { name: 'quiz-corner-2.png', alt: 'Угловая' },
    title: 'Угловая планировка'
  },
  {
    image: { name: 'quiz-shaped-2.png', alt: 'П-образная' },
    title: 'П-образная планировка'
  }
]

const additionDetails = ['Барная стойка', 'Остров']

const sizeImages = [
  {
    plan: 'Прямая планировка',
    addition: '',
    image: 'quiz-size-straight.png'
  },
  {
    plan: 'Прямая планировка',
    addition: 'Барная стойка',
    image: 'quiz-size-straight-bar.png'
  },
  {
    plan: 'Прямая планировка',
    addition: 'Остров',
    image: 'quiz-size-straight-island.png'
  },
  {
    plan: 'Угловая планировка',
    addition: '',
    image: 'quiz-size-corner.png'
  },
  {
    plan: 'Угловая планировка',
    addition: 'Барная стойка',
    image: 'quiz-size-corner-bar.png'
  },
  {
    plan: 'Угловая планировка',
    addition: 'Остров',
    image: 'quiz-size-corner-island.png'
  },
  {
    plan: 'П-образная планировка',
    addition: '',
    image: 'quiz-size-shaped.png'
  },
  {
    plan: 'П-образная планировка',
    addition: 'Барная стойка',
    image: 'quiz-size-shaped-bar.png'
  },
  {
    plan: 'П-образная планировка',
    addition: 'Остров',
    image: 'quiz-size-shaped-island.png'
  }
]

const styleOptions = [
  { image: { name: 'minimal.jpg', alt: 'Минимализм' }, title: 'Минимализм' },
  {
    image: { name: 'neoclassic.jpg', alt: 'Неоклассика' },
    title: 'Неоклассика'
  },
  { image: { name: 'loft.jpg', alt: 'Лофт' }, title: 'Лофт' },
  {
    image: { name: 'scandy.jpg', alt: 'Скандинавский' },
    title: 'Скандинавский'
  }
]

export default {
  name: 'Quiz',
  components: {
    AppButton,
    AppControl,
    AppIcon,
    AppTextField,
    QuizOption,
    QuizPromo,
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
      planOptions: planOptions,
      additionDetails: additionDetails,
      styleOptions: styleOptions,
      activeStep: this.$route.params.open ? 1 : 0,
      completedStep: 0,
      sizeImage: 'size-I.png',
      values: {
        plan: '',
        addition: '',
        sizes: [],
        construct: [],
        style: '',
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

      const sizeSum = this.values.sizes.reduce(
        (sum, current) => sum + +current,
        0
      )
      const min =
        sizeSum * 10 * minCoef + this.values.construct.length * additionPrice
      const max =
        sizeSum * 10 * maxCoef + this.values.construct.length * additionPrice

      return (
        min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
        ' ₽ - ' +
        max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
        ' ₽'
      )
    },

    promoDate() {
      return this.$store.getters.mainPromoDate
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

    handleOptionChange(event, name) {
      this.values[name] = event.target.value

      if (name === 'plan') {
        this.setSizeImage(event.target.value, this.values.addition)
      }
    },

    handleDetailClick(name, value) {
      const newValue = this.values[name] === value ? '' : value

      this.values[name] = newValue

      if (name === 'addition') {
        this.setSizeImage(this.values.plan, newValue)
      }
    },

    setSizeImage(plan, addition) {
      this.sizeImage = sizeImages.find(
        item => item.plan === plan && item.addition === addition
      ).image
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
        this.$refs[name].querySelectorAll('input').forEach(input => {
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
        this.values[name] = this.values[name].filter(
          item => item !== event.target.value
        )
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
      if (this.completedStep < this.activeStep) {
        this.completedStep++
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'quiz_step_' + this.completedStep })
      }

      this.activeStep++
      this.scrollToTop()
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

  &__start-promo {
    margin: 38px auto 0;
    width: calc(100% - #{$container-padding * 2});
    max-width: 748px;
  }

  &__final-promo {
    margin: 0 0 36px;
  }

  &__main-content {
    padding: 30px 0 45px;
  }

  &__desc {
    margin-top: 4px;
    font-size: 14px;
    line-height: calc(30 / 14);
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
    transition: opacity 0.25s ease;

    &.active {
      opacity: 1;
      pointer-events: all;
      transition-delay: 0.25s;
    }
  }

  &__step-header {
    display: flex;
    justify-content: space-between;
  }

  &__order {
    font-size: 14px;
    color: $color-green;
  }

  &__title {
    margin-top: 2px;
    margin-bottom: 18px;
    font-size: 18px;
  }

  &__option {
    display: block;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }

    &-input {
      display: none;

      &:checked {
        & + #{$b}__option-el {
          box-shadow: inset 0 0 0 2px #04b991;

          #{$b}__option-box::after {
            opacity: 1;
          }

          #{$b}__option-details {
            opacity: 1;
            pointer-events: all;
          }
        }
      }
    }

    &-el {
      border: 1px solid #f3f4f9;
      border-radius: 4px;
      transition: box-shadow 0.3s ease;
      overflow: hidden;
    }

    &-box {
      display: flex;
      position: relative;

      &::before {
        content: '';
        padding-top: 70%;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(4, 185, 145, 0.4);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }
    }

    &-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    }

    &-title {
      display: block;
      padding: 12px 20px;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.25;
    }

    &-details {
      position: relative;
      align-self: flex-end;
      width: 100%;
      padding: 12px 20px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    &-detail {
      display: block;
      position: relative;
      margin-top: 8px;
      max-width: 250px;
      padding: 15px 50px;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 30px;
      font-weight: 600;
      font-size: 16px;
      line-height: 1.25;
      background-color: rgba(255, 255, 255, 0.5);
      color: #fff;
      transition: border-color 0.3s ease, background-color 0.3s ease,
        color 0.3s ease;

      &.active {
        border-color: #04b991;
        background-color: rgba(255, 255, 255, 0.9);
        color: #04b991;

        #{$b}__option-detail-icon {
          opacity: 0;

          &_checked {
            opacity: 1;
          }
        }
      }

      &-icon {
        position: absolute;
        left: 15px;
        top: 50%;
        width: 24px;
        height: 24px;
        transform: translateY(-50%);
        transition: opacity 0.3s ease;

        &_checked {
          opacity: 0;
        }
      }
    }
  }

  &__area {
    margin: 0 (-$container-padding);

    img {
      width: 100%;
    }

    &_bordered {
      img {
        border: 1px solid #dcdcdc;
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

  &__result {
    position: relative;
    margin: 25px (-$container-padding) 0;
  }

  &__step-side {
    margin: -20px (-$container-padding) 20px;
    padding-top: 24px;
    background-color: #f3f4f9;
  }

  &__small-promo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 30px 0px 0px 0px;
    padding: 20px 26px;
    background-image: linear-gradient(185.5deg, #fff27b 8.85%, #f8e21e 95.04%);

    &-title {
      max-width: 170px;
      font-weight: 700;
      font-size: 14px;
      line-height: 110%;
    }

    &-desc {
      max-width: 150px;
      margin-top: 4px;
      font-size: 13px;
      line-height: 110%;
    }

    &-img {
      align-self: flex-end;
      margin: -30px -10px -20px 10px;
      width: 152px;
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

    &__start-promo {
      position: absolute;
      top: 50%;
      right: calc(50% - 250px);
      margin: 0;
      width: 400px;
      transform: translate(50%, -50%);
    }

    &__final-promo {
      margin: 0 10px;
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
      background-image: url('~@/assets/img/quiz-side-2.jpg');
      background-size: cover;
      background-position: center;
    }
  }

  @include media(lg) {
    &__start-promo {
      top: 48%;
      right: calc(50% - 260px);
      width: 665px;
    }

    &__final-promo {
      margin: 0 auto;
      max-width: 346px;
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
  }

  @include media(xl) {
    &__start-promo {
      top: 45%;
      right: calc(50% - 400px);
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
  }
}
</style>
