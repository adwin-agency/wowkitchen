<template>
  <div class="v-kitchen">
    <Details />
    <Constructor />
    <Equipment />
    <Design />
    <OtherProducts heading="Другие модели" />
    <Steps />
    <ReviewsSample />
  </div>
</template>

<script>
import Details from '../components/Details.vue'
import Constructor from '../components/Constructor.vue'
import Equipment from '../components/Equipment.vue'
import Design from '../components/Design.vue'
import OtherProducts from '../components/OtherProducts.vue'
import Steps from '../components/Steps.vue'
import ReviewsSample from '../components/ReviewsSample.vue'

export default {
  name: 'KitchenView',
  components: {
    Details,
    Constructor,
    Equipment,
    Design,
    OtherProducts,
    Steps,
    ReviewsSample
  }
}
</script>
