import style from "./stlyes/CardChild.module.css";
import svgs from "../assets/svgs/svg.ts";
import imgs from "../assets/image/img.ts";

import { Link } from "react-router-dom";

interface Props {
  cardNo: number;
}
export default function CardChildren({ cardNo }: Props) {
  const cardsData = [
    {
      name: "card1",
      img: imgs.img1,
      lang: [svgs.ReactLogo, svgs.TypeScriptLogo],
    },
    {
      name: "card2",
      img: imgs.img2,
      lang: [svgs.ReactLogo, svgs.TypeScriptLogo],
    },
    {
      name: "card3",
      img: imgs.img1,
      lang: [svgs.ReactLogo, svgs.TypeScriptLogo],
    },
    {
      name: "card4",
      img: imgs.img2,
      lang: [svgs.ReactLogo, svgs.TypeScriptLogo],
    },
    {
      name: "card5",
      img: imgs.img1,
      lang: [svgs.ReactLogo, svgs.TypeScriptLogo],
    },
    {
      name: "card6",
      img: imgs.img2,
      lang: [svgs.ReactLogo, svgs.TypeScriptLogo],
    },
    {
      name: "card7",
      img: imgs.img1,
      lang: [svgs.ReactLogo, svgs.TypeScriptLogo],
    },
    {
      name: "card8",
      img: imgs.img2,
      lang: [svgs.ReactLogo, svgs.TypeScriptLogo],
    },
    {
      name: "card9",
      img: imgs.img1,
      lang: [svgs.ReactLogo, svgs.TypeScriptLogo],
    },
    {
      name: "card10",
      img: imgs.img2,
      lang: [svgs.ReactLogo, svgs.TypeScriptLogo],
    },
  ];

  const card = cardsData[cardNo] || {};

  const renderSvgs = (langs: string[]) => {
    let out = [];
    for (let i = 0; i < 2; i++) {
      out.push(<img key={i} className={style.svg} src={langs[i]} />);
    }
    return out;
  };
  return (
    <>
      <div className={style.name}>{card.name}</div>
      <img className={style.image} src={card.img}></img>
      <div className={style.textBox}>
        <div className={style.lang}>{renderSvgs(card.lang)}</div>
        <div className={style.description}></div>
        <Link to="/home" className={style.link}>
          More Detials
        </Link>
      </div>
    </>
  );
}
