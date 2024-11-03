package com.soleo.games.domain.model

data class TaskFilter(
    val category: String?,
    val tags: List<String>?,
    val difficulty: String?,
    val language: String?,
    val type: String?,
    val limit: Long,
    val offset: Long
)
