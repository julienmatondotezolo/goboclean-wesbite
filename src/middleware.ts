import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Toutes les pages sauf API, fichiers internes et fichiers statiques (ex. /test → /fr/test)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
