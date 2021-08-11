<template>
  <div class="v-pay-error">
    <Pay error />
  </div>
</template>

<script>
import Pay from '../components/Pay.vue'

export default {
  name: 'PayErrorView',
  components: {
    Pay
  }
}
</script>
