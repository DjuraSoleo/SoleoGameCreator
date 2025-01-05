import { ParameterResponse } from "./parameter-response";
import { TranslationResponse } from "./translation-response";

export interface QuestionResponse{
  questionText: string;
  category: string;
  tags: string[];
  difficulty: string;
  type: string;
  answerText: string | null;
  questionTranslations: TranslationResponse[];
  answerTranslations: TranslationResponse[] | null;
  parameters: ParameterResponse[] | null;
}

