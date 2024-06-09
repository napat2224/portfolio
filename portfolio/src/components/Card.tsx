import style from "./styles/Card.module.css";

import cardsData from "./cardsData";

interface Props {
  onClick: Function;
  cardNo: number;
}

export default function Card(props: Props) {
  const card = cardsData[props.cardNo] || {};

  const renderSvgs = (langs: string[]) => {
    let out = [];
    for (let i = 0; i < langs.length; i++) {
      out.push(<img key={i} className={style.svg} src={langs[i]} />);
    }
    return out;
  };

  return (
    <div className={style.container} onClick={() => props.onClick()}>
      <div className={style.name}>{card.name}</div>
      <img className={style.image} src={card.img}></img>
      <div className={style.textBox}>
        <div className={style.lang}>{renderSvgs(card.lang)}</div>
        <div className={style.description}>{card.text}</div>
      </div>
    </div>
  );
}
