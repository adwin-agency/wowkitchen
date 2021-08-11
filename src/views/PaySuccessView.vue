<template>
  <div class="v-pay-success">
    <Pay success />
  </div>
</template>

<script>
import Pay from '../components/Pay.vue'

export default {
  name: 'PaySuccessView',
  components: {
    Pay
  }
}
</script>
