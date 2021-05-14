<template>
  <div class="v-guarantee">
    <SideFixed :pageData="page">
      <Guarantee />
    </SideFixed>
  </div>
</template>

<script>
import Guarantee from '../components/Guarantee.vue'
import SideFixed from '../components/SideFixed.vue'

export default {
  name: 'GuaranteeView',
  components: {
    SideFixed,
    Guarantee
  },
  data() {
    return {
      page: {
        id: 'guarantee',
        img: 'guarantee-bg.jpg',
        heading: 'Гарантия',
        desc: [
          'Мы продаем только кухни, изготовленные на нашем заводе.',
          'Благодаря контролю производства на каждом этапе, мы делаем качественный продукт и даем гарантию.'
        ]
      }
    }
  }
}
</script>
