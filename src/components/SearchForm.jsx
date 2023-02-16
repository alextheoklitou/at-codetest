function SearchForm({ sendRequest, handleType }) {
  return (
    <form className='flex flex-col sm:flex-row items-center w-1/3 mb-4' onSubmit={sendRequest}>
      <input className='font-extralight flex-auto px-3 py-1.5 text-gray-700 bg-white border border-solid border-gray-300 rounded m-2 sm-m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none' placeholder='Find your next holiday...' onChange={handleType} />
      <button className='font-light bg-button-yellow hover:bg-button-yellow-hover text-white py-1.5 px-3 sm:ml-4 rounded uppercase'>Search</button>
    </form>
  )
}

export default SearchForm