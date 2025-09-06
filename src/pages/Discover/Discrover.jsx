import './Discover.scss'
import Button from "../../components/ui/Button/Button.jsx";
import { useCards, CardsProvider } from "../../context/CardsContext.jsx";
import Card from "../../components/ui/Card/Card.jsx";

const buttons = [
  {
    label: 'Category',
    iconName: 'src/assets/list.svg'
  },
  {
    label: 'Collection',
    iconName: 'src/assets/collection.svg'
  },
  {
    label: 'Price',
    location: 'explore-all',
    iconName: 'src/assets/price.svg'
  },
]

const DiscoverContent = () => {
  const { cards, removeCard } = useCards();

  return (
    <div className="discover">
      <div className="discover__inner container">
        <h2 className="discover__title">
          Discover NFTs
        </h2>
        <div className="discover__buttons">
          {buttons.map((button, index) => (
            <Button
              key={index}
              label={button.label}
              mode='transparent'
              iconName={button.iconName ? button.iconName : undefined}
              location={button.location ? button.location : 'explore'}
            />
          ))}
        </div>
        <div className="discover__cards">
          {cards.slice(0, 12).map((card) => (
            <Card
              key={card.id}
              {...card}
              onTimeEnd={() => removeCard(card.id)}
            />
          ))}
        </div>
        <Button
          label="Show more"
          mode='black'
          location='hero'
        />
      </div>
    </div>
  )
}

const Discover = () => {
  return (
    <CardsProvider>
      <DiscoverContent />
    </CardsProvider>
  )
}

export default Discover