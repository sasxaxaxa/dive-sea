import Button from "../Button/Button.jsx";
import './Slider.scss'

const leftArrow = <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.23973 0.389633C5.80229 -0.0141637 5.12034 0.0131106 4.71654 0.450551L1.23402 4.22324C0.852869 4.63614 0.852865 5.27259 1.23401 5.6855L4.71653 9.45827C5.12032 9.89572 5.80228 9.923 6.23973 9.51921C6.67717 9.11542 6.70445 8.43346 6.30066 7.99601L4.48802 6.0323L14.9611 6.0323C15.5565 6.0323 16.0391 5.54969 16.0391 4.95437C16.0391 4.35905 15.5565 3.87645 14.9611 3.87645L4.48805 3.87645L6.30065 1.91283C6.70445 1.47539 6.67717 0.793429 6.23973 0.389633Z" fill="#929292" />
</svg>

const rightArrow = <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7603 0.389633C11.1977 -0.0141637 11.8797 0.0131106 12.2835 0.450551L15.766 4.22324C16.1471 4.63614 16.1471 5.27259 15.766 5.6855L12.2835 9.45827C11.8797 9.89572 11.1977 9.923 10.7603 9.51921C10.3228 9.11542 10.2955 8.43346 10.6993 7.99601L12.512 6.0323L2.03886 6.0323C1.44354 6.0323 0.960937 5.54969 0.960937 4.95437C0.960937 4.35905 1.44354 3.87645 2.03886 3.87645L12.5119 3.87645L10.6993 1.91283C10.2956 1.47539 10.3228 0.793429 10.7603 0.389633Z" fill="#23262F" />
</svg>

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <Button
          className="slider__button-first"
          mode='transparent'
          location='slider-left'
          isLabelHidden={true}
          iconName={leftArrow}
        />
        <div className="slider__separator"></div>
        <Button
          className="slider__button-second"
          mode='transparent'
          location='slider-right'
          isLabelHidden={true}
          iconName={rightArrow}
        />
      </div>

    </div>
  )
}

export default Slider