function ResultsDisplay({ img_sml, title, dest, price_from_all }) {
  return (

    <>
      <tr className='bg-white text-gray-900 shadow-md rounded'>
        <th scope='row'>
          <img src={img_sml} alt={`activity from ${title}`} className='w-52' /></th>
        <td className='px-6 py-3 border'>{title}
          <div className='flex justify-between pt-3'>
            <p>{dest}</p>
            <div className='flex flex-col'>
            {price_from_all.map(price => {
              return <div key={price.desc}>
                <p>{price.desc} - <span className='text-green-500 font-bold'>£{price.price_from}</span></p>
                </div>
            })}
            </div>

          </div>
        </td>

      </tr>
    </>
  )
}

export default ResultsDisplay