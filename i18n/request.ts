import {getRequestConfig} from 'next-intl/server';

import {locales, type Locale} from '@/lib/i18n/config';

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

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as Locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return {
    messages: await loadMessages(locale as Locale)
  };
});
