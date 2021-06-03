<template>
  <div class="v-blog">
    <BlogTop />
    <BlogCards :cards="cards.slice(0, 5)" />
    <DesignCall />
    <BlogCards
      :cards="cards.slice(5)"
      subscribe
      show
    />
    <ArticleSet />
    <QuizPreview type="kitchens" />
  </div>
</template>

<script>
import BlogCards from '../components/BlogCards.vue'
import ArticleSet from '../components/ArticleSet.vue'
import BlogTop from '../components/BlogTop.vue'
import DesignCall from '../components/DesignCall.vue'
import QuizPreview from '../components/QuizPreview.vue'

export default {
  name: 'BlogView.vue',
  components: {
    BlogTop,
    BlogCards,
    DesignCall,
    ArticleSet,
    QuizPreview
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
        },
        {
          image: 'article-02.jpg',
          tag: 'От эксперта',
          title: 'Из чего будем строить: гайд по выбору материала',
          date: '15 ноября',
          views: 1843
        },
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
          views: 1843,
          wide: true
        },
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
        },
        {
          image: 'article-02.jpg',
          tag: 'От эксперта',
          title: 'Из чего будем строить: гайд по выбору материала',
          date: '15 ноября',
          views: 1843
        },
        {
          image: 'article-02.jpg',
          tag: 'От эксперта',
          title: 'Какой цвет выбрать для кухни в квартире на северной стороне',
          date: '26 сентября',
          views: 1843,
          wide: true
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.v-blog {
  .blog-top {
    margin-top: 25px;
  }

  .blog-cards {
    margin-top: 45px;
  }

  .design-call {
    margin-top: 55px;
  }

  .article-set {
    margin-top: 50px;
  }

  .quiz-preview {
    margin-top: 20px;
  }

  @include media(md) {
    .blog-top {
      margin-top: 40px;
    }

    .blog-cards {
      margin-top: 30px;
    }

    .design-call {
      margin-top: 80px;
      margin-bottom: 65px;
    }

    .article-set {
      margin-top: 80px;
    }

    .quiz-preview {
      margin-top: 80px;
    }
  }

  @include media(lg) {
    .blog-top {
      margin-top: 30px;
    }

    .blog-cards {
      margin-top: 55px;
    }

    .design-call {
      margin-top: 170px;
      margin-bottom: 110px;
    }

    .quiz-preview {
      margin-top: 95px;
    }
  }

  @include media(xl) {
    .blog-top {
      margin-top: 60px;
    }

    .blog-cards {
      margin-top: 85px;
    }

    .design-call {
      margin-top: 160px;
      margin-bottom: 95px;
    }

    .article-set {
      margin-top: 90px;
    }

    .quiz-preview {
      margin-top: 125px;
    }
  }
}
</style>
