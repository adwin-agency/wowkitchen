<template>
  <div class="blog-cards">
    <div class="container">
      <div class="blog-cards__grid">
        <ArticleCard
          v-for="(card, index) in cards"
          :key="index"
          :cardData="card"
          class="blog-cards__card"
          :class="{'blog-cards__card_wide': card.wide}"
        />
        <Subscribe
          v-if="subscribe"
          class="blog-cards__subscribe"
        />
      </div>
      <AppButton
        v-if="show"
        icon="plus"
        title="Показать больше"
        color="gray"
        show
        class="blog-cards__show"
      />
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import ArticleCard from './ArticleCard.vue'
import Subscribe from './Subscribe.vue'

export default {
  name: 'BlogCards',
  components: {
    ArticleCard,
    Subscribe,
    AppButton
  },
  props: {
    cards: Array,
    subscribe: Boolean,
    show: Boolean
  }
}
</script>

<style lang="scss">
.blog-cards {
  &__card {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__show {
    margin-top: 50px;
    width: 100%;
  }

  @include media(md) {
    &__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }

    &__card {
      margin-bottom: 0;

      &_wide {
        grid-column: span 2;
      }
    }

    &__show {
      margin-top: 60px;
    }
  }

  @include media(lg) {
    &__grid {
      grid-gap: 70px 60px;
    }
  }

  @include media(xl) {
    &__grid {
      grid-gap: 80px 70px;
    }
  }
}
</style>
