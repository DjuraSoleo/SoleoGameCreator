package com.soleo.games.domain.model

data class QuestionFilter(
    val category: String?,
    val tags: List<String>?,
    val difficulty: String?,
    val language: String?,
    val type: String?,
    val limit: Long,
    val offset: Long
)
