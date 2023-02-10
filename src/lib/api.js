import axios from 'axios'

const baseUrl = 'https://global.atdtravel.com/api/products?geo=en'

export function getSearchResults(searchValue) {
  return axios.get(`${baseUrl}&title=${searchValue}`)
}