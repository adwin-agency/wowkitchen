<template>
  <Header class="app-header" />
  <RouterView />
  <Footer class="app-footer" :class="{'disabled': !loaded}" />
  <Modal />
  <SitePhone class="app-site-phone" />
  <AppArrowUp
    class="app-arrow-up"
    :class="{'active': activeArrowUp}"
  />
</template>

<script>
import api from './api'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'
import SitePhone from './components/SitePhone.vue'
import AppArrowUp from './components/base/AppArrowUp.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Modal,
    SitePhone,
    AppArrowUp
  },
  data() {
    return {
      scrollY: window.scrollY,
      activeArrowUp: false
    }
  },
  computed: {
    scrollLock() {
      return this.$store.getters.scrollLock || this.$store.state.introEffect
    },
    loaded() {
      return this.$store.state.loaded
    }
  },
  watch: {
    scrollLock(newStatus, status) {
      if (newStatus && newStatus !== status) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + 'px'
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = scrollbarWidth
        document.querySelector('.app-header').style.right = scrollbarWidth
        document.querySelector('.app-site-phone').style.right = scrollbarWidth

        const sideFixedImg = document.querySelector('.side-fixed__img')
        
        if (sideFixedImg) {
          sideFixedImg.style.right = scrollbarWidth
        }
      } else if (!newStatus) {
        setTimeout(() => {
          document.body.style.overflow = ''
          document.body.style.paddingRight = ''
          document.querySelector('.app-header').style.right = ''
          document.querySelector('.app-site-phone').style.right = ''

          const sideFixedImg = document.querySelector('.side-fixed__img')
        
          if (sideFixedImg) {
            sideFixedImg.style.right = ''
          }
        }, 300)
      }
    }
  },
  async created() {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)

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

    document.addEventListener('click', (e) => {
      if (e.target.closest('a[href^="tel"')) {
        window.fbq && window.fbq('track', 'Contact')
      }
    })
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    getCookie(name) {
      let matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'))
      return matches ? decodeURIComponent(matches[1]) : undefined
    },

    handleResize() {
      this.$store.commit('storeScreen', window.innerWidth)
    },

    handleScroll() {
      this.activeArrowUp = window.scrollY > 100 && window.scrollY < this.scrollY
      this.scrollY = window.scrollY
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

.app-footer {
  &.disabled {
    opacity: 0;
    pointer-events: none;
  }
}

.app-site-phone {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 100;
}

.app-arrow-up {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
  transition: transform .3s ease, opacity .3s ease;
  z-index: 90;

  @include media(md) {
    left: 40px;
    right: auto;
    bottom: 30px;
  }

  &.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
}
</style>
