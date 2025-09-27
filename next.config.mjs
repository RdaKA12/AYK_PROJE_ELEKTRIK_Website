import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

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
