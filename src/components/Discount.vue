<template>
  <div class="discount">
    <div class="container">
      <h2 class="discount__title">Акции</h2>
      <div class="discount__container">
        <div class="discount__cards">
          <DiscountCard class="discount__card discount__card_main" />
          <template v-if="bonuses.length">
            <DiscountCard
              v-for="item in bonuses"
              :key="item.id"
              class="discount__card"
              :id="item.id"
              :date="item.date"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiscountCard from './DiscountCard.vue'

export default {
  name: 'Discount',
  components: {
    DiscountCard
  },
  computed: {
    bonuses() {
      return this.$store.state.bonuses
    }
  }
}
</script>

<style lang="scss">
.discount {
  $b: &;

  &__title {
    display: none;
  }

  &__card {
    margin: 0 auto 4px;
    width: 100%;
    max-width: 380px;
  }

  @include media(md) {
    &__cards {
      display: grid;
      margin-right: 0;
      padding-top: 40px;
      padding-bottom: 50px;
      grid-template-columns: 300px repeat(2, 1fr);
      grid-gap: 20px;
    }

    &__card {
      max-width: none;

      &_main {
        grid-row: 1/3;
      }

      &:nth-child(2n + 6) {
        grid-column-start: 2;
      }
    }
  }

  @include media(lg) {
    &__cards {
      grid-gap: 30px;
      padding-bottom: 100px;
      grid-template-columns: 400px repeat(2, 1fr);
    }
  }

  @include media(xl) {
    &__title {
      font-size: 50px;
      font-weight: bold;
      line-height: 1.44;
      display: block;
      margin-top: 65px;
    }

    &__cards {
      grid-template-columns: 480px repeat(2, 1fr);
    }
  }
}
</style>
