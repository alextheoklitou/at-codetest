import loading from '../../assets/loading.gif'

function Loading({ language }) {
  return (
    <div className='flex justify-center mt-10'>
      <div className='flex flex-col w-full items-center'>
        <img className='object-center sm:mb-10' alt='mickey mouse clock' src={loading} />
        {language === 'en' ?
          <>
            <h2 className='font-extralight tracking-wider text-xl p-2 text-center'>Hang tight while we find the best deals for you!</h2>
            <h2 className='font-extralight tracking-wider text-xl text-center'>Your next holiday is just around the corner!</h2>
          </>
          :
          <>
            <h2 className='font-extralight tracking-wider text-xl p-2 text-center'>Bleiben Sie dran, während wir die besten Angebote für Sie finden!</h2>
            <h2 className='font-extralight tracking-wider text-xl text-center'>Ihr nächster Urlaub steht vor der Tür!</h2>
          </>
        }
      </div>
    </div>
  )
}

export default Loading