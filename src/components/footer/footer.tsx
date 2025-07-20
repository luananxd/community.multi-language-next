"use client";

import style from "./footer.module.css";
// Utils
import clsx from "clsx";
import { changeUserInterfaceLanguage } from "@/utils/localization/i18n.client";
// Hooks
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    }
  }, [i18n.isInitialized]);

  const setActiveState = (lang: string) => {
    return document && document?.documentElement.lang === lang
      ? style["footer__button--active"]
      : undefined;
  };

  if (!ready) return <div className={style["footer__placeholder"]}></div>;
  else
    return (
      <footer className={style["footer"]}>
        <button
          className={clsx(style["footer__button"], setActiveState("en"))}
          type="button"
          onClick={() => changeUserInterfaceLanguage("en")}
        >
          English
        </button>
        <button
          className={clsx(style["footer__button"], setActiveState("ru"))}
          type="button"
          onClick={() => changeUserInterfaceLanguage("ru")}
        >
          Русский
        </button>
        <button
          className={clsx(style["footer__button"], setActiveState("ar"))}
          type="button"
          onClick={() => changeUserInterfaceLanguage("ar")}
        >
          عربي
        </button>
      </footer>
    );
}
