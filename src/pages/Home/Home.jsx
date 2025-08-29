import './Home.scss'
import Hero from "../../sections/HomeMain/Hero.jsx";
import Card from "../../components/ui/Card/Card.jsx";

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className="test">
        <Card
          title='Sun-Glass'
          preview='src/assets/images/cards/sun-glass.png'
          time='07h 09m 12s'
          bid='1.75'
        />
      </div>
    </div>
  )
}

export default Home