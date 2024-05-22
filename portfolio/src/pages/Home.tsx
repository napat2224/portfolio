import style from "./styles/Home.module.css";

import Card from "../components/Card";

export default function Home() {
  //   return <p>home</p>;
  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.cards}>
          <Card isCurrent={false} />
          <Card isCurrent={true} />
          <Card isCurrent={false} />
        </div>
        <div className={style.circle_pane}>
          <circle className={style.circle}></circle>
          <circle className={style.circle}></circle>
          <circle className={style.circle}></circle>
        </div>
      </div>
    </div>
  );
}
