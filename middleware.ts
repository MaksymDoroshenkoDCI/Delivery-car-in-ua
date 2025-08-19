import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["ua", "ru", "en"]
const defaultLocale = "ua"

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language")

  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(",")[0].split("-")[0].toLowerCase()

    if (preferredLocale === "uk") return "ua"
    if (locales.includes(preferredLocale)) return preferredLocale
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
}
