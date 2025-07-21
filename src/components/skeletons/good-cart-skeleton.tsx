import style from "./good-cart-skeleton.module.css";
import clsx from "clsx";
import placeholderImg from "../../assets/images/placeholder.png";

export default function GoodCardSkeleton() {
  return (
    <li className={style["item"]}>
      <img
        className={style["item__image"]}
        src={placeholderImg.src}
        width="300"
        height="300"
      />
      <div className={style["item__information"]}>
        <h2 className={clsx("skeleton", style["item__name"])}></h2>
        <div className={style["item__description"]}>
          <div className={clsx("skeleton", style["item__text"])}></div>
          <div className={clsx("skeleton", style["item__text"])}></div>
          <div className={clsx("skeleton", style["item__text"])}></div>
          <div className={clsx("skeleton", style["item__text"])}></div>
        </div>
        <hr />
        <div className={style["item__buttons"]}>
          <button
            className={clsx("skeleton", style["item__button"])}
            type="button"
          ></button>
        </div>
      </div>
    </li>
  );
}
