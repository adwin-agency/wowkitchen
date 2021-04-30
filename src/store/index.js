import { createStore } from 'vuex'

export default createStore({
  state: {
    windowWidth: window.innerWidth
  },
  mutations: {
    storeScreen(state, width) {
      state.windowWidth = width
    }
  }
})
