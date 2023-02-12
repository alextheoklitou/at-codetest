import loadingMore from '../../assets/loadingMore.gif'

function Loading() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-full items-center'>
      <img className="object-center rounded-full border-8 border-blue-800" alt='loading spinner' src={loadingMore} />
      </div>
    </div>
  )
}

export default Loading