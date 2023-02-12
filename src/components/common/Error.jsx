import error from '../../assets/error.gif'

function Error({ errorNumber }) {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-full items-center'>
        {errorNumber = 404 ?
          <>
          <h2 className='font-arimo text-xl p-2'>Oops, we didn't find any results for that search...</h2>
          <h2 className='font-arimo text-xl'>Why don't you try searching for something else?</h2>
          <h2 className='font-arimo text-xl'>Your next holiday is just around the corner!</h2>
          </> :
          <>
          <h2 className='font-arimo text-xl p-2'>There seems to have been an error...</h2>
          <h2 className='font-arimo text-xl'>Please try again later.</h2>
          </>
        }
        <img className="object-center" alt='minney mouse crying' src={error} />
      </div>
    </div>
  )
}

export default Error