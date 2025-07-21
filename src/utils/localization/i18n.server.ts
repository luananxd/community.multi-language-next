"use server";

import { createInstance } from "i18next";
import { cookies, headers } from "next/headers";
import { getLanguageFromHeaders } from "../helpers";
import Backend from "i18next-fs-backend";
import path from "path";
import config from "./i18n.config";

export async function getLanguage() {
  const h = await headers();
  const c = await cookies();

  const headersLng = getLanguageFromHeaders(h);
  const cookiesLng = c.get(config.cookie)?.value;

  return cookiesLng ?? headersLng ?? config.lng;
}

export async function createServerInstance() {
  const i18n = await createInstance();
  const language = await getLanguage();

  await i18n.use(Backend).init({
    lng: language,
    fallbackLng: config.fallbackLng,
    supportedLngs: config.supportedLngs,
    defaultNS: config.defaultNS,
    ns: config.ns,
    initImmediate: false,
    backend: {
      loadPath: path.resolve(
        process.cwd(),
        "public/locales/{{lng}}/{{ns}}.json"
      ),
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
}
