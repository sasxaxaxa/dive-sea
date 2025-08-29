import './Card.scss'
import Button from "../Button/Button.jsx";
import PropTypes from "prop-types";

const bidIcon = 'src/assets/bid-icons.svg'


const Card = (props) => {

  const {
    title,
    preview,
    time,
    bid,

  } = props

  return (
    <div className="сard">
      <div className="card__inner">
        <div className="card__time-container">
          <p className="card__time">
            {time}
          </p>
        </div>
        <div className="card__preview-wrapper">
          <img
            className="card__preview"
            src={preview}
            alt=''
          />
        </div>
        <div className="card__info-container">
          <div className="card__first-column">
            <h3 className="card__title">
              {title}
            </h3>
            <p className="card__bid-current">
              Current bid
            </p>

            <div className="card__bid-item">
              <img
                className="card__bid-image"
                src={bidIcon}
                alt=''
              />
              <p className="card__bid-description">
                {bid}
              </p>
            </div>
          </div>
          <div className="card__second-column">
            <Button
              className="card__bit-button"
              location='card'
              label='Place bid'
              mode='black'
            />

          </div>

        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  preview: PropTypes.string,
  time: PropTypes.string,
  bid: PropTypes.string,
}

export default Card;