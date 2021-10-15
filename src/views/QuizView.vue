<template>
  <div class="v-quiz">
    <Quiz v-if="$route.name === 'quiz'" />
    <QuizWardrobe v-else />
  </div>
</template>

<script>
import Quiz from '../components/Quiz.vue'
import QuizWardrobe from '../components/QuizWardrobe.vue'

export default {
  name: 'QuizView',
  components: {
    Quiz,
    QuizWardrobe
  }
}
</script>
