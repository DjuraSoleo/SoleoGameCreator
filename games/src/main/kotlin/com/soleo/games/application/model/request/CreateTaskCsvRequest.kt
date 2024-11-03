package com.soleo.games.application.model.request

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class CreateTaskCsvRequest @JsonCreator constructor(
    @JsonProperty("text") val text: String,
    @JsonProperty("category") val category: String,
    @JsonProperty("difficulty") val difficulty: String,
    @JsonProperty("type") val type: String,
){
    fun toCreateTaskRequest():CreateTaskRequest{
        return CreateTaskRequest(
            text = text,
            category = category,
            tags = listOf(),
            difficulty = difficulty,
            type = type,
            translations = listOf()
        )
    }
}
