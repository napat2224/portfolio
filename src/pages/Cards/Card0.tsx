import style from "./styles/Card1.module.css";

export default function Card0() {
  return (
    <>
      <p className={style.head}>this website</p>
      <p>this website made by tyoescript and react</p>
      <a
        href="https://github.com/napat2224"
        target="_blank"
        rel="noopener noreferrer"
      >
        github (current version is on branch "mime")
      </a>
    </>
  );
}
