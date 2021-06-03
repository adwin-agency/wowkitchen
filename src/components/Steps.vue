<template>
  <div class="steps">
    <div class="container">
      <div class="steps__inner">
        <div class="steps__header">
          <h2 class="steps__heading">История вашей кухни</h2>
          <p class="steps__desc">Все заботы по созданию и монтажу кухни мы берём на себя, вам остаётся лишь оставить заявку.</p>
        </div>
        <Step
          order="Шаг 1"
          title="Пригласить дизайнера"
          :desc="'В удобное вам время \n Бесплатный выезд и замер \n Демонстрация образцов'"
          accented
          class="steps__item steps__item_accented"
          @click="showModal('designer')"
        />
        <router-link
          :to="{name: 'main'}"
          custom
          v-slot="{href, navigate}"
        >
          <Step
            :href="href"
            order="Шаг 2"
            title="Производство"
            bg="about-step.jpg"
            view
            class="steps__item"
            @click="navigate"
          />
        </router-link>
        <router-link
          :to="{name: 'delivery'}"
          custom
          v-slot="{href, navigate}"
        >
          <Step
            :href="href"
            order="Шаг 3"
            title="Доставка"
            bg="delivery-step.jpg"
            class="steps__item"
            @click="navigate"
          />
        </router-link>
        <router-link
          :to="{name: 'main'}"
          custom
          v-slot="{href, navigate}"
        >
          <Step
            :href="href"
            order="Шаг 4"
            title="Сборка"
            bg="fixing-step.jpg"
            class="steps__item"
            @click="navigate"
          />
        </router-link>
        <router-link
          :to="{name: 'guarantee'}"
          custom
          v-slot="{href, navigate}"
        >
          <Step
            :href="href"
            order="Шаг 5"
            title="Гарантия"
            bg="guaranty-step.jpg"
            class="steps__item"
            @click="navigate"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Step from './Step.vue'

export default {
  name: 'Steps',
  components: {
    Step
  },
  methods: {
    showModal(modal) {
      this.$store.commit('setModal', modal)
    }
  }
}
</script>

<style lang="scss">
.steps {
  &__header {
    margin-bottom: 18px;
  }

  &__heading {
    margin-bottom: 16px;
  }

  &__desc {
    font-size: 14px;
    line-height: (26/14);
  }

  &__item {
    margin-bottom: 5px;

    &_accented {
      margin-bottom: 20px;
    }
  }

  @include media(md) {
    &__inner {
      display: flex;
      flex-wrap: wrap;
    }

    &__header {
      margin-bottom: 0;
      width: 48%;

      &::after {
        content: '';
        display: block;
        margin-top: 40px;
        width: 210%;
        height: 1px;
        background-color: #e1e1e1;
      }
    }

    &__heading {
      margin-bottom: 10px;
      padding-right: 190px;
    }

    &__desc {
      padding-right: 50px;
    }

    &__item {
      margin: 25px auto 0 0;
      width: 23.5%;

      &:last-child {
        margin-right: 0;
      }

      &_accented {
        margin: 0;
        width: 44%;
      }
    }
  }

  @include media(lg) {
    &__header {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      width: 100%;

      &::after {
        margin-top: 22px;
        width: 100%;
      }
    }

    &__heading {
      margin-bottom: 0;
      margin-right: 70px;
      width: 20%;
      padding-right: 0;
    }

    &__desc {
      width: 31%;
      padding-right: 0;
    }

    &__item {
      margin-top: 35px;
      width: 20%;
    }
  }

  @include media(xl) {
    &__header {
      &::after {
        margin-top: 50px;
      }
    }

    &__heading {
      width: 16%;
    }

    &__desc {
      width: 25%;
    }

    &__item {
      width: 19%;
      margin-top: 65px;

      &_accented {
        width: 24%;
      }
    }
  }
}
</style>
