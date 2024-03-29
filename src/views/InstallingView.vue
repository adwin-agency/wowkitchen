<template>
  <div class="v-installing">
    <ServiceTop
      preview="/assets/video/installing-preview.mp4"
      video="/assets/video/installing.mp4"
      heading="Сборка"
      desc="После того, как ваш гарнитур изготовлен на производстве и доставлен к вам в разобранном виде, наступает, пожалуй, самый ответственный момент — сборка. Ведь классный дизайн-проект является «Львом Толстым» только на словах (на картинке). Наши квалифицированные сборщики сделают так, что и на деле он превзойдет ваши ожидания."
      :info="[
        { title: 'В удобное время', desc: 'Только вам решать, когда наши специалисты соберут кухню у вас дома' },
        { title: 'Вежливо и аккуратно', desc: 'Сборщики не создают дополнительного шума, работают качественно, быстро и без лишних крепких слов' }
      ]"
    >
      <ServiceFeatures
        title="3 причины, почему наша сборка хороша"
        :features="[
          'Специалисты с большим опытом. Число собранных ими гарнитуров — трехзначное',
          'Полное соответствие с дизайн-проектом. Будьте уверены, что верхний шкафчик на левой стене будет расположен ровно там же, куда его поместил замерщик на проекте',
          'Чистота после того, как гарнитур собран. Наши сотрудники уберут за собой не только весь строительный мусор, но даже протрут пыль'
        ]"
      />
    </ServiceTop>
    <ServiceMain
      heading="Как происходит сборка? <br>Рассказываем поэтапно:"
      :steps="steps"
    />
    <Steps />
    <RatedReviews :cards="reviews" />
  </div>
</template>

<script>
import RatedReviews from '../components/RatedReviews.vue'
import ServiceFeatures from '../components/ServiceFeatures.vue'
import ServiceMain from '../components/ServiceMain.vue'
import ServiceTop from '../components/ServiceTop.vue'
import Steps from '../components/Steps.vue'
import api from '../api'

const steps = [
  {
    num: '1',
    title: 'Созваниваемся с клиентом',
    desc: 'Сборщики получают заказ, выходят на связь с обладателем кухни и предлагают выбрать удобное для него время.',
    // stat: { num: '10', unit: '%', unitmod: 'top', title: 'стоимость базовой сборки' }
  },
  {
    num: '2',
    title: 'Проговариваем все нюансы',
    desc: 'По приезду сборщики обсуждают с клиентом дополнительные работы (если они предусмотрены), принимают к сведению его пожелания и сверяются с дизайн-проектом.',
    stat: { num: '2', title: 'сборщика в команде' }
  },
  {
    num: '3',
    title: 'Вскрываем коробки и производим последние приготовления',
    desc: 'Прямо при клиенте вскрываются коробки с деталями гарнитура, всё тщательно пересчитывается и расставляется в соответствии с дизайн-проектом. Далее происходит черновая работа по штроблению стен, а также разделке электрики и труб.',
    stat: { num: '1', unit: 'день', title: 'время базовой сборки гарнитура' }
  },
  {
    num: '4',
    title: 'Собираем гарнитур воедино',
    desc: 'Основной этап работ: сперва собираются и выравниваются нижние модули, затем верхние и только потом монтируются столешница и фартук.',
    stat: { num: '5+', unit: 'лет', unitmod: 'left', title: 'средний опыт наших сборщиков' }
  },
  {
    num: '5',
    title: 'Подключаем технику и врезаем мойку',
    desc: 'Производится установка всей кухонной техники, аккуратно врезается мойка, всё несколько раз проверяется на работоспособность и надежность.',
    stat: { icon: 'thumbs-up', iconmod: 'small', title: 'гарнитур готов к использованию' }
  },
  {
    num: '6',
    title: 'Вежливо откланиваемся',
    desc: 'Перед тем как уехать, сборщики ещё раз проверяют каждую деталь гарнитура. Затем собирают весь строительный мусор в мешки, чтобы забрать его с собой. Перед самым уходом в прямом смысле слова сдувают с гарнитура все пылинки и бережно передают кухню в пользование счастливого заказчика.',
    stat: { num: '2', unit: 'года', unitmod: 'right', title: 'гарантия на гарнитур' }
  }
]

export default {
  name: 'InstallingView',
  components: {
    ServiceTop,
    ServiceFeatures,
    ServiceMain,
    Steps,
    RatedReviews
  },
  data() {
    return {
      steps: steps,
      reviews: []
    }
  },
  async created() {
    const reviewsResponse = await api.loadCards({ name: 'reviews' })
    this.reviews = reviewsResponse.reviews.slice(0, 4)
  }
}
</script>

<style lang="scss">
.v-installing {
  .rated-reviews {
    margin-top: 85px;
    margin-bottom: 50px;
  }

  @include media(md) {
    .rated-reviews {
      margin-top: 130px;
      margin-bottom: 55px;
    }
  }

  @include media(lg) {
    .rated-reviews {
      margin-top: 140px;
      margin-bottom: 120px;
    }
  }

  @include media(xl) {
    .rated-reviews {
      margin-top: 170px;
      margin-bottom: 130px;
    }
  }
}
</style>
