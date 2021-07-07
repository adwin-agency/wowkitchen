<template>
  <div class="delivery">
    <div class="container delivery__container">
      <div class="delivery__discription-container">
        <h2 class="delivery__discription-title">Доставка</h2>
        <h3 class="delivery__discription-subtitle">В пределах СПб</h3>
        <p class="delivery__discription-text">
          Доставка осуществляется с Пн. по Сб. 10:00 до 21:00. Стоимость по Санкт-Петербургу зависит от вашего местонахождения.
      
        </p>
        <p class="delivery__discription-text">
         Подробнее узнать о стоимости можно у оператора по телефону:<span class="delivery__discription_accent"> +7 (999) 999 - 99 - 99</span>
        </p>

        <h3 class="delivery__discription-subtitle">В ЛО</h3>
        <p class="delivery__discription-text">
          Доставка за КАД, по Ленинградской области и в другие регионы рассчитывается индивидуально при оформлении заказа или по телефону:<span class="delivery__discription_accent"> +7 (999) 999 - 99 - 99</span>
          <span class="delivery__discription_accent"></span>
        </p>

        <h3 class="delivery__discription-subtitle">Подъём на этаж</h3>
        <p class="delivery__discription-text">
          Подъем в квартиру без лифта - 200 рублей этаж. Подъем в квартиру на лифте - бесплатно.
          <span class="delivery__discription_accent"></span>
        </p>
      </div>
      <form class="delivery__form" action="">
        <div class="delivery__form-content">
          <h4 class="delivery__form-title">Расчитать стоимость доставки</h4>
          <label class="delivery__form-lable" for="select-city">Укажите адрес и наш оператор свяжется с вами  для обсуждения стоимости.</label>
          <div class="delivery__form-container">
            <fieldset class="delivery__form-box">
              <AppSelect :options="cities" color="white" class="delivery__form-select-city" />
              <!-- <select class="delivery__form-select-city" name="select-city" id="">
                <option class="delivery__form-city-option" value="spb">Санкт-Петербург</option>
                <option class="delivery__form-city-option" value="spb">Ленинградская область</option>
              </select> -->
              <AppTextField label="Улица" color="white" class="delivery__form-field" />
              <!-- <label class="delivery__form-lable" for="street">Улица</label>
              <input class="delivery__form-input" type="text" required> -->

              <AppTextField label="Дом" color="white" class="delivery__form-field delivery__form-field_sm" />
              <AppTextField label="Корпус" color="white" class="delivery__form-field delivery__form-field_sm" />
              <!-- <div class="delivery__form-short-box">
                <div class="delivery__form-short-el">
                  <label class="delivery__form-lable" for="house">Дом</label>
                  <input class="delivery__form-input" type="text" required>
                </div>
                <div class="delivery__form-short-el">
                  <label class="delivery__form-lable" for="housing">Корпус</label>
                  <input class="delivery__form-input" type="text" required>
                </div>
              </div> -->

              <AppTextField label="Контактный телефон" color="white" class="delivery__form-field" />
              <!-- <label class="delivery__form-lable" for="phone">Контактный телефон</label>
              <input class="delivery__form-input" type="tel" required> -->
              <AppButton title="Рассчитать" class="delivery__form-button-sb" />
              <!-- <button class="delivery__form-button-sb" type="submith">Рассчитать</button> -->
            </fieldset>
            <div class="delivery__form-map-box">
              <div class="delivery__form-map"></div>
            </div>
          </div>
          <p class="delivery__form-policy">
            Нажимая кнопку «Рассчитать», вы соглашаетесь c 
            <a class="delivery__form-policy-link" href="#" target="_blank" rel="noopener noreferrer"> Политикой конфиденциальности</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppSelect from './base/AppSelect.vue'
import AppTextField from './base/AppTextField.vue'

export default {
  components: { AppSelect, AppTextField, AppButton },
  name: 'Delivery',
  data() {
    return {
      cities: [
        { title: 'Санкт-Петербург' },
        { title: 'Ленинградская область' }
      ]
    }
  }
}

</script>

<style lang="scss">
.delivery {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    @include media(md){
      align-items: unset;
      padding-top: 50px;
      flex-direction: row;
      padding-bottom: 40px;
    }
  }
  &__discription {
    &-container {
      @include media(lg){
        flex: 50%;
        padding-right: 80px;
      }
    }
    &-title {
      font-size: 26px;
      font-weight: bold;
      @include media(lg){
         font-size: 50px;
      }
    }
    &-subtitle {
      font-size: 18px;
      padding-top: 30px;

      @include media(lg){
        padding-top: 40px;
      }
    }

    &-text {
      padding-top: 5px;
      font-size: 14px;
      line-height: 26px;

      @include media(md){
        padding-top: 20px;
      }
    }
    &_accent {
      font-weight: bold;
      padding-left: 4px;
      white-space: nowrap;
    }
  }
  &__form {
    border-radius: 4px;
    background-color: rgb(243, 244, 249);
    box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.1);
    margin-top: 24px;
    padding: 0 18px 20px;
    width: 100vw;
    
    @include media(sm){
      padding: 0 30px 20px;
    }
    @include media(md){
      margin-left: 20px;
    }
    @include media(lg){
      width: 700px;
      padding: 0 0px 20px 35px;
    }
    &-content {
      max-width: 320px;
      margin: 0 auto;

      @include media(lg) {
        max-width: none;
      }
    }
    &-title {
      font-size: 18px;
      font-weight: bold;
      line-height: 1.333;
      padding-top: 65px;
      padding-bottom: 5px;
    }
    &-lable {
      font-size: 13px;
      line-height: 1.538;
      @include media(xl) {
        font-size: 18px;
      }
    }
    &-container {
      display: flex;
      justify-content: center;
      margin-top: 35px;
      margin-bottom: 20px;
    }
    &-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      width: 100%;

      @include media(lg){
        max-width: 280px;
        width: auto;
        flex: 1;
        margin-right: 35px;
      }
    }
    &-select-city {
      width: 100%;
    }
    &-city-option {
      font-size: 13px;
      color: rgb(4, 185, 145);
      font-weight: bold;
      line-height: 3.077;
    }
    &-field {
      padding-top: 23px;
      width: 100%;

      &_sm {
        width: calc(50% - 10px);
      }
    }
    &-map-box {
      display: none;
      background-color: #e3e3e3;
      margin-left: auto;

      @include media(lg){
        display: block;
        width: 325px;
      }
    }
    &-policy {
      font-size: 10px;
      color: rgb(172, 168, 195);
      line-height: 1.6;
      text-align: center;
      &-link {
        text-decoration: underline;
      }
    }
    &-button-sb {
      margin-top: 15px;
      width: 100%;
    }
  }

    fieldset {
    border: none;
    padding: 0;
  }
}
</style>
