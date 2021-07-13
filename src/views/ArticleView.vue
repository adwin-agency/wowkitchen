<template>
  <div v-if="details" class="v-article">
    <Article
      :info="details.info"
      :cards="details.populars"
    />
    <RelatedArticles :cards="details.similars" />
    <PopularArticles
      v-if="$_media.sm"
      :cards="details.populars"
    />
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
import api from '../api'

export default {
  name: 'ArticleView',
  components: {
    Article,
    RelatedArticles,
    PopularArticles,
    DesignCall,
    ArticleSet
  },
  data() {
    return {
      details: {
        info: {},
        similars: [],
        populars: []
      }
    }
  },
  async created() {
    this.details = await api.loadDetails(this.$route)
    
    const info = this.details.info
    const crumbs = [{ path: '/blog', title: 'Блог' }, { path: '/blog?category=' + info.category, title: info.category_rus }]
    this.$store.commit('setBreadCrumbs', crumbs)
  },
  async beforeRouteUpdate(to) {
    this.details = null
    this.details = await api.loadDetails(to)
    
    const info = this.details.info
    const crumbs = [{ path: '/blog', title: 'Блог' }, { path: '/blog?category=' + info.category, title: info.category_rus }]
    this.$store.commit('setBreadCrumbs', crumbs)
  }
}
</script>

<style lang="scss">
.v-article {
  .related-articles {
    margin-top: 50px;
  }

  .popular-articles {
    margin-top: 60px;
  }

  .design-call {
    margin-top: 50px;
  }

  .article-set {
    margin-top: 50px;
    margin-bottom: 60px;
  }

  @include media(md) {
    .related-articles {
      margin-top: 40px;
    }

    .design-call {
      margin-top: 90px;
    }

    .article-set {
      margin-top: 60px;
    }
  }

  @include media(lg) {
    .related-articles {
      margin-top: 50px;
    }

    .design-call {
      margin-top: 170px;
    }

    .article-set {
      margin-top: 90px;
    }
  }

  @include media(xl) {
    .related-articles {
      margin-top: 90px;
    }

    .design-call {
      margin-top: 200px;
    }

    .article-set {
      margin-bottom: 100px;
    }
  }
}
</style>
