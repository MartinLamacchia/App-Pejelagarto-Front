import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es/translation.json";
import ptBR from "./locales/pt-BR/translation.json";
import en from "./locales/en/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      "pt-BR": { translation: ptBR },
      en: { translation: en },
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar, no hace falta que i18next lo haga
    },
  });

export default i18n;