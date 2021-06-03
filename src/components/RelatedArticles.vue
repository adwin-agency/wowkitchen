<template>
  <div class="related-articles">
    <div class="container">
      <h2 class="related-articles__heading">Статьи по теме</h2>
      <div class="related-articles__grid">
        <ArticleCard
          v-for="(card, index) in cards"
          :key="index"
          :cardData="card"
          mod="related"
          class="related-articles__card"
        />
        <Subscribe class="related-articles__subscribe" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import Subscribe from './Subscribe.vue'
export default {
  name: 'RelatedArticles',
  components: {
    ArticleCard,
    Subscribe
  },
  data() {
    return {
      cards: [
        {
          image: 'article-02.jpg',
          tag: 'От эксперта',
          title: 'Что, где и как: идеи хранения на кухне',
          date: '20 сентября',
          views: 2071
        },
        {
          image: 'article-02.jpg',
          tag: 'От эксперта',
          title: 'Какой цвет выбрать для кухни в квартире на северной стороне',
          date: '26 сентября',
          views: 1843
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.related-articles {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 5px));
    grid-gap: 30px 10px;
    margin-top: 15px;
  }

  &__subscribe {
    grid-column: 1 / 3;
  }

  @include media(md) {
    &__grid {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      align-items: end;
      margin-top: 20px;
    }

    &__subscribe {
      grid-column: auto;
    }
  }

  @include media(lg) {
    &__heading {
      font-size: 24px;
    }

    &__grid {
      grid-gap: 60px;
    }
  }

  @include media(xl) {
    &__grid {
      margin-top: 50px;
    }
  }
}
</style>
