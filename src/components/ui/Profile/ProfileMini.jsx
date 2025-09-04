import './ProfileMini.scss'
import PropTypes from "prop-types";

const ProfileMini = (props) => {
  const {
    name,
    userName,
    photo,
    percentage,
    volume,
    location,
    hasNumberBottom,
    hasNumberTop,
    numberBottom,
    numberTop,
  } = props

  if (location !== 'recent-viewed') return null;

  const baseClass = `profile-mini__${location}`

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-first`}>
        <img
          className={`${baseClass}-image ${baseClass}-image-container`}
          src={photo}
          alt='user photo'
        />
      </div>
      <div className={`${baseClass}-second`}>
        <h3 className={`${baseClass}-title`}>
          {name}
        </h3>
        <p className={`${baseClass}-description`}>
          {userName}
        </p>
      </div>
      <div className={`${baseClass}-third`}>
        <div className={`${baseClass}-volume-container`}>
          <img
            className={`${baseClass}-volume-icon`}
            src="src/assets/icons/profileBidIcon.svg"
            alt=''
          />
          <p className={`${baseClass}-volume`}>
            {volume}
          </p>
        </div>
        <p className={`${baseClass}-percentage`}>
          {percentage}
        </p>
      </div>
    </div>
  )
}

ProfileMini.propTypes = {
  name: PropTypes.string,
  userName: PropTypes.string,
  photo: PropTypes.string,
  percentage: PropTypes.string,
  volume: PropTypes.string,
  hasNumberBottom: PropTypes.bool,
  hasNumberTop: PropTypes.bool,
  numberBottom: PropTypes.number,
  numberTop: PropTypes.number
}

export default ProfileMini
