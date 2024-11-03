package com.soleo.games.infrastructure.mockrepository

import com.soleo.games.domain.model.Page
import com.soleo.games.domain.model.Question
import com.soleo.games.domain.model.QuestionFilter
import com.soleo.games.domain.repository.QuestionRepository
import com.soleo.games.infrastructure.mockrepository.RandomGeneratorUtils.generateRandomCustomizationParameter
import com.soleo.games.infrastructure.mockrepository.RandomGeneratorUtils.generateRandomListOfWords
import com.soleo.games.infrastructure.mockrepository.RandomGeneratorUtils.generateRandomSentence
import com.soleo.games.infrastructure.mockrepository.RandomGeneratorUtils.generateRandomTranslations
import com.soleo.games.infrastructure.mockrepository.RandomGeneratorUtils.generateRandomWord
import org.springframework.stereotype.Repository
import kotlin.random.Random

@Repository
class QuestionMockRepository : QuestionRepository {
    override fun getQuestions(questionFilter: QuestionFilter): Page<Question> {
        val questions = mutableListOf<Question>()
        repeat(questionFilter.limit.toInt()) {
            questions.add(
                Question(
                    category = questionFilter.category ?: generateRandomWord(),
                    tags = questionFilter.tags ?: generateRandomListOfWords(),
                    difficulty = questionFilter.difficulty ?: generateRandomWord(),
                    type = questionFilter.type ?: generateRandomWord(),
                    questionText = generateRandomSentence(),
                    answerText = generateRandomSentence(),
                    questionTranslations = generateRandomTranslations(),
                    answerTranslations = generateRandomTranslations(),
                    parameters = generateRandomCustomizationParameter()
                )
            )
        }

        return Page(
            total = questionFilter.limit + Random.nextInt(10, 100),
            limit = questionFilter.limit,
            offset = questionFilter.offset,
            items = questions
        )
    }

    override fun createQuestions(questionsToCreate: List<Question>): List<Question> {
        return questionsToCreate
    }

}
