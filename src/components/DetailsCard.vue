<template>
  <div class="details-card">
    <div class="details-card__box">
      <p class="details-card__type">{{cardData.type}}</p>
      <p class="details-card__title">
        {{cardData.title}}
        <button
          v-if="$_mobile"
          type="button"
          class="details-card__favorite"
        >
          <AppIcon
            name="bookmark-l"
            class="details-card__favorite-icon"
          />
        </button>
      </p>
      <div class="details-card__cost">
        <div class="details-card__prices">
          <p class="details-card__price">{{cardData.price}}</p>
          <p
            v-if="cardData.oldPrice"
            class="details-card__old-price"
          >
            {{cardData.oldPrice}}
          </p>
        </div>
        <span
          v-if="cardData.discount"
          class="details-card__discount"
        >
          {{cardData.discount}}
        </span>
      </div>
      <div class="details-card__btns">
        <AppButton
          title="Рассчитать проект"
          class="details-card__btn"
        />
        <AppButton
          color="gray"
          title="Вызвать дизайнера"
          class="details-card__btn details-card__btn_add"
        />
        <button
          v-if="$_mobile"
          type="button"
          class="details-card__share"
        >
          <AppIcon
            name="share"
            class="details-card__share-icon"
          />
        </button>
      </div>
      <p class="details-card__note">Обе эти услуги совершенно <span>бесплатны!</span></p>
    </div>
    <div
      v-if="!$_mobile"
      class="details-card__actions"
    >
      <button
        type="button"
        class="details-card__action"
      >
        <AppIcon
          name="bookmark-l"
          class="details-card__action-icon"
        />
        <span>В подборку</span>
      </button>
      <button
        type="button"
        class="details-card__action"
      >
        <AppIcon
          name="share"
          class="details-card__action-icon"
        />
        <span>Поделиться</span>
      </button>
    </div>    
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'
import AppButton from './base/AppButton.vue'

export default {
  name: 'DetailsCard',
  components: {
    AppButton,
    AppIcon
  },
  props: {
    cardData: Object
  }
}
</script>

<style lang="scss">
.details-card {
  &__type {
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    color: $color-lightviolet;
  }

  &__title {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
  }

  &__favorite {
    margin-left: 24px;    

    &-icon {
      width: 20px;
      height: 20px;
      fill: $color-lightviolet;
    }
  }

  &__cost {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }

  &__price {
    font-weight: bold;
    font-size: 22px;
  }

  &__old-price {
    margin-top: -4px;
    font-weight: 500;
    font-size: 16px;
    color: $color-lightviolet;
    text-decoration: line-through;
  }

  &__discount {
    margin-left: 40px;
    border-radius: 20px 0 20px 0;
    padding: 9px 16px;
    font-weight: bold;
    font-size: 18px;
    color: $color-lightgray;
    background-color: $color-pink;
  }

  &__btns {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 18px;
  }

  &__btn {
    flex: 1 0 100%;
    margin-bottom: 16px;

    &_add {
      margin-bottom: 0;
      flex: 1 1 auto;
    }
  }

  &__share {    
    margin: 0 10px;

    &-icon {
      width: 20px;
      height: 20px;
      fill: $color-lightviolet;
    }
  }

  &__note {
    margin-top: 14px;
    text-align: center;
    font-size: 12px;
    color: $color-lightviolet;

    span {
      font-weight: bold;
    }
  }

  @include media(md) {
    &__box {
      border-radius: 8px;
      padding: 40px 40px 25px;
      background-color: #fff;
      box-shadow: 0px 20px 38px 0px rgba(53, 53, 53, 0.11);
    }

    &__note {
      margin-top: 20px;
    }

    &__actions {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    &__action {
      display: flex;
      align-items: center;
      margin: 0 18px;
      font-size: 10px;
      color: #8b8b8b;

      &-icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        fill: $color-lightviolet;
      }
    }
  }

  @include media(lg) {
    &__box {
      padding: 40px 30px 25px;
    }

    &__title {
      font-size: 22px;
    }

    &__price {
      font-size: 26px;
    }

    &__old-price {
      margin-top: -2px;
      font-size: 18px;
    }

    &__discount {
      margin-left: 20px;
    }

    &__actions {
      margin-top: 30px;
    }
  }

  @include media(xl) {
    &__box {
      padding: 52px 50px 35px;
    }

    &__cost {
      margin-top: 20px;
    }

    &__btns {
      margin-top: 26px;
    }

    &__actions {
      margin-top: 50px;
    }
  }
}
</style>
