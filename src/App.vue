<template>
  <Header class="app-header" />
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
  padding-top: $header-bar-height;
  overflow: hidden;

  @include media(md) {
    padding-top: $header-bar-height-md;
  }

  @include media(lg) {
    padding-top: $header-bar-height-lg + $nav-panel-height-lg;
  }

  @include media(xl) {
    padding-top: $header-bar-height-xl + $nav-panel-height-xl;
  }
}

.app-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}
</style>
