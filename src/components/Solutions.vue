<template>
  <div class="solutions">
    <div class="solutions__heading">
      <div class="container">
        <h2>Вкусные решения <br><span>в актуальном стиле</span></h2>
      </div>
    </div>      
    <CardSlider
      :cards="cards"
      class="solutions__slider"
    />
    <Production class="solutions__production" />
  </div>
</template>

<script>
import CardSlider from './CardSlider.vue'
import Production from './Production.vue'

const cards = [
  { route: '/kitchens?style=scandinaviya', title: 'Скандинавский стиль' },
  { route: '/kitchens?style=neoklassika', title: 'Стиль неоклассика' },
  { route: '/kitchens?style=minimalizm', title: 'Стиль минимализм' },
  { route: '/kitchens?style=loft', title: 'Стиль лофт' },
  { route: '/kitchens?style=sovremenniy', title: 'Современный стиль' },
]

export default {
  name: 'Solutions',
  components: {
    CardSlider,
    Production
  },
  data() {
    return {
      cards: cards
    }
  }
}
</script>

<style lang="scss">
.solutions {
  &__slider {
    margin-top: 24px;
  }

  &__production {
    margin-top: 35px;
  }

  @include media(md) {
    &__production {
      margin-top: 80px;
    }
  }

  @include media(lg) {
    &__slider {
      margin-top: 34px;
    }

    &__production {
      margin-top: 120px;
    }
  }

  @include media(xl) {
    &__slider {
      margin-top: 54px;
    }

    &__production {
      margin-top: 190px;
    }
  }
}
</style>
