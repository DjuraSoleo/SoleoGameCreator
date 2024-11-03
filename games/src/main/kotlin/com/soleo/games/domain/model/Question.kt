package com.soleo.games.domain.model

data class Question(
    val questionText: String,
    val category: String,
    val tags: List<String>,
    val difficulty: String,
    val type: String,
    val answerText: String? = null,
    val questionTranslations: List<Translation>? = null,
    val answerTranslations: List<Translation>? = null,
    val parameters: List<CustomizationParameter>? = null
) {
}