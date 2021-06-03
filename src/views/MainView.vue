<template>
  <div class="v-main">
    <Intro />
    <Projects />
    <Solutions />
    <Design />
    <Equipment />
    <Steps />
    <RatedReviews />
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'
import Projects from '../components/Projects.vue'
import Solutions from '../components/Solutions.vue'
import Design from '../components/Design.vue'
import Equipment from '../components/Equipment.vue'
import Steps from '../components/Steps.vue'
import RatedReviews from '../components/RatedReviews.vue'

export default {
  name: 'MainView',
  components: {
    Intro,
    Projects,
    Solutions,
    Design,
    Equipment,
    Steps,
    RatedReviews
  }
}
</script>

<style lang="scss">
.v-main {
  .projects {
    margin-top: 40px;
  }

  .solutions {
    margin-top: 205px;
  }

  .design {
    margin-top: 65px;
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

    .solutions {
      margin-top: 70px;
    }

    .design {
      margin-top: 85px;
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

    .solutions {
      margin-top: 150px;
    }

    .design {
      margin-top: 110px;
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
