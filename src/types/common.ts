export type Locale = "ru" | "en" | "ar";
export type Currency = "usd" | "rub" | "aed";

export interface SetCookieOptions {
  path?: string;
  domain?: string;
  expires?: string;
  maxAge?: number;
  secure?: string;
  sameSite?: string;
  httpOnly?: string;
}
