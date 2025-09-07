import './BestSellers.scss'
import PROFILE_DATA from '../../constants/PROFILE_DATA.json'
import ProfileMini from "../ui/Profile/ProfileMini.jsx";

const BestSellers = () => {
  return (
    <section className="best-sellers">
      <div className="best-sellers__inner">
        <h3 className="best-sellers__title">
          Best Sellers
        </h3>
        <ul className="best-sellers__list">
          {PROFILE_DATA.slice(0, 6).map((row, index) =>
            <li key={index} className="best-sellers__item">
              <ProfileMini
                key={index}
                name={row.name}
                userName={row.userName}
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