<template>
  <div class="equipment">
    <!-- <img
      src="@/assets/img/ny-toys-02.png"
      alt=""
      class="equipment__ny-bg"
    > -->
    <div class="container">
      <div class="equipment__inner">
        <div class="equipment__header">
          <h2 class="equipment__heading">Из чего делается ваша кухня</h2>
          <div class="equipment__info">
            <div class="equipment__partners">
              <img
                src="@/assets/img/logo-egger.svg"
                alt="Egger"
                class="equipment__partner"
              >
              <img
                src="@/assets/img/logo-kronospan.svg"
                alt="Kronospan"
                class="equipment__partner"
              >
              <img
                src="@/assets/img/partners-blum.svg"
                alt="Blum"
                class="equipment__partner"
              >
              <img
                src="@/assets/img/partners-boyard.svg"
                alt="Boyard"
                class="equipment__partner"
              >
              <img
                src="@/assets/img/partners-candy.svg"
                alt="Candy"
                class="equipment__partner"
              >
              <img
                src="@/assets/img/partners-lex.svg"
                alt="Lex"
                class="equipment__partner"
              >
            </div>
            <router-link
              :to="{name: 'materials'}"
              custom
              v-slot="{href, navigate}"
            >
              <AppButton
                :href="href"
                bordered
                title="Больше о материалах"
                class="equipment__btn"
                @click="navigate"
              />
            </router-link>
          </div>
        </div>
        <Swiper
          v-if="$_media.sm"
          class="equipment__slider"
          :slidesPerView="'auto'"
          :spaceBetween="10"
        >
          <SwiperSlide
            v-for="(card, index) in cards"
            :key="index"
            class="equipment__slide"
            v-slot="{ isActive }"
          >
            <EquipmentCard
              :active="isActive"
              :cardData="card"
            />
          </SwiperSlide>
        </Swiper>
        <div
          v-else
          class="equipment__cards"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="equipment__cards-col"
            :class="{'equipment__cards-col_lg': index === 0}"
          >
            <EquipmentCard
              :cardData="card"
              :lg="index === 0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import EquipmentCard from './EquipmentCard.vue'
import AppButton from './base/AppButton.vue'

const cards = [
  {
    features: [
      { icon: 'leaf', title: 'Экологичные' },
      { icon: 'umbrella', title: 'Водостойкие' }
    ],
    image: { mobile: 'eq-facade.jpg', desktop: 'eq-facade-v.jpg' },
    title: 'Фасады',
    company: 'company-egger.png',
    desc: 'Прочные и износостойкие из плит МДФ с ПВХ-плёнкой или пластиком от компании EGGER. Обладают повышенными показателями влагостойкости.'
  },
  {
    features: [
      { icon: 'star', title: 'Известные бренды' },
      { icon: 'clock', title: 'Долговечная' }
    ],
    image: { mobile: 'eq-furniture.jpg', desktop: 'eq-furniture-v.jpg' },
    title: 'Фурнитура',
    desc: 'от лидеров отечественного и мирового рынков: Blum, Hettich, Boyard'
  },
  {
    features: [
      { icon: 'thermometer', title: 'Жаропрочные' },
      { icon: 'texture', title: 'Текстурные' }
    ],
    image: { mobile: 'eq-table.jpg', desktop: 'eq-table-v.jpg' },
    title: 'Столешницы',
    desc: 'прочные утолщённые влагостойкие столешницы из ЛДСП устойчивы механическим повреждениям'
  },
  {
    features: [
      { icon: 'grid', title: 'Широкий выбор' },
      { icon: 'clock', title: 'Долговечная' }
    ],
    image: { mobile: 'eq-technic.jpg', desktop: 'eq-technic-v.jpg' },
    title: 'Техника',
    desc: 'разнообразный выбор от отечественных и зарубежных производителей'
  }
]

export default {
  name: 'Equipment',
  components: {
    AppButton,
    EquipmentCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      cards: cards
    }
  }
}
</script>

<style lang="scss">
.equipment {
  position: relative;
  padding: 40px 0 30px;
  background-color: $color-lightgray;

  &__ny-bg {
    display: none;
  }

  &__info {
    margin-top: 12px;
  }

  &__partners {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 30px auto 0;
    max-width: 650px;
  }

  &__partner {
    width: 110px;
    margin: 0 20px 20px;
  }

  &__btn {
    margin-top: 12px;
    width: 100%;
  }

  &__slider {
    margin-top: 28px;
    overflow: visible;
  }

  &__slide {
    width: calc(100% - 60px);
  }

  @include media(xxs) {
    &__partner {
      width: 130px;
    }
  }

  @include media(sm) {
    &__ny-bg {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
    }
  }

  @include media(md) {
    position: relative;
    padding: 26px 0 0;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100px;
      background-color: #fff;
    }

    &__ny-bg {
      width: 300px;
    }

    &__inner {
      margin: 0 auto;
      max-width: 780px;
    }

    &__header {
      display: flex;
    }

    &__heading {
      width: 190px;
    }

    &__info {
      margin-top: 0;
      flex: 1;
    }

    &__partners {
      justify-content: flex-start;
      margin-top: 15px;
      max-width: none;
    }

    &__partner {
      margin: 0 30px 20px 10px;
      width: 130px;
    }

    &__btn {
      margin-top: 0;
    }

    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 30px -10px 0;
    }

    &__cards-col {
      display: flex;
      width: 50%;
      padding: 0 10px;
      margin-bottom: 20px;
    }

    &__btn {
      width: auto;
      min-width: 255px;
    }
  }

  @include media(lg) {
    padding: 40px 0 0;

    &::after {
      height: 130px;
    }

    .container {
      position: relative;
      margin-left: 0;
      padding-left: 0;
      max-width: calc(50% + #{calc($container-max-width-lg / 2)});
    }

    &__inner {
      margin: 0;
      max-width: none;

      &::after {
        margin-top: -125px;
      }
    }

    &__header {
      margin-left: 34%;
      padding-left: 62px;
    }

    &__heading {
      width: 220px;
    }

    &__info {
      width: 64%;
    }

    &__cards {
      flex-wrap: nowrap;
      margin-top: 34px;
    }

    &__cards-col {
      flex: 1;
      width: auto;

      &_lg {
        flex: 0 34%;
        margin-top: -300px;
      }
    }
  }

  @include media(xl) {
    padding-top: 64px;

    &::after {
      height: 110px;
    }

    &__ny-bg {
      width: 562px;
    }

    .container {
      max-width: calc(50% + #{calc($container-max-width-xl / 2)});
    }

    &__inner {
      &::after {
        margin-top: -115px;
      }
    }

    &__header {
      margin-left: 38.5%;
      padding-left: 30px;
    }

    &__info {
      display: flex;
      // flex-wrap: wrap;
      align-items: center;
      width: 69.5%;
    }

    &__partners {
      justify-content: center;
      margin-top: 5px;
      // margin-left: 0;
      // margin-right: calc(100% - 530px);
      // width: 530px;
    }

    &__partner {
      width: 120px;
    }

    &__cards {
      margin: 64px -35px 0;
    }

    &__cards-col {
      padding: 0 35px;

      &_lg {
        margin-top: -330px;
        flex-basis: 38.5%;
      }
    }
  }
}
</style>
