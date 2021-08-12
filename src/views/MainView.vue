<template>
  <div class="v-main">
    <Intro />
    <Projects />
    <!-- <Solutions /> -->
    <!-- <ArticleSet /> -->
    <Design />
    <Equipment />
    <Steps />
    <RatedReviews :cards="reviews" />
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'
import Projects from '../components/Projects.vue'
// import Solutions from '../components/Solutions.vue'
import Design from '../components/Design.vue'
import Equipment from '../components/Equipment.vue'
import Steps from '../components/Steps.vue'
import RatedReviews from '../components/RatedReviews.vue'
// import ArticleSet from '../components/ArticleSet.vue'
import api from '../api'

export default {
  name: 'MainView',
  components: {
    Intro,
    Projects,
    // Solutions,
    Design,
    Equipment,
    Steps,
    RatedReviews,
    // ArticleSet
  },
  data() {
    return {
      reviews: []
    }
  },
  async created() {
    const reviewsResponse = await api.loadCards({ name: 'reviews' })
    this.reviews = reviewsResponse.reviews.slice(0, 4)
  }
}
</script>

<style lang="scss">
.v-main {
  .projects {
    margin-top: 40px;
  }

  .solutions,
  .article-set {
    margin-top: 205px;
  }

  .design {
    margin-top: 205px;
  }

  .steps {
    margin-top: 60px;
  }

  .rated-reviews {
    margin-top: 85px;
    margin-bottom: 50px;
  }

  @include media(md) {
    .intro {
      margin-top: 55px;
    }

    .projects {
      margin-top: 70px;
    }

    .solutions,
    .article-set {
      margin-top: 70px;
    }

    .design {
      margin-top: 150px;
    }

    .equipment {
      margin-top: 60px;
    }

    .steps {
      margin-top: 85px;
    }

    .rated-reviews {
      margin-top: 130px;
      margin-bottom: 55px;
    }
  }

  @include media(lg) {
    .intro {
      margin-top: 80px;
    }

    .projects {
      margin-top: 80px;
    }

    .equipment {
      margin-top: 200px;
    }

    .steps {
      margin-top: 110px;
    }

    .rated-reviews {
      margin-top: 140px;
      margin-bottom: 120px;
    }
  }

  @include media(xl) {
    .intro {
      margin-top: 65px;
    }

    .solutions,
    .article-set {
      margin-top: 150px;
    }

    .equipment {
      margin-top: 180px;
    }

    .steps {
      margin-top: 180px;
    }

    .rated-reviews {
      margin-top: 170px;
      margin-bottom: 130px;
    }
  }
}
</style>
