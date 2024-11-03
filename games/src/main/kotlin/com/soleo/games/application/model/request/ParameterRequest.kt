package com.soleo.games.application.model.request

import com.soleo.games.domain.model.CustomizationParameter

data class ParameterRequest(
    val name: String,
    val type: String,
    val description: String? = null
) {
    fun toCustomizationParameter(): CustomizationParameter {
        return CustomizationParameter(
            name = this.name,
            type = this.type,
            description = this.description,
        )
    }
}