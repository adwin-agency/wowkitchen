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

export default {
  name: 'Solutions',
  components: {
    CardSlider,
    Production
  },
  data() {
    return {
      cards: [
        {title: 'Скандинавский стиль'},
        {title: 'Современный стиль'},
        {title: 'Стиль неоклассика'}
      ]
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
