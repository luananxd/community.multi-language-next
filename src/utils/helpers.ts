import type { SetCookieOptions } from "@/types/common";
import type { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

type ClassItem = string | string[] | Record<string, boolean>;

export function getCookies() {
  const cookies: Record<string, string> = {};
  const cookiesString = document.cookie.split("; ");

  cookiesString.forEach((c) => {
    const [key, value] = c.split("=");
    cookies[key] = value;
  });

  return cookies;
}

export function readCookie(key: string) {
  const cookies = getCookies();
  return cookies?.[key] ?? null;
}

export function setCookie(
  key: string,
  value: string,
  options?: SetCookieOptions
) {
  const config = {
    path: options?.path ?? "/",
    domain: options?.domain ?? null,
    expires: options?.expires ?? null,
    maxAge: options?.maxAge ?? 31_536_000,
    secure: options?.secure ?? null,
    sameSite: options?.sameSite ?? "lax",
    httpOnly: options?.httpOnly ?? null,
  };
  const stringFragments = [];

  stringFragments.push(
    [encodeURIComponent(key), encodeURIComponent(value)].join("=")
  );

  for (const [k, v] of Object.entries(config)) {
    if (!v) continue;
    stringFragments.push(
      [encodeURIComponent(k), encodeURIComponent(v)].join("=")
    );
  }

  const cookieString = stringFragments.join("; ");
  document.cookie = cookieString;
}

export function getLanguageFromHeaders(headers: ReadonlyHeaders) {
  return headers.get("accept-language")?.split(";")?.[0]?.split("-")?.[0];
}
