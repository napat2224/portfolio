import { Link } from "react-router-dom";
import style from "./styles/Intro.module.css";

export default function Intro() {
  return (
    <div className={style.root}>
      <h1>HI i'm Napat</h1>
      <p>You are in my portfolio website</p>
      <p>
        I made this website to learn how to build a website using React and
        TypeScript. This website may have out of theme design to let me try new
        things.
      </p>
      <h1>** This website is under development **</h1>
      <p>Use a desktop device to get the full experience.</p>
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
        <Link to="/profile" className={style.btn}>
          Profile
        </Link>
      </div>
    </div>
  );
}
