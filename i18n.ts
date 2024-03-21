import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './public/locales/en.json';
import esTranslation from './public/locales/es.json';

const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
};

const detectionOptions = {
  order: ['path', 'navigator'],
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: detectionOptions,
    react: {
      useSuspense: false,
    },
    supportedLngs: ['en', 'es'],
    nonExplicitSupportedLngs: true,
  });

export default i18n;
