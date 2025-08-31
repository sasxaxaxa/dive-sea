import './Hero.scss'
import Button from "../../components/ui/Button/Button.jsx";
import Slider from "../../components/ui/Slider/Slider.jsx";

const mainInfo = [
  {
    count: '430K+',
    label: 'Art Works',
  },
  {
    count: '159K+',
    label: 'Creators',
  },
  {
    count: '87K+',
    label: 'Collections',
  },
]

const Hero = () => {
  return (
    <div className="hero container-left">
      <div className="hero__column-first">
        <h1 className="hero__title h1">
          Discover And Create NFTs
        </h1>
        <p className="hero__description">
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <span className="hero__description-accent">$20 bonus</span>.
        </p>
        <div className="hero__button-list">
          <Button
            mode='black'
            location='hero'
            label='Explore More'
          />
          <Button
            mode='transparent'
            location='hero'
            label='Create NFT'
          />


        </div>
        <ul className="hero__list">
          {mainInfo.map(({count, label}, index) => (
            <li
              key={index}
              className="hero__item"
            >
              <p className="hero__count">
                {count}
              </p>
              <p className="hero__label">
                {label}
              </p>
            </li>
          ))}
        </ul>


      </div>
      <div className="hero__column-second">
        <div className="hero__column-left">
          <img
            className="hero__image-first"
            src='src/assets/images/image1.png'
            alt='Nft Element'
          />
          <img
            className="hero__first-gradient"
            src='src/assets/images/light1.png'
            alt=''
          />
          <div className="hero__slider">
            <Slider />
          </div>
        </div>
        <div className="hero__column-right">
          <img
            className="hero__image-arrow"
            src='src/assets/arrow.svg'
            alt=''
          />
          <img
            className="hero__ornament"
            src='src/assets/ornament.svg'
            alt=''
          />
          <img
            className="hero__image-second"
            src='src/assets/images/image2.png'
            alt='Nft Element'
          />
          <img
            className="hero__second-gradient"
            src='src/assets/images/light2.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;