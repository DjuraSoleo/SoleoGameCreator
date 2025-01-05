import { LanguageToCountryCode } from "../../main-screen/model/preview-item";
import { TranslationResponse } from "../model/translation-response";

export function translationResponseToLanguageToCountryCode(translationResponse:TranslationResponse):LanguageToCountryCode{
  return {
    language: translationResponse.language,
    countryCode: languageToCode[translationResponse.language]
  }
}

const languageToCode: Record<string, string> = {
  English: "gb",
  Chinese: "cn",
  Spanish: "es",
  French: "fr",
  Arabic: "sa",
  Bengali: "bd",
  Portuguese: "pt",
  Russian: "ru",
  Indonesian: "id",
  German: "de",
  Japanese: "jp",
  Turkish: "tr",
  Italian: "it",
  Korean: "kr",
  Vietnamese: "vn",
  Tamil: "in",
  Polish: "pl",
  Dutch: "nl",
  Thai: "th",
  Greek: "gr",
  Ukrainian: "ua",
  Malay: "my",
  Hungarian: "hu",
  Punjabi: "in",
  Romanian: "ro",
  Czech: "cz",
  Slovak: "sk",
  Serbian: "rs",
  Croatian: "hr",
  Bosnian: "ba",
  Slovenian: "si",
  Macedonian: "mk",
  Albanian: "al",
  Bulgarian: "bg",
  Kannada: "in",
  Malayalam: "in",
  Burmese: "mm",
  Finnish: "fi",
  Swedish: "se",
  Norwegian: "no",
  Filipino: "ph",
  Gujarati: "in",
  Sinhala: "lk",
  Kazakh: "kz",
  Montenegrin: "me"
};
