import { useEffect, useState } from 'react'
import { getSearchResults } from '../lib/api'
import ResultsDisplay from './ResultsDisplay'

function SearchResults() {
  const [searchResults, setSearchResults] = useState(null)
  const [searchValue, setSearchValue] = useState(null)
  const [input, setInput] = useState(null)
  const isLoading = searchValue && !searchResults


  const handleType = (e) => {
    setInput(encodeURI(e.target.value))
  }

  const sendRequest = (e) => {
    e.preventDefault()
    setSearchValue(input)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSearchResults(searchValue)
        setSearchResults(data.data)
      } catch (err) {
        console.log(err)
      }
    }
    if (searchValue) {
      getData()
    }
  }, [searchValue])


  return (
    <>
      <div className='w-full m-10 flex flex-col items-center'>
        <div>
          <form className="flex flex-wrap w-full mb-4" onSubmit={sendRequest}>
            <input className='flex-auto px-3 py-1.5 text-gray-700 bg-white border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none' placeholder='Search...' onChange={handleType} />
            <button className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 ml-4 rounded uppercase'>Search</button>
          </form>
          {isLoading && (
            <h1>Just a minute while we find the best deals for you! Your next holiday is just around the corner.</h1>
          )}
          {searchResults && searchValue && (
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-S text-gray-700 uppercase bg-gray-50 border">
                  <tr>
                    <th scope="col" className="px-6 py-3 border">Image</th>
                    <th scope="col" className="px-6 py-3 border">Title</th>
                    <th scope="col" className="px-6 py-3 border">Destination</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map(result =>
                    <ResultsDisplay key={result.id} {...result} />
                  )}
                </tbody>

              </table>
            </div>
          )}

        </div>

      </div>

    </>
  )
}

export default SearchResults