<template>
  <div class="material-card">
    <div
      class="material-card__image"
      :style="`background-image: url(${require(`@/assets/img/${cardData.image}`)})`"
    >
      <p class="material-card__title">{{cardData.title}}</p>
      <p class="material-card__desc">{{cardData.desc}}</p>
    </div>
    <div
      v-if="cardData.props"
      class="material-card__props"
    >
      <div
        v-for="(prop, index) in cardData.props"
        :key="index"
        class="material-card__prop"
      >
        <img
          v-if="prop.partner === 'boyard'"
          src="@/assets/img/logo-boyard-m.png"
          srcset="@/assets/img/logo-boyard-m.png, @/assets/img/logo-boyard-m@2x.png 2x"
          alt="Boyard"
          class="material-card__partner"
        >
        <p
          v-if="prop.title"
          class="material-card__prop-title"
        >{{prop.title}}</p>
        <p
          class="material-card__prop-desc"
          v-html="prop.desc"
        ></p>
      </div>
    </div>
    <router-link
      v-if="cardData.btn"
      :to="{name: cardData.btn.route }"
      custom
      v-slot="{href, navigate}"
    >
      <AppButton
        :href="href"
        :title="cardData.btn.title"
        bordered
        class="material-card__btn"
        @click="navigate"
      />
    </router-link>
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
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0, #12131e 8%, transparent 60%);
      opacity: 0.6;
      pointer-events: none;
    }
  }

  &__title {
    position: relative;
    font-weight: bold;
    font-size: 16px;
    line-height: calc(24/16);
    color: #fff;
  }

  &__partner {
    width: 100px;
    margin-bottom: 10px;
  }

  &__desc {
    position: relative;
    margin-top: 12px;
    font-size: 13px;
    line-height: calc(18/13);
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
      line-height: calc(14/12);
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

    &__partner {
      width: 118px;
    }
  }

  @include media(lg) {
    &__image {
      min-height: 335px;
    }

    &__title {
      font-size: 20px;
      line-height: calc(24/20);
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

    &__prop {
      margin-bottom: 35px;
    }

    &__prop-title {
      font-size: 16px;
    }

    &__prop-desc {
      margin-top: 10px;
      font-size: 14px;
      line-height: calc(20/14);
    }

    &__btn {
      margin-top: 20px;
      padding: 12px 40px;
    }
  }
}
</style>
