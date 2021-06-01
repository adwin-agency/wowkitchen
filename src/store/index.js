import { createStore } from 'vuex'

export default createStore({
  state: {
    windowWidth: window.innerWidth,
    modal: null,
    mobileMenu: false
  },
  mutations: {
    storeScreen(state, width) {
      state.windowWidth = width
    },
    setModal(state, modal) {
      state.modal = modal
    },
    setMobileMenu(state, status) {
      state.mobileMenu = status
    }
  }
})
