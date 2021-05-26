<template>
  <div class="favorite">
    <h2 class="favorite__title">Подборки</h2>
    <div class="favorite__container">
      <div class="favorite__element">
        <img class="favorite__image" src="@/assets/img/favorite/kitchen.jpg" alt="img">
        <div class="favorite__box">
          <p class="favorite__category">Кухня</p>
          <p class="favorite__name">Уитни Хьюстон</p>
          <p class="favorite__price">74500</p>
          <p class="favorite__discount">109000</p>
          <App-icon 
            name="close"
            class="favorite__close"/>
        </div>
      </div>

      <div class="favorite__element">
        <img class="favorite__image" src="@/assets/img/favorite/stove.jpg" alt="img">
        <div class="favorite__box">
          <p class="favorite__category">Варочная панель</p>
          <p class="favorite__name">Candy CVG 64 SGNX</p>
          <p class="favorite__price">54500</p>
          <App-icon 
            name="close"
            class="favorite__close"/>
        </div>
      </div>
    </div>
    <p class="favorite__text favorite__text_line">Хотите рассчитать стоимость выбранных позиций с учётом габаритов вашего помешения?</p>
    <p class="favorite__text">Наш менеджер свяжется с вами в ближайшее время.</p>
    <App-button title="Рассчитать мой проект" class="favorite__button"/>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
export default {
  components: { AppButton, AppIcon },
  name: 'Favorite'
}
</script>

<style lang="scss">
.favorite {
  padding: 10px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  &__title {
    position: relative;
    font-size: 18px;
    font-weight: bold;
    line-height: 0.778;
    margin: 35px 0 45px;
    text-align: start;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 30px;
        width: 100%;
        height: 1px;
        background-color: $color-lightgray;
    }
  }
  &__container {
    position: relative;
    height: 100%;
    margin-bottom: 30px;
    overflow-y: auto;
    @include media(md) {
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
      width: 0;
      }
    }
  }
  &__box {
    margin-left: 30px;
    padding-top: 12px;
    text-align: start;
  }
  &__element {
    display: flex;
    position: relative;
    margin-bottom: 16px;
  }
  &__image {
    object-fit: contain;
    max-width: 105px;
    max-height: 102px;
  }
  &__category {
    font-size: 12px;
    color: $color-lightviolet;
  }
  &__name {
    font-size: 13px;
    margin-bottom: 20px;
      @include media(md) {
        font-size: 16px;
      }
  }
  &__price {
    font-size: 18px;
    font-weight: bold;
  }
  &__discount {
    font-size: 14px;
    text-decoration: line-through;
    color: $color-lightviolet;
  }
  &__text {
    font-size: 14px;
    text-align: center;
    margin: 10px 0;
    &_line {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: -25px;
        width: 100%;
        height: 1px;
        background-color: $color-lightgray;
      }
    }
  }
  &__button {
    margin: 10px auto 30%;
  }
  &__close {
    fill: #ababab;
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 1;
    transition: .4s;
    @include media(md) {
      right: 10%;
    }
    &:hover {
      opacity: .6;
    }
  }
}
</style>
