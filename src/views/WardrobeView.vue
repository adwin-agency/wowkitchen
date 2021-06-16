<template>
  <div class="v-wardrobe">
    <WardrobeDetails
      v-if="info"
      :info="info"
    />
    <WardrobeParts />
    <WardrobeMaterials />
    <WardrobeFeatures />
    <WardrobeService />
    <QuizPreview type="wardrobes" />
    <OtherWardrobes
      v-if="similars"
      :wardrobes="similars"
    />
  </div>
</template>

<script>
import WardrobeDetails from '../components/WardrobeDetails.vue'
import WardrobeParts from '../components/WardrobeParts.vue'
import WardrobeMaterials from '../components/WardrobeMaterials.vue'
import WardrobeFeatures from '../components/WardrobeFeatures.vue'
import WardrobeService from '../components/WardrobeService.vue'
import QuizPreview from '../components/QuizPreview.vue'
import OtherWardrobes from '../components/OtherWardrobes.vue'

export default {
  name: 'WardrobeView',
  components: {
    WardrobeDetails,
    WardrobeParts,
    WardrobeMaterials,
    WardrobeFeatures,
    WardrobeService,
    QuizPreview,
    OtherWardrobes
  },
  data() {
    return {
      info: null,
      similars: null
    }
  },
  async created() {
    const name = this.$route.params.product
    const response = await fetch(`http://wowkitchen.beget.tech/local/templates/wow/api/closets.php?url=${name}`)
    const responseJson = await response.json()

    this.info = responseJson.info
    this.similars = responseJson.similars
  }
}
</script>

<style lang="scss">
.v-wardrobe {
  .wardrobe-parts {
    margin-top: 40px;
  }

  .wardrobe-materials {
    margin-top: 25px;
  }

  .wardrobe-features {
    margin-top: 60px;
  }

  .wardrobe-service {
    margin-top: 20px;
  }

  .quiz-preview {
    margin-top: 70px;
  }

  .other-wardrobes {
    margin-top: 40px;
    margin-bottom: 50px;
  }

  @include media(md) {
    .wardrobe-details {
      margin-top: 55px;
    }

    .wardrobe-parts {
      margin-top: 60px;
    }

    .wardrobe-materials {
      margin-top: 65px;
    }

    .wardrobe-features {
      margin-top: 95px;
    }

    .wardrobe-service {
      margin-top: 90px;
    }

    .other-wardrobes {
      margin-top: 80px;
      margin-bottom: 65px;
    }
  }

  @include media(lg) {
    .wardrobe-details {
      margin-top: 50px;
    }

    .wardrobe-parts {
      margin-top: 70px;
    }

    .wardrobe-materials {
      margin-top: 85px;
    }

    .wardrobe-features {
      margin-top: 75px;
    }

    .wardrobe-service {
      margin-top: 105px;
    }

    .other-wardrobes {
      margin-top: 115px;
    }
  }

  @include media(xl) {
    .wardrobe-materials {
      margin-top: 120px;
    }

    .wardrobe-features {
      margin-top: 135px;
    }

    .wardrobe-service {
      margin-top: 125px;
    }

    .quiz-preview {
      margin-top: 170px;
    }

    .other-wardrobes {
      margin-top: 135px;
      margin-bottom: 100px;
    }
  }
}
</style>
