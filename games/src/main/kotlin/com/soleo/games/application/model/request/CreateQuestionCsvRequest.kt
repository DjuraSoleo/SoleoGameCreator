package com.soleo.games.application.model.request

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class CreateQuestionCsvRequest @JsonCreator constructor(
    @JsonProperty("questionText") val questionText: String,
    @JsonProperty("category") val category: String,
    @JsonProperty("difficulty") val difficulty: String,
    @JsonProperty("type") val type: String,
    @JsonProperty("answerText") val answerText: String? = null
) {
    fun toCreateQuestionRequest(): CreateQuestionRequest {
        return CreateQuestionRequest(
            questionText = this.questionText,
            category = this.category,
            difficulty = this.difficulty,
            type = this.type,
            answerText = this.answerText,
            tags = listOf(),
            questionTranslations = listOf(),
            answerTranslations = listOf(),
            parameters = listOf()
        )
    }
}