import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import style from "./styles/Project.module.css";

import Card from "../components/Card";
import cardsData from "../components/cardsData";

export default function Home() {
  // loading
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const [currentCard, setCurrentCard] = useState(
    localStorage.getItem("currentCard")
      ? parseInt(localStorage.getItem("currentCard") || "0")
      : 0
  );
  const [isVisible, setIsVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(
    localStorage.getItem("isClicked") === "true" ? true : false
  );
  const [isScrolled, setIsScrolled] = useState(
    localStorage.getItem("isScrolled") === "true" ? true : false
  );
  const [isClickedCircle, setIsClickedCircle] = useState(
    localStorage.getItem("isClickedCircle") === "true" ? true : false
  );
  // const [isFinish, setIsFinish] = useState(
  //   localStorage.getItem("isFinish") === "true" ? true : false
  // );

  const showText = () => {
    if (!isClicked) {
      return (
        <div className={style.teach}>
          click on the side cards view next card
        </div>
      );
    } else if (!isClickedCircle) {
      return (
        <div className={style.teach}>
          you can do that by clicking the side circle too
        </div>
      );
    } else if (!isScrolled) {
      return <div className={style.teach}>try scroll</div>;
      // } else if (!isFinish) {
      //   return (
      //     <div className={style.teach}>
      //       click on the card or middle circle to see the details
      //     </div>
      //   );
    } else {
      return (
        <div className={style.teach}>
          click on the card or middle circle to see the details
          <br />
          but most of them doesn't have any detail yet
        </div>
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("isClicked", isClicked.toString());
    localStorage.setItem("isScrolled", isScrolled.toString());
    localStorage.setItem("isClickedCircle", isClickedCircle.toString());
    // localStorage.setItem("IsFinish", isFinish.toString());
    localStorage.setItem("currentCard", currentCard.toString());
    // }, [isClicked, isScrolled, isClickedCircle, isFinish, currentCard]);
  }, [isClicked, isScrolled, isClickedCircle, currentCard]);

  const navigate = useNavigate();

  const handleCardClick = (cardNumber: number) => {
    if (cardNumber == currentCard) {
      // setIsFinish(true);
      // console.log(isFinish);
      navigate("/Card" + cardNumber);
    } else {
      setIsClicked(true);
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 300);
      setCurrentCard(cardNumber);
    }
  };

  const getCards = () => {
    let cardList: JSX.Element[] = [];
    for (let i = 0; i < cardsData.length; i++) {
      cardList.push(<Card onClick={() => handleCardClick(i)} cardNo={i} />);
    }
    return cardList;
  };

  const cards = getCards();

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      setCurrentCard((prevCard) =>
        prevCard == cardsData.length - 1 ? 0 : prevCard + 1
      );
    } else {
      setCurrentCard((prevCard) =>
        prevCard == 0 ? cardsData.length - 1 : prevCard - 1
      );
    }
    setIsScrolled(true);
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 300);
  };

  const showCards = (currentCard: number) => {
    if (currentCard == 0) {
      return (
        <>
          {cards[cardsData.length - 1]}
          {cards[0]}
          {cards[1]}
        </>
      );
    } else if (currentCard == cards.length - 1) {
      return (
        <>
          {cards[Math.max(0, currentCard - 1)]}
          {cards[currentCard]}
          {cards[0]}
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
    <div className={style.root}>
      {isLoading ? (
        <div className={style.loader}>
          <div>L</div>
          <div>O</div>
          <div>A</div>
          <div>D</div>
          <div>I</div>
          <div>N</div>
          <div>G</div>
        </div>
      ) : (
        <div className={style.container} onWheel={handleScroll}>
          <div className={isVisible ? style.cards : style.disappear}>
            {showCards(currentCard)}
          </div>
          {showText()}
          <div className={style.circle_pane}>
            <circle
              className={style.circle}
              onClick={() => {
                currentCard == 0
                  ? setCurrentCard(cardsData.length - 1)
                  : setCurrentCard(currentCard - 1);
                setIsVisible(false);
                setTimeout(() => setIsVisible(true), 300);
                setIsClickedCircle(true);
              }}
            >
              {"<-"}
            </circle>
            <Link
              // onClick={() => {
              //   setIsFinish(true);
              //   console.log(isFinish);
              // }}
              to={"/card" + currentCard}
              className={style.circle}
            >
              details
            </Link>
            <circle
              className={style.circle}
              onClick={() => {
                currentCard == cardsData.length - 1
                  ? setCurrentCard(0)
                  : setCurrentCard(currentCard + 1);
                setIsVisible(false);
                setTimeout(() => setIsVisible(true), 300);
                setIsClickedCircle(true);
              }}
            >
              {"->"}
            </circle>
          </div>
        </div>
      )}
    </div>
  );
}
