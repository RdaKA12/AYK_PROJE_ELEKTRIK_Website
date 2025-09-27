import createMiddleware from 'next-intl/middleware';

import {i18nConfig} from './lib/i18n/config';

export default createMiddleware({
  ...i18nConfig,
  alternateLinks: true
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)'
  ]
};
