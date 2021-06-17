import { createStore } from 'vuex'

let favorites = localStorage.getItem('favorites')

if (favorites) {
  favorites = JSON.parse(favorites)
} else {
  favorites = []
}

export default createStore({
  state: {
    windowWidth: window.innerWidth,
    modal: null,
    modalData: null,
    mobileMenu: false,
    activeFavorites: false,
    favoriteItems: favorites
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
    setActiveFavorites(state, status) {
      state.activeFavorites = status
    },
    setFavoriteItem(state, item) {
      const isFavorite = state.favoriteItems.find(i => i.id === item.id)

      if (isFavorite) {
        state.favoriteItems = state.favoriteItems.filter(i => i.id !== item.id)
      } else {
        state.favoriteItems = [...state.favoriteItems, item]
      }

      localStorage.setItem('favorites', JSON.stringify(state.favoriteItems))
    }
  }
})
