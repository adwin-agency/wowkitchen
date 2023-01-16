<template>
  <div class="materials-partners">
    <div class="container container_side-fixed">
      <p class="materials-partners__title">Надежные поставщики со всего мира – наши друзья</p>
      <p class="materials-partners__desc">Мы сотрудничаем только с проверенными и лучшими в своих направлениях поставщиками. Прямое взаимодействие с ними позволяет снизить стоимость наших гарнитуров (нет посредников – нет проблем), а также быть уверенными в отличном качество используемых материалов. </p>
      <div class="materials-partners__items">
        <img src="@/assets/img/logo-egger.svg" alt="Egger" class="materials-partners__img">
        <img src="@/assets/img/logo-kronospan.svg" alt="Kronospan" class="materials-partners__img">
        <img src="@/assets/img/partners-lex.svg" alt="Lex" class="materials-partners__img">
        <img src="@/assets/img/partners-candy.svg" alt="Candy" class="materials-partners__img">
        <img src="@/assets/img/partners-boyard.svg" alt="Boyard" class="materials-partners__img">
        <img src="@/assets/img/partners-blum.svg" alt="Blum" class="materials-partners__img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaterialsPartners'
}
</script>

<style lang="scss">
.materials-partners {
  padding: 36px 0 18px;
  background-color: $color-lightgray;

  &__title {
    font-weight: bold;
    font-size: 18px;
    line-height: calc(22/18);
  }

  &__desc {
    margin-top: 20px;
    font-size: 14px;
    line-height: calc(32/14);
    color: #000;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-right: -30px;
  }

  &__img {
    margin: 0 30px 30px 0;
    width: 135px;
  }
  
  @include media(md) {
    padding: 88px 0 0;

    &__desc {
      margin-top: 12px;
      max-width: 630px;
    }

    &__items {
      margin-right: -40px;
    }

    &__img {
      margin-right: 40px;   
      max-width: calc(25% - 40px);
    }
  }

  @include media(lg) {
    padding: 88px 0 25px;

    &__desc {
      margin-top: 22px;
      max-width: 720px;
      font-size: 16px;
      line-height: calc(32/16);
    }

    &__items {
      margin-right: -54px;
    }

    &__img {
      margin-right: 54px;
      width: 155px;
      max-width: calc(25% - 54px);
    }
  }

  @include media(xl) {
    padding: 92px 0 0;

    &__desc {
      max-width: 920px;
    }

    &__items {
      margin-top: 35px;
      margin-right: -74px;
    }

    &__img {
      margin-right: 74px;
      max-width: calc(25% - 74px);
    }
  }
}
</style>
