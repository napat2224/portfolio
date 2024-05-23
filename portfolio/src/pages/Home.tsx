import { useState } from "react";

import style from "./styles/Home.module.css";

import Card from "../components/Card";
import cardsData from "../components/cardsData";

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleCardClick = (cardNumber: number) => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 300);
    setCurrentCard(cardNumber);
  };
  const getCards = () => {
    let cardList = [];
    for (let i = 0; i < cardsData.length; i++) {
      cardList.push(<Card onClick={() => handleCardClick(i)} cardNo={i} />);
    }
    return cardList;
  };

  const cards = getCards();

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      setCurrentCard((prevCard) => Math.min(prevCard + 1, cards.length - 1));
    } else {
      setCurrentCard((prevCard) => Math.max(prevCard - 1, 0));
    }
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 300);
  };

  const showCards = (currentCard: number) => {
    if (currentCard < 0) {
      setCurrentCard(0);
    } else if (currentCard > cards.length - 1) {
      setCurrentCard(cards.length - 1);
    }
    if (currentCard == 0) {
      return (
        <>
          {cards[0]}
          {cards[0]}
          {cards[1]}
        </>
      );
    } else if (currentCard == cards.length - 1) {
      return (
        <>
          {cards[Math.max(0, currentCard - 1)]}
          {cards[currentCard]}
          {cards[currentCard]}
        </>
      );
    } else {
      return (
        <>
          {cards[Math.max(0, currentCard - 1)]}
          {cards[currentCard]}
          {cards[Math.max(0, currentCard + 1)]}
        </>
      );
    }
  };

  return (
    <div className={style.root} onWheel={handleScroll}>
      <div className={style.container}>
        <div className={isVisible ? style.cards : style.disappear}>
          {showCards(currentCard)}
        </div>
        <div className={style.circle_pane}>
          <circle
            className={style.circle}
            onClick={() => {
              setCurrentCard(currentCard - 1);
              setIsVisible(false);
              setTimeout(() => setIsVisible(true), 300);
            }}
          >
            {"<-"}
          </circle>
          <circle className={style.circle}>details</circle>
          <circle
            className={style.circle}
            onClick={() => {
              setCurrentCard(currentCard + 1);
              setIsVisible(false);
              setTimeout(() => setIsVisible(true), 300);
            }}
          >
            {"->"}
          </circle>
        </div>
      </div>
    </div>
  );
}
