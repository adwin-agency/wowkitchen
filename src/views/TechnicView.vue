<template>
  <div class="v-technic">
    <TechnicDetails
      v-if="details"
      :info="details.info"
    />
    <OtherProducts
      v-if="details"
      heading="Отлично подойдёт для этих кухонь"
      :products="details.kitchens"
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
      details: null
    }
  },
  async created() {
    this.details = await api.loadDetails(this.$route)
    this.setBreadCrumbs()
  },
  async beforeRouteUpdate(to) {
    this.details = null
    this.details = await api.loadDetails(to)
    this.setBreadCrumbs()
  },
  methods: {
    setBreadCrumbs() {
      const info = this.details.info
      const crumbs = [{ path: '/technics', title: 'Техника' }, { path: '/technics?category=' + info.category, title: info.category_rus }]

      this.$store.commit('setBreadCrumbs', crumbs)
    }
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
