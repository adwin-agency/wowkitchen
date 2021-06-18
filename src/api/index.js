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
  }
}

export default api
