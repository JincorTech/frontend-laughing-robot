import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';

// export const supportedLanguages = ['en', 'ru'];

export const config = {
  whitelist: ['en', 'ru'],
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  debug: true,
  interpolation: { escapeValue: false }
};

i18next.use(XHR).init(config);

export default i18next;
