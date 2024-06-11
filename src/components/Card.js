import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from "./styles/Card.module.css";
import cardsData from "./cardsData";
export default function Card(props) {
    const card = cardsData[props.cardNo] || {};
    const renderSvgs = (langs) => {
        let out = [];
        for (let i = 0; i < langs.length; i++) {
            out.push(_jsx("img", { className: style.svg, src: langs[i] }, i));
        }
        return out;
    };
    return (_jsxs("div", { className: style.container, onClick: () => props.onClick(), children: [_jsx("div", { className: style.name, children: card.name }), _jsx("img", { className: style.image, src: card.img }), _jsxs("div", { className: style.textBox, children: [_jsx("div", { className: style.lang, children: renderSvgs(card.lang) }), _jsx("div", { className: style.description, children: card.text })] })] }));
}
