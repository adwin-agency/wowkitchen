<template>
  <div
    class="catalog-main-banner"
    :style="`background-image: url(${require(`@/assets/img/${bannerData[type].image}`)})`"
  >
    <div class="catalog-main-banner__inner">
      <p class="catalog-main-banner__title">{{title}}</p>
      <template v-if="type !== 'technics'">
        <p class="catalog-main-banner__discount">скидки на всё</p>
        <p class="catalog-main-banner__date">до конца месяца</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogMainBanner',
  props: {
    type: String,
    title: String
  },
  data() {
    return {
      bannerData: {
        kitchens: { title: 'Кухни на заказ', image: 'kitchens-banner.jpg' },
        wardrobes: { title: 'Шкафы-купе на заказ', image: 'wardrobes-banner.jpg' },
        technics: { title: 'Варочные панели', image: 'technics-banner.jpg' }
      }
    }
  }
}
</script>

<style lang="scss">
.catalog-main-banner {
  background-size: 0;

  &__title {
    font-weight: bold;
    font-size: 26px;

    br {
      display: none;
    }
  }

  &__discount {
    display: inline-block;
    margin-top: 2px;
    padding: 6px 20px;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    background-color: $color-yellow;
  }

  &__date {
    margin-top: 2px;
    font-weight: bold;
    font-size: 20px;
  }

  @include media(md) {
    position: relative;
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
      background-color: #000;
      opacity: 0.35;
    }

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      margin: 0 auto;
      width: 660px;
      max-width: 100%;
      min-height: 325px;
      padding: 75px 50px 75px;
    }

    &__title {
      margin-left: 15px;
      font-size: 36px;
      color: #f3f4f9;
    }

    &__discount {
      align-self: center;
      font-weight: normal;
      margin-top: 16px;
      margin-left: 50px;
      padding: 10px 34px;
      font-size: 27px;
    }

    &__date {
      align-self: flex-end;
      margin-top: 0;
      font-size: 20px;
      color: #f3f4f9;
    }
  }

  @include media(lg) {
    &__inner {
      width: 870px;
      padding: 100px 50px;
    }

    &__title {
      margin-left: 0;
      font-size: 50px;
    }

    &__discount {
      margin-top: 20px;
      margin-left: 0;
      margin-right: 270px;
    }

    &__date {
      align-self: center;
      margin-left: 60px;
    }
  }

  @include media(xl) {
    &__inner {
      width: 1015px;
      min-height: 345px;
    }

    &__discount {
      align-self: flex-start;
      margin-left: 50px;
      margin-right: 0;
    }

    &__date {
      align-self: flex-start;
      margin-left: 195px;
    }
  }
}
</style>
