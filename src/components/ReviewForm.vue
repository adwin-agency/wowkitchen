<template>
  <form
    class="review-form"
    @submit="handleSubmit"
  >
    <input
      type="hidden"
      name="type"
      value="payment"
    >
    <input
      type="hidden"
      name="page"
      :value="page"
    >
    <p class="review-form__heading">Оставить отзыв</p>
    <div class="review-form__fields">
      <AppTextField
        color="white"
        labelColor="gray"
        labelSize="big"
        label="Представьтесь"
        placeholder="Ваше имя"
        type="text"
        name="name"
        required
        class="review-form__field"
      />
      <AppTextField
        color="white"
        labelColor="gray"
        labelSize="big"
        label="Номер договора"
        type="text"
        name="id"
        note="Эти данные нужны для идентификации и не будут опубликованы"
        class="review-form__field review-form__field_note"
      />
      <AppTextField
        textarea
        color="white"
        labelColor="gray"
        labelSize="big"
        label="Отзыв"
        name="review"
        required
        class="review-form__field review-form__field_large"
      />
    </div>
    <div class="review-form__footer">
      <label class="review-form__file">
        <input
          ref="file"
          type="file"
          name="file"
          class="review-form__file-input"
          multiple
          @change="handleFile"
        />
        <div class="review-form__file-info">
          <p class="review-form__file-title">{{fileLength ? 'Прикреплено файлов: ' + fileLength : 'Приложить файлы'}}</p>
          <p class="review-form__file-note">Максимум 10 файлов общим размером до 20 МБ</p>
          <p
            v-if="fileError"
            class="review-form__file-error"
          >{{fileError}}</p>
        </div>
        <div class="review-form__file-btns">
          <span
            for="review-file"
            class="review-form__file-btn"
          >
            <AppIcon
              name="image"
              class="review-form__file-icon"
            />
          </span>
          <span
            for="review-file"
            class="review-form__file-btn"
          >
            <AppIcon
              name="camera"
              class="review-form__file-icon"
            />
          </span>
        </div>
      </label>
      <AppButton
        title="Опубликовать"
        type="submit"
        class="review-form__btn"
      />
    </div>
    <p
      v-if="error"
      class="review-form__error"
    >
      Ошибка отправки. Попробуйте еще раз
    </p>
  </form>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppTextField from './base/AppTextField.vue'
import useForms from '../composition/forms'

export default {
  name: 'ReviewForm',
  components: {
    AppIcon,
    AppTextField,
    AppButton
  },
  setup() {
    const { sending, success, error, page, handleSubmit } = useForms()
    return {
      sending,
      success,
      error,
      page,
      handleSubmit
    }
  },
  data() {
    return {
      fileLength: 0,
      fileError: ''
    }
  },
  watch: {
    success() {
      this.fileLength = 0
      this.fileError = ''
    }
  },
  methods: {
    handleFile(e) {
      const files = e.target.files

      this.fileLength = 0
      this.fileError = ''

      if (files.length) {
        let totalLength = 0
        let totalSize = 0

        for (let file of files) {
          const { type, size } = file

          if (!/image\/*|video\/*/.test(type)) {
            this.$refs.file.value = ''
            this.fileError = 'Некорректный формат файла'
            return
          }

          totalLength++
          totalSize += size
        }

        if (totalLength > 10) {
          this.$refs.file.value = ''
          this.fileError = 'Превышен лимит файлов'
          return
        }

        if (totalSize > 20 * 1024 * 1024) {
          this.$refs.file.value = ''
          this.fileError = 'Превышен размер файлов'
          return
        }

        this.fileLength = totalLength
      }
    }
  }
}
</script>

<style lang="scss">
.review-form {
  &__heading {
    font-weight: bold;
    font-size: 20px;
  }

  &__fields {
    margin-top: 16px;
  }

  &__field {
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__footer {
    margin-top: 10px;
  }

  &__error {
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
    color: #ff0000;
  }

  &__file {
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    &-input {
      display: none;
    }

    &-title {
      font-weight: 500;
      font-size: 13px;
      color: $color-lightviolet;
    }

    &-note {
      margin-top: 6px;
      font-size: 10px;
      line-height: (12/10);
      color: #949494;
    }

    &-error {
      display: inline-block;
      margin-top: 5px;
      font-size: 11px;
      line-height: 1.2;
      color: #ff0000;
    }

    &-btns {
      display: flex;
      margin-top: 2px;
      margin-left: 60px;
    }

    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 42px;
      height: 42px;
      margin-right: 10px;
      border-radius: 50%;
      background-color: rgba($color-lightviolet, 0.2);

      &:last-child {
        margin-right: 0;
      }
    }

    &-icon {
      width: 20px;
      height: 20px;
      fill: $color-lightviolet;
    }
  }

  &__btn {
    margin-top: 32px;
    width: 100%;
  }

  @include media(md) {
    border-radius: 12px;
    padding: 40px 40px 35px;
    box-shadow: -0.349px 9.994px 47px 0px rgba(0, 0, 0, 0.14);

    &__fields {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      margin-top: 12px;
    }

    &__field {
      width: calc(50% - 10px);
      margin-bottom: 20px;

      &_note {
        margin-bottom: 0px;
      }

      &_large {
        width: 100%;
      }

      &:nth-child(2) {
        margin-left: 20px;
      }
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__error {
      text-align: right;
    }

    &__file {
      flex: 1;
      max-width: 250px;
      margin-right: 20px;

      &-btns {
        margin-left: 10px;
      }
    }

    &__btn {
      margin-top: 0;
      width: auto;
      min-width: 180px;
    }
  }

  @include media(lg) {
    padding: 48px 60px 40px;

    &__fields {
      margin-top: 14px;
    }

    &__field {
      width: calc(50% - 20px);
      margin-bottom: 25px;

      &_note {
        margin-bottom: 0px;
      }

      &_large {
        width: 100%;
      }

      &:nth-child(2) {
        margin-left: 40px;
      }
    }

    &__footer {
      margin-top: 14px;
    }

    &__file {
      margin-top: 8px;
      max-width: 300px;

      &-btns {
        margin-left: 50px;
      }

      &-btn {
        margin-right: 22px;
      }
    }

    &__btn {
      min-width: 220px;
    }
  }

  @include media(xl) {
    padding: 48px 80px 40px;

    &__fields {
      margin-top: 22px;
    }

    &__field {
      max-width: 280px;

      &_large {
        max-width: none;
      }
    }

    &__footer {
      margin-top: 20px;
    }
  }
}
</style>
