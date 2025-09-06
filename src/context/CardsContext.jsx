import { createContext, useState, useContext } from "react";
import cardData from "/src/constants/CARD_DATA.json";

const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState(cardData);

  const removeCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <CardsContext.Provider value={{ cards, removeCard }}>
      {children}
    </CardsContext.Provider>
  );
};

export const useCards = () => useContext(CardsContext);
