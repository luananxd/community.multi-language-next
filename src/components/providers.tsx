"use client";

import { I18nextProvider } from "react-i18next";
import i18next from "@/utils/localization/i18n.client";

interface IProps {
  children: React.ReactNode;
  language: string;
}

export default function Providers({ children, language }: IProps) {
  i18next.changeLanguage(language);

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
