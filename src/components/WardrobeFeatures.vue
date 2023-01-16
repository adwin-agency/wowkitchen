<template>
  <div class="wardrobe-features">
    <img
      v-if="!$_media.sm"
      src="@/assets/img/wardrobe-features.jpg"
      alt=""
      class="wardrobe-features__image"
    >
    <div class="wardrobe-features__content">
      <div class="container">
        <div class="wardrobe-features__inner">
          <h2 class="wardrobe-features__heading">Особенности <br>устройства</h2>
          <p class="wardrobe-features__desc">Все произведённые нами шкафы не только функциональны и эстетичны, но и безопасны, а так же практичны в использовании.</p>
          <p class="wardrobe-features__desc">Мы уже упоминали об экологичности материалов, а сейчас хотим рассказать про удобство пользования: механизм шкафов-купе прочный и тихий.</p>
          <div class="wardrobe-features__items">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="wardrobe-features__item"
              :style="!$_media.sm && `left: ${item.coords[0]}%; top: ${item.coords[1]}%`"
            >
              <div
                v-if="$_media.sm"
                class="wardrobe-features__item-img"
              >
                <img
                  :src="require(`@/assets/img/${item.image}`)"
                  alt=""
                >
              </div>
              <div
                class="wardrobe-features__panel"
                :class="{'wardrobe-features__panel_l': item.coords[0] > 50}"
              >
                <p class="wardrobe-features__panel-title">{{item.title}}</p>
                <p
                  v-if="!$_media.sm"
                  class="wardrobe-features__panel-desc"
                >
                  {{item.desc}}
                </p>
              </div>
              <span
                v-if="!$_media.sm"
                class="wardrobe-features__circle"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const items = [
  { coords: [47, 38], image: 'w-feature-01.jpg', title: 'Задняя стенка из МДФ', desc: 'придаёт конструкции дополнительную жёсткость и не деформируется со временем' },
  { coords: [40, 74], image: 'w-feature-02.jpg', title: 'Класс Эмиссии ЛДСП Е1', desc: 'низкое содержание смол и формальдегидов, его используют в медучреждения и детских садах' },
  { coords: [41, 26], image: 'w-feature-03.jpg', title: 'Пластиковая кромка ABS 2мм', desc: 'препятствует попаданию влаги , а также делает торцы изделия более ударопрочными' },
  {
    coords: [60, 60],
    image: 'w-feature-04.jpg',
    title: 'Бельгийское зеркало AGC Mirox 3G',
    desc: 'третье поколение зеркал, которое покрыто специальной антивандальной пленкой (при разбитии зеркало не осыпается, а остается на пленке), вы можете быть спокойны за ваших близких'
  },
  { coords: [73, 89], image: 'w-feature-05.jpg', title: 'Алюминиевый профиль', desc: 'придает шкафу легкий и плавный ход, также защищает от сколов и делает конструкцию более жесткой и надежной' },
  { coords: [88, 45], image: 'w-feature-06.jpg', title: 'Буферная лента «Шлегель»', desc: 'смягчает удар при закрытии, а также препятствует попаданию пыли' }
]

export default {
  name: 'WardrobeFeatures',
  data() {
    return {
      items: items
    }
  }
}
</script>

<style lang="scss">
.wardrobe-features {
  $b: &;

  &__desc {
    margin-top: 15px;
    font-weight: 500;
    font-size: 14px;
    line-height: calc(26/14);

    & + & {
      margin-top: 10px;
    }
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 34px;
  }

  &__item {
    width: calc(50% - 5px);
    margin-bottom: 20px;

    &-img {
      position: relative;
      padding-top: 75%;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
      }
    }
  }

  &__panel {
    margin-top: 2px;

    &-title {
      padding-right: 5px;
      font-weight: 500;
      font-size: 14px;
      line-height: calc(16/14);
    }
  }

  @include media(md) {
    position: relative;
    min-height: 400px;

    &__image {
      width: 100%;
    }

    &__content {
      display: flex;
      align-items: center;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 50px 0 30px;
    }

    &__inner {
      max-width: 320px;
    }

    &__desc {
      margin-top: 35px;
    }

    &__items {
      margin: 0;
    }

    &__item {
      position: absolute;
      width: 0;
      height: 0;
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

    &__panel {
      position: absolute;
      left: 0;
      top: 0;
      margin-top: 0;
      width: 366px;
      padding: 50px;
      background-color: rgba(#fff, 0.8);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;

      &_l {
        left: auto;
        right: 0;
      }

      &-title {
        padding-right: 0;
        font-weight: bold;
        font-size: 16px;
      }

      &-desc {
        margin-top: 15px;
        font-weight: 300;
        font-size: 12px;
        line-height: calc(20/12);
      }
    }

    &__circle {
      display: flex;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: $color-yellow;
      box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.46);
      transform: translate(-50%, -50%);

      &::after {
        content: '';
        margin: auto;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.46);
      }
    }
  }

  @include media(lg) {
    min-height: 500px;

    &__content {
      padding: 50px 0 120px;
    }

    &__inner {
      max-width: 450px;
    }

    &__desc {
      margin-top: 50px;
    }
  }

  @include media(xl) {
    &__inner {
      margin-left: 80px;
    }
  }
}
</style>