import './Join.scss'
import Button from "../../components/ui/Button/Button.jsx";

const Join = () => {
  return (
    <section className="join container">
      <div className="join__orbit-container">
        <div className="join__center">
          <h1 className="join__title">
            Join The<br/>
            <span style={{color: "#c5c5c5"}}>Community</span>
          </h1>
          <p className="join__description">
            Our vibrant community is full of collectors, artists, and enthusiasts who share a passion for one-of-a-kind digital.
          </p>
          <Button
            className="join__button"
            label="Join  Our Community"
            mode="black"
            location="join"
          />
        </div>
        <div className="join__orbit orbit-small">
          <div className="planet planet1"></div>
          <div className="planet planet2"></div>
          <div className="planet planet3"></div>
          <div className="planet planet4"></div>
        </div>
        <div className="join__orbit orbit-large">
          <div className="planet planet5"></div>
          <div className="planet planet6"></div>
          <div className="planet planet7"></div>
          <div className="planet planet8"></div>
          <div className="planet planet9"></div>
        </div>
      </div>
    </section>

  )
}

export default Join