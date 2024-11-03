package com.soleo.games.application.model.response

import com.soleo.games.domain.model.Task

data class TaskResponse(
    val text: String,
    val category: String,
    val tags: List<String>,
    val difficulty: String,
    val type: String,
    val translations: List<TranslationResponse>? = null
) {
    companion object {
        fun fromTask(task: Task): TaskResponse {
            return TaskResponse(
                text = task.text,
                category = task.category,
                tags = task.tags,
                difficulty = task.difficulty,
                type = task.type,
                translations = task.translations?.map { TranslationResponse.fromTranslation(it) }
            )
        }
    }
}