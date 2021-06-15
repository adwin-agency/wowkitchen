<template>
  <div
    v-if="info"
    class="v-kitchen"
  >
    <Details :info="info" />
    <Constructor />
    <Equipment />
    <Design />
    <OtherProducts
      v-if="similars"
      heading="Другие модели"
      :products="similars"
    />
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
  },
  data() {
    return {
      info: null,
      similars: null
    }
  },
  async created() {
    const name = this.$route.params.kitchen
    const response = await fetch(`http://wowkitchen.beget.tech/local/templates/wow/api/kitchens.php?url=${name}`)
    const responseJson = await response.json()

    this.info = responseJson.info
    this.similars = responseJson.similars
  }
}
</script>

<style lang="scss">
.v-kitchen {
  .constructor {
    margin-top: 50px;
  }

  .steps {
    margin-top: 60px;
  }

  .rated-reviews {
    margin-top: 100px;
    margin-bottom: 60px;
  }

  @include media(md) {
    .constructor {
      margin-top: 60px;
    }

    .design {
      margin-top: 60px;
    }

    .other-products {
      margin-top: 85px;
    }

    .steps {
      margin-top: 100px;
    }

    .rated-reviews {
      margin-top: 140px;
      margin-bottom: 75px;
    }
  }

  @include media(lg) {
    .constructor {
      margin-top: 75px;
    }

    .design {
      margin-top: 85px;
    }

    .other-products {
      margin-top: 70px;
    }

    .rated-reviews {
      margin-top: 130px;
    }
  }

  @include media(xl) {
    .constructor {
      margin-top: 105px;
    }

    .design {
      margin-top: 105px;
    }

    .other-products {
      margin-top: 120px;
    }

    .steps {
      margin-top: 130px;
    }

    .rated-reviews {
      margin-top: 140px;
      margin-bottom: 110px;
    }
  }
}
</style>
