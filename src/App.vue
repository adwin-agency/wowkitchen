<template>
  <Header class="app-header" />
  <RouterView />
  <Footer />
  <Modal />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Modal
  },
  computed: {
    scrollLock() {
      return this.$store.state.modal || this.$store.state.mobileMenu
    }
  },
  watch: {
    scrollLock(newStatus, status) {
      if (newStatus && newStatus !== status) {

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + 'px'
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = scrollbarWidth
        document.querySelector('.app-header').style.paddingRight = scrollbarWidth

      } else if (!newStatus) {

        setTimeout(() => {
          document.body.style.overflow = ''
          document.body.style.paddingRight = ''
          document.querySelector('.app-header').style.paddingRight = ''
        }, 300)

      }
    }
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
