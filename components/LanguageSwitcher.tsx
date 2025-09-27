"use client";

import {useTransition} from "react";
import {useTranslations} from "next-intl";
import {usePathname, useRouter} from "@/lib/i18n/routing";
import {useSearchParams} from "next/navigation";

import {defaultLocale, locales, type Locale} from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({className}: LanguageSwitcherProps) {
  const t = useTranslations("languageSwitcher");
  const pathname = usePathname();
  const router = useRouter();
  const locale = (locales.find((code) =>
    pathname === `/${code}` || pathname.startsWith(`/${code}/`)
  ) ?? defaultLocale) as Locale;
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleChange = (targetLocale: Locale) => {
    if (targetLocale === locale) {
      return;
    }

    startTransition(() => {
      const params = searchParams.toString();
      const href = params.length > 0 ? `${pathname}?${params}` : pathname;
      router.replace(href, {locale: targetLocale});
    });
  };

  return (
    <nav
      aria-label={t("label")}
      className={`flex flex-wrap items-center gap-2 ${className ?? ""}`.trim()}
    >
      {locales.map((code) => {
        const isActive = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => handleChange(code)}
            aria-current={isActive ? "true" : undefined}
            disabled={isPending && !isActive}
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--brand)] ${
              isActive
                ? "border-[var(--brand)] bg-[var(--brand)] text-white shadow-sm"
                : "border-neutral-300 text-neutral-600 hover:border-[var(--brand)] hover:text-[var(--brand)]"
            } ${isPending && !isActive ? "opacity-60" : ""}`.trim()}
          >
            {t(`languages.${code}`)}
          </button>
        );
      })}
    </nav>
  );
}
