import loading from '../../assets/loading.gif'

function Loading() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-full items-center'>
      <img className="object-center" alt='mickey mouse clock' src={loading} />
        <h2 className='font-arimo text-xl p-2'>Hang tight while we find the best deals for you!</h2>
        <h2 className='font-arimo text-xl'>Your next holiday is just around the corner!</h2>
      </div>
    </div>
  )
}

export default Loading