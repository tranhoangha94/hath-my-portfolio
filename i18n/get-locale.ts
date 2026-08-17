import { cookies } from "next/headers";
import { defaultLocale, localeCookie, type Locale } from "./config";

export function getLocale(): Locale {
  const value = cookies().get(localeCookie)?.value;
  return value === "en" ? "en" : defaultLocale;
}
