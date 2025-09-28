import './Banner.scss'
import Button from "../../components/ui/Button/Button.jsx";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__inner">
        <div className="banner__first">
          <h1 className="banner__title">
            Create and Sell NFTs
          </h1>
          <p className="banner__description">
            World’s Largest NFT Place
          </p>
          <div className="banner__buttons">
            <Button
              label="Explore More"
              mode='white'
              location='banner'
            />
            <Button
              label="Sell Artwork"
              mode='transparent-border'
              location='banner'
            />
          </div>
        </div>
        <div className="banner__second">
          <div className="banner__image-container">
            <img
              className="banner__image"
              src="src/assets/images/image3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}


export default Banner