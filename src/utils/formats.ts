import i18next from "i18next";
import type { I18n } from "next-i18next";

export const getCurrencyByLocale = (locale: string) => {
  if (locale === "en") return "USD";
  if (locale === "ru") return "RUB";
  if (locale === "ar") return "AED";
};

export const formatDate = (value: Date, i18n?: I18n) => {
  const source = i18n ?? i18next;

  return source.t("formats:date", {
    value,
    formatParams: {
      value: {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      },
    },
  });
};

export const formatCurrency = (value: number, i18n?: I18n) => {
  const source = i18n ?? i18next;

  return source.t("formats:money", {
    value,
    formatParams: {
      value: {
        currency: getCurrencyByLocale(source.language),
      },
    },
  });
};
