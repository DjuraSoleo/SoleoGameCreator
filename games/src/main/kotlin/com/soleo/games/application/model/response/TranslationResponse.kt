package com.soleo.games.application.model.response

import com.soleo.games.domain.model.Translation

data class TranslationResponse(
    val language: String,
    val value: String
){
    companion object{
        fun fromTranslation(translation: Translation):TranslationResponse{
            return TranslationResponse(
                language = translation.language,
                value = translation.value
            )
        }
    }
}
