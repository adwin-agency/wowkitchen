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

  async function handleSubmit(e) {
    e.preventDefault()

    const required = e.target.querySelectorAll('[required]')
    let isError = false

    for (let input of required) {
      if (input.type === 'tel' && input.value.length < 16) {
        input.classList.add('is-error')
        isError = true
      }

      if (input.name === 'contract-l' && !/^Д?С$/.test(input.value)) {
        input.classList.add('is-error')
        isError = true
      }
    }

    if (isError) {
      const errorInput = e.target.querySelector('.is-error')
      const rectTop = errorInput.getBoundingClientRect().top
      const headerHeight = document.querySelector('.header').offsetHeight

      if (rectTop < headerHeight + 50) {
        window.scrollTo(0, rectTop + window.scrollY - headerHeight - 50)
      }

      return
    }

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
    handleSubmit
  }
}
