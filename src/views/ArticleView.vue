<template>
  <div class="v-article">
    <Article />
    <RelatedArticles />
    <PopularArticles v-if="$_media.sm" />
    <DesignCall />
    <ArticleSet />
  </div>
</template>

<script>
import Article from '../components/Article.vue'
import ArticleSet from '../components/ArticleSet.vue'
import DesignCall from '../components/DesignCall.vue'
import PopularArticles from '../components/PopularArticles.vue'
import RelatedArticles from '../components/RelatedArticles.vue'

export default {
  name: 'ArticleView',
  components: {
    Article,
    RelatedArticles,
    PopularArticles,
    DesignCall,
    ArticleSet
  }
}
</script>
