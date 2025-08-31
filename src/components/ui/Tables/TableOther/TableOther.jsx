import MOCK_DATA from '../../../../constants/MOCK_DATA.json'
import { COLUMNS } from '../../../../constants/Columns.jsx'
import './TableOther.scss'

function TableOther () {
  return (
    <div className="table">
      <div className="table__header">
        {COLUMNS.map((column, index) => (
          <div key={index} className="table__cell table__cell-header">
            {column.Header}
          </div>
        ))}
      </div>

      {MOCK_DATA.map((row, rowIndex) => (
        <div key={row.id || rowIndex} className="table__row">
          {COLUMNS.map((column, columnIndex) => (
            <div key={columnIndex} className="table__cell">
              {column.Cell
                ? column.Cell({ value: row[column.accessor] })
                : row[column.accessor]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default TableOther
