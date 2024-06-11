import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    const [currentCard, setCurrentCard] = useState(localStorage.getItem("currentCard")
        ? parseInt(localStorage.getItem("currentCard") || "0")
        : 0);
    const [isVisible, setIsVisible] = useState(true);
    const [isClicked, setIsClicked] = useState(localStorage.getItem("isClicked") === "true" ? true : false);
    const [isScrolled, setIsScrolled] = useState(localStorage.getItem("isScrolled") === "true" ? true : false);
    const [isClickedCircle, setIsClickedCircle] = useState(localStorage.getItem("isClickedCircle") === "true" ? true : false);
    // const [isFinish, setIsFinish] = useState(
    //   localStorage.getItem("isFinish") === "true" ? true : false
    // );
    const showText = () => {
        if (!isClicked) {
            return (_jsx("div", { className: style.teach, children: "click on the side cards view next card" }));
        }
        else if (!isClickedCircle) {
            return (_jsx("div", { className: style.teach, children: "you can do that by clicking the side circle too" }));
        }
        else if (!isScrolled) {
            return _jsx("div", { className: style.teach, children: "try scroll" });
            // } else if (!isFinish) {
            //   return (
            //     <div className={style.teach}>
            //       click on the card or middle circle to see the details
            //     </div>
            //   );
        }
        else {
            return (_jsxs("div", { className: style.teach, children: ["click on the card or middle circle to see the details", _jsx("br", {}), "but most of them doesn't have any detail yet"] }));
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
    const handleCardClick = (cardNumber) => {
        if (cardNumber == currentCard) {
            // setIsFinish(true);
            // console.log(isFinish);
            navigate("/Card" + cardNumber);
        }
        else {
            setIsClicked(true);
            setIsVisible(false);
            setTimeout(() => setIsVisible(true), 300);
            setCurrentCard(cardNumber);
        }
    };
    const getCards = () => {
        let cardList = [];
        for (let i = 0; i < cardsData.length; i++) {
            cardList.push(_jsx(Card, { onClick: () => handleCardClick(i), cardNo: i }));
        }
        return cardList;
    };
    const cards = getCards();
    const handleScroll = (event) => {
        if (event.deltaY > 0) {
            setCurrentCard((prevCard) => prevCard == cardsData.length - 1 ? 0 : prevCard + 1);
        }
        else {
            setCurrentCard((prevCard) => prevCard == 0 ? cardsData.length - 1 : prevCard - 1);
        }
        setIsScrolled(true);
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 300);
    };
    const showCards = (currentCard) => {
        if (currentCard == 0) {
            return (_jsxs(_Fragment, { children: [cards[cardsData.length - 1], cards[0], cards[1]] }));
        }
        else if (currentCard == cards.length - 1) {
            return (_jsxs(_Fragment, { children: [cards[Math.max(0, currentCard - 1)], cards[currentCard], cards[0]] }));
        }
        else {
            return (_jsxs(_Fragment, { children: [cards[Math.max(0, currentCard - 1)], cards[currentCard], cards[Math.max(0, currentCard + 1)]] }));
        }
    };
    return (_jsx("div", { className: style.root, children: isLoading ? (_jsxs("div", { className: style.loader, children: [_jsx("div", { children: "L" }), _jsx("div", { children: "O" }), _jsx("div", { children: "A" }), _jsx("div", { children: "D" }), _jsx("div", { children: "I" }), _jsx("div", { children: "N" }), _jsx("div", { children: "G" })] })) : (_jsxs("div", { className: style.container, onWheel: handleScroll, children: [_jsx("div", { className: isVisible ? style.cards : style.disappear, children: showCards(currentCard) }), showText(), _jsxs("div", { className: style.circle_pane, children: [_jsx("circle", { className: style.circle, onClick: () => {
                                currentCard == 0
                                    ? setCurrentCard(cardsData.length - 1)
                                    : setCurrentCard(currentCard - 1);
                                setIsVisible(false);
                                setTimeout(() => setIsVisible(true), 300);
                                setIsClickedCircle(true);
                            }, children: "<-" }), _jsx(Link
                        // onClick={() => {
                        //   setIsFinish(true);
                        //   console.log(isFinish);
                        // }}
                        , { 
                            // onClick={() => {
                            //   setIsFinish(true);
                            //   console.log(isFinish);
                            // }}
                            to: "/card" + currentCard, className: style.circle, children: "details" }), _jsx("circle", { className: style.circle, onClick: () => {
                                currentCard == cardsData.length - 1
                                    ? setCurrentCard(0)
                                    : setCurrentCard(currentCard + 1);
                                setIsVisible(false);
                                setTimeout(() => setIsVisible(true), 300);
                                setIsClickedCircle(true);
                            }, children: "->" })] })] })) }));
}