import './Hero.scss'
import Button from "../../components/ui/Button/Button.jsx";

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
          >
            Explore More
          </Button>
          <Button
            mode='white'
            location='hero'
          >
            Create NFT
          </Button>


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
          {/*градиент*/}
          <div className="hero__column-second-list">
            <Button
              mode='white'
              location='hero'
            >
              la
            </Button>
            <Button
              mode='white'
              location='hero'
            >
              na
            </Button>
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

          {/*градиент*/}
        </div>

      </div>

    </div>
  )
}

export default Hero;