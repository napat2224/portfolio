import { Link } from "react-router-dom";
import style from "./styles/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.text}>Page not found</div>
        <div className={style.links}>
          <Link to="/home" className={style.link}>
            Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
