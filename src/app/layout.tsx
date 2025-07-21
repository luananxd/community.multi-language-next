import "@/assets/index.css";
import "@/assets/skeletons.css";
import type { Metadata } from "next";
import {
  createServerInstance,
  getLanguage,
} from "@/utils/localization/i18n.server";
import Providers from "@/utils/providers/providers";

export const metadata: () => Promise<Metadata> = async () => {
  const i18n = await createServerInstance();

  return {
    title: i18n.t("main:pageTitle"),
    description: i18n.t("main:pageDescription"),
  };
};

interface IProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: IProps) {
  const language = await getLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <html lang={language} dir={dir}>
      <Providers language={language}>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
