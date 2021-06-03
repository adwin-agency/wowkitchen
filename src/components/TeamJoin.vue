<template>
  <div class="team-join">
    <AppIcon
      name="vacancy"
      class="team-join__icon"
    />
    <div class="team-join__box">
      <p class="team-join__title">Становитесь частью команды</p>
      <p class="team-join__text">Мы всегда рады новичкам в наших рядах. Посмотрите список вакансий, возможно, мы ищем именно вас?</p>
      <p class="team-join__text">Отправляйте свои резюме на почту<a class="team-join__link"> sample@sample.com </a>с пометкой «Хочу в команду»</p>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'TeamJoin',
  components: {
    AppIcon
  }
}
</script>

<style lang="scss">
.team-join {
  background-color: $color-lightgray;
  box-shadow: 0px 16px 38px 0px rgba(0, 0, 0, 0.08);
  border-bottom-right-radius: 80px;
  margin: 0 -$container-padding;
  padding: 42px 35px;

  &__icon {
    width: 70px;
    height: 85px;
    fill: $color-lightviolet;
    margin-bottom: 15px;
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

  @include media(md) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 42px 55px;

    &__icon {
      width: 90px;
      height: 100px;
      margin-right: 25px;
      margin-bottom: 0;
    }
  }

  @include media(lg) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 42px 85px;

    &__icon {
      margin-right: 55px;
    }
  }
}
</style>
