package com.soleo.games.application.model.request

import com.soleo.games.domain.model.Translation

data class TranslationRequest(
    val language: String,
    val value: String
) {
    fun toTranslation(): Translation {
        return Translation(
            language = this.language,
            value = this.value
        )
    }
}