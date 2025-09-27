import createNextIntlPlugin from 'next-intl/plugin';

const locales = ['tr', 'en', 'de', 'ru', 'ar'];

const withNextIntl = createNextIntlPlugin({
  locales,
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix: 'always'
});

const nextConfig = {
  reactStrictMode: true
};

export default withNextIntl(nextConfig);
