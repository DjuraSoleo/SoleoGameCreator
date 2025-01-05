import { PreviewQuestionItem } from "../../main-screen/model/preview-item";
import { QuestionResponse } from "../model/question-response";
import { translationResponseToLanguageToCountryCode } from "./translation-mapper";

export function questionResponseToPreviewItem(questionResponse:QuestionResponse):PreviewQuestionItem{
  return {
    category: questionResponse.category,
    tags: questionResponse.tags,
    difficulty: questionResponse.difficulty,
    languages: questionResponse.questionTranslations?.map(translation => translationResponseToLanguageToCountryCode(translation)),
    question: questionResponse.questionText,
    answer: questionResponse.answerText,
    questionTranslations:questionResponse.questionTranslations,
    answerTranslations:questionResponse.answerTranslations
  }
}


