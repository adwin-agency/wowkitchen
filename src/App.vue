<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  created() {
    window.addEventListener('resize', this.handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.$store.commit('storeScreen', window.innerWidth)
    }
  }
}
</script>

<style lang="scss">
.app {
  overflow: hidden;
}
</style>
