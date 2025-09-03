import './RecentViewed.scss'
import MOCK_DATA from '../../constants/MOCK_DATA.json'
import ProfileMini from "../ui/Profile/ProfileMini.jsx";

const RecentViewed = () => {
  return (
    <div className="recent-viewed">
      <h3 className="recent-viewed__title">
        Recent Viewed
      </h3>
      {MOCK_DATA.slice(0, 2).map((row, index) =>
        <ProfileMini
          key={index}
          className="recent-viewed__profile-mini"
          name={row.name}
          userName={row.userName}
          photo={row.photo}
          volume={row.volume}
          percentage={row.percentage}
        />
      )}
    </div>
  )
}

export default RecentViewed