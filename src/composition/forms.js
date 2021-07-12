import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import api from '../api'

export default function useForms() {
  const route = useRoute()
  const store = useStore()
  const sending = ref(false)
  const success = ref(false)
  const page = computed(() => route.path)
  const product = computed(() => store.state.productData)

  async function handleSubmit(e) {
    e.preventDefault()

    if (sending.value) {
      return
    }

    sending.value = true
    success.value = false
    const response = await api.sendForm(e.target)

    if (response.ok) {
      sending.value = false
      success.value = true
      e.target.reset()
      store.commit('setModal', 'success')
    }    
  }

  return {
    sending,
    success,
    page,
    product,
    handleSubmit
  }
}
