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

app.config.globalProperties.$_basepath = 'http://wowkitchen.beget.tech'

app.directive('intro-effect', {
  mounted(el) {			
		// left: 37, up: 38, right: 39, down: 40,
		// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
		const keys = [32, 37, 38, 39, 40]

		function preventDefault(e) {
			e = e || window.event
			
      if (e.preventDefault) {
				e.preventDefault()
      }
			
      e.returnValue = false
		}

		function keydown(e) {
			for (var i = keys.length; i--;) {
				if (e.keyCode === keys[i]) {
					preventDefault(e)
					return
				}
			}
		}

		function touchmove(e) {
			preventDefault(e)
		}

		function wheel() {
		}

		function disableScroll() {
			window.onmousewheel = document.onmousewheel = wheel
			document.onkeydown = keydown
			document.body.ontouchmove = touchmove
		}

		function enableScroll() {
			window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null
		}

		let docElem = window.document.documentElement,
				scrollVal,
				isRevealed, 
				noscroll, 
				isAnimating

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop
		}
				
		el.scrollPage = () => {
			scrollVal = scrollY()
					
			if (noscroll) {
				if (scrollVal < 0) {
          return false
        }

				window.scrollTo(0, 0)
			}

			if (el.classList.contains('no-transition')) {
        el.classList.remove('no-transition')
				return false
			}

			if (isAnimating) {
				return false
			}
					
			if (scrollVal <= 0 && isRevealed) {
				toggleReveal(0)
			} else if (scrollVal > 0 && !isRevealed) {
				toggleReveal(1)
			}
		}

		function toggleReveal(reveal) {
			isAnimating = true
					
			if (reveal) {
        el.classList.add('is-modified')
			} else {
				noscroll = true
				disableScroll()
        el.classList.remove('is-modified')
			}

			setTimeout( function() {
				isRevealed = !isRevealed
				isAnimating = false
				if (reveal) {
					noscroll = false
					enableScroll()
				}
			}, 1000 )
		}

		const pageScroll = scrollY()
		noscroll = pageScroll === 0
				
		disableScroll()
				
		if (pageScroll) {
			isRevealed = true
      el.classList.add('no-transition')
      el.classList.add('is-modified')
		}
				
		window.addEventListener('scroll', el.scrollPage)
		
  },
  unmounted(el) {
    window.removeEventListener('scroll', el.scrollPage)
  }
})

app.directive('outside-click', {
	created(el, binding) {
		el.outsideClickEvent = (event) => {
			if (!(el == event.target || el.contains(event.target))) {
				binding.value()
			}
		}
		document.addEventListener('click', el.outsideClickEvent)
	},
	unmounted(el) {
		document.removeEventListener('click', el.outsideClickEvent)
	}
})

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
