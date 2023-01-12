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

  function checkDuplicateTel(value) {
    const numStr = value.replace(/\D/g, '').slice(1)
    const numSet = new Set(numStr)
    return numSet.size <= 1
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const required = e.target.querySelectorAll('[required]')
    let isError = false

    for (let input of required) {
      if (input.type === 'tel' && (input.value.length < 16 || checkDuplicateTel(input.value))) {
        input.classList.add('is-error')
        isError = true
      }

      if (input.name === 'contract-l' && !/^(Д|Ш|ДШ)?С$/.test(input.value)) {
        input.classList.add('is-error')
        isError = true
      }
    }

    const addNumInput = e.target.querySelector('input[name="additional_number"]')

    if (addNumInput && addNumInput.value.length > 0 && addNumInput.value.length < 6) {
      addNumInput.classList.add('is-error')
      isError = true
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

    setTimeout(async () => {
      try {
        const response = await api.sendForm(e.target)
        const responseJson = await response.json()

        if (responseJson.status !== 'ok') {
          throw new Error()
        }

        sending.value = false
        success.value = true
        e.target.reset()

        if (responseJson.confirmation_url) {
          window.location.href = responseJson.confirmation_url
        } else {
          store.commit('setModal', 'success')
        }

        const formType = e.target.querySelector('input[name="type"]').value

        if (store.state.kitchenDetails && formType !== 'calc') {
          const { id, name, category_rus } = store.state.kitchenDetails.info
          api.ecommerce('purchase', id, name, 'Кухни/' + category_rus)
        }

      } catch {
        sending.value = false
        error.value = true
      }
    }, 500)
  }

  return {
    sending,
    success,
    error,
    page,
    handleSubmit
  }
}
