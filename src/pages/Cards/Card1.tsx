import style from "./styles/Card1.module.css";
import imgs from "../../assets/image/img";

export default function Card1() {
  return (
    <div className={style.root}>
      <p className={style.head}></p>
      <p>I develop frontend for this website</p>
      <p>sever for this website already shut down</p>
      <p>this website is final project of 2110221 COMP ENG ESS</p>
      <a
        href="https://github.com/napat2224/portfolio/tree/mime"
        target="_blank"
        rel="noopener noreferrer"
      >
        github for this project
      </a>
      <img src={imgs.img1_1}></img>
      <img src={imgs.img1_2}></img>
      <img src={imgs.img1_3}></img>
      <img src={imgs.img1_4}></img>
      <img src={imgs.img1_5}></img>
      <img src={imgs.img1_6}></img>
    </div>
  );
}
