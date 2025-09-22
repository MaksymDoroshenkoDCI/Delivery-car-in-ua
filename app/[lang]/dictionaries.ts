import "server-only";

import ua from "./dictionaries/ua.json";
import ru from "./dictionaries/ru.json";
import en from "./dictionaries/en.json";

const dictionaries = {
  ua,
  ru,
  en,
};

export function getDictionary(locale: "ua" | "ru" | "en") {
  const dict = dictionaries[locale];
  if (!dict) {
    throw new Error(`Unknown locale: ${locale}`);
  }
  return dict;
}