<template>
  <div class="v-kitchen">
    <Details :info="details?.info" />
    <Constructor />
    <Equipment />
    <DiscountPreview />
    <Design />
    <KitchenSet
      v-if="details"
      heading="Другие модели"
      :products="details.similars"
    />
    <Steps />
    <RatedReviews :cards="reviews" />
  </div>
</template>

<script>
import Details from '../components/Details.vue'
import Constructor from '../components/Constructor.vue'
import Equipment from '../components/Equipment.vue'
import Design from '../components/Design.vue'
import KitchenSet from '../components/KitchenSet.vue'
import Steps from '../components/Steps.vue'
import RatedReviews from '../components/RatedReviews.vue'
import DiscountPreview from '../components/DiscountPreview.vue'
import api from '../api'

export default {
  name: 'KitchenView',
  components: {
    Details,
    Constructor,
    Equipment,
    Design,
    KitchenSet,
    Steps,
    RatedReviews,
    DiscountPreview
  },
  data() {
    return {
      details: null,
      reviews: []
    }
  },
  async created() {
    const details = await api.loadDetails(this.$route)
    this.details = details
    this.$store.commit('setKitchenDetails', details)
    this.setBreadCrumbs()
    this.tmrPush()
    this.ecommercePush()

    const reviewsResponse = await api.loadCards({ name: 'reviews' })
    this.reviews = reviewsResponse.reviews.slice(0, 4)
  },
  async beforeRouteUpdate(to) {
    const details = await api.loadDetails(to)
    this.details = details
    this.$store.commit('setKitchenDetails', details)
    this.setBreadCrumbs()
    this.tmrPush()
    this.ecommercePush()
  },
  beforeRouteLeave() {
    this.$store.commit('setKitchenDetails', null)
  },
  methods: {
    setBreadCrumbs() {
      const info = this.details.info
      const crumbs = [
        { path: '/kitchens', title: 'Кухни' },
        {
          path: '/kitchens?category=' + info.category,
          title: info.category_rus
        }
      ]

      this.$store.commit('setBreadCrumbs', crumbs)
    },
    tmrPush() {
      const _tmr = window._tmr || (window._tmr = [])

      _tmr.push({
        type: 'itemView',
        productid: this.details.info.id.toString(),
        pagetype: 'product',
        list: '2',
        totalvalue: this.details.info.price
      })
    },
    ecommercePush() {
      const { id, name, category_rus } = this.details.info

      api.ecommerce('detail', id, name, 'Кухни/' + category_rus)
    }
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

    .discount-preview {
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

    .discount-preview {
      margin-top: 85px;
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

    .discount-preview {
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
