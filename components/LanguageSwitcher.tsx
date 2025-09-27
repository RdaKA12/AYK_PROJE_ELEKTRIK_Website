"use client";

import {useTransition} from "react";
import {useLocale, usePathname, useRouter} from "next-intl/navigation";
import {useTranslations} from "next-intl";

import {locales, type Locale} from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({className}: LanguageSwitcherProps) {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = (targetLocale: Locale) => {
    if (targetLocale === locale) {
      return;
    }

    startTransition(() => {
      router.replace({pathname, locale: targetLocale});
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
