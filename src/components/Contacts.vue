<template>
  <div class="contacts">
    <div class="container">
      <h2 class="contacts__title">Контакты</h2>
      <div class="contacts__info-container">
        <div class="contacts__info-item">
          <h3 class="contacts__info-title">Адрес производства</h3>
          <p class="contacts__info-text">
            <a
              v-if="$_media.sm && activeCity === 'spb'"
              href="maps://yandex.ru/map-widget/v1/-/CCUerMt0DA"
            >{{cityAddress}}</a>
            <a
              v-else-if="$_media.sm && activeCity === 'msk'"
              href="maps://yandex.ru/map-widget/v1/-/CCUerQRICB"
            >{{cityAddress}}</a>
            <span v-else>{{cityAddress}}</span>
          </p>
        </div>
        <div class="contacts__info-item">
          <h3 class="contacts__info-title">Телефон</h3>
          <p class="contacts__info-text">{{cityPhone}}</p>
        </div>
        <div class="contacts__info-item">
          <h3 class="contacts__info-title">Время работы</h3>
          <p class="contacts__info-text">Ежеднево с 10:00 до 22:00</p>
        </div>
        <div class="contacts__info-item">
          <h3 class="contacts__info-title">Мы в соцсетях</h3>
          <!-- <a
            href="https://www.instagram.com/wowkitchen.ru/"
            target="_blank"
            class="contacts__info-link"
          >
            <AppIcon
              name="insta"
              class="contacts__info-icon"
            />
          </a> -->
          <!-- <a
            href="https://t.me/wowkitchen_ru"
            target="_blank"
            class="contacts__info-link"
            @click="handleSocialClick('contacts_tg')"
          >
            <AppIcon
              name="telegram"
              class="contacts__info-icon"
            />
          </a> -->
          <a
            href="https://zen.yandex.ru/wowkitchen"
            target="_blank"
            class="contacts__info-link"
            @click="handleSocialClick('contacts_zen')"
          >
            <AppIcon
              name="zen"
              class="contacts__info-icon"
            />
          </a>
          <a
            href="https://vk.com/wowkitchen_ru"
            target="_blank"
            class="contacts__info-link"
            @click="handleSocialClick('contacts_vk')"
          >
            <AppIcon
              name="vk"
              class="contacts__info-icon"
            />
          </a>
          <!-- <a
            href="https://www.facebook.com/WoW-Kitchen-%D0%9A%D1%83%D1%85%D0%BD%D0%B8-%D0%B8-%D1%88%D0%BA%D0%B0%D1%84%D1%8B-%D0%BA%D1%83%D0%BF%D0%B5-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7-108783591454436"
            target="_blank"
            class="contacts__info-link"
          >
            <AppIcon
              name="facebook"
              class="contacts__info-icon"
            />
          </a> -->
        </div>
      </div>
      <div
        class="contacts__map"
        id="map"
      >
        <!-- <div
          v-if="activeCity === 'spb'"
          style="position:relative;overflow:hidden;"
        >
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:0px;"
          >Санкт‑Петербург</a>
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/house/4_y_predportovy_proyezd_5l/Z0kYdQdkSkUAQFtjfXRzeX1lZQ==/?ll=30.313073%2C59.828162&utm_medium=mapframe&utm_source=maps&z=13.41"
            style="color:#eee;font-size:12px;position:absolute;top:14px;"
          >4-й Предпортовый проезд, 5Л — Яндекс.Карты</a>
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CCUerMt0DA"
            allowfullscreen="true"
            style="position:relative;"
          ></iframe>
        </div>
        <div
          v-if="activeCity === 'msk'"
          style="position:relative;overflow:hidden;"
        >
          <a
            href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:0px;"
          >Москва</a>
          <a
            href="https://yandex.ru/maps/213/moscow/house/ryabinovaya_ulitsa_47s5/Z04YcgVmQUMHQFtvfXp4d35lZA==/?ll=37.432570%2C55.694911&utm_medium=mapframe&utm_source=maps&z=13.14"
            style="color:#eee;font-size:12px;position:absolute;top:14px;"
          >Рябиновая улица, 47с5 — Яндекс.Карты</a>
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CCUerQRICB"
            allowfullscreen="true"
            style="position:relative;"
          ></iframe>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'Contacts',
  components: {
    AppIcon
  },
  data() {
    return {
      mapScript: null,
      mapScriptIsLoaded: false
    }
  },
  computed: {
    cities() {
      return this.$store.state.cities
    },
    activeCity() {
      return this.$store.state.activeCity
    },
    cityAddress() {
      return this.$store.state.cities[this.$store.state.activeCity]?.address
    },
    cityPhone() {
      return this.$store.state.cities[this.$store.state.activeCity]?.phone
    },
    coords() {
      return this.$store.state.cities[this.$store.state.activeCity]?.coords
    }
  },
  watch: {
    mapScriptIsLoaded() {
      if (this.coords) {
        this.initMap()
      }
    },
    coords() {
      if (!this.mapScriptIsLoaded) {
        return
      }

      if (window.myMap) {
        window.myMap.setCenter([this.coords.lat, this.coords.long])
        window.myPlacemark.geometry.setCoordinates([this.coords.lat, this.coords.long])
      } else {
        this.initMap()
      }
    }
  },
  mounted() {
    this.mapScript = document.createElement('script')

    this.mapScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=cb0c6e79-ed1d-4ef3-aa2e-99cfe4efba7e&lang=ru_RU')
    document.body.appendChild(this.mapScript)

    this.mapScript.onload = () => {
      this.mapScriptIsLoaded = true
    }
  },
  unmounted() {
    document.body.removeChild(this.mapScript)
    window.myMap.destroy()
    window.myMap = null
    window.myPlacemark = null
  },
  methods: {
    initMap() {
      window.ymaps.ready(() => {
        window.myMap = new window.ymaps.Map(
          'map',
          {
            center: [this.coords.lat, this.coords.long],
            controls: [],
            zoom: 14
          },
          {
            suppressMapOpenBlock: true
          }
        )

        window.myPlacemark = new window.ymaps.Placemark(
          [this.coords.lat, this.coords.long],
          {},
          {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/pin.svg',
            iconImageSize: [44, 57],
            iconImageOffset: [-22, -57]
          }
        )

        window.myMap.geoObjects.add(window.myPlacemark)
      })
    },

    handleSocialClick(eventName) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: eventName })
    }
  }
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

    @include media(md) {
      font-size: 30px;
      margin-top: 36px;
      margin-bottom: 40px;
    }
    @include media(lg) {
      font-size: 50px;
      margin-top: 46px;
      margin-bottom: 50px;
    }
    @include media(xl) {
      margin-top: 56px;
      margin-bottom: 62px;
    }
  }
  &__info {
    &-container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      @include media(md) {
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
      @include media(md) {
        margin-right: 80px;
        margin-top: 0px;
      }
      @include media(lg) {
        margin-right: 100px;
      }
      @include media(xl) {
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

      @include media(md) {
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

      @include media(md) {
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
    overflow: hidden;

    div {
      width: 100%;
      height: 100%;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    @include media(md) {
      height: 500px;
      border-top-right-radius: 120px;
      width: 100%;
    }
  }
}
</style>
