import type {Metadata, Viewport} from "next";
import type {ReactNode} from "react";

import {NextIntlClientProvider} from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import {notFound} from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {locales, type Locale} from "@/lib/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

const isValidLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#D9251C",
};

export async function generateMetadata({
  params: {locale},
}: {
  params: {locale: string};
}): Promise<Metadata> {
  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({locale, namespace: "layout"});
  const title = t("meta.title");
  const description = t("meta.description");
  const template = t("meta.template");

  return {
    title: {
      default: title,
      template,
    },
    description,
    openGraph: {
      title,
      description,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    icons: {
      icon: [
        {url: "/icon.png", type: "image/png"},
        {url: "/favicon.ico", rel: "icon"},
      ],
      apple: [{url: "/apple-icon.png"}],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: {locale},
}: {
  children: ReactNode;
  params: {locale: string};
}) {
  if (!isValidLocale(locale)) {
    notFound();
  }

  const normalizedLocale = locale as Locale;

  setRequestLocale(normalizedLocale);

  const messages = await getMessages({locale: normalizedLocale});

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_50%_0%,rgba(217,37,28,0.06),transparent)]"
      />
      <NextIntlClientProvider locale={normalizedLocale} messages={messages}>
        <Header />
        <main>{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}
