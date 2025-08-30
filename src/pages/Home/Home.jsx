import './Home.scss'
import Hero from "../../sections/HomeMain/Hero.jsx"
import Card from "../../components/ui/Card/Card.jsx"
import { CardsProvider, useCards } from "../../context/CardsContext.jsx"

const HomeContent = () => {
  const { cards, removeCard } = useCards();

  return (
    <div>
      <Hero />

      <div className="test">
        {cards.map((card) => (
          <Card
            key={card.id}
            {...card}
            onTimerEnd={() => removeCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <CardsProvider>
      <HomeContent />
    </CardsProvider>
  );
};

export default Home;
