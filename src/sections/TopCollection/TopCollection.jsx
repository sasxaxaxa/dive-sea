import './TopCollection.scss'
import Button from "../../components/ui/Button/Button.jsx";
import { COLUMNS } from "../../constants/Columns.jsx";
import COLLECTION_DATA from "../../constants/COLLECTION_DATA.json";
import ProfileMini from "../../components/ui/Profile/ProfileMini.jsx";

const bidIcon = <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.975 2.81458L7.76758 16.603L15.975 21.5274L24.1824 16.603L15.975 2.81458ZM7.76758 18.2445L15.975 29.7348L24.1824 18.2445L15.975 23.1689L7.76758 18.2445Z" fill="#141416" />
</svg>

const TopCollection = () => {
  return (
    <section className="top-collection container">
      <div className="top-collection__inner">
        <h2 className="top-collection__title">Top Collection</h2>
        <div className="top-collection__table-wrapper">
          <table className="top-collection__table">
            <thead className="top-collection__table-head">
            <tr className="top-collection__table-row">
              {COLUMNS.map((column, index) => (
                <th
                  key={index}
                  className="top-collection__table-header"
                >
                  {column.Header}
                </th>
              ))}
            </tr>
            </thead>

            <tbody className="top-collection__table-body">
            {COLLECTION_DATA.slice(0, 4).map((row, index) => (
              <tr key={index} className="top-collection__table-row">
                <td className="top-collection__table-cell top-collection__table-cell--profile">
                  <ProfileMini
                    name={row.name}
                    userName={row.userName}
                    photo={row.photo}
                    location="table"
                  />
                </td>

                <td className="top-collection__table-cell">
                  <div className="top-collection__table-cell-volume">
                    {bidIcon}
                    {row.volume}
                  </div>
                </td>

                <td
                  className={`top-collection__table-cell top-collection__table-cell-percentage ${
                    row.percentage.startsWith("+")
                      ? "top-collection__table-cell-percentage-green"
                      : "top-collection__table-cell-percentage-red"
                  }`}
                >
                  {row.percentage}
                </td>

                <td className="top-collection__table-cell">
                  <div className="top-collection__table-cell-price">
                    {bidIcon}
                    {row.price}
                  </div>
                </td>

                <td className="top-collection__table-cell top-collection__table-cell-owners">
                  {row.owners}
                </td>
                <td className="top-collection__table-cell top-collection__table-cell-items">
                  {row.items}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        <div className="top-collection__button">
          <Button
            mode="gray"
            label="Explore All"
            iconPosition="after"
            iconName="src/assets/arrow-gray-right.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default TopCollection