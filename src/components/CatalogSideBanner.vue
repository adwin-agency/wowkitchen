<template>
  <div class="catalog-side-banner">
    <div class="catalog-side-banner__inner">
      <p class="catalog-side-banner__title">Бесплатные замер <br>и 3D-проект <br>у вас дома</p>
      <div class="catalog-side-banner__features">
        <p class="catalog-side-banner__feature">
          <AppIcon
            name="done"
            class="catalog-side-banner__feature-icon"
          />
          Безопасно
        </p>
        <p class="catalog-side-banner__feature">
          <AppIcon
            name="done"
            class="catalog-side-banner__feature-icon"
          />
          Быстро
        </p>
        <p class="catalog-side-banner__feature">
          <AppIcon
            name="done"
            class="catalog-side-banner__feature-icon"
          />
          Удобно
        </p>
      </div>
    </div>
    <img src="@/assets/img/catalog-side-banner.png" alt="Работник" class="catalog-side-banner__img">
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'CatalogSideBanner',
  components: {
    AppIcon
  }
}
</script>

<style lang="scss">
.catalog-side-banner {
  display: flex;
  align-items: center;
  position: relative;
  max-height: 350px;
  background-image: url('~@/assets/img/catalog-side-banner-bg.jpg');
  background-size: cover;
  background-position: bottom;
  overflow: hidden;

  &:before {
    content: "";
    padding-top: 60%;
  }

  &__inner {
    position: relative;
    width: 100%;
    padding: 22px 40% 22px 7%;
    z-index: 1;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    line-height: (18/14);
  }

  &__features {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 14px;
  }

  &__feature {
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    border-radius: 100px;
    padding: 5px 25px 5px 15px;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    background-color: $color-green;
    color: #fff;
  }

  &__feature-icon {
    flex-shrink: 0;
    width: 11px;
    height: 11px;
    margin-right: 12px;
    fill: currentColor;
  }

  &__img {
    position: absolute;
    left: calc(50% + 20px);
    bottom: 0;
    width: 37%;
    max-width: 220px;
  }

  @include media(md) {
    max-height: none;
    
    &::before {
      display: none;
    } 

    &__inner {
      width: 100%;
      padding: 52px 180px 52px 36px;
    }

    &__title {
      font-size: 16px;
      line-height: (18/16);
    }

    &__features {
      margin-top: 25px;
    }

    &__feature {
      margin-bottom: 8px;
      padding: 6px 32px 6px 20px;
      font-size: 12px;
    }

    &__feature-icon {
      width: 10px;
      height: 10px;
      margin-right: 14px;
    }

    &__img {
      left: auto;
      right: 10px;
      width: 206px;
    }
  }

  @include media(lg) {
    &__inner {
      padding: 85px 200px 70px 56px;
    }

    &__title {
      font-size: 18px;
      line-height: (26/18);
    }

    &__features {
      margin-top: 45px;
    }

    &__img {
      right: 30px;
      width: 228px;
    }
  }

  @include media(xl) {
    &__inner {
      padding: 85px 200px 110px 56px;
    }

    &__title {
      font-size: 22px;
      line-height: (30/22);
    }

    &__features {
      margin-top: 35px;
    }

    &__img {
      right: 25px;
      width: 262px;
    }
  }
}
</style>
