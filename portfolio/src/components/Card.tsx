import { ReactNode } from "react";
import style from "./stlyes/Card.module.css";

interface Props {
  children: ReactNode;
  onClick: Function;
}

export default function Card(props: Props) {
  return (
    <div className={style.container} onClick={() => props.onClick()}>
      {props.children}
    </div>
  );
}
