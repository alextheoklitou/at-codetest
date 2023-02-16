import error from '../../assets/error.gif'

function Error({ errorNumber, language }) {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-full items-center'>

        {errorNumber = 404 ?
          <>
            {language === 'en' ?
              <>
                <h2 className='font-extralight tracking-wider text-xl mt-5 text-center'>Oops, we didn't find any results for that search...</h2>
                <h2 className='font-extralight tracking-wider text-xl text-center'>Why don't you try searching for something else?</h2>
                <h2 className='font-extralight tracking-wider text-xl text-center'>Your next holiday is just around the corner!</h2></> :
              <>
                <h2 className='font-extralight tracking-wider text-xl mt-5 text-center'>Hoppla, wir haben keine Ergebnisse für diese Suche gefunden...</h2>
                <h2 className='font-extralight tracking-wider text-xl text-center'>Warum suchst du nicht nach etwas anderem?</h2>
                <h2 className='font-extralight tracking-wider text-xl text-center'>Ihr nächster Urlaub steht vor der Tür!</h2></>
            }
          </>
          :
          <>
            {language === 'en' ?
              <>
                <h2 className='font-extralight tracking-wider text-xl p-2'>There seems to have been an error...</h2>
                <h2 className='font-extralight tracking-wider text-xl'>Please try again later.</h2>
              </>
              :
              <>
                <h2 className='font-extralight tracking-wider text-xl p-2'>Da scheint ein Fehler aufgetreten zu sein...</h2>
                <h2 className='font-extralight tracking-wider text-xl'>Bitte versuchen Sie es später erneut.</h2>
              </>
            }
          </>
        }
        <img className="object-center mt-5 w-2/3" alt='minney mouse crying' src={error} />
      </div>
    </div>
  )
}

export default Error