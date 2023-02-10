import axios from 'axios'

const baseUrl = 'https://global.atdtravel.com/api/products?geo=en'

export function getSearchResults() {
  return axios.get(baseUrl)
}