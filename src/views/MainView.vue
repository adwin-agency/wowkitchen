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
