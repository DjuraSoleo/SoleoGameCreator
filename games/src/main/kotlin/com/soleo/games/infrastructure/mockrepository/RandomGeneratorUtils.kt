package com.soleo.games.infrastructure.mockrepository

import com.soleo.games.domain.model.CustomizationParameter
import com.soleo.games.domain.model.Translation
import kotlin.random.Random

object RandomGeneratorUtils {


    val languages = arrayOf(
        "English",
        "Chinese",
        "Spanish",
        "French",
        "Arabic",
        "Bengali",
        "Portuguese",
        "Russian",
        "Indonesian",
        "German",
        "Japanese",
        "Turkish",
        "Italian",
        "Korean",
        "Vietnamese",
        "Tamil",
        "Polish",
        "Dutch",
        "Thai",
        "Greek",
        "Ukrainian",
        "Malay",
        "Hungarian",
        "Punjabi",
        "Romanian",
        "Czech",
        "Slovak",
        "Serbian",
        "Croatian",
        "Bosnian",
        "Slovenian",
        "Macedonian",
        "Albanian",
        "Bulgarian",
        "Kannada",
        "Malayalam",
        "Burmese",
        "Finnish",
        "Swedish",
        "Norwegian",
        "Filipino",
        "Gujarati",
        "Sinhala",
        "Kazakh",
        "Montenegrin"
    )

    private fun generateRandomLanguage(): String {
        val index = Random.nextInt(0, languages.size)
        return languages[index]
    }

    fun generateRandomWord(): String {
        val minLength = 2
        val maxLength = 10
        val letters = ('a'..'z')
        val length = Random.nextInt(minLength, maxLength + 1)
        return (1..length)
            .map { letters.random() }
            .joinToString("")
    }

    fun generateRandomListOfWords(minLength: Int = 1, maxLength: Int = 5): MutableList<String> {
        val length = Random.nextInt(minLength, maxLength + 1)
        val words = mutableListOf<String>()
        repeat(length) {
            words.add(generateRandomWord())
        }
        return words
    }

    fun generateRandomSentence(): String {
        val minLength = 5
        val maxLength = 15
        val words = generateRandomListOfWords(minLength, maxLength)
        return words.joinToString(" ")
    }

    fun generateRandomTranslations(): MutableList<Translation> {
        val minLength = 1
        val maxLength = 15
        val length = Random.nextInt(minLength, maxLength + 1)
        val sentences = mutableListOf<Translation>()
        repeat(length) {
            sentences.add(
                Translation(
                    language = generateRandomLanguage(),
                    value = generateRandomSentence()
                )
            )
        }
        return sentences
    }

    fun generateRandomCustomizationParameter(): MutableList<CustomizationParameter> {
        val minLength = 1
        val maxLength = 15
        val length = Random.nextInt(minLength, maxLength + 1)
        val parameters = mutableListOf<CustomizationParameter>()
        repeat(length) {
            parameters.add(
                CustomizationParameter(
                    name = generateRandomWord(),
                    type = generateRandomWord(),
                    description = generateRandomSentence()
                )
            )
        }
        return parameters
    }
}