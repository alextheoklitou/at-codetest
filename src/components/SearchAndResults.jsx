import { useEffect, useState } from 'react'
import { getSearchResults } from '../lib/api.js'
import Error from './common/Error'
import Loading from './common/Loading'
import LoadingMore from './common/LoadingMore'
import SearchForm from './SearchForm.jsx'
import ResultsTable from './ResultsTable'

function SearchAndResults() {
  const [searchResults, setSearchResults] = useState(null)
  const [searchValue, setSearchValue] = useState(null)
  const [language, setLanguage] = useState('en')
  const [input, setInput] = useState(null)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState(null)
  const [resultsNumber, setResultsNumber] = useState(0)
  const [totalResults, setTotalResults] = useState(null)
  const isLoading = searchValue && !searchResults && !isError
  const isLoadingMore = searchResults && searchResults.length !== resultsNumber

  const chooseLanguage = (e) => {
    setLanguage(e.target.value)
    setSearchResults(null)
    setSearchValue(searchValue)
  }

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
        const { data } = await getSearchResults(language, searchValue)
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
  }, [language, searchValue])


  return (
    <>
      <div>
        <div className='min-h-screen w-full flex flex-col items-center pb-10 bg-gradient-to-b from-blue-200 to-white bg-fixed'>
          <h1 className={`${searchResults || isError || isLoading ? 'mt-14 mb-1' : 'mt-60 mb-2'} transform duration-700 font-extralight text-3xl tracking-widest text-center mx-6`}>Attraction Tickets Code Test</h1>
          <h2 className='font-extralight text-l mb-1 tracking-widest'>Alex Theoklitou</h2>
          <div className='mb-2'><button className={`${language === 'en' ? 'font-bold' : 'font-light'} uppercase`} value='en' onClick={chooseLanguage}>en</button><span> | </span><button className={`${language === 'de-de' ? 'font-bold' : 'font-light'} uppercase`} value='de-de' onClick={chooseLanguage}>de</button></div>
          <SearchForm sendRequest={sendRequest} handleType={handleType} />
          {isLoading && (
            <Loading language={language} />
          )}
          {isError && (
            <Error errorNumber={error} language={language} />
          )}
          {searchResults && searchValue && !isError && (
            <div className='flex flex-col items-center mx-5 sm:mx-0'>
              <ResultsTable searchResults={searchResults} language={language} />
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

export default SearchAndResults