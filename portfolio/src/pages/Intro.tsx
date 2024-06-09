import { Link } from "react-router-dom";
import style from "./styles/Intro.module.css";

export default function Intro() {
  return (
    <div className={style.root}>
      <h1>HI i'm Napat</h1>
      <p>you are in my portfolio website</p>
      <p>
        I made this website to learn how to build a website useing react and
        typescript
      </p>
      <h1>** this website is under develop **</h1>
      <div className={style.btn_container}>
        <a
          className={style.btn}
          href="https://github.com/napat2224"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <Link to="/project" className={style.btn}>
          Previous Projects
        </Link>
      </div>
    </div>
  );
}
