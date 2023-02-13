import { useEffect, useState } from 'react'
import { getSearchResults } from '../lib/api'
import ResultsDisplay from './ResultsDisplay'
import Error from './common/Error'
import Loading from './common/Loading'
import LoadingMore from './common/LoadingMore'

function SearchResults() {
  const [searchResults, setSearchResults] = useState(null)
  const [searchValue, setSearchValue] = useState(null)
  const [input, setInput] = useState(null)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState(null)
  const [resultsNumber, setResultsNumber] = useState(0)
  const [totalResults, setTotalResults] = useState(null)
  const isLoading = searchValue && !searchResults && !isError
  const isLoadingMore = searchResults && searchResults.length !== resultsNumber

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
        <div className='min-h-screen w-full flex flex-col items-center pb-10 bg-gradient-to-b from-blue-200 to-white bg-fixed'>
          <h1 className={`${searchResults || isError || isLoading ? 'mt-14 mb-1' : 'mt-60 mb-2'} transform duration-700 font-extralight text-3xl mb-1 tracking-widest`}>Attraction Tickets Code Test</h1>
          <h2 className={`${searchResults || isError || isLoading ? 'mb-4' : 'mb-10'} font-extralight text-l mb-4 tracking-widest`}>Alex Theoklitou</h2>
          <form className='flex flex-wrap w-1/3 mb-4' onSubmit={sendRequest}>
            <input className='font-extralight flex-auto px-3 py-1.5 text-gray-700 bg-white border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none' placeholder='Find your next holiday...' onChange={handleType} />
            <button className='font-light bg-button-yellow hover:bg-button-yellow-hover text-white py-2 px-4 ml-4 rounded uppercase'>Search</button>
          </form>
          {isLoading && (
            <Loading />
          )}
          {isError && (
            <Error errorNumber={error} />
          )}
          {searchResults && searchValue && !isError && (
            <div className='flex flex-col items-center'>
              <table className='w-full text-sm text-left border-separate border-spacing-y-2'>
                <tbody className='font-light'>
                  {searchResults.map(result =>
                    <ResultsDisplay key={result.id} {...result} />
                  )}
                </tbody>
              </table>
              {totalResults !== searchResults.length && !isLoadingMore &&
                <button className='mt-3 font-light bg-button-yellow hover:bg-button-yellow-hover  text-white py-2 px-4 ml-4 rounded uppercase w-36 h-10' onClick={loadMore}>Load More</button>
              }
              {isLoadingMore && totalResults !== searchResults.length && <LoadingMore />}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchResults