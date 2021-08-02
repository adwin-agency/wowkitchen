import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import api from '../api'

export default function useForms() {
  const route = useRoute()
  const store = useStore()
  const sending = ref(false)
  const success = ref(false)
  const error = ref(false)
  const page = computed(() => route.path)
  const product = computed(() => store.state.productData)

  async function handleSubmit(e) {
    e.preventDefault()

    if (sending.value) {
      return
    }

    sending.value = true
    success.value = false
    error.value = false

    try {
      const response = await api.sendForm(e.target)
      const responseJson = await response.json()

      if (responseJson.status !== 'ok') {
        throw new Error()
      }

      sending.value = false
      success.value = true
      e.target.reset()
      store.commit('setModal', 'success')

    } catch {
      sending.value = false
      error.value = true
    }
  }

  return {
    sending,
    success,
    error,
    page,
    product,
    handleSubmit
  }
}
