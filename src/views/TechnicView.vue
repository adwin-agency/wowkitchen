<template>
  <div class="v-technic">
    <TechnicDetails :info="details.info" />
    <OtherProducts
      heading="Отлично подойдёт для этих кухонь"
      :products="details.similars"
    />
    <Steps />
  </div>
</template>

<script>
import TechnicDetails from '../components/TechnicDetails.vue'
import OtherProducts from '../components/OtherProducts.vue'
import Steps from '../components/Steps.vue'
import api from '../api'

export default {
  name: 'TechnicView',
  components: {
    TechnicDetails,
    OtherProducts,
    Steps
  },
  data() {
    return {
      details: {
        info: {},
        similars: []
      }
    }
  },
  async created() {
    this.details = await api.loadDetails(this.$route)
  }
}
</script>

<style lang="scss">
.v-technic {
  .technic-details {
    margin-top: 20px;
  }

  .other-products {
    margin-top: 30px;
  }

  .steps {
    margin-top: 50px;
    margin-bottom: 30px;
  }

  @include media(md) {
    .technic-details {
      margin-top: 45px;
    }

    .other-products {
      margin-top: 35px;
    }

    .steps {
      margin-top: 110px;
      margin-bottom: 100px;
    }
  }

  @include media(lg) {
    .technic-details {
      margin-top: 60px;
    }

    .other-products {
      margin-top: 65px;
    }

    .steps {
      margin-top: 95px;
    }
  }

  @include media(xl) {
    .other-products {
      margin-top: 80px;
    }

    .steps {
      margin-top: 135px;
      margin-bottom: 155px;
    }
  }
}
</style>
