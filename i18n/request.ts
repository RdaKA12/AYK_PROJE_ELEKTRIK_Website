import {getRequestConfig} from 'next-intl/server';

import {defaultLocale, locales, type Locale} from '@/lib/i18n/config';

const loadMessages = async (locale: Locale) => {
  switch (locale) {
    case 'tr':
      return (await import('../messages/tr.json')).default;
    case 'en':
      return (await import('../messages/en.json')).default;
    case 'de':
      return (await import('../messages/de.json')).default;
    case 'ru':
      return (await import('../messages/ru.json')).default;
    case 'ar':
      return (await import('../messages/ar.json')).default;
    default:
      throw new Error(`Unsupported locale: ${locale}`);
  }
};

export default getRequestConfig(async ({ locale }) => {
  const resolved = locale ?? defaultLocale;
  const activeLocale = locales.includes(resolved as Locale) ? (resolved as Locale) : defaultLocale;

  return {
    locale: activeLocale,
    messages: await loadMessages(activeLocale),
  };
});
