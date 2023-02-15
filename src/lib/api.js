import axios from 'axios'

const baseUrl = 'https://global.atdtravel.com/api/products?geo='

export function getSearchResults(language, searchValue) {
  return axios.get(`${baseUrl + language}&title=${searchValue}`)
}