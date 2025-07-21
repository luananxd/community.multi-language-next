import config from "@/utils/localization/i18n.config";
import type { NextRequest, NextResponse } from "next/server";
import { getLanguageFromHeaders } from "../helpers";

export default function localizationMiddleware(
  request: NextRequest,
  response: NextResponse
) {
  const headersLng = getLanguageFromHeaders(request.headers);
  const cookiesLng = request.cookies.get(config.cookie)?.value;
  const language = cookiesLng ?? config.lng;

  if (headersLng && !cookiesLng) {
    response.cookies.set(config.cookie, headersLng);
  } else {
    response.cookies.set(config.cookie, language);
  }

  return response;
}
