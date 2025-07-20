"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
// Utils
import config from "@/utils/localization/i18n.config";
import { setCookie } from "@/utils/helpers";

export function changeUserInterfaceLanguage(language: string) {
  setCookie(config.cookie, language);
  window.location.reload();
}

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
      lng: config.lng,
      fallbackLng: config.fallbackLng,
      supportedLngs: config.supportedLngs,
      defaultNS: config.defaultNS,
      ns: config.ns,
      backend: {
        loadPath: config.loadPath,
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
