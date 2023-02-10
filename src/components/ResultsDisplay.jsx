function ResultsDisplay({ img_sml, title, dest }) {
  return (
    <>
      <tr className="bg-white border text-gray-900">
        <th scope="row" className="border">
          <img src={img_sml} alt={`activities from ${title}`} className='h-32' /></th>
        <td className="px-6 py-3 border">{title}</td>
        <td className="px-6 py-3 border">{dest}</td>
      </tr>
    </>
  )
}

export default ResultsDisplay