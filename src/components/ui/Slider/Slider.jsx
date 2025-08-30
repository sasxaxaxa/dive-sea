import Button from "../Button/Button.jsx";
import './Slider.scss'

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <Button
          className="slider__button-first"
          mode='transparent'
          location='slider-left'
          isLabelHidden={true}
          iconName='src/assets/icons/button/arrow-left.svg'
        />
        <div className="slider__separator"></div>
        <Button
          className="slider__button-second"
          mode='transparent'
          location='slider-right'
          isLabelHidden={true}
          iconName='src/assets/icons/button/arrow-right.svg'
        />
      </div>

    </div>
  )
}

export default Slider