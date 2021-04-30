<template>
  <div class="projects">
    <AppIcon class="projects__bg-pattern" name="wow-pattern" />
    <div class="projects__heading">
      <div class="container">
        <h2>Индивидуальные проекты <br><span>для любых планировок</span></h2>
      </div>
    </div>
    <CardSlider
      :cards="cards"
      class="projects__slider"
    />
    <div class="projects__content">
      <div class="container">
        <p class="projects__desc">
          Мы создаём законченные проекты с нуля <span>по{{'\xa0'}}индивидуальным дизайн-проектам</span>, используя лишь экологичные материалы
          <AppIcon class="projects__desc-icon" name="leaf-filled" />
        </p>
      </div>      
    </div>
    <div class="projects__extras">
      <AppExtras
        title="Бесплатный замер у вас дома"
        desc="Бесплатный замер у вас дома"
      />
    </div>    
  </div>
</template>

<script>
import AppExtras from './base/AppExtras.vue'
import AppIcon from './base/AppIcon.vue'
import CardSlider from './CardSlider.vue'

export default {
  name: 'Projects',
  components: {
    AppExtras,
    AppIcon,
    CardSlider
  },
  data() {
    return {
      cards: [
        {title: 'Угловые кухни', icon: 'kit1'},
        {title: 'Прямые кухни', icon: 'kit2'},
        {title: 'П-образные', icon: 'kit3'}
      ]
    }
  }
}
</script>

<style lang="scss">
.projects {
  position: relative;
  padding: 34px 0 94px;
  background-color: #eaebf1;

  .container {
    position: relative;
  }

  &__slider {
    margin-top: 26px;
  }

  &__content {
    margin-top: 54px;
  }

  &__desc {
    text-align: center;
    font-weight: 300;
    font-size: 20px;
    line-height: (42/20);

    span {
      background-color: #fde93d;
      box-shadow: 0 0 0 7px #fde93d;
    }
  }

  &__desc-icon {
    display: inline;
    margin-left: -5px;
    margin-bottom: 9px;
    width: 16px;
    height: 16px;
    fill: #17ba95;
  }

  &__bg-pattern {
    position: absolute;
    left: 50%;
    bottom: -110px;
    width: 470px;
    height: 490px;
    fill: #fff;
    opacity: 0.2;
    transform: rotate(45deg);
  }

  &__extras {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: -40px;
    margin-left: -80px;
  }

  @include media(md) {
    padding: 56px 0;

    &__content {
      margin-top: 64px;
    }

    &__desc {
      max-width: 520px;
      text-align: left;
    }

    &__desc-icon {
      margin-left: 0;
      margin-bottom: 3px;
      width: 18px;
      height: 18px;
    }

    &__bg-pattern {
      width: 630px;
      height: 660px;
      bottom: -200px;
    }

    &__extras {
      position: absolute;
      left: auto;
      top: auto;
      right: 6px;
      bottom: -110px;
      margin: 0;
    }
  }

  @include media(lg) {
    padding: 64px 0 92px;

    &__content {
      margin-top: 90px;
    }

    &__desc {
      margin-left: 80px;
      max-width: 780px;
      font-size: 30px;
      line-height: (62/30);
    }

    &__desc-icon {
      margin-left: -9px;
      margin-bottom: 13px;
      width: 24px;
      height: 24px;
    }

    &__bg-pattern {
      width: 730px;
      height: 770px;
      margin-left: 150px;
    }

    &__extras {
      right: -32px;
      bottom: -45px;
    }
  }

  @include media(xl) {
    padding: 110px 0 162px;

    &__slider {
      margin-top: 70px;
    }

    &__content {
      margin-top: 200px;
    }

    &__extras {
      right: -44px;
      bottom: -65px;
    }
  }
}
</style>
