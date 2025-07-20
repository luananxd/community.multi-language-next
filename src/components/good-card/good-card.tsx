"use client";

import style from "./good-card.module.css";
// Types
import type { Good } from "@/types/catalog";
// Hooks
import { useTranslation } from "react-i18next";

interface IProps {
  good: Good;
  onGoodAdd?: (good: Good) => any;
}

export default function GoodCard({ good, onGoodAdd }: IProps) {
  const { t } = useTranslation();

  return (
    <li className={style["item"]}>
      <img
        className={style["item__image"]}
        src={good.img}
        width="300"
        height="300"
      />
      <div className={style["item__information"]}>
        <h2 className={style["item__name"]}>{good.title}</h2>
        <p className={style["item__description"]}>{good.description.en}</p>
        <hr />
        <div className={style["item__buttons"]}>
          <button
            className={style["item__button"]}
            type="button"
            onClick={onGoodAdd && (() => onGoodAdd(good))}
          >
            {t("main:addToCart")}
          </button>
        </div>
      </div>
    </li>
  );
}
