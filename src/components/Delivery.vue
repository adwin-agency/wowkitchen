<template>
  <div class="delivery">
    <div class="container delivery__container">
      <div class="delivery__discription-container">
        <h2 class="delivery__discription-title">Доставка</h2>
        <h3 class="delivery__discription-subtitle">В пределах СПб, ЛО, Москвы</h3>
        <p class="delivery__discription-text">
          Доставка осуществляется с Пн. по Сб. 10:00 до 21:00. Стоимость зависит от вашего местонахождения.
        </p>
        <p class="delivery__discription-text">
          Подробнее узнать о стоимости можно у оператора по телефону:
          <a
            :href="`tel:${cityPhone}`"
            class="delivery__discription_accent"
          >{{cityPhone}}</a>
        </p>
        <!-- <h3 class="delivery__discription-subtitle">В ЛО</h3>
        <p class="delivery__discription-text">
          Доставка за КАД, по Ленинградской области и в другие регионы рассчитывается индивидуально при оформлении заказа или по телефону:<span class="delivery__discription_accent"> +7 (999) 999 - 99 - 99</span>
          <span class="delivery__discription_accent"></span>
        </p> -->
        <h3 class="delivery__discription-subtitle">Подъём на этаж</h3>
        <p class="delivery__discription-text">
          Подъем в квартиру без лифта - 200 рублей этаж. Подъем в квартиру на лифте - бесплатно.
          <span class="delivery__discription_accent"></span>
        </p>
      </div>
      <form
        class="delivery__form"
        @submit="handleSubmit"
      >
        <input
          type="hidden"
          name="type"
          value="delivery"
        >
        <input
          type="hidden"
          name="page"
          :value="page"
        >
        <div class="delivery__form-content">
          <h4 class="delivery__form-title">Расчитать стоимость доставки</h4>
          <label
            class="delivery__form-lable"
            for="select-city"
          >Укажите адрес и наш оператор свяжется с вами для обсуждения стоимости.</label>
          <div class="delivery__form-container">
            <fieldset class="delivery__form-box">
              <AppSelect
                :options="cities"
                color="white"
                name="city"
                class="delivery__form-select-city"
                @change="handleCityChange"
              />
              <AppTextField
                label="Улица"
                color="white"
                type="text"
                name="street"
                required
                class="delivery__form-field"
              />
              <AppTextField
                label="Дом"
                color="white"
                type="text"
                name="building"
                required
                class="delivery__form-field delivery__form-field_sm"
              />
              <AppTextField
                label="Корпус"
                color="white"
                type="text"
                name="building-c"
                required
                class="delivery__form-field delivery__form-field_sm"
              />
              <AppTextField
                label="Контактный телефон"
                color="white"
                type="tel"
                name="phone"
                required
                class="delivery__form-field"
              />
              <AppButton
                title="Рассчитать"
                type="submit"
                class="delivery__form-button-sb"
              />
              <p
                v-if="error"
                class="delivery__form-error"
              >Ошибка отправки. Попробуйте еще раз</p>
            </fieldset>
            <div
              class="delivery__form-map"
              id="map"
            ></div>
          </div>
          <p class="delivery__form-policy">
            Нажимая кнопку «Рассчитать», вы соглашаетесь c
            <a
              class="delivery__form-policy-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            > Политикой конфиденциальности</a>
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
import useForms from '../composition/forms'

export default {
  name: 'Delivery',
  components: {
    AppSelect,
    AppTextField,
    AppButton
  },
  setup() {
    const { sending, error, page, handleSubmit } = useForms()
    return {
      sending,
      error,
      page,
      handleSubmit
    }
  },
  data() {
    return {
      map: null,
      userCoords: null
    }
  },
  computed: {
    cities() {
      return Object.values(this.$store.state.cities).length ? Object.values(this.$store.state.cities).map((i) => ({ title: i.name, value: i.code })) : [{ title: '' }]
    },
    cityPhone() {
      return this.$store.state.cities[this.$store.state.activeCity]?.phone
    }
  },
  mounted() {
    window.ymaps.ready(() => {
      window.myMap = new window.ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 7
      })
    })
  },
  methods: {
    handleCityChange(e) {
      const code = e
      const city = this.$store.state.cities[code].name

      this.setMap(city)
    },

    async setMap(location) {
      const res = await window.ymaps.geocode(location, { results: 1 })
      const geoObject = res.geoObjects.get(0)
      const bounds = geoObject.properties.get('boundedBy')

      window.myMap.setBounds(bounds)
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
    @include media(md) {
      align-items: unset;
      padding-top: 50px;
      flex-direction: row;
      padding-bottom: 40px;
    }
  }
  &__discription {
    &-container {
      @include media(lg) {
        flex: 50%;
        padding-right: 80px;
      }
    }
    &-title {
      font-size: 26px;
      font-weight: bold;
      @include media(lg) {
        font-size: 50px;
      }
    }
    &-subtitle {
      font-size: 18px;
      padding-top: 30px;

      @include media(lg) {
        padding-top: 40px;
      }
    }

    &-text {
      padding-top: 5px;
      font-size: 14px;
      line-height: 26px;

      @include media(md) {
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

    @include media(sm) {
      padding: 0 30px 20px;
    }
    @include media(md) {
      margin-left: 20px;
    }
    @include media(lg) {
      width: 700px;
      padding: 0 0px 20px 35px;
    }
    &-content {
      max-width: $container-max-width - $container-padding * 2;
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

      @include media(lg) {
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
    &-map {
      display: none;
      background-color: #e3e3e3;
      margin-left: auto;

      @include media(lg) {
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

    &-error {
      margin: 15px auto 0;
      text-align: center;
      font-size: 14px;
      color: #ff0000;
    }
  }

  fieldset {
    border: none;
    padding: 0;
  }
}
</style>
