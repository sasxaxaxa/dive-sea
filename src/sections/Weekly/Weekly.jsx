import Card from "../../components/ui/Card/Card.jsx";
import { useCards, CardsProvider } from "../../context/CardsContext.jsx";
import './Weekly.scss'
import Slider from "../../components/ui/Slider/Slider.jsx";

const WeeklyContent = () => {
  const { cards, removeCard } = useCards();

  return (
    <section className="weekly">
      <div className="weekly__inner">
        <h2 className="weekly__title">
          Weekly - Top NFT
        </h2>

        <div className="weekly__cards">
          {cards.map((card) => (
            <Card
              key={card.id}
              {...card}
              onTimerEnd={() => removeCard(card.id)}
            />
          ))}
        </div>
        <Slider />
      </div>
    </section>
  );
};

const Weekly = () => {
  return (
    <CardsProvider>
      <WeeklyContent />
    </CardsProvider>
  );
};

export default Weekly;
