package com.soleo.games.application.model.request

import com.soleo.games.domain.model.Task

data class CreateTaskRequest(
    val text: String,
    val category: String,
    val tags: List<String>,
    val difficulty: String,
    val type: String,
    val translations: List<TranslationRequest>? = null
) {
    fun toTask(): Task {
        return Task(
            text = this.text,
            category = this.category,
            tags = this.tags,
            difficulty = this.difficulty,
            type = this.type,
            translations = this.translations?.map { it.toTranslation() }
        )
    }
}