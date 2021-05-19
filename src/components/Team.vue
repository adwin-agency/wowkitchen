<template>
    <div class="team">
        <div class="team__main">
            <div class="container container_side-fixed">
                <div class="team__list">
                    <div class="team__item">
                        <img class="team__img" src="@/assets/img/team/AP.jpg" alt="avatar" >
                        <p class="team__name">Александр Петров</p>
                        <p class="team__post">директор компании</p>
                        <p class="team__text">Многолетний опыт в сфере кухонь и постоянное совершенствование всех стадий создания кухонных гарнитуров позволило нам отладить работу всей компании, словно работу швейцарских часов. Все наши специалисты проходят тщательный отбор и четко следуют инструкциям. Важно, что все работники понимают нашу концепцию и философию – создавать кухни для наших клиентов – как для себя.
                            <button class="team__btn">
                                <App-icon
                                    name="plus"
                                    class="team__btn-icon"
                                />
                            </button>
                        </p>
                    </div>

                    <div class="team__item">
                        <img class="team__img" src="@/assets/img/team/OC.jpg" alt="avatar" >
                        <p class="team__name">Ольга Спицина</p>
                        <p class="team__post">руководитель отдела продаж</p>
                        <p class="team__text">Мы стараемся реагировать на каждую заявку оперативно – чтобы между звонком клиента в наш офис и выездом к нему на дом дизайнера проходило минимальное количество В случае дополнительных вопросов всегда подробно на них отвечаем. Мы ценим время наших клиентов, поэтому до нас всегда легко дозвониться – никаких «ожидайте, ваш номер в очередь 49-й» и прочего. Все наши специалисты проходят обязательный курс по грамотной речи. Закажите обратный звонок и убедитесь в этом сами! ;)
                            <button class="team__btn">
                                <App-icon
                                    name="plus"
                                    class="team__btn-icon"
                                />
                            </button>
                        </p>
                    </div>

                    <div class="team__item">
                        <img class="team__img" src="@/assets/img/team/CL.jpg" alt="avatar" >
                        <p class="team__name">Степан Лялин</p>
                        <p class="team__post">координатор отдела сборки</p>
                        <p class="team__text">На наших плечах огромная ответственность – именно от грамотной сборки зависит итоговый результат. Ведь если на производстве все идеально, но сборщик
                        подкачает – пиши-пропало. Слава Богу, в нашей компании подобралась отличная команда, где каждый знает своё дело на пятерку с плюсом. Собираем все быстро, четко и качественно. Бранных слов не знаем, зато помним про то, что, уходя, необходимо уносить с собой строительный мусор. 
                            <button class="team__btn">
                                <App-icon
                                    name="plus"
                                    class="team__btn-icon"
                                />
                            </button>
                        </p>

                    </div>

                    <div class="team__item">
                        <img class="team__img" src="@/assets/img/team/ML.jpg" alt="avatar" >
                        <p class="team__name">Максим Липовецкий</p>
                        <p class="team__post">старший дизайнер-замерщик</p>
                        <p class="team__text">Моя задача – услышать пожелания клиента, дать несколько дельных советов по функционалу и дизайну будущего гарнитура, произвести замеры, а также нарисовать предварительный проект Если клиенту всё нравится, прекрасно! Есть нюансы, не вопрос – дорабатываем проект, доводим его до идеала. Затем запускаем производство и уже через месяц удобный и современный гарнитур радует хозяев! С собой всегда беру чемодан с образцами, чтобы наши клиенты могли выбирать не по картинке, а вживую.
                            <button class="team__btn">
                                <App-icon
                                    name="plus"
                                    class="team__btn-icon"
                                />
                            </button>
                        </p>

                    </div>
                </div>
                <div class="team-join">
                    <App-icon
                        name="vacancy"
                        class="team-join__icon"
                    />
                    <div class="team-join__box">
                        <p class="team-join__title">Становитесь частью команды</p> 
                        <p class="team-join__text">Мы всегда рады новичкам в наших рядах. Посмотрите список вакансий, возможно, мы ищем именно вас?</p>
                        <p class="team-join__text">Отпраывляйте свои резюме на почту<a class="team-join__link"> sample@sample.com </a>с пометкой «Хочу в команду»</p>  
                    </div>
                </div>
            </div>
        </div>
        
        <Interesting />
    </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'
import Interesting from "./Interesting.vue"

export default {
  name: 'Team',
  components: {
    Interesting,
    AppIcon
  }
}
</script>

<style lang="scss">
.team {
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
    &__list {
        @include media (md) {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            margin: 0 -10px;
        }
        @include media (lg) {
            justify-content: space-between;
        }
    }
    &__item {
        margin: 45px auto;
        @include media (md) {
            width: calc(1/2*100% - 20px);
            margin: 45px 10px;
            max-width: 400px;
        }
        
    }
    &__img {
        width: 100%;
        margin-bottom: 20px;
        border-bottom-right-radius: 30px;
        box-shadow: 0 16px 17px -1px rgba(0,0,0,0.2);
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
    &__btn {
        display: inline-block;
        fill: $color-lightviolet;
        &-icon {
            width: 20px;
            height: 20px;
        }
    }
    &-join {
        background-color: $color-lightgray;
        box-shadow: 0px 16px 38px 0px rgba(0, 0, 0, 0.08);
        border-bottom-right-radius: 80px;
        margin: 0 -$container-padding;
        padding: 42px 35px;
        @include media (md) {  
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 42px 55px;
        }
        @include media (lg) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 42px 85px;
        }
        &__icon {
            width: 70px;
            height: 85px;
            fill: $color-lightviolet;
            margin-bottom: 15px;
            @include media (md) {
                width: 90px;
                height: 100px;
                margin-right: 25px;
                margin-bottom: 0;
            }
            @include media (lg) {
                margin-right: 55px;
            }
        }
        &__title {
            color: $color-green;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 20px;

        }
        &__link {
            color: $color-lightgreen;
        }
        &__text {
            font-size: 13px;
            line-height: 1.692;
        }
    }
}
</style>
