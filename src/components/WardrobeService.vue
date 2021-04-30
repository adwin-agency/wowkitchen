<template>
  <div class="wardrobe-service">
    <div class="container">
      <div class="wardrobe-service__inner">
        <h2 class="wardrobe-service__heading">4 причины заказать шкаф именно у нас</h2>
        <div class="wardrobe-service__items">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="wardrobe-service__item"
          >
            <span class="wardrobe-service__num">{{item.num}}</span>
            <p class="wardrobe-service__title">{{item.title}}</p>
            <p
              v-html="item.desc"
              class="wardrobe-service__desc"
            ></p>
            <a
              v-if="item.link"
              href=""
              class="wardrobe-service__link"
            >
              {{item.link}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WardrobeService',
  data() {
    return {
      items: [
        { num: '01', title: 'Бесплатный вызов дизайнера', desc: 'Пригласив к себе нашего дизайнера, вы получите точные замеры на месте и полноценную консультацию по конструктиву и стилю шкафа. <br><span>Это абсолютно бесплатно!</span>', link: 'Пригласить дизайнера' },
        { num: '02', title: 'Безопасность и экологичность конструкции', desc: 'Материалы соответствуют международным стандартам ISO и могут быть использованы даже в медицинских и детских учереждениях' },
        { num: '03', title: 'Индивидуальный дизайн', desc: 'Вы можете выбрать модель из представленных на сайте за основу или создать проект с нуля исходя из своих потребностей и предпочтений. А наши дизайнеры с удовольствием вам помогут.' },
        { num: '04', title: 'Гарантия на шкафы 2 года', desc: 'Собственное производство и проверенные производители материалов дают возможность давать гарантию на продукцию.', link: 'Подробнее о производстве' },
      ]
    }
  }
}
</script>

<style lang="scss">
.wardrobe-service {
  &__items {
    margin-top: 22px;
    margin-bottom: -40px;
  }

  &__item {
    position: relative;
    margin-bottom: 40px;
  }

  &__num {
    position: absolute;
    right: -5px;
    bottom: -22px;
    font-weight: 900;
    font-size: 100px;
    color: $color-lightgray;
    z-index: -1;
  }

  &__title {
    font-weight: bold;
    font-size: 16px;
    line-height: (22/16);
  }

  &__desc {
    margin-top: 6px;
    font-weight: 300;
    font-size: 12px;
    line-height: (20/12);

    span {
      font-weight: 500;
    }
  }

  &__link {
    display: inline-block;
    margin-top: 10px;
    font-weight: bold;
    font-size: 13px;
    color: $color-green;
  }

  @include media(md) {
    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 48px;
      margin-bottom: -60px;
    }

    &__item {
      width: calc(50% - 40px);
      min-height: 130px;
      margin-bottom: 60px;
    }

    &__num {
      right: 35px;
      bottom: -35px;
      width: 150px;
    }

    &__desc {
      margin-top: 16px;
      margin-right: -2px;
    }
  }

  @include media(lg) {
    &__inner {
      display: flex;
    }

    &__heading {
      width: 350px;
    }

    &__items {
      flex: 1;
      margin-top: 5px;
      margin-left: 50px;
      margin-bottom: -55px;
    }

    &__item {
      width: calc(50% - 30px);
      min-height: 140px;
      margin-bottom: 55px;
    }

    &__num {
      right: 5px;
      bottom: -30px;
    }

    &__desc {
      padding-right: 40px;
    }

    &__link {
      margin-top: 20px;
    }
  }

  @include media(xl) {
    &__inner {
      margin: 0 80px;
    }

    &__items {
      margin-left: 130px;
      margin-right: 40px;
    }

    &__num {
      right: 25px;
    }

    &__desc {
      padding-right: 55px;
    }
  }
}
</style>
