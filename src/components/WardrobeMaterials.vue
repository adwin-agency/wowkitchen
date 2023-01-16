<template>
  <div class="wardrobe-materials">
    <div class="container">
      <div class="wardrobe-materials__inner">
        <h2 class="wardrobe-materials__heading">Только лучшие материалы для вашего шкафа</h2>
        <Swiper
          slides-per-view="auto"
          :space-between="$_media.sm ? 10 : 60"
          loop
          :looped-slide="2"
          navigation
          class="wardrobe-materials__slider"
        >
          <SwiperSlide
            v-for="(slide, index) in slides"
            :key="index"
            class="wardrobe-materials__slide"
          >
            <div class="wardrobe-materials__image">
              <img :src="require(`@/assets/img/${slide.image}`)" alt="">
              <AppIcon
                :name="slide.num.icon"
                class="wardrobe-materials__num"
                :viewBox="slide.num.viewBox"
              />
            </div>
            <div class="wardrobe-materials__content">
              <p class="wardrobe-materials__title">{{slide.title}}</p>
              <p class="wardrobe-materials__desc">{{slide.desc}}</p>
              <div
                v-if="slide.examples"
                class="wardrobe-materials__examples"
              >
                <span
                  v-for="(example, index) in slide.examples"
                  :key="index"
                  class="wardrobe-materials__example"
                >
                  <img :src="require(`@/assets/img/${example}`)" alt="">
                </span>
                <span
                  v-if="slide.count"
                  class="wardrobe-materials__count"
                >
                  <span>{{slide.count}}+</span><br>
                  вариантов
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppIcon from './base/AppIcon.vue'

SwiperCore.use([Navigation])

export default {
  name: 'WardrobeMaterials',
  components: {
    Swiper,
    SwiperSlide,
    AppIcon
  },
  data() {
    return {
      slides: [
        { num: { icon: 'dotted-01', viewBox: '0 0 101.594 73.87' }, image: 'materials-1.jpg', title: 'Корпус из ДСП класса безопасности Е1', desc: 'Отличатся отличной термо-, влаго- и паростойкостью, высокой прочностью, устойчив к воздействию химических средств, экологичен и богат на самые разные расцветки', examples: ['w-material-01.png', 'w-material-02.png', 'w-material-03.png', 'w-material-04.png', 'w-material-05.png', 'w-material-06.png', 'w-material-07.png'], count: 15 },
        { num: { icon: 'dotted-02', viewBox: '0 0 121.129 72.22' }, image: 'materials-2.jpg', title: 'Фурнитура и профили', desc: 'Алюминиевый профиль в отличие от стального обеспечивает плавное открывание и бесшумный ход дверей купе. Нижняя направляющая оснащена стопорами для каждой двери, они не будут откатываться.' },
        { num: {icon: 'dotted-03', viewBox: '0 0 126.218 75.18' }, image: 'materials-3.jpg', title: 'Фасады', desc: 'Широкий выбор материалов и возможность их комбинировать даст вам возможность создать свой уникальный дизайн. Отдельно стоит отметить безопасность и экологичность всех используемых материалов. ЛДСП имеет класс эмиссии, допустимый даже в медицинских учреждениях. А используемые зеркала имеют специальное антивандальное покрытие: даже при разбитии, оно не осыпается, а остаётся на плёнке.', examples: ['facade-01.jpg', 'facade-02.jpg', 'facade-03.jpg'], count: 200 },
      ]
    }
  }
}
</script>

<style lang="scss">
.wardrobe-materials {
  &__slider {
    margin: 32px (-$container-padding) 0;
    overflow: visible;

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  &__slide {
    width: calc(100% - 60px);
  }

  &__image {
    position: relative;
    padding-top: 100%;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__num {
    position: absolute;
    left: 22px;
    top: 22px;
    height: 75px;
  }

  &__content {
    margin-top: 14px;
    padding: 0 $container-padding;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    line-height: calc(22/18);
  }

  &__desc {
    margin-top: 12px;
    font-size: 14px;
    line-height: calc(24/14);
  }

  &__examples {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 26px;
    padding-right: 40px;
  }

  &__example {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__count {
    font-size: 12px;
    margin-bottom: 10px;

    span {
      font-weight: bold;
      font-size: 18px;
    }
  }

  @include media(md) {
    &__heading {
      max-width: 400px;
    }

    &__slider {
      margin: 40px 0 0;
      max-width: calc(50% + 50vw - 50px);

      .swiper-button-prev,
      .swiper-button-next {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
      }

      .swiper-button-prev {
        left: 30px;
      }

      .swiper-button-next {
        right: -20px;
      }
    }

    &__slide {
      display: flex;
      width: calc(100% - 140px);
      height: auto;
    }

    &__image {
      width: 50%;
      height: auto;
      min-height: 500px;
      padding-top: 0;
    }

    &__num {
      left: 40px;
      top: 40px;
      height: 120px;
    }

    &__content {
      flex: 1;
      margin-top: 0;
      padding: 65px 0 60px 45px;
    }

    &__title {
      line-height: calc(28/18);
    }

    &__examples {
      margin-top: 40px;
      padding-right: 0;
    }

    &__example {
      width: 60px;
      height: 60px;
      margin-right: 12px;
      margin-bottom: 12px;
    }

    &__count {
      margin-left: 10px;
      margin-bottom: 12px;
      font-size: 14px;

      span {
        font-size: 18px;
      }
    }
  }

  @include media(lg) {
    &__heading {
      max-width: 500px;
    }

    &__slider {
      max-width: none;
      
      .swiper-button-next {
        right: 78px;
      }
    }

    &__slide {
      width: calc(100% - 280px);
    }

    &__image {
      width: 41%;
    }

    &__content {
      padding: 88px 30px 60px 95px;
    }

    &__title {
      max-width: 250px;
    }

    &__examples {
      margin-top: 75px;
      max-width: 350px;
    }
  }

  @include media(xl) {
    &__inner {
      margin: 0 80px;
    }

    &__slider {
      margin-top: 50px;
    }

    &__slide {
      width: calc(100% - 290px);
    }

    &__image {
      min-height: 600px;
    }

    &__content {
      padding: 120px 30px 60px 95px;
    }
  }
}
</style>
