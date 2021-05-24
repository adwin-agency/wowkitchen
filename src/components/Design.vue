<template>
  <div class="design">
    <div class="container">
      <div class="design__inner">
        <div class="design__row">
          <div class="design__main">
            <h2 class="design__heading"><span>Бесплатный замер</span> и{{'\xa0'}}консультация <br>дизайнера <span>у вас дома</span></h2>
            <div class="design__content">
              <AppIcon class="design__shape design__shape_circle-white" viewBox="0 0 241 241" name="shape-14" />
              <AppIcon class="design__shape design__shape_circle-white-2" viewBox="0 0 223 223" name="shape-17" />
              <AppIcon class="design__shape design__shape_triangle" viewBox="0 0 69 60" name="shape-15" />
              <AppIcon class="design__shape design__shape_circle-pink" viewBox="0 0 47 47" name="shape-16" />            
              <AppIcon class="design__shape design__shape_triangle-2" viewBox="0 0 58 55" name="shape-18" />
              <AppIcon class="design__shape design__shape_zigzag" viewBox="0 0 128 120" name="shape-19" />
              <p class="design__desc">Вы знаете различия между шкафом для прихожей и для гостиной?</p>
              <p class="design__desc">А особенности кухонных гарнитуров для студий?</p>
              <p class="design__note">Доверьтесь профессионалам: наши сотрудники проконсультируют вас по всем вопросам</p>
              <AppButton
                class="design__btn"
                type="button"
                title="Пригласить дизайнера"
                color="yellow"
              />
            </div>
            <img src="@/assets/img/form-pic.png" alt="" class="design__image">
          </div>
          <DesignForm class="design__form" />
        </div>
        <div class="design__features">
          <p class="design__slogan">Новая кухня: <br><span>с нами - легко!</span></p>
          <p class="design__feature">Замер и демонстрация <br>образцов на месте</p>
          <p class="design__feature">3д-проект гарнитура <br>в интерьере</p>
          <p class="design__feature">Функциональные <br>решения и планировки</p>
          <p class="design__feature">Доставка и сборка в <br>удобный вам день</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import DesignForm from './DesignForm.vue'

export default {
  name: 'Design',
  components: {
    AppIcon,
    AppButton,
    DesignForm
  }
}
</script>

<style lang="scss">
.design {
  padding: 30px 0;
  background-color: $color-green;
  overflow: hidden;

  &__main {
    position: relative;
    z-index: 1;
  }

  &__heading {
    font-size: 24px;
    line-height: (32/24);

    span {
      color: $color-lightgray;
    }
  }  

  &__content {
    margin-top: 24px;
  }

  &__shape {
    position: absolute;
    z-index: -1;

    &_circle-white {
      left: -75px;
      bottom: -20px;
      width: 200px;
    }

    &_circle-white-2 {
      top: -2px;
      right: -75px;
      width: 200px;
    }

    &_triangle {
      top: -15px;
      right: -30px;
      width: 48px;
      transform: rotate(25deg);
    }

    &_triangle-2 {
      width: 0;
    }

    &_circle-pink {
      top: 18px;
      right: -2px;
      width: 22px; 
    }

    &_zigzag {
      right: -5px;
      bottom: 105px;
      width: 80px;
      fill: #aca8c3;
      transform: rotate(190deg);
    }
  }

  &__desc {
    display: none;
  }

  &__note {
    padding-right: 100px;
    font-weight: 600;
    font-size: 16px;
    line-height: (24/16);
    color: $color-lightgray;
  }

  &__btn {
    display: block;
    margin: 40px auto 0;
    width: 100%;
    max-width: 300px;
  }

  &__image {
    display: none;
  }

  &__form {
    display: none;
  }

  &__features {
    display: none;
  }

  @include media(md) {
    padding: 45px 0 60px;
    background-color: transparent;

    &__row {
      display: flex;
      align-items: flex-end;
    }

    &__main {
      flex: 1;
      margin-top: 10px;
    }

    &__heading {
      padding-right: 30px;
      font-size: 22px;
      line-height: (28/22);
      
      span {
        color: $color-green;
      }
    }

    &__content {
      position: relative;
      margin-top: 30px;
      border-top-left-radius: 50px;
      padding: 30px 40px 55px 260px;
      background-color: $color-green;
      overflow: hidden;
      z-index: 1;
    }

    &__shape {
      &_circle-white {
        top: 24px;
        left: -55px;
        bottom: auto;
      }

      &_circle-white-2 {
        right: -115px;
      }

      &_triangle {
        top: 95px;
        left: 20px;
        right: auto;
      }

      &_circle-pink {
        top: 38px;
        left: 72px;
      }

      &_zigzag {
        right: -45px;
        bottom: 0;
        opacity: 0.2;
        fill: #fff;
      }
    }
    
    &__desc {
      display: block;
      font-weight: bold;
      font-size: 14px;
      line-height: (22/14);
      color: $color-lightgray;

      & + & {
        margin-top: 10px;
      }
    }

    &__note {
      margin-top: 30px;
      margin-left: 20px;
      border-radius: 50px 0 50px 0;
      padding: 20px 20px 20px 40px;
      font-size: 11px;
      line-height: (17/11);
      color: $color-primary;
      background-color: $color-yellow;
      box-shadow: 0px 8px 19px 0px rgba(53, 53, 53, 0.16);
    }

    &__btn {
      display: none;
    }

    &__image {
      display: block;
      position: absolute;
      left: -10px;
      bottom: 0;
      width: 332px;
      z-index: 1;
    }

    &__form {
      display: block;
      width: 360px;
    }

    &__features {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
    }

    &__slogan {
      margin-right: 5px;
      font-weight: bold;
      font-size: 22px;
      line-height: (26/22);

      span {
        color: $color-green;
      }
    }

    &__feature {
      margin-top: 4px;
      font-weight: 500;
      font-size: 13px;
      line-height: (20/13);
    }
  }

  @include media(lg) {
    padding: 45px 0 210px;

    &__inner {
      margin: 0 auto;
      max-width: 1100px;
    }

    &__main {
      margin-top: 0;
    }

    &__heading {
      font-size: 26px;
      line-height: (34/26);
    }

    &__content {
      margin-top: 45px;
      padding: 40px 120px 55px 320px;
    }

    &__shape {
      &_circle-white {
        left: 30px;
      }

      &_circle-white-2 {
        top: -20px;
        right: -100px;
      }

      &_triangle {
        left: 30px;
      }

      &_triangle-2 {
        top: 27px;
        right: 50px;
        width: 56px;
        fill: $color-yellow;
      }

      &_circle-pink {
        left: 80px;
      }

      &_zigzag {
        right: 15px;
      }
    }

    &__note {
      margin-top: 40px;
      margin-left: 0;
      padding: 20px 30px 20px 35px;
    }

    &__image {
      left: -25px;
      width: 372px;
    }

    &__form {
      margin-top: 15px;
      width: 380px;
    }

    &__features {
      margin-top: 26px;
      padding-right: 20px;
    }

    &__slogan {
      margin-right: 65px;
    }
  }

  @include media(xl) {
    padding: 45px 0 180px;
    
    &__content {
      margin-top: 55px;
      padding: 60px 80px 65px 325px;
    }

    &__desc {
      padding-right: 35px;
    }

    &__note {
      margin-left: 25px;
      padding: 20px 30px 20px 40px;
    }

    &__image {
      left: -20px;
      width: 410px;
    }

    &__form {
      margin-top: 25px;
    }

    &__features {
      margin-top: 50px;
      padding-right: 15px;
    }

    &__slogan {
      margin-right: 70px;
    }
  }
}
</style>
