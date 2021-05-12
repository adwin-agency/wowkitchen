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
    <BlogSelection />
    <QuizPreview type="kitchens" />
  </div>
</template>

<script>
import BlogCards from '../components/BlogCards.vue'
import BlogSelection from '../components/BlogSelection.vue'
import BlogTop from '../components/BlogTop.vue'
import DesignCall from '../components/DesignCall.vue'
import QuizPreview from '../components/QuizPreview.vue'

export default {
  name: 'BlogView.vue',
  components: {
    BlogTop,
    BlogCards,
    DesignCall,
    BlogSelection,
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
