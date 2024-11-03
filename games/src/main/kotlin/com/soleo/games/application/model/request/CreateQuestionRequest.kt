package com.soleo.games.application.model.request

import com.soleo.games.domain.model.Question

data class CreateQuestionRequest(
    val questionText: String,
    val category: String,
    val tags: List<String>,
    val difficulty: String,
    val type: String,
    val answerText: String? = null,
    val questionTranslations: List<TranslationRequest>? = null,
    val answerTranslations: List<TranslationRequest>? = null,
    val parameters: List<ParameterRequest>? = null
) {
    fun toQuestion(): Question {
        return Question(
            questionText = this.questionText,
            category = this.category,
            tags = this.tags,
            difficulty = this.difficulty,
            type = this.type,
            answerText = this.answerText,
            questionTranslations = this.questionTranslations?.map { it.toTranslation() },
            answerTranslations = this.answerTranslations?.map { it.toTranslation() },
            parameters = this.parameters?.map { it.toCustomizationParameter() }
        )
    }
}