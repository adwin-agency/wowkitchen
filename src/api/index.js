const dataUrl = process.env.NODE_ENV === 'production' ? '/local/templates/wow/api' : 'http://wowkitchen.beget.tech/local/templates/wow/api'

const api = {
  async loadProducts(route) {
    const fileNames = {
      kitchens: 'kitchens',
      wardrobes: 'closets',
      technics: 'technics'
    }

    const query = route.query
    let search = []

    for (let key in query) {
      search.push(`${key}=${query[key]}`)
    }

    search = search.join('&')

    if (search) {
      search = '?' + search
    }

    const response = await fetch(`${dataUrl}/${fileNames[route.name]}.php${search}`)
    const responseJson = await response.json()

    return responseJson.goods
  }
}

export default api
