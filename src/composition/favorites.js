import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useFavorites(props) {
  const store = useStore()
  const isFavorite = computed(() => store.state.favoriteItems.find(i => i.id === props.info.id))

  function toggleFavorite(data) {
    const item = {
      id: data.id,
      image: data.pictures[0].small.path,
      type: data.product_type || data.category_rus,
      name: data.name,
      price: data.price,
      oldPrice: data.old_price,
      url: '/' + data.category_link.split('/')[0] + '/' + data.url
    }

    store.commit('setFavoriteItem', item)
  }

  return {
    isFavorite,
    toggleFavorite
  }
}
