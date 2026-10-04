export const locales = ["en", "sv"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const messages = {
  en: {
    language: "Language",
    navigation: {
      news: "News",
      addons: "Add-ons",
      contribute: "Contribute",
      about: "About",
      store: "Store",
      help: "Help",
      download: "Download",
      donate: "Donate",
    },
  },
  sv: {
    language: "Språk",
    navigation: {
      news: "Nyheter",
      addons: "Tillägg",
      contribute: "Bidra",
      about: "Om Kodi",
      store: "Butik",
      help: "Hjälp",
      download: "Hämta",
      donate: "Donera",
    },
  },
} as const;

export function isLocale(value: string | undefined): value is Locale {
  return locales.some(locale => locale === value);
}

export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale || !path.startsWith("/")) return path;
  return path === "/" ? `/${locale}/` : `/${locale}${path}`;
}

export function getMessages(locale: Locale) {
  return messages[locale];
}
