<template>
  <div class="sizing-top">
    <div class="sizing-top__box">
      <img
        src="@/assets/img/sizing.jpg"
        alt
        class="sizing-top__image"
      >
      <AppVideoButton
        round
        video="/assets/video/intro.mp4"
        class="sizing-top__play"
      />
    </div>
    <div class="sizing-top__content">
      <div class="container">
        <h1 class="sizing-top__heading">Замер</h1>
        <p class="sizing-top__desc">Наш квалифицированный специалист приедет к вам и произведет все необходимые замеры по принципу «Семь раз отмерь – один раз замерь». Благодаря этому действию, ваш гарнитур встанет в отведенное ему место как влитой.</p>
        <div class="sizing-top__services">
          <div class="sizing-top__service">
            <p class="sizing-top__service-title">Услуга бесплатна</p>
            <p class="sizing-top__service-desc">Вне зависимости от того, заключён договор или нет</p>
          </div>
          <div class="sizing-top__service">
            <p class="sizing-top__service-title">В удобное время у вас дома</p>
            <p class="sizing-top__service-desc">Без опозданий и переносов</p>
          </div>
        </div>
      </div>
    </div>
    <SizingFeatures />
  </div>
</template>

<script>
import AppVideoButton from './base/AppVideoButton.vue'
import SizingFeatures from './SizingFeatures.vue'

export default {
  name: 'SizingTop',
  components: {
    AppVideoButton,
    SizingFeatures
  }
}
</script>

<style lang="scss">
.sizing-top {
  &__box {
    position: relative;
    padding-top: 75%;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__content {
    padding: 40px 0;
    background-image: url('~@/assets/img/sizing-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__desc {
    margin-top: 20px;

    font-size: 14px;
    line-height: (32/16);
  }

  &__services {
    margin-top: 30px;
  }

  &__service {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      font-weight: bold;
      font-size: 16px;
    }

    &-desc {
      margin-top: 12px;
      font-size: 13px;
      line-height: (22/13);
    }
  }

  @include media(sm) {
    &__box {
      padding-top: 56%;
    }

    &__services {
      display: flex;
    }

    &__service {
      width: 50%;
      padding-right: 30px;
      margin-bottom: 0;
    }
  }

  @include media(md) {
    display: grid;
    grid-template-columns: 50% 50%;

    &__box {
      grid-row: 1 / 3;
      padding-top: 0;
    }

    &__content {
      .container {
        padding: 0 30px;
      }
    }

    &__desc {
      max-width: 530px;
    }
  }

  @include media(lg) {
    &__content {
      padding: 50px 0;

      .container {
        padding: 0 50px;
      }
    }

    &__desc {
      font-size: 16px;
    }

    &__services {
      margin-top: 50px;
    }
  }

  @include media(xl) {
    &__content {
      padding: 80px 0 60px;

      .container {
        margin-left: 0;
        max-width: 890px;
        padding: 0 120px;
      }
    }

    &__services {
      margin-top: 95px;
    }
  }
}
</style>
