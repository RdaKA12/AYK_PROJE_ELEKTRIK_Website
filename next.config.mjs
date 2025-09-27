import {withNextIntl} from 'next-intl/plugin';

const locales = ['tr', 'en', 'de', 'ru', 'ar'];

const nextConfig = {
  reactStrictMode: true
};

export default withNextIntl({
  locales,
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix: 'always'
})(nextConfig);
