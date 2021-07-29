<template>
  <div class="sizing-main">
    <div class="sizing-main__pattern"></div>
    <div class="sizing-main__pattern"></div>
    <div class="sizing-main__pattern"></div>
    <div class="container">
      <h2 class="sizing-main__heading">Как происходит замер и что в него включено? <br>Всё очень просто.</h2>
      <div class="sizing-main__steps">
        <SizingStep
          v-for="(step, index) in steps"
          :key="index"
          :stepData="step"
          class="sizing-main__step"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SizingStep from './SizingStep.vue'

const steps = [
  {
    num: '1',
    title: 'Вы оставляете заявку на сайте',
    desc: 'После чего в кратчайшие сроки вам перезванивает наш менеджер и согласовывает с вами время приезда дизайнера. Выезд дизайнера на дом бесплатен!',
    btn: { title: 'Пригласить дизайнера', modalName: 'designer' },
    stat: { num: '0', unit: '₽', title: 'Стоимость выезда замерщика' }
  },
  {
    num: '2',
    title: 'Консультация с дизайнером и замер помещения',
    desc: 'В назначенный день и час к вам приедет наш дизайнер с волшебным чемоданом и современным ноутбуком под мышкой. Прямо на месте он выслушает ваши пожелания, оценит масштаб и замерит помещение с точностью до миллиметра. В нашей компании работают сотрудники с характеристикой «глаз-алмаз»!',
    stat: { icon: 'clouds', title: 'все ваши пожелания будут услышаны' }
  },
  {
    num: '3',
    title: 'Подбор материалов и планировки',
    desc: [
      'Пока наш сотрудник будет измерять кухню, вы можете изучить содержимое его чемодана – там находятся образцы цветов и фактур. Все можно потрогать и примерить!',
      'Определившись с материалом, из которого будет состоять ваша кухня, вместе с дизайнером вы выберете планировку будущего гарнитура. Вариантов масса, но будьте уверены – наш сотрудник выберет для вашего помещения самый оптимальный!'
    ],
    stat: { num: '250', unit: '+', title: 'цветовых вариаций для вашего интерьера' }
  },
  {
    num: '4',
    title: '3D-проект будущего изделия в интерьере',
    desc: 'Чтобы ответ на этот вопрос вызывал только радость и удовлетворение, наш дизайнер создаст в специальной программе 3D-проект вашего гарнитура. И вы увидите, как будет выглядеть ваша кухня уже в самое ближайшее время.',
    stat: { num: '10', unit: 'мин.', title: 'займёт создание 3D-проекта, а результат налицо' }
  },
  {
    num: '5',
    title: 'Расчёт стоимости проекта',
    desc: 'Определившись с планировкой, модулями, техникой и цветами, можно наконец приступить к расчёту стоимости. Наши дизайнеры предложат на выбор 3 варианта сметы, подходящие для любого бюджета.',
    stat: { num: '3', title: 'варианта стоимости для вашего проекта' }
  },
  {
    num: '6',
    title: 'Заключение договора и внесение предоплаты',
    desc: 'Определив, какой из вариантов стоимости вас устроит, мы можем заключить договор. И после внесения предоплаты, запустить процесс изготовления гарнитура или шкафа. Наш дизайнер подробно расскажет вам об условиях и поможет выбрать удобный способ оплаты.',
    stat: { num: '25', unit: '%', title: 'минимальная сумма предоплаты' }
  }
]

export default {
  name: 'SizingMain',
  components: {
    SizingStep
  },
  data() {
    return {
      steps: steps
    }
  }
}
</script>

<style lang="scss">
.sizing-main {
  position: relative;
  padding: 50px 0 60px;

  &__pattern {
    content: '';
    position: absolute;
    left: -50px;
    top: -50px;
    width: 300px;
    height: 450px;
    background-image: url('~@/assets/img/wow-pattern.svg');
    background-size: 100% 100%;
    background-repeat: repeat-y;
    opacity: 0.3;
    z-index: -1;

    &:nth-child(2) {
      top: 345px;
    }

    &:nth-child(3) {
      top: 745px;
    }
  }

  &__steps {
    margin-top: 50px;
  }

  &__step {
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @include media(md) {
    padding: 100px 0 130px;

    &__steps {
      margin-top: 80px;
    }

    &__step {
      margin-bottom: 80px;
    }
  }

  @include media(lg) {
    padding: 135px 0;

    &__pattern {
      width: 500px;
      height: 750px;

      &:nth-child(2) {
        top: 600px;
      }

      &:nth-child(3) {
        top: 1250px;
      }
    }

    &__steps {
      margin: 110px auto 0;
      max-width: 1260px;
    }

    &__step {
      margin-bottom: 110px;
    }
  }

  @include media(xl) {
    &__steps {
      margin: 110px auto 0 240px;
    }
  }
}
</style>
