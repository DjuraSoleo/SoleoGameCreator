package com.soleo.games.domain.model

data class Task(
    val text: String,
    val category: String,
    val tags: List<String>,
    val difficulty: String,
    val type: String,
    val translations: List<Translation>? = null
) {
}