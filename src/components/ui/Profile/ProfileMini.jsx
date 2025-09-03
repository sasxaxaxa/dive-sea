import './ProfileMini.scss'

const ProfileMini = (props) => {
  const {
    name,
    userName,
    photo,
    percentage,
    volume,
    hasNumberBottom,
    hasNumberTop,
    nubmerBottom,
    numberTop,
  } = props

  return (
    <div className="profile-mini">
      <div className="profile-mini__first">
        <img
          className="profile-mini__image"
          src={photo}
          alt='user photo'
        />
      </div>
      <div className="profile-mini__second">
        <h3 className="profile-mini__title">
          {name}
        </h3>
        <p className="profile-mini__description">
          {userName}
        </p>
      </div>
      <div className="profile-mini__third">
        <p className="profile-mini__volume">
          {volume}
        </p>
        <p className="profile-mini__percentage">
          {percentage}
        </p>
      </div>
    </div>
  )
}

export default ProfileMini