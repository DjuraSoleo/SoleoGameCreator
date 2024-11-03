package com.soleo.games.application.model.response

import com.soleo.games.domain.model.CustomizationParameter

data class ParameterResponse(
    val name: String,
    val type: String,
    val description: String? = null
) {
    companion object {
        fun fromCustomizationParameter(customizationParameter: CustomizationParameter): ParameterResponse {
            return ParameterResponse(
                name = customizationParameter.name,
                type = customizationParameter.type,
                description = customizationParameter.description
            )
        }
    }
}
