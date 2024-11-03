package com.soleo.games.application.model.response

import com.soleo.games.domain.model.Question

data class QuestionResponse(
    val questionText: String,
    val category: String,
    val tags: List<String>,
    val difficulty: String,
    val type: String,
    val answerText: String?,
    val questionTranslations: List<TranslationResponse>? = null,
    val answerTranslations: List<TranslationResponse>? = null,
    val parameters: List<ParameterResponse>? = null
) {
    companion object {
        fun fromQuestion(question: Question): QuestionResponse {
            return QuestionResponse(
                questionText = question.questionText,
                category = question.category,
                tags = question.tags,
                difficulty = question.difficulty,
                type = question.type,
                answerText = question.answerText,
                questionTranslations = question.questionTranslations?.map { TranslationResponse.fromTranslation(it) },
                answerTranslations = question.answerTranslations?.map { TranslationResponse.fromTranslation(it) },
                parameters = question.parameters?.map { ParameterResponse.fromCustomizationParameter(it) }
            )
        }
    }
}