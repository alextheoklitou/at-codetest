import loadingMore from '../../assets/loadingMore.gif'

function Loading() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center'>
        <img className='object-center h-6' alt='loading spinner' src={loadingMore} />
      </div>
    </div>
  )
}

export default Loading