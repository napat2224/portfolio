import { useState } from "react";

import style from "./styles/Home.module.css";

import Card from "../components/Card";

export default function Home() {
  const [currentCard, setCurrentCard] = useState(1);

  const handleCardClick = (cardNumber: number) => {
    console.log(`Clicked on card ${cardNumber}`);
    setCurrentCard(cardNumber);
  };

  const cards = [
    <Card onClick={() => handleCardClick(0)}>1</Card>,
    <Card onClick={() => handleCardClick(1)}>2</Card>,
    <Card onClick={() => handleCardClick(2)}>3</Card>,
    <Card onClick={() => handleCardClick(3)}>4</Card>,
    <Card onClick={() => handleCardClick(4)}>5</Card>,
    <Card onClick={() => handleCardClick(5)}>6</Card>,
    <Card onClick={() => handleCardClick(6)}>7</Card>,
    <Card onClick={() => handleCardClick(7)}>8</Card>,
    <Card onClick={() => handleCardClick(8)}>9</Card>,
    <Card onClick={() => handleCardClick(9)}>10</Card>,
    <Card onClick={() => handleCardClick(10)}>11</Card>,
  ];

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      // Scrolling down
      setCurrentCard((prevCard) => Math.min(prevCard + 1, cards.length - 1)); // Assuming 11 is the total number of cards
    } else {
      // Scrolling up
      setCurrentCard((prevCard) => Math.max(prevCard - 1, 0));
    }
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
        <div className={style.cards}>{showCards(currentCard)}</div>
        <div className={style.circle_pane}>
          <circle
            className={style.circle}
            onClick={() => setCurrentCard(currentCard - 1)}
          >
            {"<-"}
          </circle>
          <circle className={style.circle}>details</circle>
          <circle
            className={style.circle}
            onClick={() => setCurrentCard(currentCard + 1)}
          >
            {"->"}
          </circle>
        </div>
      </div>
    </div>
  );
}
