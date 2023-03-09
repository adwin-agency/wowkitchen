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
        name="gift"
        value="Посудомоечная машина"
      >
      <div class="quiz__screen">

        <div
          v-if="!$_media.sm"
          class="quiz__side"
        >
          <div class="container">
            <div class="quiz__side-inner">
              <p
                v-if="activeStep < 4"
                class="quiz__order"
              >
                {{activeStep}} / 3
              </p>
              <h2 class="quiz__side-title">{{stepHeading}}</h2>
              <p
                v-if="activeStep === 4"
                class="quiz__side-desc"
              >
                Актуальными акциями вы сможете воспользоваться в ближайшие 30 дней!
              </p>
              <div class="quiz__completed">
                <div
                  v-if="activeStep === 2 || activeStep === 3"
                  class="quiz__completed-item"
                >
                  <AppIcon
                    class="quiz__completed-icon"
                    name="circle-check"
                  />
                  <p class="quiz__completed-title">Планировка:</p>
                  <p class="quiz__completed-desc">{{sizeDesc}}</p>
                </div>
                <div
                  v-if="activeStep === 3"
                  class="quiz__completed-item"
                >
                  <AppIcon
                    class="quiz__completed-icon"
                    name="circle-check"
                  />
                  <p class="quiz__completed-title">Габариты и конструктив</p>
                </div>
              </div>
              <div
                v-if="activeStep !== 4"
                class="quiz__small-promo"
              >
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
          </div>
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
                <div
                  v-if="$_media.sm"
                  class="quiz__step-side"
                >
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
                <div
                  v-if="$_media.sm"
                  class="quiz__step-header"
                >
                  <p class="quiz__order">1 / 3</p>
                </div>
                <h2
                  v-if="$_media.sm"
                  class="quiz__title"
                >
                  Выберите планировку
                </h2>
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
                <div
                  v-if="$_media.sm"
                  class="quiz__step-header"
                >
                  <p class="quiz__order">2 / 3</p>
                </div>
                <h2
                  v-if="$_media.sm"
                  class="quiz__title"
                >
                  Укажите предполагаемые габариты
                </h2>
                <div class="quiz__size">
                  <div class="quiz__area">
                    <img
                      :src="require(`@/assets/img/${sizeImage}`)"
                      alt
                    >
                  </div>
                  <div class="quiz__size-fields">
                    <p class="quiz__size-title">Опишите в свободной форме предполагаемые габариты и конструктив:</p>
                    <AppTextField
                      textarea
                      name="sizes"
                      placeholder="Укажите примерную длину гарнитура по стенам, например, угловая кухня 1,5м + 2,5м с островом со встроенной мойкой."
                      class="quiz__size-field"
                    />
                    <div class="quiz__file">
                      <div
                        v-if="values.files.length"
                        class="quiz__file-list"
                      >
                        <div
                          v-for="item in values.files"
                          :key="item"
                          class="quiz__file-item"
                        >
                          <div class="quiz__file-item-circle">
                            <AppIcon
                              class="quiz__file-item-icon"
                              name="file-check"
                            />
                          </div>
                          <p class="quiz__file-item-name">{{item}}</p>
                          <button
                            type="button"
                            class="quiz__file-remove"
                            @click="handleFileRemove(item)"
                          >
                            <AppIcon
                              class="quiz__file-remove-icon"
                              name="file-remove"
                            />
                          </button>
                        </div>
                      </div>
                      <label class="quiz__file-label">
                        <input
                          type="file"
                          name="file"
                          accept=".png, .jpg, .jpeg, .pdf"
                          multiple
                          class="quiz__file-input"
                          id="quiz-file"
                          ref="fileInputRef"
                          @change="handleFileChange"
                        >
                        <div class="quiz__file-circle">
                          <AppIcon
                            class="quiz__file-icon"
                            name="file-plus"
                          />
                        </div>
                        <span class="quiz__file-title">Есть эскизы или примеры? <br>Прикрепите их тут</span>
                        <span class="quiz__file-desc">До 5 файлов в формате .png, ,jpg, ,pdf <br>Вес каждого до 10МБ</span>
                        <span
                          v-if="errors.files"
                          class="quiz__file-error"
                        >{{errors.files}}</span>
                      </label>
                    </div>
                    <div class="quiz__actions">
                      <AppButton
                        icon="arrow"
                        bordered
                        size="small"
                        class="quiz__prev"
                        @click="goToPrevStep"
                      />
                      <AppButton
                        title="Далее"
                        size="small"
                        class="quiz__next"
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
                <div
                  v-if="$_media.sm"
                  class="quiz__step-header"
                >
                  <p class="quiz__order">3 / 3</p>
                </div>
                <h2
                  v-if="$_media.sm"
                  class="quiz__title"
                >
                  Выберите стиль
                </h2>
                <div class="quiz__options">
                  <label
                    v-for="(option, index) in styleOptions"
                    :key="index"
                    class="quiz__option"
                  >
                    <input
                      type="radio"
                      name="style"
                      :value="option.title"
                      class="quiz__option-input"
                      @change="handleOptionChange($event, 'style')"
                    >
                    <div class="quiz__option-el">
                      <div class="quiz__option-box">
                        <img
                          :src="`/assets/img/${option.image.name}`"
                          :alt="option.image.alt"
                          class="quiz__option-img"
                        >
                      </div>
                      <span class="quiz__option-title">{{option.title}}</span>
                    </div>
                  </label>
                </div>
                <div class="quiz__actions">
                  <AppButton
                    icon="arrow"
                    bordered
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
                <h2
                  v-if="$_media.sm"
                  class="quiz__title"
                >
                  Расчёт кухни онлайн
                </h2>
                <p
                  v-if="$_media.sm"
                  class="quiz__step-desc"
                >
                  Актуальными акциями вы сможете воспользоваться в ближайшие 30 дней!
                </p>
                <div class="quiz__result">
                  <div class="quiz__features">
                    <div class="quiz__feature">
                      <p class="quiz__feature-title">В подарок <br><span class="quiz__feature-date">до&nbsp;{{promoDate}}</span></p>
                      <img
                        src="/assets/img/quiz-wash-2.png"
                        alt=""
                        class="quiz__feature-img"
                      >
                    </div>
                    <div class="quiz__feature">
                      <p class="quiz__feature-title">Мы закрепим скидку за вашим номером</p>
                      <p class="quiz__feature-discount">-50%</p>
                    </div>
                    <div class="quiz__feature">
                      <AppIcon
                        class="quiz__feature-icon"
                        name="clock2"
                      />
                      <p class="quiz__feature-title">Мы уже рассчитываем ваш проект и перезвоним в течение <span class="quiz__feature-time">5&nbsp;минут</span></p>
                    </div>
                  </div>
                  <div class="quiz__contact">
                    <label class="quiz__contact-item">
                      <input
                        class="quiz__contact-input"
                        type="radio"
                        name="contact"
                        value="По телефону"
                        checked
                      >
                      <span class="quiz__contact-box">
                        <AppIcon
                          class="quiz__contact-icon"
                          name="phone3"
                        />
                        По телефону
                      </span>
                    </label>
                    <label class="quiz__contact-item">
                      <input
                        class="quiz__contact-input"
                        type="radio"
                        name="contact"
                        value="В WhatsApp"
                      >
                      <span class="quiz__contact-box">
                        <AppIcon
                          class="quiz__contact-icon"
                          name="whatsapp"
                        />
                        В WhatsApp
                      </span>
                    </label>
                  </div>
                  <div class="quiz__fields">
                    <AppTextField
                      label="Имя"
                      placeholder="Как к вам обращаться"
                      type="text"
                      name="name"
                      required
                      class="quiz__field"
                    />
                    <AppTextField
                      label="Контактный Телефон"
                      placeholder="+7(___)____-__-__"
                      type="tel"
                      name="phone"
                      required
                      class="quiz__field"
                    />
                  </div>
                  <div class="quiz__actions">
                    <AppButton
                      icon="arrow"
                      bordered
                      size="small"
                      class="quiz__prev"
                      @click="goToPrevStep"
                    />
                    <AppButton
                      type="submit"
                      :title="sending ? 'Отправляем...' : 'Отправить'"
                      size="small"
                      class="quiz__next"
                    />
                    <p
                      v-if="error"
                      class="quiz__error"
                    >
                      Ошибка отправки. Попробуйте еще раз
                    </p>
                  </div>
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
import AppIcon from './base/AppIcon.vue'
import AppTextField from './base/AppTextField.vue'
import QuizPromo from './QuizPromo.vue'
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

const sizeData = [
  {
    plan: 'Прямая планировка',
    addition: '',
    image: 'quiz-size-straight.png',
    desc: 'прямая'
  },
  {
    plan: 'Прямая планировка',
    addition: 'Барная стойка',
    image: 'quiz-size-straight-bar.png',
    desc: 'прямая с барной стойкой'
  },
  {
    plan: 'Прямая планировка',
    addition: 'Остров',
    image: 'quiz-size-straight-island.png',
    desc: 'прямая с островом'
  },
  {
    plan: 'Угловая планировка',
    addition: '',
    image: 'quiz-size-corner.png',
    desc: 'угловая'
  },
  {
    plan: 'Угловая планировка',
    addition: 'Барная стойка',
    image: 'quiz-size-corner-bar.png',
    desc: 'угловая с барной стойкой'
  },
  {
    plan: 'Угловая планировка',
    addition: 'Остров',
    image: 'quiz-size-corner-island.png',
    desc: 'угловая с островом'
  },
  {
    plan: 'П-образная планировка',
    addition: '',
    image: 'quiz-size-shaped.png',
    desc: 'п-образная'
  },
  {
    plan: 'П-образная планировка',
    addition: 'Барная стойка',
    image: 'quiz-size-shaped-bar.png',
    desc: 'п-образная с барной стойкой'
  },
  {
    plan: 'П-образная планировка',
    addition: 'Остров',
    image: 'quiz-size-shaped-island.png',
    desc: 'п-образная с островом'
  }
]

const styleOptions = [
  {
    image: { name: 'quiz-minimal.png', alt: 'Минимализм' },
    title: 'Минимализм'
  },
  {
    image: { name: 'quiz-neoclassic.png', alt: 'Неоклассика' },
    title: 'Неоклассика'
  },
  { image: { name: 'quiz-loft.png', alt: 'Лофт' }, title: 'Лофт' },
  {
    image: { name: 'quiz-scandy.png', alt: 'Скандинавский' },
    title: 'Скандинавский'
  }
]

export default {
  name: 'Quiz',
  components: {
    AppButton,
    AppIcon,
    AppTextField,
    QuizPromo
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
      sizeImage: 'quiz-size-straight.png',
      sizeDesc: 'прямая',
      values: {
        plan: '',
        addition: '',
        files: [],
        style: ''
      },
      errors: {
        files: ''
      }
    }
  },
  computed: {
    stepHeading() {
      return this.activeStep === 1
        ? 'Выберите планировку'
        : this.activeStep === 2
        ? 'Укажите предполагаемые габариты'
        : this.activeStep === 3
        ? 'Выберите стиль'
        : 'Расчет кухни онлайн'
    },

    promoDate() {
      return this.$store.getters.mainPromoDate
    }
  },
  watch: {
    success() {
      this.activeStep = 0
      this.completedStep = 0
      this.values = {
        plan: '',
        addition: '',
        files: [],
        style: ''
      }
      this.errors = {
        files: ''
      }
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
        this.setSizeData(event.target.value, this.values.addition)
        return
      }

      this.goToNextStep()
    },

    handleDetailClick(name, value) {
      const newValue = this.values[name] === value ? '' : value

      this.values[name] = newValue

      if (name === 'addition') {
        this.setSizeData(this.values.plan, newValue)
      }
    },

    setSizeData(plan, addition) {
      const currentSize = sizeData.find(
        item => item.plan === plan && item.addition === addition
      )
      this.sizeImage = currentSize.image
      this.sizeDesc = currentSize.desc
    },

    handleFileChange(event) {
      this.values.files = []
      this.errors.files = ''

      const inputFiles = event.target.files
      const allowedExtensions = ['png', 'jpg', 'jpeg', 'pdf']

      if (inputFiles.length > 5) {
        event.target.value = ''
        this.values.files = []
        this.errors.files = 'Превышено количество файлов'
        return
      }

      for (let i = 0; i < inputFiles.length; i++) {
        const fileName = inputFiles[i].name
        const fileExtension = fileName.split('.').pop()
        const fileSize = inputFiles[i].size

        if (!allowedExtensions.includes(fileExtension)) {
          event.target.value = ''
          this.values.files = []
          this.errors.files = 'Неверный формат файла'
          return
        }

        if (fileSize > 1024 * 1024 * 10) {
          event.target.value = ''
          this.values.files = []
          this.errors.files = 'Превышен размер файла'
          return
        }

        this.values.files.push(fileName)
      }
    },

    handleFileRemove(name) {
      const fileInput = this.$refs.fileInputRef

      if (this.values.files.length === 1) {
        fileInput.value = ''
        this.values.files = []

        return
      }

      const dt = new DataTransfer()
      const inputFiles = fileInput.files
      const fileNames = []

      for (let i = 0; i < inputFiles.length; i++) {
        const file = inputFiles[i]

        if (file.name !== name) {
          dt.items.add(file)
          fileNames.push(file.name)
        }
      }

      fileInput.files = dt.files
      this.values.files = fileNames
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
    cursor: pointer;

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
        fill: currentColor;
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

  &__size-fields {
    margin-top: 20px;
  }

  &__size-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
  }

  &__size-field {
    margin-top: 14px;
  }

  &__fields {
    margin-top: 25px;
  }

  &__field {
    margin-bottom: 22px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__control {
    margin-top: 10px;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
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

  &__error {
    margin-top: 15px;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #ff0000;
  }

  &__result {
    margin-top: 25px;
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

  &__file {
    margin-top: 30px;

    &-list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom: 16px;
    }

    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }

      &-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        padding-top: 4px;
        border-radius: 100px;
        flex-shrink: 0;
        background-color: #04b991;
      }

      &-icon {
        width: 20px;
        height: 15px;
      }

      &-name {
        margin-left: 8px;
        font-size: 14px;
        line-height: 1.2;
      }
    }

    &-remove {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      margin-left: 8px;
      flex-shrink: 0;

      &-icon {
        width: 16px;
        height: 16px;
      }
    }

    &-label {
      display: inline-block;
      position: relative;
      padding-left: 60px;
      cursor: pointer;
    }

    &-input {
      display: none;
    }

    &-circle {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      top: 0;
      width: 48px;
      height: 48px;
      padding-top: 4px;
      border-radius: 100px;
      background-color: #f3f4f9;
    }

    &-icon {
      width: 21px;
      height: 16px;
    }

    &-title {
      display: block;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.2;
    }

    &-desc {
      display: block;
      margin-top: 6px;
      font-size: 12px;
      line-height: 1.2;
    }

    &-error {
      display: block;
      margin-top: 6px;
      font-size: 12px;
      line-height: 1.2;
      color: #ff0000;
    }
  }

  &__step-desc {
    font-size: 14px;
    line-height: 1.7;
  }

  &__features {
    margin-top: 18px;
  }

  &__feature {
    position: relative;
    margin-bottom: 4px;
    border-radius: 8px;
    min-height: 120px;
    padding: 20px 18px;
    background-image: linear-gradient(
      149.86deg,
      #fff27b 34.51%,
      #f8e21e 87.26%
    );
    overflow: hidden;

    &-title {
      padding-right: 50px;
      font-weight: 500;
      font-size: 18px;
      line-height: 1.1;
    }

    &-date {
      display: inline-block;
      margin-left: -8px;
      border: 1px solid #04b991;
      border-radius: 20px;
      padding: 0 8px;
    }

    &-img {
      position: absolute;
      top: 6px;
      right: 8px;
      width: 196px;
    }

    &-discount {
      margin-top: -6px;
      margin-bottom: -10px;
      text-align: right;
      font-weight: 500;
      font-size: 44px;
      line-height: 1.2;
    }

    &-icon {
      margin-left: auto;
      margin-right: 10px;
      margin-bottom: -30px;
      width: 30px;
      height: 30px;
    }

    &-time {
      border-radius: 100px;
      padding: 0px 5px;
      background-color: #fff;
    }
  }

  &__contact {
    display: flex;
    gap: 5px;
    margin-top: 20px;
    border-radius: 4px;
    padding: 5px;
    background-color: #f6f7f8;

    &-item {
      cursor: pointer;
    }

    &-input {
      display: none;

      &:checked {
        & ~ #{$b}__contact-box {
          color: #04b991;
          background-color: #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
        }
      }
    }

    &-box {
      display: flex;
      align-items: center;
      border-radius: 4px;
      padding: 10px 14px;
      color: #c5c7c9;
      font-weight: 600;
      font-size: 12px;
      line-height: 1.2;
      transition: color 0.3s ease, background-color .3s ease, box-shadow .3s ease;
    }

    &-icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      fill: currentColor;
    }
  }

  @include media(xxs) {
    &__contact {
      &-box {
        font-size: 16px;
      }
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
      width: calc(50% + 130px);
    }

    &__step {
      padding: 55px 0;
      opacity: 1;
      pointer-events: all;

      .container {
        margin-left: 0;
        padding-left: 20px;
        max-width: 610px;
      }
    }

    &__side-title {
      font-size: 22px;
      line-height: 1.2;
    }

    &__side-desc {
      margin-top: 20px;
      font-size: 14px;
      line-height: 1.7;
    }

    &__options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }

    &__option {
      margin-bottom: 0;
    }

    &__area {
      margin: 0;
      width: 58%;
    }

    &__fields {
      display: flex;
      justify-content: space-between;
    }

    &__field {
      width: calc(50% - 10px);
      margin-bottom: 0;
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
      width: calc(50% - 130px);
      padding: 80px 0 30px;
      background: #f3f4f9;

      .container {
        margin-right: 0;
        max-width: 350px;
        padding-right: 20px;
        height: 100%;
      }

      &-inner {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    }

    &__small-promo {
      margin-top: auto;
    }

    &__completed {
      margin-top: 36px;

      &-item {
        position: relative;
        margin-bottom: 36px;
        padding-left: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      &-icon {
        position: absolute;
        left: 0;
        top: 0;
        width: 15px;
        height: 15px;
        fill: #aca8c3;
      }

      &-title {
        font-weight: 600;
        font-size: 14px;
      }

      &-desc {
        font-size: 14px;
      }
    }

    &__features {
      margin-top: 0;
    }

    &__error {
      text-align: right;
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

    &__side {
      width: calc(50% - 290px);
    }

    &__steps {
      width: calc(50% + 290px);
    }

    &__step {
      padding: 54px 0;

      .container {
        padding-left: 30px;
        max-width: 930px;
      }
    }

    &__order {
      font-size: 13px;
    }

    &__side-title {
      margin-top: 3px;
      margin-bottom: 32px;
      font-size: 24px;
    }

    &__options {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;

      &_wide {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        margin-right: 0;

        & + #{$b}__next {
          margin-top: 24px;
        }
      }
    }

    &__size {
      display: flex;

      &-fields {
        flex: 1;
        margin-top: 0;
        margin-left: 30px;
      }
    }

    &__area {
      width: 53.5%;
    }

    &__contact {
      margin-top: 30px;
    }

    &__fields {
      margin-top: 20px;
    }

    &__actions {
      margin-top: 34px;
    }

    &__result {
      max-width: 740px;
    }

    &__features {
      display: flex;
      gap: 10px;
    }

    &__feature {
      margin-bottom: 0;
      width: 25.5%;
      min-height: 178px;
      padding: 22px;

      &-title {
        font-size: 15px;
        padding-right: 0;
      }

      &-img {
        top: auto;
        bottom: -30px;
        width: 83%;
      }

      &-discount {
        margin-top: 36px;
      }

      &-icon {
        margin-bottom: 20px;
      }
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

    &__side {
      width: calc(50% - 440px);

      .container {
        max-width: 360px;
        padding-right: 30px;
      }
    }

    &__steps {
      width: calc(50% + 440px);
    }

    &__step {
      padding: 80px 0;

      .container {
        padding-left: 40px;
        max-width: 1240px;
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
      grid-gap: 30px 40px;

      &_wide {
        margin-right: 0;
        grid-gap: 30px;

        & + #{$b}__next {
          margin-top: 64px;
        }
      }
    }

    &__area {
      width: 48%;
    }

    &__size-fields {
      margin-left: 40px;
    }

    &__contact {
      margin-top: 36px;
    }

    &__fields {
      margin-top: 24px;
    }

    &__file {
      &-title {
        br {
          display: none;
        }
      }
    }

    &__next {
      width: 230px;
    }
  }
}
</style>
