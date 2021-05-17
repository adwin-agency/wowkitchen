<template>
  <div class="contacts">
    <div class="container">
      <h2 class="contacts__title">Контакты</h2>
      <div class="contacts__info-container">
        <div class="contacts__info-item">
          <h3 class="contacts__info-title">Адрес</h3>
          <p class="contacts__info-text">ул.Новорощинская, д.4,  оф. 904-2 (БЦ "Собрание")</p>
        </div>
        <div class="contacts__info-item">
          <h3 class="contacts__info-title">Телефон</h3>
          <p class="contacts__info-text">+7 (999) 999 - 99 - 99</p>
        </div>
        <div class="contacts__info-item">
          <h3 class="contacts__info-title">Время работы</h3>
          <p class="contacts__info-text">Ежеднево с 10:00 до 22:00</p>
        </div>
        <div class="contacts__info-item">
          <h3 class="contacts__info-title">Мы в соцсетях</h3>
            <a href="#" class="contacts__info-link">
              <AppIcon
                name="insta"
                class="contacts__info-icon"
              />
            </a>
            <a href="#" class="contacts__info-link">
              <AppIcon
                name="vk"
                class="contacts__info-icon"
              />
            </a>
        </div>
      </div>
      <div class="contacts__map">

      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'
export default {
  components: { AppIcon },
  name: 'Contacts'
}
</script>

<style lang="scss">
.contacts {
  &__title {
    font-size: 26px;
    font-weight: bold;
    line-height: 1.44;
    margin-top: 20px;
    margin: 20px 0 0;

    @include media(md){
      font-size: 30px;
      margin-top: 36px;
      margin-bottom: 40px;
    }
    @include media(lg){
      font-size: 50px;
      margin-top: 46px;
      margin-bottom: 50px;
    }
    @include media(xl){
      margin-top: 56px;
      margin-bottom: 62px;;
    }
  }
  &__info {

    &-container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      @include media(md){
        flex-direction: row;
      }
    }
    &-item {
      max-width: 210px;
      width: 100%;
      margin-left: 0px;
      margin-top: 30px;
      &:last-child {
        margin-right: 0;
      }
      @include media(md){
        margin-right: 80px;
        margin-top: 0px;
      }
      @include media(lg){
        margin-right: 100px;
      }
      @include media(xl){
        margin-right: 150px;
      }
    }
    &-title {
      font-size: 18px;
      font-weight: bold;
      line-height: 1.222;
    }
    &-text {
      font-size: 14px;
      line-height: 1.429;
      margin-top: 8px;

      @include media(md){
        margin-top: 12px;
      }
    }
    &-icon {
      width: 23px;
      height: 23px;
      fill: #aca8c3;
      display: inline;
    }
    &-link {
      display: inline-block;
      margin-right: 14px;
      margin-top: 8px;

      @include media(md){
        margin-top: 12px;
      }
    }
  }
  &__map {
    height: 470px;
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(60, 60, 60);
    margin-top: 45px;

    @include media(md){
    height: 500px;
    border-top-right-radius: 120px;
    width: 100%;
    }
  }
}
</style>
