import error from '../../assets/error.gif'

function Error({ errorNumber }) {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-full items-center'>
        {errorNumber = 404 ?
          <>
          <h2 className='font-extralight tracking-wider text-xl mt-5'>Oops, we didn't find any results for that search...</h2>
          <h2 className='font-extralight tracking-wider text-xl'>Why don't you try searching for something else?</h2>
          <h2 className='font-extralight tracking-wider text-xl'>Your next holiday is just around the corner!</h2>
          </> :
          <>
          <h2 className='font-extralight tracking-wider text-xl p-2'>There seems to have been an error...</h2>
          <h2 className='font-extralight tracking-wider text-xl'>Please try again later.</h2>
          </>
        }
        <img className="object-center mt-5 w-2/3" alt='minney mouse crying' src={error} />
      </div>
    </div>
  )
}

export default Error