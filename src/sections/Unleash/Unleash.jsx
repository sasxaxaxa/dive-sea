import './Unleash.scss'
import Button from "../../components/ui/Button/Button.jsx";
import RecentViewed from "../../components/display/RecentViewed.jsx";
import BestSellers from "../../components/display/BestSellers.jsx";

const points = [
  'Best Seller All Around World',
  '$2M+ Transections Every Day',
  'Secure Transactions',
  'Exclusive Collections From Sellers',
  'Easy Buying and Selling',
  'Join Our Community',
]


const Unleash = () => {
  return (
    <section className="unleash container">
      <div className="unleash__inner">
        <div className="unleash__first">
          <h2 className="unleash__title">
            <span className="unleash__title-gray">Just Unleash - </span>
            <br/>Your Inner Collector
          </h2>
          <ul className="unleash__list">
            {points.map((point, i) => (
              <div
                key={i}
                className="unleash__item"
              >
                <img
                  src='src/assets/check.svg'
                  alt=''
                />
                <li>
                  {point}
                </li>
              </div>
            ))}
          </ul>
          <Button
            mode='black'
            label='Explore More'
            location='explore-unleash'
            iconName='src/assets/arrow-white.svg'
            iconPosition='after'
          />
        </div>
        <div className="unleah__second">
          <RecentViewed />
          <BestSellers />
        </div>
      </div>
    </section>
  )
}

export default Unleash