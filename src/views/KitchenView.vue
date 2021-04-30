<template>
  <div class="v-kitchen">
    <Details />
    <Constructor />
    <Materials />
    <Design />
    <OtherProducts />
    <Steps />
    <InnerReviews />
  </div>
</template>

<script>
import Details from '../components/Details.vue'
import Constructor from '../components/Constructor.vue'
import Materials from '../components/Materials.vue'
import Design from '../components/Design.vue'
import OtherProducts from '../components/OtherProducts.vue'
import Steps from '../components/Steps.vue'
import InnerReviews from '../components/InnerReviews.vue'

export default {
  name: 'KitchenView',
  components: {
    Details,
    Constructor,
    Materials,
    Design,
    OtherProducts,
    Steps,
    InnerReviews
  }
}
</script>
