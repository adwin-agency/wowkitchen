<template>
  <div class="team">
    <div class="team__main">
      <div class="container container_side-fixed">
        <div class="team__lead">
          <div class="team__img">
            <img
              src="@/assets/img/team-anastasia.jpg"
              alt=""
              style="object-position:50% 40%"
            >
          </div>
          <div class="team__content">
            <p class="team__name">Анастасия Чайка, <br>главный дизайнер</p>
            <!-- <p class="team__text">Забота о клиентах, отслеживание трендов и профессионализм сотрудников позволили нашей компании уверенно ворваться на рынок и достаточно быстро найти своего клиента.</p> -->
          </div>
        </div>
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
    desc: 'Мы стараемся реагировать на каждую заявку оперативно – чтобы между звонком клиента в наш офис и выездом к нему на дом дизайнера проходило минимальное количество времени. В случае дополнительных вопросов всегда подробно на них отвечаем. Мы ценим время наших клиентов, поэтому до нас всегда легко дозвониться – никаких «ожидайте, ваш номер в очередь 49-й» и прочего. Все наши специалисты проходят обязательный курс по грамотной речи. Закажите обратный звонок и убедитесь в этом сами!'
  },
  {
    id: 'daniil',
    image: 'team-daniil.jpg',
    name: 'Даниил',
    profession: 'координатор отдела сборки',
    desc: 'На наших плечах огромная ответственность – именно от грамотной сборки зависит итоговый результат. Ведь если на производстве все идеально, но сборщик подкачает – пиши-пропало. Слава Богу, в нашей компании подобралась отличная команда, где каждый знает своё дело на пятерку с плюсом. Собираем все быстро, четко и качественно. Бранных слов не знаем, зато помним про то, что, уходя, необходимо уносить с собой строительный мусор.'
  },
  {
    id: 'aleksei',
    image: 'team-aleksei.jpg',
    name: 'Алексей',
    profession: 'руководитель отдела обучения',
    desc: 'Внимательно слежу за тем, чтобы у моих подчиненных дизайнеров был глаз-алмаз. При необходимости делаю огранку. Даже если наших замерщиков разбудить в три утра, они точно и без запинки расскажут правильный алгоритм работы с клиентами. Показать и рассказать про образцы? Пожалуйста! Быстро сориентироваться в помещении, понять специфику и произвести грамотный замер? Само собой! Составить договор с прозрачным ценником без дополнительных услуг, которые клиент не выбирал? Естественно. Мы ценим не только наших заказчиков, но и наших дизайнеров-замерщиков и очень ими гордимся.'
  },
  {
    id: 'aleksandr',
    image: 'team-aleksandr.jpg',
    name: 'Александр',
    profession: 'старший дизайнер-замерщик',
    desc: 'Моя задача – услышать пожелания клиента, дать несколько дельных советов по функционалу и дизайну будущего гарнитура, произвести замеры, а также нарисовать предварительный проект Если клиенту всё нравится, прекрасно! Есть нюансы, не вопрос – дорабатываем проект, доводим его до идеала. Затем запускаем производство и уже через месяц удобный и современный гарнитур радует хозяев! С собой всегда беру чемодан с образцами, чтобы наши клиенты могли выбирать не по картинке, а вживую.'
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
    padding-top: 50px;

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

  &__lead {
    #{$b} {
      &__img {
        padding-top: 0;

        &::before {
          content: '';
          display: block;
          padding-top: 56.5%;
        }
      }

      &__content {
        display: flex;
        flex-direction: column;
      }

      &__text {
        margin-top: 16px;
        padding-right: 0;
        font-weight: bold;
        font-size: 15px;
        line-height: (33/20);
      }

      &__name {
        font-style: italic;
        font-weight: 600;
        font-size: 16px;
        line-height: (24/16);
        color: $color-green;
      }
    }
  }

  @include media(md) {
    &__main {
      padding-top: 70px;
    }

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

    &__lead {
      display: flex;
      align-items: center;
      margin-right: -40px;
      margin-bottom: 30px;

      #{$b} {
        &__img {
          width: 58%;
          border-bottom-right-radius: 130px;
        }

        &__content {
          flex: 1;
          margin-bottom: 20px;
          padding-left: 26px;
        }

        &__text {
          margin-left: -135px;
          margin-top: 0;
        }

        &__name {
          order: 1;
          margin-top: 16px;
          font-size: 15px;
        }
      }
    }
  }

  @include media(lg) {
    &__list {
      justify-content: space-between;
    }

    &__lead {
      #{$b} {
        &__img {
          width: 60%;
        }

        &__content {
          padding-left: 40px;
        }

        &__text {
          font-size: 18px;
        }

        &__name {
          margin-top: 20px;
          font-size: 16px;
        }
      }
    }
  }

  @include media(xl) {
    &__lead {
      #{$b} {
        &__img {
          width: 63%;
        }

        &__text {
          font-size: 20px;
        }

        &__name {
          margin-top: 36px;
        }
      }
    }
  }
}
</style>
