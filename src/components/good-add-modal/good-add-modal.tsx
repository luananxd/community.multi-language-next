"use client";

import style from "./good-add-modal.module.css";
// Types
import type { CartRecord, Good } from "@/types/catalog";
import { SyntheticEvent } from "react";
// Utils
import { formatCurrency } from "@/utils/formats";
// Hooks
import { useRef } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  good: Good | null;
  visible: boolean;
  onChoose?: (record: CartRecord) => void;
  onClose?: () => void;
}

export default function GoodAddModal({
  good,
  visible,
  onChoose,
  onClose,
}: IProps) {
  const { t } = useTranslation();
  const modalBody = useRef(null);

  const handleClose = (e: SyntheticEvent) => {
    if (e.target !== modalBody.current) return;
    onClose && onClose();
  };

  const handleGoodClick = (count: number) => {
    const record: CartRecord = {
      good: JSON.stringify(good),
      count,
    };

    onChoose && onChoose(record);
  };

  return visible ? (
    <div
      className={style["good-add-modal"]}
      ref={modalBody}
      onClick={handleClose}
    >
      <div className={style["good-add-modal__body"]}>
        <h2 className={style["good-add-modal__title"]}>
          {t("main:addToCart")}
        </h2>

        <ul className={style["good-add-modal__variants"]}>
          <li
            className={style["good-add-modal__variant"]}
            onClick={() => handleGoodClick(1)}
          >
            <div className={style["good-add-modal__count"]}>
              {t("main:addItem", {
                unit: good?.unit ?? "pieces",
                count: 1,
                context: "vp",
              })}
            </div>
            <div className={style["good-add-modal__price"]}>
              {formatCurrency(good?.price.usd ?? 0)}
            </div>
          </li>

          <li
            className={style["good-add-modal__variant"]}
            onClick={() => handleGoodClick(5)}
          >
            <div className={style["good-add-modal__count"]}>
              {t("main:addItem", {
                unit: good?.unit ?? "pieces",
                count: 5,
                context: "vp",
              })}
            </div>
            <div className={style["good-add-modal__price"]}>
              {formatCurrency((good?.price.usd ?? 0) * 5)}
            </div>
          </li>

          <li
            className={style["good-add-modal__variant"]}
            onClick={() => handleGoodClick(10)}
          >
            <div className={style["good-add-modal__count"]}>
              {t("main:addItem", {
                unit: good?.unit ?? "pieces",
                count: 10,
                context: "vp",
              })}
            </div>
            <div className={style["good-add-modal__price"]}>
              {formatCurrency((good?.price.usd ?? 0) * 10)}
            </div>
          </li>
        </ul>
      </div>
    </div>
  ) : null;
}
