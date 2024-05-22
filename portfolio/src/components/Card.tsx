import style from "./stlyes/Card.module.css";

interface Props {
  isCurrent: boolean;
}

export default function Card(props: Props) {
  return (
    <div className={style.container}>
      <p>asdf</p>
    </div>
  );
}
