import 'swiper/swiper.scss'
import './assets/styles/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App).use(store).use(router)

app.config.globalProperties.$_breakpoints = {
  xs: 375,
  sm: 600,
  md: 970,
  lg: 1290,
  xl: 1610
}

app.mixin({
  computed: {
    $_windowWidth() {
      return this.$store.state.windowWidth
    },
    $_mobile() {
      return this.$_windowWidth < this.$_breakpoints.lg
    },
    $_desktop() {
      return this.$_windowWidth >= this.$_breakpoints.lg
    },
    $_media() {
      return {
        sm: this.$_windowWidth < this.$_breakpoints.md,
        md: this.$_windowWidth >= this.$_breakpoints.md && this.$_windowWidth < this.$_breakpoints.lg,
        lg: this.$_windowWidth >= this.$_breakpoints.lg && this.$_windowWidth < this.$_breakpoints.xl,
        xl: this.$_windowWidth >= this.$_breakpoints.xl,
      }
    }
  }
})

app.mount('#app')
