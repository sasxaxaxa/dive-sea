import './Card.scss'
import Button from "../Button/Button.jsx"
import PropTypes from "prop-types"
import {useEffect, useState} from "react"

const bidIcon = 'src/assets/bid-icons.svg'

const Card = (props) => {

  const {
    title,
    preview,
    time,
    bid,
    onTimeEnd,
  } = props

  const timeToSeconds = (time) => {
    const parts = time.split(':').map(Number)

    //15:14:45 = 104445s

    if (parts.length === 3) {
      const [hours, minutes, seconds] = parts
      return hours * 3600 + minutes * 60 + seconds
    } else if (parts.length === 2) {

      //14m 45s = 885s

      const [minutes, seconds] = parts
      return minutes * 60 + seconds
    }

    return Number(time) || 0
  }

  const [seconds, setSeconds] = useState(timeToSeconds(time));
  const timeToString = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0')
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')
    return `${hours}h ${minutes}m ${seconds}s`
  }

  useEffect(() => {
    if (seconds <= 0) {
      onTimeEnd?.()
      return
    }
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // const interval = setInterval(() => {
    //   setSeconds((prev) => {
    //     if (prev <= 1) {
    //       clearInterval(interval)
    //       return 0
    //     }
    //     return prev - 1
    //   })
    // }, 1000)

    return () => {
      clearInterval(interval)
    }

  }, [seconds, onTimeEnd]);


  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__time-container">
          <p className="card__time">
            {timeToString(seconds)}
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
  onTimeEnd: PropTypes.func,
}

export default Card;