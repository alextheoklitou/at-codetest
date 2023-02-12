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
  const [resultsNumber, setResultsNumber] = useState(0)
  const [totalResults, setTotalResults] = useState(null)
  const isLoading = searchValue && !searchResults && !isError

  const handleType = (e) => {
    setInput(encodeURI(e.target.value))
  }

  const sendRequest = (e) => {
    e.preventDefault()
    setIsError(false)
    setSearchResults(null)
    setSearchValue(input)
    setResultsNumber(10)
  }

  const loadMore = () => {
    setSearchValue(`${input}&limit=${resultsNumber + 10}`)
    setResultsNumber(resultsNumber + 10)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSearchResults(searchValue)
        setSearchResults(data.data)
        setTotalResults(data.meta.total_count)
      } catch (err) {
        setIsError(true)
        setError(err.response.status.toString())
      }
    }
    if (searchValue) {
      getData()
    }
  }, [searchValue])


  return (
    <>
      <div>
        <div className='min-h-screen w-full flex flex-col items-center pb-10 bg-gradient-to-b from-amber-400 to-amber-800'>
          <h1 className='font-alice text-3xl mt-14 mb-1'>Attraction Tickets Code Test</h1>
          <h2 className='font-alice text-2xl mb-4'>Alex Theoklitou</h2>
          <form className='flex flex-wrap w-2/5 mb-4' onSubmit={sendRequest}>
            <input className='flex-auto px-3 py-1.5 text-gray-700 bg-white border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none' placeholder='Search...' onChange={handleType} />
            <button className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 ml-4 rounded uppercase'>Search</button>
          </form>
          {isLoading && (
            <Loading />
          )}
          {isError && (
            <Error errorNumber={error} />
          )}
          {searchResults && searchValue && !isError && (
            <div>
              <table className='w-full text-sm text-left text-gray-500'>
                <thead className='text-S text-gray-700 font-alice text-xl uppercase bg-gray-50 border'>
                  <tr>
                    <th scope='col' className='px-6 py-3 border'>Image</th>
                    <th scope='col' className='px-6 py-3 border'>Title</th>
                    <th scope='col' className='px-6 py-3 border'>Destination</th>
                  </tr>
                </thead>
                <tbody className='font-arimo'>
                  {searchResults.map(result =>
                    <ResultsDisplay key={result.id} {...result} />
                  )}
                </tbody>
              </table>
              {totalResults !== searchResults.length &&
                <button className='mt-3 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 ml-4 rounded uppercase' onClick={loadMore}>Load More</button>
              }
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchResults