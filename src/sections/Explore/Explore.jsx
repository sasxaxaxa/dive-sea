import Button from "../../components/ui/Button/Button.jsx";
import './Explore.scss'
import {useCards, CardsProvider} from "../../context/CardsContext.jsx";
import Card from "../../components/ui/Card/Card.jsx";

const buttons = [
  {
    label: 'All',
    location: 'explore-all'
  },
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

const ExploreContent = () => {
  const {cards, removeCard} = useCards();

  return (
    <section className="explore container">
      <h2 className="explore__title">
        Explore Marketplace
      </h2>
      <div className="explore__buttons">
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

      <div className="explore__cards">
        {cards.slice(0, 8).map((card) => (
          <Card
            key={card.id}
            {...card}
            onTimeEnd={() => removeCard(card.id)}
          />
        ))}
      </div>

      <div className="top-collection__button">
        <Button
          mode='gray'
          label='Explore All'
          iconPosition='after'
          iconName='src/assets/arrow-gray-right.svg'
        />
      </div>

    </section>
  )
}

const Explore = () => {
  return (
    <CardsProvider>
      <ExploreContent/>
    </CardsProvider>

  )
}

export default Explore