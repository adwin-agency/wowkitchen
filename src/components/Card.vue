<template>
  <div class="card">
    <div class="card__image">
      <img src="@/assets/img/slide-card.jpg" alt="">
    </div>
    <p class="card__title">
      <AppIcon
        v-if="icon"
        class="card__icon"
        :name="icon"
      />
      {{title}}
    </p>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'Card',
  components: {
    AppIcon
  },
  props: {
    title: String,
    icon: String
  }
}
</script>

<style lang="scss">
.card {
  &__image {
    height: 140px;
    border-radius: 12px;
    box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.19);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    position: relative;
    margin-top: 15px;
    font-weight: bold;
    font-size: 14px;
  }

  &__icon {
    position: absolute;
    right: 20px;
    bottom: 100%;
    margin-bottom: 35px;
    width: 30px;
    height: 30px;
    fill: #f6e43e;
  }

  @include media(md) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    padding: 30px;

    &__image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(at 75% bottom, rgba(#000, .33), transparent);
      }
    }

    &__title {
      margin-top: 0;
      font-size: 16px;
      color: #fff;
    }

    &__icon {
      position: static;
      margin-left: auto;
      margin-bottom: 15px;
    }
  }

  @include media(lg) {
    padding: 32px 40px;
  }

  @include media(xl) {
    padding: 40px 54px;
  }
}
</style>
