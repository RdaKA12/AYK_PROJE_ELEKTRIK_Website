import {createNavigation, createPathnameParser} from 'next-intl/navigation';

import {i18nConfig} from './config';

export const {
  Link,
  redirect,
  permanentRedirect,
  usePathname,
  useRouter,
  useSearchParams,
  getPathname,
  formatPathname
} = createNavigation({
  locales: i18nConfig.locales,
  defaultLocale: i18nConfig.defaultLocale,
  localePrefix: i18nConfig.localePrefix
});

export const {parsePathname} = createPathnameParser({
  locales: i18nConfig.locales,
  defaultLocale: i18nConfig.defaultLocale,
  localePrefix: i18nConfig.localePrefix
});
