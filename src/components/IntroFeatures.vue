<template>
  <div class="intro-features">
    <div class="container">
      <div class="intro-features__items">
        <div class="intro-features__item">
          <p class="intro-features__title"><span class="intro-features__num">01 __</span>Замер</p>
          <p class="intro-features__desc">Выезд замерщика бесплатно</p>
        </div>
        <div class="intro-features__item">
          <p class="intro-features__title"><span class="intro-features__num">02 __</span>Проект</p>
          <p class="intro-features__desc">Любые цвета и{{'\xa0'}}фактуры</p>
        </div>
        <div class="intro-features__item">
          <p class="intro-features__title"><span class="intro-features__num">03 __</span>Производство</p>
          <p class="intro-features__desc">Изготовление по{{'\xa0'}}вашим размерам</p>
        </div>
        <div class="intro-features__item">
          <p class="intro-features__title"><span class="intro-features__num">04 __</span>Монтаж и гарантия</p>
          <p class="intro-features__desc">Гарантия на работу и{{'\xa0'}}материалы</p>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroFeatures'
}
</script>

<style lang="scss">
.intro-features {
  &__item {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__title {
    display: flex;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: #e40175;
  }

  &__num {
    width: 52px;
  }

  &__desc {
    margin-top: 6px;
    padding-left: 52px;
    font-size: 12px;
    line-height: calc(16/12);
    color: #757575;
  }

  @include media(md) {
    &__items {
      display: flex;
      justify-content: space-between;
    }

    &__item {
      width: 190px;
      margin-right: 30px;
      margin-bottom: 0;
    }

    &__title {
      font-size: 10px;
    }

    &__num {
      width: 46px;
    }

    &__desc {
      margin-top: 15px;
      padding-left: 46px;
    }
  }

  @include media(lg) {
    &__item {
      margin-right: 50px;
    }
  }

  @include media(xl) {
    &__items {
      margin: 0 80px;
    }

    &__item {
      margin-right: 130px;
    }
  }
}
</style>
