import {useMemo} from 'react'
import {useTable} from 'react-table'
import MOCK_DATA from '../../../constants/MOCK_DATA.json'
import {COLUMNS} from '../../../constants/Columns'
import './Tables.scss'

function BasicTable() {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable({
    columns,
    data
  })

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
  return (
    <div className="container">
      <table
        className="table__inner"
        {...getTableProps()}
      >
        <thead className="table__header">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>
                  {cell.render('Cell')}</td>
              })}
            </tr>
          )
        })
        }
        </tbody>
      </table>
    </div>
  )
}

export default BasicTable