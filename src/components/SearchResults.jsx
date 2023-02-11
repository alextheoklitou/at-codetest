import { useEffect, useState } from 'react'
import { getSearchResults } from '../lib/api'
import ResultsDisplay from './ResultsDisplay'
import Error from './common/Error'
import Loading from './common/Loading'

function SearchResults() {
  const [searchResults, setSearchResults] = useState(null)
  const [searchValue, setSearchValue] = useState(null)
  const [input, setInput] = useState(null)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState(null)
  const isLoading = searchValue && !searchResults && !isError


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
        setIsError(true)
        setError(err.response.status.toString())
      }
    }
    if (searchValue) {
      getData()
    }
  }, [searchValue])

  console.log(error)
  return (
    <>
      <div className='w-full mt-10'>
        <div className='w-full flex flex-col items-center'>
          <h1 className='font-alice text-3xl mt-3 mb-1'>Attraction Tickets Code Test</h1>
          <h2 className='font-alice text-2xl mb-4'>Alex Theoklitou</h2>
          <form className='flex flex-wrap w-2/5 mb-4' onSubmit={sendRequest}>
            <input className='flex-auto px-3 py-1.5 text-gray-700 bg-white border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none' placeholder='Search...' onChange={handleType} />
            <button className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 ml-4 rounded uppercase'>Search</button>
          </form>
          {isLoading && (
            <Loading />
          )}
          {isError && (
            <Error />
          )}
          {searchResults && searchValue && !isError && (
            <div className='relative overflow-x-auto'>
              <table className='w-4/5 text-sm text-left text-gray-500'>
                <thead className='text-S text-gray-700 uppercase bg-gray-50 border'>
                  <tr>
                    <th scope='col' className='px-6 py-3 border'>Image</th>
                    <th scope='col' className='px-6 py-3 border'>Title</th>
                    <th scope='col' className='px-6 py-3 border'>Destination</th>
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