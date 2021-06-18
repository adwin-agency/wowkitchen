<template>
  <div class="city">
    <p class="city__title">Ваш город {{cityName}}?</p>
    <div class="city__actions">
      <AppButton
        title="Да, верно"
        class="city__btn"
        @click="applyCity"
      />
      <AppSelect
        :up="$_mobile"
        :options="options"
        class="city__select"
      />
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
import AppSelect from './AppSelect.vue'

export default {
  name: 'AppCity',
  components: {
    AppButton,
    AppSelect
  },
  computed: {
    cities() {
      return this.$store.state.cities.map(i => ({ title: i.name }))
    },
    detectedCity() {
      return this.$store.state.detectedCity
    },
    selectedCity() {
      return this.$store.state.selectedCity
    },
    options() {
      return [{ title: 'Нет, другой', disabled: true }, ...this.cities]
    },
    cityName() {
      return this.$store.getters.cityName
    }
  },
  methods: {
    applyCity() {
      if (!this.selectedCity) {
        this.$store.commit('setSelectedCity', this.detectedCity)
        document.cookie = `city=${this.detectedCity}; max-age=${30 * 24 * 60 * 60}; path=/`
      }

      this.$emit('apply')
    }
  }
}
</script>

<style lang="scss">
.city {
  position: relative;
  border-radius: 8px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 10px 37px 0px rgba(51, 51, 51, 0.31);

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 100%;
    border: 6px solid;
    border-color: #fff transparent transparent transparent;
  }

  &__title {
    font-weight: bold;
    font-size: 14px;
  }

  &__actions {
    margin-top: 30px;
  }

  &__btn {
    width: 100%;
    min-height: 50px;
  }

  &__select {
    margin-top: 20px;
    width: 100%;
  }

  @include media(lg) {
    &::before {
      left: 100px;
      top: auto;
      bottom: 100%;
      border-color: transparent transparent #fff transparent;
    }

    &__actions {
      display: flex;
    }

    &__btn {
      width: auto;
    }

    &__select {
      margin-top: 0;
      margin-left: 10px;
      width: 162px;
    }
  }
}
</style>
