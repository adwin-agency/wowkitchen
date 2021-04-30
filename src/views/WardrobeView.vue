<template>
  <div class="v-wardrobe">
    <WardrobeDetails />
    <WardrobeParts />
    <WardrobeMaterials />
    <WardrobeFeatures />
    <WardrobeService />
    <QuizPreview type="wardrobes" />
    <OtherWardrobes />
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
  }  
}
</script>
