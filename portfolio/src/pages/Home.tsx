import { useState } from "react";

import style from "./styles/Home.module.css";

import Card from "../components/Card";
import Cardchild from "../components/CardChild";

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleCardClick = (cardNumber: number) => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 300);
    setCurrentCard(cardNumber);
  };

  const cards = [
    <Card onClick={() => handleCardClick(0)}>
      <Cardchild cardNo={0} />
    </Card>,
    <Card onClick={() => handleCardClick(1)}>
      <Cardchild cardNo={1} />
    </Card>,
    <Card onClick={() => handleCardClick(2)}>
      <Cardchild cardNo={2} />
    </Card>,
    <Card onClick={() => handleCardClick(3)}>
      <Cardchild cardNo={3} />
    </Card>,
    <Card onClick={() => handleCardClick(4)}>
      <Cardchild cardNo={4} />
    </Card>,
    <Card onClick={() => handleCardClick(5)}>
      <Cardchild cardNo={5} />
    </Card>,
    <Card onClick={() => handleCardClick(6)}>
      <Cardchild cardNo={6} />
    </Card>,
    <Card onClick={() => handleCardClick(7)}>
      <Cardchild cardNo={7} />
    </Card>,
    <Card onClick={() => handleCardClick(8)}>
      <Cardchild cardNo={8} />
    </Card>,
    <Card onClick={() => handleCardClick(9)}>
      <Cardchild cardNo={9} />
    </Card>,
    <Card onClick={() => handleCardClick(10)}>
      <Cardchild cardNo={10} />
    </Card>,
  ];

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
