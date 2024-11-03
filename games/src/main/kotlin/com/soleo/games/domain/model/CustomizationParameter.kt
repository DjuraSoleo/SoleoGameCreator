package com.soleo.games.domain.model

data class CustomizationParameter(
    val name: String,
    val type: String,
    val description: String? = null
) {
}