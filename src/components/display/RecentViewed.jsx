import './RecentViewed.scss'
import MOCK_DATA from '../../constants/MOCK_DATA.json'
import {COLUMNS} from "../../constants/Columns.jsx";
// {
//   "id": 1,
//   "collection": "Alex Ca.",
//   "volume": "8,456",
//   "percentage": "+ 27.78%",
//   "floor-price": "3,5",
//   "owner": "2.2K",
//   "item": "500"
// },

// {MOCK_DATA.map((row, rowIndex) => (
//   <div key={row.id || rowIndex} className="table__row">
//     {COLUMNS.map((column, columnIndex) => (
//       <div key={columnIndex} className="table__cell">
//         {column.Cell
//           ? column.Cell({ value: row[column.accessor] })
//           : row[column.accessor]}
//       </div>
//     ))}
//   </div>
// ))}

const RecentViewed = () => {
  return (
    <div className="recent-viewed">
      <h3 className="recent-viewed__title">
        Recent Viewed
      </h3>
      <div className="recent-viewed__content">
        <ul>
          {MOCK_DATA.map((row, rowIndex) => (
            <li key={rowIndex}>
              <div>
                {row.collection}
                {row.volume}
                {row.percentage}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecentViewed