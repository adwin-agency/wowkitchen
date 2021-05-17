<template>
  <div class="material-card">
    <div
      class="material-card__image"
      :style="`background-image: url(${require(`@/assets/img/${cardData.image}`)})`"
    >
      <p class="material-card__title">{{cardData.title}}</p>
      <p class="material-card__desc">{{cardData.desc}}</p>
    </div>
    <template v-if="cardData.props && cardData.btn">
      <div class="material-card__props">
        <div
          v-for="(prop, index) in cardData.props"
          :key="index"
          class="material-card__prop"
        >
          <p class="material-card__prop-title">{{prop.title}}</p>
          <p class="material-card__prop-desc">{{prop.desc}}</p>
        </div>
      </div>
      <AppButton
        :title="cardData.btn"
        bordered
        class="material-card__btn"
      />
    </template>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'

export default {
  name: 'MaterialCard',
  components: {
    AppButton
  },
  props: {
    cardData: Object
  }
}
</script>

<style lang="scss">
.material-card {
  &__image {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    border-radius: 12px;
    min-height: 230px;
    padding: 25px 20px;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0, #12131e 8%, transparent 52%);
      opacity: 0.6;
      pointer-events: none;
    }
  }

  &__title {
    position: relative;
    font-weight: bold;
    font-size: 16px;
    line-height: (24/16);
    color: #fff;
  }

  &__desc {
    position: relative;
    margin-top: 12px;
    font-size: 13px;
    line-height: (18/13);
    color: $color-lightgray;
  }

  &__props {
    margin-top: 15px;
  }

  &__prop {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      font-weight: 500;
      font-size: 14px;
      color: #000;
    }

    &-desc {
      margin-top: 5px;
      font-size: 12px;
      line-height: (14/12);
      color: #8c8c8c;
    }
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
    padding: 12px 10px;
  }

  @include media(md) {
    &__image {
      min-height: 260px;
      padding: 35px 30px;
    }

    &__prop {
      margin-bottom: 20px;
    }

    &__btn {
      width: auto;
      padding: 12px 30px;
    }
  }

  @include media(lg) {
    &__image {
      min-height: 335px;
    }

    &__title {
      font-size: 20px;
      line-height: (24/20);
    }

    &__props {
      margin-top: 30px;
    }

    &__prop-desc {
      max-width: 380px;
    }

    &__btn {
      margin-top: 35px;
    }
  }

  @include media(xl) {
    &__image {
      min-height: 350px;
      padding: 52px 32px;
    }

    &__props {
      margin-top: 34px;
    }
  }
}
</style>
