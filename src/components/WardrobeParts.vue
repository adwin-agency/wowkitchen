<template>
  <div class="wardrobe-parts">
    <div class="container">
      <div class="wardrobe-parts__inner">
        <div class="wardrobe-parts__header">
          <h2 class="wardrobe-parts__heading">Поместится всё</h2>
          <p class="wardrobe-parts__desc">
            Разработаем и соберём уникальный шкаф, исходя из именно ваших потребностей, оснастив его всем необходимым для аккуратного хранения вещей.
          </p>
        </div>
        <div class="wardrobe-parts__area">
          <img
            src="@/assets/img/wardrobe-area.jpg"
            alt=""
            class="wardrobe-parts__img"
          >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="wardrobe-parts__item"
            :style="!$_media.sm && `left: ${item.coords[0]}%; top: ${item.coords[1]}%`"
          >
            <div
              class="wardrobe-parts__panel"
              :class="{'wardrobe-parts__panel_l': !$_media.sm && item.coords[0] > 50}"
            >
              <img
                :src="require(`@/assets/img/${item.image}`)"
                alt=""
                class="wardrobe-parts__panel-img"
              >
              <p class="wardrobe-parts__panel-title">{{item.title}}</p>
              <p class="wardrobe-parts__panel-desc">{{item.desc}}</p>
            </div>
            <div class="wardrobe-parts__circle"></div>   
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const items = [
  { coords: [30, 82], image: 'w-part-01.jpg', title: 'Выкатная корзина', desc: 'Эта сетчатая корзина обеспечивает отличный обзор содержимого, а благодаря циркуляции воздуха ваши вещи и белье всегда будут свежими' },
  { coords: [36, 56], image: 'w-part-02.jpg', title: 'Выдвижной ящик', desc: 'Вкладной ящик с интегрированной ручкой, т.е. его фасад не выступает за границы корпуса, что придаёт ему стильный внешний вид' },
  { coords: [31, 34], image: 'w-part-03.jpg', title: 'Пантограф', desc: 'Это вид выдвижной штанги, используется для хранения разнообразной верхней одежды — от пальто и курток, до рубашек и блузок' },
  { coords: [48, 22], image: 'w-part-04.jpg', title: 'Штанги', desc: 'Неотъемлемый элемент любого гардероба, позволяет аккуратно хранить одежду и облегчает поиски любимой рубашки в минуту опозданий' },
  { coords: [54, 58], image: 'w-part-05.jpg', title: 'Брючница', desc: 'Лучший способ хранить брюки в идеальном порядке и сохранить их опрятность' },
  { coords: [63, 43], image: 'w-part-06.jpg', title: 'Ящики для хранения', desc: 'Глубокие и вместительные ниши подойдут как для хранения одежды, так и других вещей' },
]

export default {
  name: 'WardrobeParts',
  data() {
    return {
      items: items
    }
  }
}
</script>

<style lang="scss">
.wardrobe-parts {
  $b: &;

  position: relative;
  padding: 40px 0 10px;
  background-color: $color-lightgray;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 135px;
    background-color: #fff;
  }

  .container {
    position: relative;
  }

  &__desc {
    margin-top: 16px;
    font-size: 14px;
    line-height: calc(26/14);
  }

  &__area {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

  &__img {
    display: none;
  }

  &__item {
    width: calc(50% - 5px);
    margin-bottom: 25px;
  }

  &__panel {
    &-img {
      border-radius: 4px;
      width: 100%;
    }

    &-title {
      margin-top: 2px;
      padding-right: 10px;
      font-weight: 500;
      font-size: 14px;
      line-height: calc(16/14);
    }

    &-desc {
      display: none;
    }
  }

  @include media(md) {
    padding-top: 82px;

    &__header {
      display: flex;
      flex: 1;
    }

    &__heading {
      margin-top: 4px;
    }

    &__desc {
      flex: 1;
      margin-top: 0;
      margin-left: 35px;
      max-width: 650px;
    }

    &__area {
      display: block;
      position: relative;
      margin: 48px -10px 0;
    }

    &__img {
      display: block;
      width: 100%;
    }

    &__item {
      position: absolute;
      width: auto;
      z-index: 0;
      transition: z-index 0.3s step-end;      

      &:hover {
        z-index: 1;
        transition: z-index 0.3s step-start;

        #{$b} {
          &__panel {
            opacity: 1;
            pointer-events: all;
          }
        }
      }
    }

    &__circle {
      display: flex;
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: $color-yellow;
      box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.46);

      &::after {
        content: "";
        margin: auto;
        width: 13px;
        height: 13px;
        border-radius: 50%;      
        background-color: #fff;
        box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.46);
      }
    }

    &__panel {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 435px;
      padding: 45px 50px 55px 62px;
      background-color: rgba(#fff, .8);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-50%);
      transition: opacity .3s ease;

      &_l {
        left: auto;
        right: 50%;
      }

      &-img {
        display: none;
      }

      &-title {
        font-weight: bold;
        font-size: 16px;
      }

      &-desc {
        display: block;
        margin-top: 10px;
        font-weight: 300;
        font-size: 12px;
        line-height: calc(20/12);
      }
    }
  }

  @include media(lg) {
    padding-top: 90px;

    &::before {
      height: 165px;
    }

    &__heading {
      margin-top: -2px;
    }

    &__desc {
      margin-left: 120px;
    }
  }

  @include media(xl) {
    padding-top: 118px;

    &::before {
      height: 135px;
    }

    &__inner {
      margin: 0 60px;
    }

    &__desc {
      margin-left: 160px;
    }

    &__area {
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>
