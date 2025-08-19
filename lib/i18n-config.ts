// lib/i18n-config.ts

export const i18n = {
  defaultLocale: 'ua',
  locales: ['ua', 'ru'], // додай інші мови за потреби
};

export type Locale = (typeof i18n)['locales'][number];