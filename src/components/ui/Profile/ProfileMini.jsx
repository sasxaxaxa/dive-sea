import './ProfileMini.scss'
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

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
    buttonType
  } = props

  const baseClass = `profile-mini__${location}`

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-first`}>
        <div className={`${baseClass}-image-container`}>
          <img
            className={`${baseClass}-image`}
            src={photo}
            alt='user photo'
          />
        </div>
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
        {volume && (
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
        )}
        {percentage && (
          <p className={`${baseClass}-percentage`}>
            {percentage}
          </p>
        )}
        {buttonType && (
          <Button
            label={buttonType === 'follow' ? 'Follow' : 'Unfollow'}
            mode={buttonType === 'follow' ? 'follow' : 'unfollow'}
            location={location}
          />
        )}
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
