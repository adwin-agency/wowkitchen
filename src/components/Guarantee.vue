<template>
  <div class="guarantee">
    <div class="guarantee__features">
      <div class="container container_side-fixed">
        <div class="guarantee__features-list">
          <div class="guarantee__feature">
            <span class="guarantee__feature-title">2 <span>года</span></span>
            <span class="guarantee__feature-desc">гарантия на гарнитуры и шкафы</span>
          </div>
          <div class="guarantee__feature">
            <span class="guarantee__feature-title">7</span>
            <span class="guarantee__feature-desc">сотрудников в отделе качества</span>
          </div>
          <div class="guarantee__feature">
            <span class="guarantee__feature-title">24/7</span>
            <span class="guarantee__feature-desc">график работы техподдержки</span>
          </div>
        </div>
      </div>
    </div>
    <div class="guarantee__write">
      <div class="container container_side-fixed">
        <form
          class="guarantee__form"
          @submit="handleSubmit"
        >
          <input type="hidden" name="type" value="guarantee">
          <input type="hidden" name="page" :value="page">
          <p class="guarantee__form-title">Наступил гарантийный случай или появились вопросы?<br>Напишите и мы обязательно поможем!</p>
          <div class="guarantee__radios">
            <label class="guarantee__radio">
              <input
                type="radio"
                name="case"
                checked
                class="guarantee__radio-input"
              >
              <span
                class="guarantee__radio-tag"
                data-title="Я по гарантии"
              >
                Я по гарантии
              </span>
            </label>
            <label class="guarantee__radio">
              <input
                type="radio"
                name="case"
                class="guarantee__radio-input"
              >
              <span
                class="guarantee__radio-tag"
                data-title="Я просто спросить"
              >
                Я просто спросить
              </span>
            </label>
          </div>
          <div class="guarantee__fields">
            <AppTextField
              label="Имя"
              labelSize="big"
              color="white"
              type="text"
              name="name"
              required
              class="guarantee__field"
            />
            <AppTextField
              label="Контактный телефон"
              labelSize="big"
              color="white"
              placeholder="+7(999)999-99-99"
              type="tel"
              name="phone"
              required
              class="guarantee__field"
            />
            <AppTextField
              label="Номер договора"
              labelSize="big"
              color="white"
              placeholder="ХХХХ ХХХХ ХХХХ ХХХХ"
              type="text"
              name="contract"
              required
              class="guarantee__field"
            />
            <AppTextField
              textarea
              size="big"
              label="Опишите проблему"
              labelSize="big"
              color="white"
              name="question"
              required
              class="guarantee__field guarantee__field_textarea"
            />
          </div>
          <div class="guarantee__form-footer">
            <div class="guarantee__form-actions">
              <label class="guarantee__file">
                <input
                  ref="file"
                  type="file"
                  class="guarantee__file-input"
                  @change="handleFile"
                >
                <AppIcon
                  name="attachment"
                  class="guarantee__file-icon"
                />
                <span class="guarantee__file-title">{{fileName || 'Прикрепить файлы'}}</span>
                <span class="guarantee__file-note">Фото, видео или .pdf (до 20 МБ)</span>
                <span
                  v-if="fileError"
                  class="guarantee__file-error"
                >{{fileError}}</span>
              </label>
              <AppButton
                title="Отправить"
                type="submit"
                class="guarantee__form-btn"
              />
            </div>
            <p class="guarantee__policy">Нажимая кнопку "Отправить", вы соглашаетесь с условиями <a href="#">Политики конфиденциальности</a></p>
          </div>
        </form>
      </div>
    </div>
    <div class="guarantee__docs">
      <div class="container container_side-fixed">
        <p class="guarantee__docs-title">Документация по эксплуатации</p>
        <div class="guarantee__docs-list">
          <div class="guarantee__doc">
            <AppIcon
              name="file_pdf"
              class="guarantee__doc-icon"
            />
            <p class="guarantee__doc-title">Правила эксплуатации мебельных фасадов МДФ</p>
            <a
              href="#"
              class="guarantee__doc-link"
            >Скачать</a>
          </div>
          <div class="guarantee__doc">
            <AppIcon
              name="file_pdf"
              class="guarantee__doc-icon"
            />
            <p class="guarantee__doc-title">Эксплуатация уход за фасадами</p>
            <a
              href="#"
              class="guarantee__doc-link"
            >Скачать</a>
          </div>
          <div class="guarantee__doc">
            <AppIcon
              name="file_pdf"
              class="guarantee__doc-icon"
            />
            <p class="guarantee__doc-title">Инструкция по эксплуатации мебели</p>
            <a
              href="#"
              class="guarantee__doc-link"
            >Скачать</a>
          </div>
          <div class="guarantee__doc">
            <AppIcon
              name="file_pdf"
              class="guarantee__doc-icon"
            />
            <p class="guarantee__doc-title">Условия гарантии</p>
            <a
              href="#"
              class="guarantee__doc-link"
            >Скачать</a>
          </div>
          <div class="guarantee__doc">
            <AppIcon
              name="file_pdf"
              class="guarantee__doc-icon"
            />
            <p class="guarantee__doc-title">Требования к качеству</p>
            <a
              href="#"
              class="guarantee__doc-link"
            >Скачать</a>
          </div>
          <div class="guarantee__doc">
            <AppIcon
              name="file_pdf"
              class="guarantee__doc-icon"
            />
            <p class="guarantee__doc-title">Инструкция по уходу за столешницей</p>
            <a
              href="#"
              class="guarantee__doc-link"
            >Скачать</a>
          </div>
          <div class="guarantee__doc">
            <AppIcon
              name="file_pdf"
              class="guarantee__doc-icon"
            />
            <p class="guarantee__doc-title">Прайс-лист на дополнительные услуги</p>
            <a
              href="#"
              class="guarantee__doc-link"
            >Скачать</a>
          </div>
        </div>
      </div>
    </div>
    <Interesting />
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppTextField from './base/AppTextField.vue'
import Interesting from './Interesting.vue'
import useForms from '../composition/forms'

export default {
  name: 'Guarantee',
  components: {
    AppTextField,
    AppButton,
    AppIcon,
    Interesting
  },
  setup() {
    const { sending, success, page, handleSubmit } = useForms()
    return {
      sending,
      success,
      page,
      handleSubmit
    }
  },
  data() {
    return {
      fileName: '',
      fileError: ''
    }
  },
  watch: {
    success() {
      this.fileName = ''
      this.fileError = ''
    }
  },
  methods: {
    handleFile(e) {
      const files = e.target.files

      this.fileName = ''
      this.fileError = ''

      if (files.length) {
        const file = files[0]
        const { name, type, size } = file

        if (!/image\/*|video\/*|application\/pdf/.test(type)) {
          this.$refs.file.value = ''
          this.fileError = 'Некорректный формат файла'
          return
        }

        if (size > 20 * 1024 * 1024) {
          this.$refs.file.value = ''
          this.fileError = 'Превышен размер файла'
          return
        }

        this.fileName = name
      }
    }
  }
}
</script>

<style lang="scss">
.guarantee {
  $b: &;

  &__features {
    padding: 24px 0 30px;
  }

  &__feature {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      width: 95px;
      font-weight: bold;
      font-size: 40px;
      color: $color-green;

      span {
        font-size: 20px;
      }
    }

    &-desc {
      margin-left: 18px;
      font-weight: 500;
      font-size: 13px;
      line-height: (18/13);
    }
  }

  &__write {
    padding: 36px 0 22px;
    background-color: $color-lightgray;
  }

  &__form-title {
    font-weight: bold;
    font-size: 14px;
    line-height: (22/14);
  }

  &__radios {
    display: flex;
    margin-top: 18px;
    margin-right: -10px;
  }

  &__radio {
    margin-right: 10px;

    &-input {
      display: none;

      &:checked + #{$b}__radio-tag {
        font-weight: bold;
        color: $color-lightgray;
        background-color: $color-green;
      }
    }

    &-tag {
      display: inline-block;
      border-radius: 100px;
      padding: 12px 18px;
      text-align: center;
      font-weight: 500;
      font-size: 12px;
      color: $color-lightviolet;
      background-color: #fff;
      transition: color 0.3s ease, background-color 0.3s ease;
      cursor: pointer;

      &::before {
        content: attr(data-title);
        display: block;
        font-weight: bold;
        height: 0;
        visibility: hidden;
      }
    }
  }

  &__fields {
    margin-top: 20px;
  }

  &__field {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__form-footer {
    margin-top: 20px;
  }

  &__file {
    display: inline-block;
    position: relative;
    padding-left: 40px;
    cursor: pointer;

    &-input {
      display: none;
    }

    &-icon {
      position: absolute;
      left: 6px;
      top: 4px;
      width: 20px;
      height: 20px;
      fill: $color-green;
    }

    &-title {
      display: block;
      font-weight: bold;
      font-size: 13px;
      color: $color-green;
    }

    &-note {
      display: block;
      margin-top: 2px;
      font-weight: 500;
      font-size: 11px;
      color: $color-lightviolet;
    }

    &-error {
      display: inline-block;
      margin-top: 5px;
      font-size: 11px;
      line-height: 1.2;
      color: #ff0000;
    }
  }

  &__form-btn {
    width: 100%;
    margin-top: 20px;
  }

  &__policy {
    margin-top: 14px;
    font-weight: 300;
    font-size: 11px;
    line-height: (12/11);
    color: $color-lightviolet;

    a {
      text-decoration: underline;
    }
  }

  &__docs {
    padding: 45px 0;

    &-title {
      font-weight: bold;
      font-size: 18px;
      line-height: (24/18);
      color: #000;
    }

    &-list {
      margin-top: 20px;
      margin-bottom: -20px;
    }
  }

  &__doc {
    position: relative;
    padding-left: 38px;
    margin-bottom: 20px;
    font-size: 13px;
    line-height: (18/13);

    &-icon {
      position: absolute;
      left: 0;
      top: 5px;
      width: 20px;
      height: 20px;
      fill: $color-green;
    }

    &-title {
      font-weight: 500;
    }

    &-link {
      display: inline-block;
      margin-top: 8px;
      font-weight: bold;
      color: $color-green;
    }
  }

  @include media(md) {
    &__features {
      padding: 34px 0 40px;

      &-list {
        display: flex;
      }
    }

    &__feature {
      display: block;
      max-width: 170px;
      margin-right: auto;
      margin-bottom: 0;

      &-title {
        display: block;
        width: auto;

        span {
          font-size: 40px;
        }
      }

      &-desc {
        display: block;
        margin-left: 0;
      }
    }

    &__write {
      padding: 0;
      background-color: transparent;
    }

    &__form {
      padding: 50px 70px 40px;
      border-bottom-right-radius: 120px;
      background-color: $color-lightgray;

      &-title {
        font-size: 16px;
        line-height: (22/16);
      }
    }

    &__radios {
      margin-right: -20px;
    }

    &__radio {
      margin-right: 20px;

      &-tag {
        padding: 12px 28px;
      }
    }

    &__fields {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__field {
      width: calc(50% - 10px);

      &_textarea {
        width: 100%;
      }
    }

    &__form-footer {
      margin-top: 14px;
    }

    &__form-actions {
      display: flex;
      align-items: flex-start;
    }

    &__file {
      margin-top: 6px;
      margin-right: 20px;

      &-icon {
        left: 0;
      }
    }

    &__form-btn {
      width: auto;
      min-width: 255px;
      margin-top: 0;
      margin-left: auto;
    }

    &__policy {
      width: 100%;
      max-width: 350px;
    }

    &__docs {
      padding: 55px 0 35px;

      &-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
        margin-bottom: -15px;
      }
    }

    &__doc {
      width: 48.5%;
      min-height: (18/13 * 3em);
      padding-right: 10px;
      margin-bottom: 15px;

      &-link {
        margin-top: 0;
      }
    }
  }

  @include media(lg) {
    &__features {
      padding: 40px 0 50px;
    }

    &__feature {
      &-desc {
        margin-top: 10px;
      }
    }

    &__form {
      padding: 40px 60px 30px;

      &-title {
        font-size: 20px;
        line-height: (28/20);
      }

      &-footer {
        margin-top: 22px;
      }

      &-btn {
        min-width: 275px;
      }
    }

    &__radios {
      margin-top: 25px;
    }

    &__fields {
      margin-top: 24px;
    }

    &__field {
      width: calc(33.333% - 25px);
      margin-bottom: 25px;

      &_textarea {
        width: 100%;
      }
    }

    &__policy {
      margin-top: 30px;
      max-width: none;
    }

    &__docs {
      padding: 75px 0 45px;
    }

    &__doc {
      width: 44%;
      padding-right: 0;

      &-link {
        margin-top: 5px;
      }
    }
  }

  @include media(xl) {
    &__features {
      padding: 40px 0 80px;
    }

    &__features-list {
      max-width: 860px;
    }

    &__form {
      padding: 54px 160px 50px 100px;
    }

    &__docs {
      padding: 105px 0 80px;
      margin-bottom: -24px;

      &-list {
        max-width: 860px;
      }
    }

    &__doc {
      margin-bottom: 24px;
    }
  }
}
</style>
