const dataPath = process.env.NODE_ENV === 'production' ? '/local/templates/wow/api' : 'http://wowkitchen.beget.tech/local/templates/wow/api'

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
      blog: 'blog'
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

    return responseJson.goods
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
    const formType = formData.get('type')

    if (window.Comagic) {
      const comagicData = window.Comagic.getCredentials()

      for (let item in comagicData) {
        formData.append(item, comagicData[item])
      }
    }

    const response = await fetch('/send.php', {
      method: 'POST',
      body: formData
    })

    window.fbq && window.fbq('track', 'Lead')
    window.VK && window.VK.Retargeting.Event('lead')
    window.gtag && window.gtag('event', formType, {event_category: 'Forms'})
    window.ym && window.ym(73257226, 'reachGoal', formType)
    window.ym && window.ym(73257226, 'reachGoal', 'lead')
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({'event': 'formSubmit'})
    window.dataLayer.push({'event': formType})

    return response
  }
}

export default api
