import { TranslationResponse } from "./translation-response";

export interface TaskResponse{
  text: string;
  category: string;
  tags: string[];
  difficulty: string;
  type: string;
  translations: TranslationResponse[];
}
