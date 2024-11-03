package com.soleo.games.domain.model

data class Page<T>(
    val total: Long,
    val limit: Long,
    val offset: Long,
    val items: List<T>
)