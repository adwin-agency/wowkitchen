<template>
  <div class="v-kitchen">
    <Details />
    <Constructor />
    <Equipment />
    <Design />
    <OtherProducts heading="Другие модели" />
    <Steps />
    <RatedReviews />
  </div>
</template>

<script>
import Details from '../components/Details.vue'
import Constructor from '../components/Constructor.vue'
import Equipment from '../components/Equipment.vue'
import Design from '../components/Design.vue'
import OtherProducts from '../components/OtherProducts.vue'
import Steps from '../components/Steps.vue'
import RatedReviews from '../components/RatedReviews.vue'

export default {
  name: 'KitchenView',
  components: {
    Details,
    Constructor,
    Equipment,
    Design,
    OtherProducts,
    Steps,
    RatedReviews
  }
}
</script>
