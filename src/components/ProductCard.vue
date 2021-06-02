<template>
  <div
    :class="[
      'product-card',
      {'product-card_large': large},
      {'product-card_slide': slide},
      {[`product-card_${cardData.type}`]: cardData.type !== 'kitchen'},
      {'is-disabled': disabled}
    ]"
  >
    <div class="product-card__img-box">
      <img :src="require(`@/assets/img/${cardData.image}`)" alt="" class="product-card__img">
      <span
        v-if="!large && cardData.discount"
        class="product-card__discount"
      >
        {{cardData.discount}}
      </span>
      <button
        v-if="cardData.type === 'kitchen'"
        type="button"
        class="product-card__zoom-btn"
      >
        <AppIcon
          name="zoom"
          class="product-card__zoom-icon"
        />
      </button>
      <button
        v-if="cardData.video"
        type="button"
        class="product-card__play"
      >
        <span class="product-card__play-inner">
          <AppIcon
            name="play"
            class="product-card__play-icon"
          />
          <span class="product-card__play-title">{{large ? 'Смотреть видеообзор' : 'Видеообзор'}}</span>
        </span>        
      </button>
    </div>
    <div class="product-card__content">
      <div class="product-card__header">
        <p
          v-if="large"
          class="product-card__category"
        >
          {{cardData.category}}
        </p>
        <p class="product-card__title">
          <router-link :to="{name: 'kitchen'}">{{cardData.title}}</router-link>
        </p>
        <div
          v-if="cardData.mod !== 'wardrobe'"
          class="product-card__actions"
        >
          <button
            type="button"
            class="product-card__action"
          >
            <AppIcon
              name="bookmark-l"
              class="product-card__action-icon"
            />
          </button>
          <button
            v-if="large"
            type="button"
            class="product-card__action"
          >
            <AppIcon
              name="share"
              class="product-card__action-icon"
            />
          </button>
        </div>
      </div>      
      <div
        v-if="$_desktop && !large || cardData.type !== 'kitchen'"
        class="product-card__props"
      >
        <p
          v-for="(prop, index) in cardData.props"
          :key="index"
          class="product-card__prop"
        >
          <span>{{prop.title}}</span>
          {{prop.value}}
        </p>
      </div>
      <div class="product-card__prices">
        <p class="product-card__price">{{cardData.price}}</p>
        <p
          v-if="cardData.oldPrice"
          class="product-card__old-price"
        >
          {{cardData.oldPrice}}
        </p>
        <span
          v-if="large && cardData.discount"
          class="product-card__discount"
        >
          {{cardData.discount}}
        </span>
      </div>      
      <AppButton
        v-if="cardData.type !== 'technics'"
        :size="!large ? 'small' : ''"
        :bordered="!large"
        title="Рассчитать проект"
        modal="calc"
        class="product-card__btn"
      />
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'ProductCard',
  components: {
    AppButton,
    AppIcon
  },
  props: {
    cardData: Object,
    large: Boolean,
    slide: Boolean,
    disabled: Boolean
  }
}
</script>

<style lang="scss">
.product-card {
  $b: &;

  &_slide {
    #{$b} {
      &__img-box {
        height: 186px;
      }

      &__play {
        left: 10px;
        bottom: 10px;
      }

      &__price {
        font-size: 22px;
      }
    }
  }

  &_wardrobe,
  &_technics {
    #{$b} {
      &__props {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #d4d4d4;
      }

      &__prop {
        font-weight: 500;
        font-size: 10px;
        color: #949494;

        span {
          display: block;
          margin-bottom: 2px;
          font-weight: bold;
        }
      }
    }
  }

  &_wardrobe {
    #{$b} {
      &__img-box {
        height: 290px;
      }

      &__content {
        margin-top: 6px;
      }

      &__price-box {
        margin-top: 6px;
      }

      &__props {
        margin-top: 12px;
        padding-top: 16px;
      }
    }
  }

  &_technics {
    #{$b} {
      &__img-box {
        border: 2px solid $color-lightgray;
        border-radius: 8px;
        height: 270px;
        padding: 18px;
      }

      &__img {
        object-fit: contain;
      }

      &__discount {
        right: -12px;
        border-radius: 15px 0 15px 0;
        font-size: 17px;
      }

      &__content {
        margin-top: 8px;
        padding: 0 4px;
      }

      &__header {
        grid-column: 1 / 2;
        margin-bottom: 0;
      }

      &__prices {
        text-align: right;
      }

      &__props {
        margin-top: 14px;
        padding-top: 10px;
      }
    }
  }

  &__img-box {
    position: relative;
    border-radius: 12px;
    height: 250px;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__discount {
    position: absolute;
    top: 16px;
    right: 10px;
    border-radius: 20px 0 20px 0;
    min-width: 50px;
    padding: 6px 10px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    background-color: $color-pink;
    color: $color-lightgray;
  }

  &__play {
    position: absolute;
    left: 20px;
    bottom: 15px;
  }

  &__play-icon {
    width: 42px;
    height: 42px;
  }

  &__play-title {
    display: none;
  }

  &__zoom-btn {
    display: none;
  }

  &__content {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: start;
    margin-top: 15px;
    padding: 0 10px;
  }

  &__header {
    display: flex;
    align-items: center;
    grid-column: 1 / 3;
    margin-bottom: 5px;
  }

  &__title {
    font-weight: 500;
    font-size: 18px;
    color: #000;
  }

  &__actions {
    display: flex;
    margin-left: 6px;
  }

  &__action-icon {
    width: 20px;
    height: 20px;
    fill: $color-lightviolet;
  }

  &__desc {
    display: flex;
    align-items: flex-start;
    margin-top: 6px;
  }

  &__price {
    font-weight: bold;
    font-size: 20px;
    color: #000;
  }

  &__old-price {
    font-weight: 500;
    font-size: 16px;
    color: $color-lightviolet;
    text-decoration: line-through;
  }

  &__btn {
    min-width: 180px;
  }

  @include media(md) {
    &_slide {
      transition: opacity .3s ease;

      #{$b} {
        &__img-box {
          height: 250px;
        }

        &__discount {
          top: 18px;
          right: 5px;
        }

        &__play {
          left: 30px;
          bottom: 30px;
          transition: opacity .3s ease;
        }

        &__content {
          transition: opacity .3s ease;
        }

        &__header {
          grid-column: 1 / 3;
        }

        &__price-box {
          margin-top: 8px;
        }

        &__btn {
          grid-row: 2 / 3;
          margin-top: 3px;
        }
      }
    }

    &_wardrobe {
      #{$b} {
        &__img-box {
          height: 310px;
        }

        &__discount {
          top: 23px;
          right: 25px;
          padding: 6px 12px;
          font-size: 15px;
        }

        &__content {
          margin-top: 16px;
          padding-right: 5px;
        }

        &__header {
          grid-column: 1 / 3;
        }

        &__price-box {
          margin-top: 10px;
        }

        &__price {
          font-size: 20px;
        }

        &__btn {
          grid-row: 2 / 3;
          margin-top: 6px;
          min-width: 180px;
          min-height: 50px;
        }

        &__props {
          grid-column: 1 / 3;
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          border-top: 1px solid #d4d4d4;
          padding-top: 16px;
        }

        &__prop {
          min-width: 65px;
          font-weight: 500;
          font-size: 10px;
          color: #949494;

          span {
            display: inline-block;
            margin-bottom: 2px;
            font-weight: bold;
          }
        }
      }
    }

    &_technics {
      #{$b} {
        &__img-box {
          height: 310px;
          padding: 35px;
        }

        &__discount {
          top: 20px;
          right: 28px;
          padding: 5px 14px;
        }

        &__content {
          margin-top: 18px;
          padding-left: 10px;
          padding-right: 6px;
        }

        &__prices {
          display: block;
          min-height: 41px;
        }

        &__price {
          margin-right: 0;
          font-size: 20px;
        }

        &__old-price {
          margin-top: -2px;
          font-size: 16px;
        }

        &__props {
          margin-top: 6px;
          padding-top: 15px;
        }

        &__prop {
          min-width: 80px;
        }
      }
    }

    &.is-disabled {
      #{$b} {
        &__play {
          opacity: 0;
          pointer-events: none;
        }

        &__content {
          opacity: 0;
          pointer-events: none;
        }
      }
    }
    
    &__img-box {
      height: 390px;
    }

    &__discount {
      top: 28px;
      right: 30px;
      padding: 8px 14px;
      font-size: 18px;
    }

    &__play {
      left: 40px;
      bottom: 45px;
      transition: opacity .3s ease;

      &::before {
        content: "";
        position: absolute;
        top: 21px;
        left: 21px;
        width: 74px;
        height: 74px;
        border-radius: 50%;
        border: 1px solid $color-yellow;
        opacity: 0.3;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }
    }

    &__zoom-btn {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      pointer-events: none;
      transition: opacity .3s ease;
    }

    &__zoom-icon {
      width: 100%;
      height: 100%;
    }

    &__content {
      margin-top: 12px;
      padding: 0 10px;
      transition: opacity .3s ease;
    }

    &__header {
      grid-column: 1 / 2;
      margin-bottom: 0;
    }

    &__prices {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    &__price {
      margin-right: 22px;
      font-size: 22px;
    }

    &__old-price {
      font-size: 18px;
    }

    &__btn {
      grid-column: 2/ 3;
      grid-row: 1 / 3;
      min-width: 215px;
    }
  }

  @include media(lg) {
    &:hover {
      #{$b} {
        &__img-box {
          box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.19);
        }

        &__zoom-btn {
          opacity: 1;
          pointer-events: all;
        }

        &__play-inner {
          max-width: 150px;
        }
      }
    }

    &_large {
      position: relative;

      &:hover {
        #{$b}__play-inner {
          max-width: none;
        }
      }

      #{$b} {
        &__img-box {
          height: 520px;
          border-radius: 0 0 100px 0;
        }

        &__play {
          left: 38px;
          bottom: 34px;
        }

        &__play-inner {
          max-width: none;
        }

        &__play-title {
          padding: 10px 5px;
          padding-right: 25px;
        }

        &__content {
          display: block;
          position: absolute;
          right: 80px;
          bottom: -64px;
          margin-top: 0;
          min-width: 380px;
          border-radius: 8px;
          padding: 22px 40px 28px;
          background-color: #fff;
          box-shadow: 0px 20px 38px 0px rgba(53, 53, 53, 0.11);
        }

        &__header {
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
        }

        &__title {
          font-size: 20px;
        }

        &__actions {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
          margin-right: 8px;
        }

        &__price-box {
          display: flex;
          align-items: center;
          padding-right: 0;
        }

        &__prices {
          display: grid;
          grid-template-columns: auto auto;
          justify-content: start;
          padding-right: 0;
        }

        &__price {
          margin-right: 0;
          font-size: 24px;
        }

        &__old-price {
          margin-top: -2px;
          font-size: 16px;
        }

        &__discount {
          position: static;
          grid-column: 2 / 3;
          grid-row: 1 / 3;
          margin-left: 40px;
          padding: 9px 16px;
        }

        &__btn {
          margin-top: 14px;
          width: 100%;
        }
      }
    }

    &_slide {
      #{$b} {
        &__img-box {
          height: 300px;
        }

        &__discount {
          right: 64px;
        }

        &__play {
          left: 40px;
          bottom: 40px;
        }

        &__content {
          margin-top: 24px;
        }

        &__props {
          margin-top: 10px;
        }

        &__price {
          margin-right: 32px;
        }

        &__btn {
          grid-row: 2 / 4;
        }
      }
    }

    &_wardrobe {
      #{$b} {
        &__prop {
          margin: 0;
          min-width: 50px;
          width: auto;
        }
      }
    }

    &_technics {
      #{$b} {
        &__img-box {
          height: 380px;
          padding: 60px;
        }

        &__prices {
          margin-top: 0;
        }

        &__props {
          margin-top: 12px;
        }

        &__prop {
          width: auto;
          min-width: 90px;
        }
      }
    }

    &__img-box {
      height: 300px;
      transition: box-shadow .3s ease;
    }

    &__discount {
      top: 36px;
      right: 20px;
    }

    &__play {
      left: 40px;
      bottom: 28px;
    }

    &__play-inner {
      display: flex;
      align-items: center;
      max-width: 42px;
      border-radius: 100px;
      background-color: $color-yellow;
      transition: max-width .3s ease;
      overflow: hidden;
    }

    &__play-icon {
      flex-shrink: 0;
    }

    &__play-title {
      display: inline-block;
      padding: 10px;
      padding-right: 20px;
      font-weight: bold;
      font-size: 11px;
      white-space: nowrap;
    }

    &__content {
      margin-top: 20px;
    }

    &__header {
      grid-column: 1 / 3;
    }

    &__category {
      margin-bottom: 2px;
      font-weight: 500;
      font-size: 10px;
      text-transform: uppercase;
      color: $color-lightviolet;
    }

    &__action {
      margin-right: 14px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__props {
      display: flex;
      flex-wrap: wrap;
      margin-top: 6px;
      padding-right: 12px;
    }

    &__prop {
      width: 120px;
      margin-right: 18px;
      margin-bottom: 8px;
      font-size: 11px;
      opacity: 0.5;

      &:last-child {
        margin-right: 0;
      }
    }

    &__prop-title {
      font-weight: 500;
      margin-right: 6px;
    }

    &__prices {
      margin-top: 10px;
      padding-right: 12px;
    }

    &__btn {
      grid-row: 2 / 4;
    }
  }

  @include media(xl) {
    &_large {
      #{$b} {
        &__img-box {
          height: 660px;
        }

        &__play {
          left: 68px;
          bottom: 55px;
        }

        &__content {
          right: 90px;
          bottom: -98px;
          padding: 38px 40px 40px;
        }

        &__btn {
          margin-top: 24px;
          margin-right: 0;
        }
      }
    }

    &_slide {
      #{$b} {
        &__img-box {
          height: 380px;
        }

        &__discount {
          top: 36px;
          right: 44px;
        }

        &__content {
          margin-top: 30px;
        }

        &__btn {
          margin-right: 10px;
        }
      }
    }

    &_wardrobe {
      #{$b} {
        &__img-box {
          height: 380px;
        }

        &__content {
          margin-top: 20px;
        }

        &__header {
          grid-column: 1 / 2;
        }

        &__btn {
          grid-row: 1 / 3;
          margin-right: 0;
          min-width: 220px;
          min-height: 60px;
        }

        &__prop {
          min-width: 90px;
        }
      }
    }

    &__img-box {
      height: 380px;
    }

    &__discount {
      right: 40px;
    }

    &__play {
      bottom: 38px;
    }

    &__content {
      margin-top: 30px;
    }

    &__btn {
      margin-right: 35px;
    }
  }
}
</style>
