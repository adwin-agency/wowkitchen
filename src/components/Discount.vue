<template>
  <div class="discount">
    <div class="container">
      <h2 class="discount__title">Акции</h2>
      <div class="discount__container">
        <div class="discount__cards">
          <DiscountCard class="discount__card discount__card_main" />
          <DiscountCard
            class="discount__card"
            :type="1"
          />
          <DiscountCard
            class="discount__card"
            :type="2"
          />
          <DiscountCard
            class="discount__card"
            :type="3"
          />
          <DiscountCard
            class="discount__card"
            :type="4"
          />
          <DiscountCard
            class="discount__card"
            :type="5"
          />
          <DiscountCard
            class="discount__card"
            :type="6"
          />
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
    promoDate() {
      const today = new Date()
      const date = new Date(today.getFullYear(), today.getMonth() + 1, 0)
      return (
        'до ' +
        ('0' + date.getDate()).slice(-2) +
        '.' +
        ('0' + (date.getMonth() + 1)).slice(-2)
      )
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

      &:nth-child(6) {
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
