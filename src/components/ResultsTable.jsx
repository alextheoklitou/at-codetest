import TableRow from './TableRow'

function ResultsTable({ searchResults, language }) {
  return (
    <table className='w-full text-sm text-left border-separate border-spacing-y-2'>
      <tbody className='font-light'>
        {searchResults.map(result =>
          <TableRow key={result.id} {...result} language={language} />
        )}
      </tbody>
    </table>
  )
}

export default ResultsTable