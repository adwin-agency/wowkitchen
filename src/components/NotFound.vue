<template>
  <div class="not-found">
    <img
      src="/assets/img/wow-not-found.png"
      alt="Ничего не найдено"
      class="not-found__image"
    >
    <div class="not-found__line">
      <span
        v-for="n in linecount"
        :key="n"
      >rror404 - error404 - error404 - e</span>
    </div>
    <p class="not-found__desc">Такой страницы на сайте нет. <br>Но у нас есть много интересного:</p>
    <div class="not-found__menu">
      <router-link
        to="/kitchens"
        class="not-found__link"
      >Кухни
        <AppIcon
          name="arrow"
          class="not-found__link-icon"
        />
      </router-link>
      <router-link
        to="/technics"
        class="not-found__link"
      >Техника
        <AppIcon
          name="arrow"
          class="not-found__link-icon"
        />
      </router-link>
      <router-link
        to="/wardrobes"
        class="not-found__link"
      >Шкафы-купе
        <AppIcon
          name="arrow"
          class="not-found__link-icon"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'NotFound',
  components: {
    AppIcon
  },
  computed: {
    linecount() {
      return Math.ceil(this.$_windowWidth / (this.$_media.sm ? 1390 : 2420)) + 1
    }
  }
}
</script>

<style lang="scss">
.not-found {
  padding-bottom: 50px;

  &__image {
    margin: 0 auto;
    max-width: 300px;
  }

  @keyframes running-line {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  &__line {
    display: flex;
    font-weight: 900;
    font-size: 80px;
    color: #f2f2f2;

    span {
      flex-shrink: 0;
      animation: running-line 20s linear infinite;
    }
  }

  &__desc {
    margin: 25px auto 0;
    max-width: 300px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: (22/18);
  }

  &__menu {
    margin: 28px auto 0;
    width: 185px;
  }

  &__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    font-weight: bold;
    font-size: 18px;
    color: $color-green;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover &-icon {
      transform: translateX(15px);
    }

    &-icon {
      width: 14px;
      height: 12px;
      fill: currentColor;
      transition: transform .3s ease;
    }
  }

  @include media(md) {
    padding-bottom: 144px;

    &__image {
      max-width: 500px;
    }

    &__line {
      font-size: 140px;
    }

    &__desc {
      max-width: 500px;
      font-size: 18px;
    }
  }
}
</style>
