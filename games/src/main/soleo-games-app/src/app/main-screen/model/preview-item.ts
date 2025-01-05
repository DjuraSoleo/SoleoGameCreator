import { Translation } from "./translation";

export interface PreviewItem {
  category: string;
  tags: string[];
  difficulty: String;
  languages: LanguageToCountryCode[];
}

export interface PreviewQuestionItem extends PreviewItem {
  question: string;
  answer: string | null;
  questionTranslations:Translation[];
  answerTranslations:Translation[] | null;
}

export interface PreviewTaskItem extends PreviewItem {
  task: string;
  taskTranslations:Translation[];
}

export interface LanguageToCountryCode {
  language: string,
  countryCode: string
}
