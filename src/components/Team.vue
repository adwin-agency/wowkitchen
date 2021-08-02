<template>
  <div class="team">
    <div class="team__main">
      <div class="container container_side-fixed">
        <div class="team__list">
          <div
            v-for="(item, index) in team"
            :key="index"
            class="team__item"
          >
            <div class="team__img">
              <img
                :src="require(`@/assets/img/${item.image}`)"
                :alt="item.name"
              >
            </div>
            <p class="team__name">{{item.name}}</p>
            <p class="team__post">{{item.profession}}</p>
            <div class="team__text">
              <p :ref="item.id">{{item.desc}}</p>
              <button
                class="team__btn"
                @click="showDesc(item.id)"
              >
                <App-icon
                  name="plus"
                  class="team__btn-icon"
                />
              </button>
            </div>
          </div>
        </div>
        <TeamJoin />
      </div>
    </div>

    <Interesting />
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'
import Interesting from './Interesting.vue'
import TeamJoin from './TeamJoin.vue'

const team = [
  {
    id: 'ivan',
    image: 'team-ivan.jpg',
    name: 'Иван',
    profession: 'руководитель отдела продаж',
    desc:
      'Многолетний опыт в сфере кухонь и постоянное совершенствование всех стадий создания кухонных гарнитуров позволило нам отладить работу всей компании, словно работу швейцарских часов. Все наши специалисты проходят тщательный отбор и четко следуют инструкциям. Важно, что все работники понимают нашу концепцию и философию – создавать кухни для наших клиентов – как для себя.'
  },
  {
    id: 'daniil',
    image: 'team-daniil.jpg',
    name: 'Даниил',
    profession: 'координатор отдела сборки',
    desc:
      'Мы стараемся реагировать на каждую заявку оперативно – чтобы между звонком клиента в наш офис и выездом к нему на дом дизайнера проходило минимальное количество В случае дополнительных вопросов всегда подробно на них отвечаем. Мы ценим время наших клиентов, поэтому до нас всегда легко дозвониться – никаких «ожидайте, ваш номер в очередь 49-й» и прочего. Все наши специалисты проходят обязательный курс по грамотной речи. Закажите обратный звонок и убедитесь в этом сами! ;)'
  },
  {
    id: 'aleksei',
    image: 'team-aleksei.jpg',
    name: 'Алексей',
    profession: 'руководитель отдела обучения',
    desc:
      'На наших плечах огромная ответственность – именно от грамотной сборки зависит итоговый результат. Ведь если на производстве все идеально, но сборщик подкачает – пиши-пропало. Слава Богу, в нашей компании подобралась отличная команда, где каждый знает своё дело на пятерку с плюсом. Собираем все быстро, четко и качественно. Бранных слов не знаем, зато помним про то, что, уходя, необходимо уносить с собой строительный мусор.'
  },
  {
    id: 'aleksandr',
    image: 'team-aleksandr.jpg',
    name: 'Александр',
    profession: 'старший дизайнер-замерщик',
    desc:
      'Моя задача – услышать пожелания клиента, дать несколько дельных советов по функционалу и дизайну будущего гарнитура, произвести замеры, а также нарисовать предварительный проект Если клиенту всё нравится, прекрасно! Есть нюансы, не вопрос – дорабатываем проект, доводим его до идеала. Затем запускаем производство и уже через месяц удобный и современный гарнитур радует хозяев! С собой всегда беру чемодан с образцами, чтобы наши клиенты могли выбирать не по картинке, а вживую.'
  }
]

export default {
  name: 'Team',
  components: {
    Interesting,
    AppIcon,
    TeamJoin
  },
  data() {
    return {
      team: team
    }
  },
  methods: {
    showDesc(ref) {
      this.$refs[ref].classList.add('is-active')
    }
  }
}
</script>

<style lang="scss">
.team {
  $b: &;

  &__main {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: $color-lightgray;
      height: 100px;
      z-index: -1;
    }
  }

  &__item {
    margin: 45px auto;
  }

  &__img {
    position: relative;
    width: 100%;
    padding-top: 56%;
    margin-bottom: 20px;
    border-bottom-right-radius: 30px;
    box-shadow: 0 16px 17px -1px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
  }

  &__post {
    font-size: 14px;
    color: $color-lightviolet;
    line-height: 1.714;
    margin-bottom: 20px;
  }

  &__text {
    position: relative;
    padding-right: 20px;

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
      font-size: 14px;
      line-height: (26/14);

      &.is-active {
        display: block;

        & + #{$b}__btn {
          display: none;
        }
      }
    }
  }

  &__btn {
    position: absolute;
    right: 0;
    bottom: 3px;
    display: inline-block;
    fill: $color-lightviolet;
    background-color: #fff;

    &-icon {
      width: 20px;
      height: 20px;
    }
  }

  @include media(md) {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: 0 -10px;
    }

    &__item {
      width: calc(1 / 2 * 100% - 20px);
      margin: 45px 10px;
      max-width: 400px;
    }
  }

  @include media(lg) {
    &__list {
      justify-content: space-between;
    }
  }
}
</style>
