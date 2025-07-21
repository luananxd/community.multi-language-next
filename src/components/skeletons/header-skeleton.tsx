import style from "./header-skeleton.module.css";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={style["header"]}>
      <h1 className={clsx("skeleton", style["header__title"])}></h1>
      <div className={style["header__links"]}>
        <div className={clsx("skeleton", style["header__link"])}></div>
        <div className={clsx("skeleton", style["header__link"])}></div>
        <div className={clsx("skeleton", style["header__today"])}></div>
        <div className={clsx("skeleton", style["header__cart"])}></div>
      </div>
    </header>
  );
}
