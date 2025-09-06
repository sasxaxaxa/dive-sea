import './TopCollection.scss'
import TableOther from "../../components/ui/Tables/TableOther/TableOther.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import {COLUMNS} from "../../constants/Columns.jsx";
import MOCK_DATA from "../../constants/MOCK_DATA.json";
import ProfileMini from "../../components/ui/Profile/ProfileMini.jsx";

const TopCollection = () => {
  return (
    <section className="top-collection container">
      <div className="top-collection__inner">
        <h2 className="top-collection__title">
          Top Collection
        </h2>
        <div className="table">
          <div className="table__header">
            {COLUMNS.map((column, index) => (
              <div key={index} className="table__cell table__cell-header">
                {column.Header}
              </div>
            ))}
          </div>
          <ul className="top-collection__list">
            {MOCK_DATA.slice(0, 4).map((row, index) =>
              <li key={index} className="recent-viewed__item">
                {/*<ProfileMini*/}
                {/*  key={index}*/}
                {/*  name={row.name}*/}
                {/*  userName={row.userName}*/}
                {/*  photo={row.photo}*/}
                {/*  volume={row.volume}*/}
                {/*  percentage={row.percentage}*/}
                {/*  location='top-collection'*/}
                {/*/>*/}
              </li>
              )}
          </ul>

        </div>
        <div className="top-collection__button">
          <Button
            mode='gray'
            label='Explore All'
            iconPosition='after'
            iconName='src/assets/arrow-gray-right.svg'
          />
        </div>
      </div>
    </section>
)

}

export default TopCollection