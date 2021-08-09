<template>
  <div class="v-about">
    <SideFixed :pageData="page">
      <About />
    </SideFixed>
  </div>
</template>

<script>
import About from '../components/About.vue'
import SideFixed from '../components/SideFixed.vue'

export default {
  name: 'AboutView',
  components: {
    SideFixed,
    About
  },
  data() {
    return {
      page: {
        id: 'about',
        img: 'about-bg.jpg',
        heading: 'О нас',
        desc: [
          'Мы придумали, как снизить цены, не экономя на качестве: оптимизировали работу в каждом из цехов, организовали собственную службу доставки и отдел контроля качества.',
          'Оказалось, что следить за всеми процессами самостоятельно — не только полезно для качества, но и выгодно.'
        ],
        video: '/assets/video/intro.mp4'
      }
    }
  }
}
</script>
