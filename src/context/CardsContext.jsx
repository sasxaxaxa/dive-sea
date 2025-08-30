import { createContext, useState, useContext } from "react";

const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Sun-Glass",
      preview: "src/assets/images/cards/sun-glass-1.png",
      time: "07:09:12",
      bid: "1.75",
    },
    {
      id: 2,
      title: "Sun-Glass",
      preview: "src/assets/images/cards/sun-glass-2.png",
      time: "07:09:12",
      bid: "1.75",
    },
    {
      id: 3,
      title: "Sun-Glass",
      preview: "src/assets/images/cards/sun-glass-3.png",
      time: "07:09:12",
      bid: "1.75",
    },
    {
      id: 4,
      title: "NuEvey",
      preview: "src/assets/images/cards/nu-evey-1.png",
      time: "07:09:12",
      bid: "1.25",
    },
    {
      id: 5,
      title: "NuEvey",
      preview: "src/assets/images/cards/nu-evey-2.png",
      time: "07:09:12",
      bid: "1.25",
    },
  ]);

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
