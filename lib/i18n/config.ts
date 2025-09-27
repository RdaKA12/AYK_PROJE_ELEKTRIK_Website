export const locales = ['tr', 'en', 'de', 'ru', 'ar'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';
export const localeDetection = true;
export const localePrefix = 'always' as const;

export const i18nConfig = {
  locales,
  defaultLocale,
  localeDetection,
  localePrefix
};

export type I18nConfig = typeof i18nConfig;
