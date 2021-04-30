<template>
  <div class="v-technic">
    <TechnicDetails />
    <OtherProducts heading="Отлично подойдёт для этих кухонь" />
    <Steps />
  </div>
</template>

<script>
import TechnicDetails from '../components/TechnicDetails.vue'
import OtherProducts from '../components/OtherProducts.vue'
import Steps from '../components/Steps.vue'

export default {
  name: 'TechnicView',
  components: {
    TechnicDetails,
    OtherProducts,
    Steps
  }
}
</script>
