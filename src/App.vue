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
import api from './api'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Modal
  },
  computed: {
    scrollLock() {
      return this.$store.getters.scrollLock || this.$store.state.introEffect
    }
  },
  watch: {
    scrollLock(newStatus, status) {
      if (newStatus && newStatus !== status) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + 'px'
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = scrollbarWidth
        document.querySelector('.app-header').style.right = scrollbarWidth

        const sideFixedImg = document.querySelector('.side-fixed__img')
        
        if (sideFixedImg) {
          sideFixedImg.style.right = scrollbarWidth
        }
      } else if (!newStatus) {
        setTimeout(() => {
          document.body.style.overflow = ''
          document.body.style.paddingRight = ''
          document.querySelector('.app-header').style.right = ''

          const sideFixedImg = document.querySelector('.side-fixed__img')
        
          if (sideFixedImg) {
            sideFixedImg.style.right = ''
          }
        }, 300)
      }
    }
  },
  async created() {
    // document.cookie = 'city='
    window.addEventListener('resize', this.handleResize)

    const main = await api.loadMain()
    const detectedCity = main.detected_city
    const selectedCity = this.getCookie('city')

    const cities = {}

    for (let city of main.cities) {
      cities[city.code] = city
    }

    this.$store.commit('setCities', cities)

    if (selectedCity) {
      this.$store.commit('setActiveCity', selectedCity)
    } else {
      this.$store.commit('setActiveCity', detectedCity)
      this.$store.commit('setCityDetection', true)
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    getCookie(name) {
      let matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'))
      return matches ? decodeURIComponent(matches[1]) : undefined
    },

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
  right: 0;
  z-index: 100;
}
</style>
