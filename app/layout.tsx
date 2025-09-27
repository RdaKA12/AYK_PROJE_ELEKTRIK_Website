import type {ReactNode} from "react";

import "./globals.css";

import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages, setRequestLocale} from "next-intl/server";

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

  setRequestLocale(resolvedLocale);
  const messages = await getMessages({locale: resolvedLocale});

  return (
    <html suppressHydrationWarning lang={resolvedLocale} dir={dir}>
      <body className="bg-[var(--paper)] text-[var(--ink)]">
        <NextIntlClientProvider locale={resolvedLocale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
