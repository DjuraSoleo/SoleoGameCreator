import { PreviewTaskItem } from "../../main-screen/model/preview-item";
import { TaskResponse } from "../model/task-response";
import { translationResponseToLanguageToCountryCode } from "./translation-mapper";

export function taskResponseToPreviewItem(taskResponse:TaskResponse):PreviewTaskItem{
  return {
    category: taskResponse.category,
    tags: taskResponse.tags,
    difficulty: taskResponse.difficulty,
    languages: taskResponse.translations?.map(translation => translationResponseToLanguageToCountryCode(translation)),
    task: taskResponse.text,
    taskTranslations: taskResponse.translations,
  }
}
