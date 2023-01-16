<template>
  <div
    class="quiz-preview"
    :class="{'quiz-preview_mobile-light': type === 'wardrobes'}"
  >
    <AppIcon
      class="quiz-preview__bg-pattern"
      name="wow-pattern"
    />
    <div class="container">
      <div class="quiz-preview__inner">
        <h2 class="quiz-preview__heading">{{preview[type].title}}</h2>
        <p class="quiz-preview__desc">Ответьте всего на 3 вопроса и получите онлайн-расчет цены {{type === 'kitchens' ? 'гарнитура' : 'шкафа'}} по вашим размерам, а так же закрепите за собой скидку 50%</p>
        <router-link
          :to="{name: type === 'wardrobes' ? 'quiz-wardrobe' : 'quiz', params: {open: true}}"
          custom
          v-slot="{href, navigate}"
        >
          <AppButton
            :href="href"
            figure
            color="yellow"
            :title="preview[type].btn"
            class="quiz-preview__btn"
            @click="navigate"
          />
        </router-link>
        <img
          v-if="type === 'kitchens'"
          src="@/assets/img/quiz-preview-k@2x.png"
          alt
          class="quiz-preview__img quiz-preview__img_photos"
        >
        <img
          v-if="type === 'wardrobes'"
          src="@/assets/img/quiz-preview-w@2x.png"
          alt
          class="quiz-preview__img quiz-preview__img_wardrobes"
        >
        <img
          src="@/assets/img/flower.png"
          alt=""
          class="quiz-preview__img quiz-preview__img_flower"
        >
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'

const preview = {
  kitchens: { title: 'Сколько стоит кухня вашей мечты? Узнайте за пару минут', btn: 'Получить расчет' },
  wardrobes: { title: 'Сколько стоит шкаф вашей мечты? Узнайте за пару минут', btn: 'Получить расчет' }
}

export default {
  name: 'QuizPreview',
  components: {
    AppButton,
    AppIcon
  },
  props: {
    type: String
  },
  data() {
    return {
      preview: preview
    }
  }
}
</script>

<style lang="scss">
.quiz-preview {
  $b: &;

  position: relative;
  background-image: linear-gradient(-13deg, rgb(6, 160, 126) 0%, rgb(4, 185, 145) 42%);
  overflow: hidden;

  &_mobile-light {
    background-color: $color-lightgray;
    background-image: none;

    #{$b} {
      &__heading {
        color: $color-primary;
      }

      &__bg-pattern {
        fill: $color-lightviolet;
      }
    }
  }

  &__bg-pattern {
    position: absolute;
    left: calc(50% - 40px);
    bottom: -60px;
    width: 550px;
    height: 550px;
    fill: $color-green;
    opacity: 0.3;
    transform: rotate(45deg);
    pointer-events: none;
  }

  &__inner {
    position: relative;
    padding: 52px 0 20px;
  }

  &__heading {
    padding-right: 60px;
    font-size: 24px;
    line-height: calc(32/24);
    color: $color-lightgray;
  }

  &__desc {
    margin-top: 12px;
    padding-right: 110px;
    font-weight: 500;
    font-size: 14px;
    line-height: calc(24/14);
    color: #000;

    span {
      white-space: nowrap;
    }
  }

  &__btn {
    margin-top: 40px;
    width: 100%;
  }

  &__img {
    position: absolute;

    &_photos {
      display: none;
    }

    &_flower {
      top: 110px;
      right: -45px;
      width: 160px;
    }
  }

  @include media(md) {
    &_mobile-light {
      background-image: linear-gradient(-13deg, rgb(6, 160, 126) 0%, rgb(4, 185, 145) 42%);

      #{$b} {
        &__bg-pattern {
          fill: $color-green;
        }

        &__heading {
          color: $color-lightgray;
        }
      }
    }

    &__bg-pattern {
      left: calc(50% + 180px);
      bottom: -190px;
      width: 600px;
      height: 600px;
    }

    &__inner {
      padding: 92px 0 70px;
      padding-right: 520px;
    }

    &__heading {
      padding-right: 20px;
      line-height: calc(34/24);
    }

    &__desc {
      margin-top: 16px;
      padding-right: 0;
    }

    &__btn {
      margin-top: 46px;
      width: auto;
      min-width: 300px;
    }

    &__img {
      &_photos {
        display: block;
        top: 50%;
        right: 12px;
        width: 500px;
        transform: translateY(-50%);
      }

      &_flower {
        top: 62px;
        right: 0;
        width: 220px;
      }

      &_wardrobes {
        display: block;
        top: 0;
        right: -10px;
        height: 100%;
      }
    }
  }

  @include media(lg) {
    &__bg-pattern {
      left: calc(50% + 250px);
      bottom: -250px;
      width: 750px;
      height: 750px;
    }

    &__inner {
      padding: 115px 0 75px;
      padding-right: 820px;
    }

    &__heading {
      font-size: 26px;
      line-height: calc(34/26);
    }

    &__desc {
      margin-top: 26px;
    }

    &__btn {
      margin-top: 58px;
    }

    &__img {
      &_photos {
        right: 108px;
        width: 550px;
      }

      &_wardrobes {
        right: 108px;
      }

      &_flower {
        top: 70px;
        right: 90px;
        width: 240px;
      }
    }
  }

  @include media(xl) {
    &__bg-pattern {
      left: calc(50% + 320px);
    }

    &__inner {
      max-width: 1260px;
      margin: 0 auto;
      padding: 115px 0 175px;
      padding-right: 820px;
    }

    &__img {
      &_photos {
        right: -70px;
        width: 700px;
      }

      &_wardrobes {
        right: -70px;
      }

      &_flower {
        right: -88px;
        width: 310px;
      }
    }
  }
}
</style>
