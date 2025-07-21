"use client";

import style from "./header.module.css";
// Types
import type { Good } from "@/types/catalog";
import type { Currency } from "@/types/common";
// Utils
import {
  formatDate,
  formatCurrency,
  getCurrencyByLocale,
} from "@/utils/formats";
// Components
import HeaderSkeleton from "@/components/skeletons/header-skeleton";
// Hooks
import { useTranslation } from "react-i18next";
import { useClientReady } from "@/utils/providers/client-ready-provider";

interface IProps {
  cart: Record<string, number>;
}

export default function Header({ cart }: IProps) {
  const { i18n, t } = useTranslation();
  const ready = useClientReady();
  const today = new Date();

  const getCartValue = () => {
    let sum = 0;

    for (const [good, count] of Object.entries(cart)) {
      const _good: Good = JSON.parse(good);
      const currency = getCurrencyByLocale(
        i18n.language ?? ""
      )?.toLowerCase() as Currency;

      if (!currency) return 0;

      sum += _good.price[currency] * count;
    }

    return sum;
  };

  const cartTotal = getCartValue();

  if (!ready) return <HeaderSkeleton />;

  return (
    <header className={style["header"]}>
      <h1 className={style["header__title"]}>{t("header:mainTitle")}</h1>
      <div className={style["header__links"]}>
        <a className={style["header__link"]} href="tel:+79999999999">
          {t("header:callUs")}
        </a>
        <a className={style["header__link"]} href="mailto:luanan@yandex.ru">
          {t("header:emailUs")}
        </a>
        <div>
          {t("header:todayIs")}
          <time dateTime="2025-07-14"> {formatDate(today)}</time>
        </div>
        <div className={style["header__cart"]}>
          {t("header:yourCart")} {formatCurrency(cartTotal)}
        </div>
      </div>
    </header>
  );
}
