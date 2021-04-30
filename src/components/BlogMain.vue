<template>
  <div class="blog-main">
    <h1 class="blog-main__heading">Советы и идеи</h1>
    <AppTabs
      :tabs="tabs"
      search
      class="blog-main__tabs"
    />
    <div class="blog-main__top"></div>
    <div class="blog-main__cards"></div>
  </div>
</template>

<script>
import AppTabs from './base/AppTabs.vue'

export default {
  name: 'BlogMain',
  components: {
    AppTabs
  },
  data() {
    return {
      tabs: [
        'Все статьи',
        'Лайфхаки',
        'Спорные вопросы',
        'От эксперта',
        'Планировки',
        'Идеи для кухни',
        'Видео',
        'Популярное'
      ]
    }
  }
}
</script>
