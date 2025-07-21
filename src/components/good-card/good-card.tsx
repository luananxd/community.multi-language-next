"use client";

import style from "./good-card.module.css";
// Types
import type { Good } from "@/types/catalog";
import type { Locale } from "@/types/common";
// Components
import GoodCardSkeleton from "@/components/skeletons/good-cart-skeleton";
// Hooks
import { useTranslation } from "react-i18next";
import { useClientReady } from "@/utils/providers/client-ready-provider";

interface IProps {
  good: Good;
  onGoodAdd?: (good: Good) => any;
}

export default function GoodCard({ good, onGoodAdd }: IProps) {
  const { i18n, t } = useTranslation();
  const ready = useClientReady();

  if (!ready || !good) return <GoodCardSkeleton />;

  const description = good.description[i18n.language as Locale];

  return (
    <li className={style["item"]}>
      <img
        className={style["item__image"]}
        src={good.img}
        alt={description}
        width="300"
        height="300"
      />
      <div className={style["item__information"]}>
        <h2 className={style["item__name"]}>{good.title}</h2>
        <p className={style["item__description"]}>{description}</p>
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
