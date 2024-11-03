package com.soleo.games.application.model.response

data class Page<T>(
    val total: Long,
    val limit: Long,
    val offset: Long,
    val items: List<T>
)