import React from 'react'
import { getSearchResults } from '../lib/api'

function SearchResults() {
  const [searchResults, setSearchResults] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSearchResults()
        setSearchResults(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

    console.log(searchResults)


  return (
    <>
      <h1>Hi</h1>
    </>
  )
}

export default SearchResults