<template>
  <div class="materials-intro">
    <img
      src="@/assets/img/materials-in.png"
      alt
      class="materials-intro__img"
    >
    <div class="container container_side-fixed">
      <p class="materials-intro__title">От ведущих поставщиков <br><b>мирового класса</b></p>
      <div class="materials-intro__partners">
        <div class="materials-intro__partner">
          <img
            srcset="@/assets/img/logo-egger-m.png, @/assets/img/logo-egger-m@2x.png 2x"
            src="@/assets/img/logo-egger-m.png"
            alt="Egger"
          >
          <p>Австрия</p>
        </div>
        <div class="materials-intro__partner">
          <img
            srcset="@/assets/img/logo-kronospan-m.png, @/assets/img/logo-kronospan-m@2x.png 2x"
            src="@/assets/img/logo-kronospan-m.png"
            alt="Kronospan"
          >
          <p>Австрия</p>
        </div>
      </div>
      <div class="materials-intro__features">
        <p class="materials-intro__feature">Экологичные</p>
        <p class="materials-intro__feature">Безопасные</p>
        <p class="materials-intro__feature">Прочные</p>
        <p class="materials-intro__feature">Износостойкие</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaterialsIntro'
}
</script>

<style lang="scss">
.materials-intro {
  position: relative;
  padding-top: 30px;
  background-image: linear-gradient(90deg, #f6e43e 160px, #eac313);

  &__img {
    display: none;
  }

  &__title {
    position: relative;
    font-size: 22px;
    line-height: (46/42);
    z-index: 1;
  }

  &__partners {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 36px;
    z-index: 1;
  }

  &__partner {
    margin-right: 40px;
    font-weight: 500;
    font-size: 11px;

    img {
      margin-bottom: 5px;
      width: 120px;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__features {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-top: 40px;
    margin-right: -$container-padding;
    padding: 11px 0 0;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: $color-yellow;
    }
  }

  &__feature {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 20px;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
    z-index: 2;

    &::after {
      content: '';
      margin-left: 20px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #edca0a;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  @include media(xxs) {
    &__partner img {
      width: 150px;
    }
  }

  @include media(xs) {
    &__partner img {
      width: 170px;
    }
  }

  @include media(sm) {
    &__img {
      display: block;
      position: absolute;
      left: 500px;
      bottom: 0;
      width: 500px;
      pointer-events: none;
      z-index: 1;
    }
  }

  @include media(md) {
    padding-top: 45px;

    &__img {
      left: 550px;
      width: 850px;
    }

    &__title {
      font-size: 30px;
    }

    &__feature {
      font-size: 14px;
    }
  }

  @include media(lg) {
    &__img {
      left: 650px;
    }

    &__title {
      font-size: 42px;
    }

    &__feature {
      font-size: 15px;
    }
  }
}
</style>
