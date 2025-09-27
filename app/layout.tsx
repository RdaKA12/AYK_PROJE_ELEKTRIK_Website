import type {ReactNode} from "react";

import "./globals.css";

import {getLocale} from "next-intl/server";

import {locales, type Locale, defaultLocale} from "@/lib/i18n/config";

const rtlLocales = new Set<Locale>(["ar"]);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const resolvedLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;
  const dir = rtlLocales.has(resolvedLocale) ? "rtl" : "ltr";

  return (
    <html suppressHydrationWarning lang={resolvedLocale} dir={dir}>
      <body className="bg-[var(--paper)] text-[var(--ink)]">{children}</body>
    </html>
  );
}
