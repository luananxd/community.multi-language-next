import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// Middlewares
import localizationMiddleware from "./utils/middlewares/localization.middleware";

export function middleware(req: NextRequest) {
  let response = NextResponse.next();

  localizationMiddleware(req, response);

  return response;
}
