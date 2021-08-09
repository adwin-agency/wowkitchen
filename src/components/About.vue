<template>
  <div class="about">
    <div class="about__main">
      <div class="container container_side-fixed">
        <p class="about__title">1993 год – мы появились на свет</p>
        <p class="about__desc">История компании стартовала одновременно с историей новой России. Именно тогда, два хороших друга <b>Сергей Баширов и Александр Соколов</b>, вернувшись из небольшой, но насыщенной поездки по Великобритании, решили открыть свой бизнес. Во время путешествия по Туманному Альбиону они нередко останавливались в гостях у своих приятелей и обратили внимание на то, как продумано и качественно были выполнены их кухонные гарнитуры. Советские кухни в разы проигрывали по функциональности и эргономичности (да и слов тогда таких никто не знал), а уж про дизайн и говорить было нечего.</p>
        <div class="about__manage">
          <div class="about__box">
            <img
              src=""
              alt
              class="about__image"
            >
          </div>
          <p class="about__quote">
            <AppIcon
              name="quotes"
              class="about__quote-icon"
            />
            Забота о клиентах, отслеживание трендов и профессионализм сотрудников позволили нашей компании уверенно ворваться на рынок и достаточно быстро найти своего счастливого клиента.
          </p>
        </div>
        <p class="about__desc">Свежеиспеченные партнеры по бизнесу были новичками во всем, что касается изготовления кухонных гарнитуров, однако регулярные поездки в Европу на мастер-классы и посещение там самых передовых кухонных производств позволили открыть собственное производство и сформировать костяк команды, которая была готова и в России предложить клиентам гарнитуры высокого качества. </p>
      </div>
    </div>
    <div class="about__production">
      <div class="container container_side-fixed">
        <p class="about__title">Никаких больше шоу-румов </p>
        <p class="about__desc">Стремление быть первыми оказалось заложено в генетическом коде нашей компании – именно поэтому в какой-то момент мы приняли решение отказаться от шоу-румов и стали первым интернет-магазином, который специализируется исключительно на кухнях. Это позволило снизить стоимость гарнитуров, не теряя при этом в качестве. Скорее наоборот – сосредоточенность исключительно на собственном производстве и установке гарнитуров нашим клиентам позволило вывести итоговый результат на новый уровень. </p>
        <AppExtras
          title="Название"
          desc="Описание"
          class="about__extras"
        />
        <p class="about__title">Наши цеха – наша гордость!</p>
        <p class="about__desc">Наш цех оснащен самым передовым оборудованием, которое отвечает всем стандартам качества. <br><br>Все наши работники регулярно посещают зарубежные конференции и мастер-классы, чтобы всегда держать планку на производстве и отслеживать все модные тенденции кухонного мира</p>
      </div>
    </div>
    <div class="about__gallery">
      <div class="container container_side-fixed">
        <Swiper
          :space-between="$_media.sm ? 20 : $_media.md ? 40 : 50"
          watch-slides-visibility
          loop
          :looped-slides="2"
          navigation
          scrollbar
          class="about__slider"
        >
          <SwiperSlide
            v-for="n in 3"
            :key="n"
            class="about__slide"
          >
            <img
              :src="require(`@/assets/img/produce${n}.jpg`)"
              alt
              class="about__slide-image"
            >
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="about__partners">
      <div class="container container_side-fixed">
        <p class="about__title">Надежные поставщики со всего <br>мира – нашего друзья</p>
        <p class="about__desc">Мы сотрудничаем только с проверенными и лучшими в своих направлениях поставщиками. Прямое взаимодействие с ними позволяет снизить стоимость наших гарнитуров (нет посредников – нет проблем), а также быть уверенными в отличном качество используемых материалов. </p>
        <div class="about__partners-list">
          <img
            src="@/assets/img/logo-egger.svg"
            alt="Egger"
            class="about__partner"
          >
          <img
            src="@/assets/img/logo-kronospan.svg"
            alt="Kronospan"
            class="about__partner"
          >
          <img
            src="@/assets/img/partners-lex.svg"
            alt="Lex"
            class="about__partner"
          >
          <img
            src="@/assets/img/partners-candy.svg"
            alt="Candy"
            class="about__partner"
          >
          <img
            src="@/assets/img/partners-boyard.svg"
            alt="Boyard"
            class="about__partner"
          >
          <img
            src="@/assets/img/partners-blum.svg"
            alt="Blum"
            class="about__partner"
          >
        </div>
      </div>
    </div>
    <Interesting />
  </div>
</template>

<script>
import SwiperCore, { Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppExtras from './base/AppExtras.vue'
import AppIcon from './base/AppIcon.vue'
import Interesting from './Interesting.vue'

SwiperCore.use([Navigation, Scrollbar])

export default {
  name: 'About',
  components: {
    Swiper,
    SwiperSlide,
    AppExtras,
    AppIcon,
    Interesting
  }
}
</script>

<style lang="scss">
.about {
  $b: &;

  &__main {
    padding: 40px 0;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    line-height: (22/18);
  }

  &__desc {
    margin-top: 10px;
    font-size: 14px;
    line-height: (30/14);
  }

  &__manage {
    margin-top: 20px;
  }

  &__box {
    padding-top: 58%;
    border-bottom-right-radius: 120px;
    background-color: #fec507;
  }

  &__quote {
    position: relative;
    margin-top: 10px;
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    line-height: (26/14);

    &-icon {
      float: right;
      margin: -80px -50px 0 0;
      width: 136px;
      height: 108px;
      fill: $color-lightgray;
      opacity: 0.5;
      transform: rotate(180deg);
    }
  }

  &__manage + &__desc {
    margin-top: 20px;
  }

  &__production {
    position: relative;
    padding: 40px 0;
    background-color: $color-lightgray;
  }

  &__extras {
    margin: 20px auto 40px;
  }

  &__gallery {
    position: relative;
    background-color: $color-lightgray;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 70px;
      background-color: #fff;
    }
  }

  &__slider {
    position: relative;
    padding-right: 60px;
    padding-bottom: 12px;
    overflow: visible;

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }

    .swiper-scrollbar {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }

  &__slide {
    position: relative;
    padding-top: 56%;

    &-image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__partners {
    padding: 40px 0;

    &-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;
      margin-right: -30px;
      margin-bottom: -30px;
    }
  }

  &__partner {
    margin: 0 30px 30px 0;
    width: 135px;
  }

  @include media(md) {
    &__main,
    &__production,
    &__partners {
      .container {
        max-width: 820px;
      }
    }

    &__main {
      padding: 60px 0;
    }

    &__title {
      margin-top: 60px;
      font-size: 24px;
      line-height: (32/24);

      &:first-child {
        margin-top: 0;
      }
    }

    &__desc {
      margin-top: 30px;
    }

    &__manage {
      position: relative;
      margin-top: 50px;
    }

    &__manage + &__desc {
      margin-top: 50px;
    }

    &__box {
      height: 450px;
      padding-top: 0;
    }

    &__quote {
      position: absolute;
      top: 40%;
      right: -80px;
      margin-top: 0;
      width: 300px;
      font-size: 18px;
      line-height: (30/18);
      transform: translateY(-50%);

      &-icon {
        position: absolute;
        left: -65px;
        top: -35px;
        float: none;
        margin: 0;
        z-index: -1;
      }
    }

    &__production {
      padding: 60px 0;

      #{$b}__title,
      #{$b}__desc {
        max-width: calc(76vw - 360px);
      }
    }

    &__extras {
      position: absolute;
      top: 270px;
      right: -20px;
      z-index: 2;
    }

    &__gallery {
      .container {
        padding-right: 0;
        max-width: none;
      }
    }

    &__slider {
      padding-right: 270px;
      padding-bottom: 0;

      .swiper-button-prev,
      .swiper-button-next {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
      }

      .swiper-button-prev {
        left: 20px;
      }

      .swiper-button-next {
        right: 140px;
      }

      .swiper-scrollbar {
        display: none;
      }
    }

    &__slide {
      transition: opacity 0.3s ease;

      &:not(.swiper-slide-visible) {
        opacity: 0.2;
        pointer-events: none;
      }
    }

    &__partners {
      padding: 60px 0;

      &-list {
        margin-right: -40px;
      }
    }

    &__partner {
      margin-right: 40px;
      max-width: calc(25% - 40px);
    }
  }

  @include media(lg) {
    &__main,
    &__production,
    &__partners {
      .container {
        max-width: 980px;
      }
    }

    &__desc {
      font-size: 16px;
      line-height: (32/16);
    }

    &__manage {
      max-width: calc(75vw - 230px);
    }

    &__quote {
      top: 50%;
      right: -130px;
      width: 376px;      
      font-size: 20px;
      line-height: (30/20);

      &-icon {
        left: -55px;
        top: -70px;
      }
    }

    &__production {
      #{$b} {
        &__title,
        &__desc {
          max-width: calc(75vw - 460px);
        }
      }
    }

    &__slider {
      padding-right: 340px;
    }

    &__partners-list {
      margin-right: -54px;
    }

    &__partner {
      margin-right: 54px;
      width: 155px;
      max-width: calc(25% - 54px);
    }
  }

  @include media(xl) {
    &__main,
    &__production,
    &__partners {
      .container {
        max-width: 1320px;
      }
    }

    &__main {
      padding: 70px 0 80px;
    }

    &__desc {
      max-width: 930px;
    }

    &__manage {
      max-width: none;
    }

    &__quote {
      right: -100px;
      width: 440px;
      font-size: 22px;
      line-height: (34/22);
    }

    &__production {
      padding: 80px 0;

      #{$b} {
        &__title,
        &__desc {
          max-width: calc(75vw - 560px);
        }
      }
    }

    &__slider {
      padding-right: 480px;

      .swiper-button-next {
        right: 300px;
      }
    }

    &__partners-list {
      margin-right: -74px;
    }

    &__partner {
      margin-right: 74px;
      max-width: calc(25% - 74px);
    }
  }
}
</style>
