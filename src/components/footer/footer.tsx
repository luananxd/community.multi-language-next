"use client";

import style from "./footer.module.css";
// Utils
import clsx from "clsx";
import { changeUserInterfaceLanguage } from "@/utils/localization/i18n.client";
// Components
import FooterSkeleton from "@/components/skeletons/footer-skeleton";
// Hooks
import { useTranslation } from "react-i18next";
import { useClientReady } from "@/utils/providers/client-ready-provider";

export default function Footer() {
  const { i18n } = useTranslation();
  const ready = useClientReady();

  const setActiveState = (language: string) => {
    return i18n.language === language
      ? style["footer__button--active"]
      : undefined;
  };

  if (!ready) return <FooterSkeleton />;
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
