import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { az, en, rus} from "./locales";

const resources = {
  az,
  en,
  rus
};

const detectionOptions = {
  // order and from where user language should be detected
  order: ["localStorage", "path", "cookie"],

  // keys or params to lookup language from
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLanguage",
  lookupFromPathIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],

  // optional expire and domain for set cookie
  cookieMinutes: 10000,
  // cookieDomain: '.prospectsmb.com',
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "az",
    fallbackLng: "az",
    load: "languageOnly",
    whitelist: ["az", "en", "rus"],
    // keySeparator:  false,
    detection: detectionOptions,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
