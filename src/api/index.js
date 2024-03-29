// const dataPath = process.env.NODE_ENV === 'production' ? '/local/templates/wow/api' : 'https://wowkitchen.ru/local/templates/wow/api'
const dataPath = '/local/templates/wow/api'
const sendPath = process.env.NODE_ENV === 'production' ? '' : 'https://wowkitchen.ru'

const api = {
  async loadMain() {
    const response = await fetch(`${dataPath}/main.php`)
    const responseJson = await response.json()

    return responseJson
  },

  async loadCards(route) {
    const fileNames = {
      kitchens: 'kitchens',
      wardrobes: 'closets',
      technics: 'technics',
      blog: 'blog',
      reviews: 'reviews'
    }

    let search = []

    for (let key in route.query) {
      search.push(`${key}=${route.query[key]}`)
    }

    search = search.join('&')

    if (search) {
      search = '?' + search
    }

    const response = await fetch(`${dataPath}/${fileNames[route.name]}.php${search}`)
    const responseJson = await response.json()

    return responseJson
  },

  async loadDetails(route) {
    const fileNames = {
      kitchen: 'kitchens',
      wardrobe: 'closets',
      technic: 'technics',
      article: 'blog'
    }

    const code = route.params.code
    const response = await fetch(`${dataPath}/${fileNames[route.name]}.php?url=${code}`)
    const responseJson = await response.json()

    return responseJson
  },

  async sendForm(form) {
    const formData = new FormData(form)

    if (window.Comagic) {
      const comagicData = window.Comagic.getCredentials()

      for (let item in comagicData) {
        formData.append(item, comagicData[item])
      }
    }

    // метрика ClientID
    const clientID = window.yaCounter34624840?.getClientID()

    if (clientID) {
      formData.append('clientID', clientID)
    }
    //

    let formType = formData.get('type')
    const url = formType === 'payment' ? '/include/youkassa/payment.php' : '/send.php'
    const product = form.getAttribute('data-product')

    if (product && product !== 'kitchen') {
      formType += '_' + product
    }

    const response = await fetch(sendPath + url, {
      method: 'POST',
      body: formData
    })

    window.fbq && window.fbq('track', 'Lead')
    window.VK && window.VK.Retargeting.Event('lead')
    window.gtag && window.gtag('event', formType, { event_category: 'Forms' })
    window.ym && window.ym(34624840, 'reachGoal', formType)
    window.yaCounter34624840 && window.yaCounter34624840.reachGoal(formType)

    if (formType !== 'payment') {
      window.ym && window.ym(34624840, 'reachGoal', 'lead')
      window.yaCounter34624840 && window.yaCounter34624840.reachGoal('lead')
    }

    if (formType === 'calc' || formType === 'calc_wardrobe') {
      const _tmr = window._tmr || (window._tmr = [])

      // _tmr.push({ type: 'reachGoal', id: 3235784, goal: 'vk_ecom_purchase'})
      _tmr.push({ type: 'reachGoal', id: 3235784, goal: 'lead'})
    }

    window.dataLayer = window.dataLayer || []

    if (formType !== 'guarantee' && formType !== 'payment' && formType !== 'review') {
      window.dataLayer.push({ 'event': 'submit_form' })
    }

    window.dataLayer.push({ 'event': formType })

    return response
  },

  ecommerce(actionType, id, name, category, price) {
    const entry = {
      ecommerce: {
        currencyCode: 'RUB',
        [actionType]: {
          products: [
            {
              id,
              name,
              category,
              quantity: 1
            }
          ]
        }
      }
    }

    if (actionType === 'purchase') {
      entry.ecommerce[actionType].actionField = {
        id
      }
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(entry)

    // tmr
    var tmrGoals = {
      detail: 'vk_ecom_product',
      add: 'vk_ecom_cart',
      purchase: 'vk_ecom_purchase'
    }

    window._tmr = window._tmr || []
    window._tmr.push({
      type: 'reachGoal',
      id: 3235784,
      value: price,
      goal: tmrGoals[actionType],
      params: { product_id: id }
    })
  }
}

export default api
