import './RecentViewed.scss'
import PROFILE_DATA from '../../constants/PROFILE_DATA.json'
import ProfileMini from "../ui/Profile/ProfileMini.jsx";
import classnames from "classnames";
import PropTypes from "prop-types";

const RecentViewed = (props) => {
  const {
    position = ''
  } = props

  return (
    <div className={
      classnames(
        'recent-viewed',
        `recent-viewed-${position}`
      )}>
      <h3 className="recent-viewed__title">
        Recent Viewed
      </h3>
      <ul className="recent-viewed__list">
        {PROFILE_DATA.slice(0, 2).map((row, index) =>
          <li key={index} className="recent-viewed__item">
            <ProfileMini
              key={index}
              name={row.name}
              userName={row.userName}
              photo={row.photo}
              volume={row.volume}
              percentage={row.percentage}
              location='recent-viewed'
            />
          </li>
        )}
      </ul>
    </div>
  )
}

RecentViewed.propTypes = {
  position: PropTypes.string,
}

export default RecentViewed