import { createStore } from 'vuex'

export default createStore({
  state: {
    windowWidth: window.innerWidth,
    modal: null,
    modalData: null,
    mobileMenu: false,
    favorite: false
  },

  mutations: {
    storeScreen(state, width) {
      state.windowWidth = width
    },
    setModal(state, modal) {
      state.modal = modal
    },
    setModalData(state, data) {
      state.modalData = data
    },
    setMobileMenu(state, status) {
      state.mobileMenu = status
    },
    setFavorite(state, status) {
      state.favorite = status
    }
  }
})
