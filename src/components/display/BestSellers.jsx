import './BestSellers.scss'
import MOCK_DATA from '../../constants/MOCK_DATA.json'
import ProfileMini from "../ui/Profile/ProfileMini.jsx";

const BestSellers = () => {
  return (
    <section className="best-sellers">
      <div className="best-sellers__inner">
        <h3 className="best-sellers__title">
          Best Sellers
        </h3>
        <ul className="best-sellers__list">
          {MOCK_DATA.slice(0, 6).map((row, index) =>
            <li key={index} className="best-sellers__item">
              <ProfileMini
                key={index}
                name={row.name}
                userName={`@${row.userName}`}
                photo={row.photo}
                location='best-sellers'
                buttonType='unfollow'
              />
            </li>
          )}
          </ul>
      </div>
    </section>
  )
}

export default BestSellers